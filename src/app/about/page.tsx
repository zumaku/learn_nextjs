import { cookies } from "next/headers";

export default async function DashboardPage() {
    const cookieStore = await cookies()
    const theme = cookieStore.get("theme")
    console.log(theme)
    console.log("Dynamic Rendering")

    return (
        <h1>Dashboard Page {new Date().toLocaleTimeString()}</h1>
    );
}