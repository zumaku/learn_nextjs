import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// Ini untuk melakukan redirectnya
export function middleware(request: NextRequest) {
    return NextResponse.rewrite(new URL('/hello', request.url))
}

// Ini untuk menentukan url mana saja yang akan kena redirect
export const config = {
    matcher: '/profile',
}