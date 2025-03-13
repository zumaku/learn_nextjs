import Link from "next/link";

export default function Home(){
    return (
        <div className="flex flex-col">
            <h1>Welcome Home!</h1>
            <Link href={"/about"}>Abouts</Link>
            <Link href={"/dashboard"}>Dashboard</Link>
        </div>
    )
}