import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {

  const authTokens = request.cookies.get("authTokens")?.value;
  const permissions = request.cookies.get("permissions_current")?.value;

  if(authTokens){
    if(request.nextUrl.pathname.startsWith("/login")){
      const response = NextResponse.redirect(new URL("/dashboard", request.url));
      return response;
    }
    if(request.nextUrl.pathname.startsWith("/sales") && !permissions?.includes("gestión de ventas")){
      const response = NextResponse.redirect(new URL("/dashboard", request.url));
      return response;
    }
    if(request.nextUrl.pathname.startsWith("/products") && !permissions?.includes("gestión de products")){
      const response = NextResponse.redirect(new URL("/dashboard", request.url));
      return response;
    }
  }else {
    if(request.nextUrl.pathname.startsWith("/dashboard") || 
      request.nextUrl.pathname.startsWith("/admin") || 
      request.nextUrl.pathname.startsWith("/sales") ||
      request.nextUrl.pathname.startsWith("/products")
    ){
      const response = NextResponse.redirect(new URL("/login", request.url));
      response.cookies.delete("authTokens");
      return response;
    }
  }
}

export const config = {
  matcher: ["/dashboard(.*)", "/login", "/admin(.*)", "/sales", "/products"],
};