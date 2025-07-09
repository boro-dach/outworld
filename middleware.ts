import { NextResponse, NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/_next") || pathname.includes(".")) {
    return NextResponse.next();
  }

  const publicPaths = ["/", "/auth"];
  if (
    publicPaths.some(
      (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`)
    )
  ) {
    return NextResponse.next();
  }

  const token = request.cookies.get("accessToken")?.value;

  if (!token) {
    console.log("[Middleware] Access token not found. Redirecting to login.");
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  console.log(
    "[Middleware] Token found in cookies. Access granted (no backend verification)."
  );
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|favicon.ico).*)"],
};
