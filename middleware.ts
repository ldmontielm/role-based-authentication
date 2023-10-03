import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {

  const authTokens = request.cookies.get("authTokens")?.value;

  if ((request.nextUrl.pathname.startsWith("/dashboard") && !authTokens) || (request.nextUrl.pathname.startsWith("/admin") && !authTokens) ) {
    const response = NextResponse.redirect(new URL("/login", request.url));
    response.cookies.delete("authTokens");
    return response;
  }
  if (request.nextUrl.pathname.startsWith("/login") && authTokens) {
    const response = NextResponse.redirect(new URL("/dashboard", request.url));
    return response;
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/dashboard(.*)", "/login", "/admin(.*)"],
};