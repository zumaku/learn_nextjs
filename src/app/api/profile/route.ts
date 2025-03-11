import { headers } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    // const reqHeader = new Headers(req.headers)
    // console.log(reqHeader)
    
    const headList = await headers()
    console.log(headList.get("Authorization"))
    
    return new Response("Profile API data.")
}