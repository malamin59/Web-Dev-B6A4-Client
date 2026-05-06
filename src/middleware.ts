import { NextRequest, NextResponse } from "next/server";


;
export function middleware(request: NextRequest) {
  const isLogin = false; 

  if (!isLogin && request.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};