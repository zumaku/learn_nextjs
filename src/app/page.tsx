import Link from "next/link"

export default function Home(){
    return (
        <>
            <h1>Welcome Home!</h1>
            <Link href={"/blogs"}>Blogs</Link>
            <Link href={"/products"}>Products</Link>
            <Link href={"/profile"}>Profile</Link>
        </>
    )
}