import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    const reqHeader = new Headers(req.headers)
    console.log(reqHeader)
    
    return new Response("<h1>Profile API data</h1>.", {
        headers: {
            "Conten-Type": "text/html"
        }
    })
}