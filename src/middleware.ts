import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { checkAuthentication } from "./utils/auth";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/write")) {
    redirectToLogin(request);
  } else if (request.nextUrl.pathname.startsWith("/users")) {
    redirectToLogin(request);
  } else if (request.nextUrl.pathname.startsWith("/saves")) {
    redirectToLogin(request);
  }
  return NextResponse.next();
}
async function redirectToLogin(request: NextRequest) {
  try {
    const isAuth = await checkAuthentication();
    if (!isAuth) {
      return NextResponse.redirect(new URL("/login", request.url));
    } else {
      return NextResponse.next();
    }
  } catch (error) {
    console.log("middleware err: ", error);
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/write/:path*",
    "/users/:path*",
    "/saves/:path*",
    // "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
