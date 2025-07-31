import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const jobProtectedRoutes: Record<string, string | string[]> = {
  "/dashboard/journalist": "JOURNALIST",
};

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
    if (!response.ok) {
      console.error(
        `Ошибка при получении роли: ${response.status} ${response.statusText}`
      );
      return null;
    }
    const data = await response.json();
    return data.role || null;
  } catch (error) {
    console.error("Сетевая ошибка при запросе роли:", error);
    return null;
  }
}

async function getUserJobs(token: string): Promise<string[]> {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  if (!backendUrl) {
    console.error(
      "Переменная окружения NEXT_PUBLIC_BACKEND_URL не установлена!"
    );
    return [];
  }
  try {
    const response = await fetch(`${backendUrl}/job/get`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      console.error(
        `Ошибка при получении работ: ${response.status} ${response.statusText}`
      );
      return [];
    }
    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Сетевая ошибка при запросе работ:", error);
    return [];
  }
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isPublicPath = pathname === "/" || pathname.startsWith("/auth");
  if (isPublicPath) {
    return NextResponse.next();
  }

  const accessToken = request.cookies.get("accessToken")?.value;
  if (!accessToken) {
    const redirectUrl = pathname.startsWith("/admin") ? "/" : "/auth/login";
    return NextResponse.redirect(new URL(redirectUrl, request.url));
  }

  const [role, userJobs] = await Promise.all([
    getUserRole(accessToken),
    getUserJobs(accessToken),
  ]);

  if (!role) {
    const response = NextResponse.redirect(new URL("/auth/login", request.url));
    response.cookies.delete("accessToken");
    return response;
  }

  const requiredJobPath = Object.keys(jobProtectedRoutes).find((key) =>
    pathname.startsWith(key)
  );

  if (requiredJobPath) {
    const requiredJobs = Array.isArray(jobProtectedRoutes[requiredJobPath])
      ? jobProtectedRoutes[requiredJobPath]
      : [jobProtectedRoutes[requiredJobPath]];

    const hasRequiredJob = userJobs.some((job) => requiredJobs.includes(job));

    if (hasRequiredJob) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/no-access", request.url));
    }
  }

  if (pathname.startsWith("/admin")) {
    if (role === "ADMIN") {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/no-access", request.url));
    }
  }

  if (pathname.startsWith("/dashboard")) {
    if (role === "USER" || role === "ADMIN") {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
