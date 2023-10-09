export { default } from "next-auth/middleware"
import { NextRequest, NextResponse } from "next/server";
import { getToken } from 'next-auth/jwt';

export async function middleware(req:NextRequest){
  const session = await getToken({req: req, secret: process.env.NEXTAUTH_SECRET})
  
  if(session){
    if(req.nextUrl.pathname.startsWith("/login")){
      return NextResponse.redirect(new URL("/dashboard", req.url))
    }
    if(req.nextUrl.pathname.startsWith('/supplies') && !session.user.permissions.includes("gestión de insumos")){
      return NextResponse.redirect(new URL("/dashboard", req.url))
    }
    if(req.nextUrl.pathname.startsWith('/products') && !session.user.permissions.includes("gestión de productos")){
      return NextResponse.redirect(new URL("/dashboard", req.url))
    }
    if(req.nextUrl.pathname.startsWith('/providers') && !session.user.permissions.includes("gestión de proveedores")){
      return NextResponse.redirect(new URL("/dashboard", req.url))
    }
    if(req.nextUrl.pathname.startsWith('/purchases') && !session.user.permissions.includes("gestión de compras")){
      return NextResponse.redirect(new URL("/dashboard", req.url))
    }
    if(req.nextUrl.pathname.startsWith('/sales') && !session.user.permissions.includes("gestión de ventas")){
      return NextResponse.redirect(new URL("/dashboard", req.url))
    }
  }else{
    if(req.nextUrl.pathname.startsWith('/dashboard') ||
        req.nextUrl.pathname.startsWith('/admin') ||
        req.nextUrl.pathname.startsWith('/products') ||
        req.nextUrl.pathname.startsWith('/providers') ||
        req.nextUrl.pathname.startsWith('/purcases') ||
        req.nextUrl.pathname.startsWith('/sales') ||
        req.nextUrl.pathname.startsWith('/supplies')
    ){
      return NextResponse.redirect(new URL("/login", req.url))
    }
  }
  
} 

export const config = {
  matcher: ["/dashboard/:path*", "/login", "/admin/:path*", "/products/:path*", "/providers/:path*", "/purchases/:path*", "/sales/:path*", "/supplies/:path*"],
};