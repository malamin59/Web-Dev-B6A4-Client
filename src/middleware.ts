  import { getToken } from "next-auth/jwt";
  import { NextRequest, NextResponse } from "next/server";

  export async function middleware(request: NextRequest) {
    const token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET,
      // secureCookie: process.env.NODE_ENV === 'production'
    }); 
    // console.log("user token is here",token)
    const isLogin = !!token;

    // console.log("login token is here -->>", token);

    if (!isLogin && request.nextUrl.pathname.startsWith("/dashboard")) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    return NextResponse.next();
  }

  export const config = {
    matcher: ["/dashboard/:path*"],
  };
