import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const response = NextResponse.next()
    const themeData = request.cookies.get("theme")

    if(!themeData) response.cookies.set("theme", "dark")

    response.headers.set("costum-header", "costum-value")

    return response


    // return NextResponse.rewrite(new URL('/hello', request.url))
}

// export const config = {
//     matcher: '/profile',
// }