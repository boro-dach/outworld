import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const publicPaths = ["/", "/auth"];

async function getUserRole(token: string): Promise<string | null> {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  if (!backendUrl) {
    console.error(
      "Переменная окружения NEXT_PUBLIC_BACKEND_URL не установлена!"
    );
    return null;
  }

  try {
    const response = await fetch(`${backendUrl}/user/get-role`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    // Если ответ не успешный (например, 401 Unauthorized, 500 Server Error)
    if (!response.ok) {
      console.error(
        `Ошибка при получении роли: ${response.status} ${response.statusText}`
      );
      return null;
    }

    const data = await response.json();
    return data.role || null;
  } catch (error) {
    console.error("Сетевая ошибка или ошибка при запросе роли:", error);
    return null;
  }
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Проверяем, является ли путь публичным
  // Если путь это '/', или он начинается с '/auth', то ничего не делаем
  const isPublicPath = pathname === "/" || pathname.startsWith("/auth");
  if (isPublicPath) {
    return NextResponse.next();
  }

  // Получаем токен из cookie
  const accessToken = request.cookies.get("accessToken")?.value;

  // Если токена нет, а путь не публичный, перенаправляем
  if (!accessToken) {
    // Для админ-панели на главную, для остальных защищенных - на регистрацию
    const redirectUrl = pathname.startsWith("/admin") ? "/" : "/auth/register";
    return NextResponse.redirect(new URL(redirectUrl, request.url));
  }

  // Если токен есть, делаем запрос на бэкенд для получения роли
  const role = await getUserRole(accessToken);

  // 2. Логика для путей, начинающихся на /admin
  if (pathname.startsWith("/admin")) {
    if (role === "ADMIN") {
      return NextResponse.next(); // Роль ADMIN, пускаем на страницу
    } else {
      // Если роль не ADMIN (или ошибка получения роли), перенаправляем на главную
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  // 3. Логика для путей, начинающихся на /dashboard
  if (pathname.startsWith("/dashboard")) {
    if (role === "USER" || role === "ADMIN") {
      return NextResponse.next(); // Роли USER или ADMIN, пускаем на страницу
    } else {
      // Если роль не подходит (или ошибка получения роли), перенаправляем на регистрацию
      return NextResponse.redirect(new URL("/auth/register", request.url));
    }
  }

  // На всякий случай, если появятся другие защищенные маршруты
  return NextResponse.next();
}

// Конфигурация middleware: указываем, на каких путях он должен срабатывать.
// Это оптимизация, чтобы middleware не запускался для статических файлов (_next/*), картинок и т.д.
export const config = {
  matcher: [
    /*
     * Сопоставляем все пути, КРОМЕ тех, что начинаются с:
     * - api (маршруты API)
     * - _next/static (статические файлы)
     * - _next/image (файлы оптимизации изображений)
     * - favicon.ico (фавикон)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
