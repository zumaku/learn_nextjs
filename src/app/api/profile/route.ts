import { cookies } from "next/headers";

export async function GET(){

    // Get cookie on request
    const cookie = await cookies()
    const theme = cookie.get("theme")
    console.log(theme)

    // <== Set cookie on Response way 1
    cookie.set("secret-key", "balala")

    return new Response("<h1>Profile API data</h1>.", {
        headers: {
            "Conten-Type": "text/html",
            "Set-cookie": "theme=dart"      // <== Set cookie on Response way 2
        }
    })
}