import Link from "next/link";
import blogsData from "./dummy.json";

export default async function Blogs() {
    // Tambahkan delay selama 2 detik (2000ms)
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const blogs = blogsData;

    return (
        <>
            <h1>Blogs Page</h1>
            <Link href={"/"}>Back to Home</Link>
            <br />

            <h2>
                <Link href="/blogs/Hahahah" replace>Link with replace</Link>
            </h2>

            {blogs.map((blog) => (
                <h2 key={blog.id}>
                    <Link href={`/blogs/${blog.slug}`}>{blog.title}</Link>
                </h2>
            ))}
        </>
    );
};