import Link from "next/link";

export default async function Blogs() {
    const blogs = [
        {
            "id": 1,
            "title": "Belajar Next.js dari Nol",
            "slug": "belajar-nextjs-dari-nol",
            "content": "Next.js adalah framework React yang powerful...",
            "writer": "Zul"
        },
        {
            "id": 2,
            "title": "Optimasi SEO dengan Next.js",
            "slug": "optimasi-seo-nextjs",
            "content": "SEO sangat penting untuk meningkatkan traffic...",
            "writer": "Ali"
        },
        {
            "id": 3,
            "title": "Menggunakan Metadata di Next.js",
            "slug": "menggunakan-metadata-nextjs",
            "content": "Metadata membantu dalam optimasi SEO dan berbagi link...",
            "writer": "Budi"
        },
        {
            "id": 4,
            "title": "Static dan Dynamic Rendering di Next.js",
            "slug": "static-dynamic-rendering-nextjs",
            "content": "Memahami perbedaan rendering untuk performa optimal...",
            "writer": "Citra"
        },
        {
            "id": 5,
            "title": "Server Components vs Client Components",
            "slug": "server-client-components",
            "content": "Pahami kapan harus menggunakan Server atau Client Component...",
            "writer": "Dian"
        },
        {
            "id": 6,
            "title": "Membuat Blog dengan Next.js",
            "slug": "membuat-blog-nextjs",
            "content": "Panduan lengkap membuat blog menggunakan Next.js...",
            "writer": "Eka"
        },
        {
            "id": 7,
            "title": "Fetching Data di Next.js",
            "slug": "fetching-data-nextjs",
            "content": "Pahami penggunaan getStaticProps, getServerSideProps...",
            "writer": "Fajar"
        },
        {
            "id": 8,
            "title": "Integrasi Tailwind CSS dengan Next.js",
            "slug": "tailwind-nextjs",
            "content": "Menggunakan Tailwind untuk styling cepat dan responsif...",
            "writer": "Gita"
        },
        {
            "id": 9,
            "title": "Membuat API dengan Next.js",
            "slug": "membuat-api-nextjs",
            "content": "Next.js memungkinkan kita membuat API endpoint dengan mudah...",
            "writer": "Hadi"
        },
        {
            "id": 10,
            "title": "Mengenal Middleware di Next.js",
            "slug": "middleware-nextjs",
            "content": "Middleware di Next.js berguna untuk autentikasi dan logging...",
            "writer": "Indra"
        },
        {
            "id": 11,
            "title": "Membuat Dashboard dengan Next.js",
            "slug": "dashboard-nextjs",
            "content": "Membuat dashboard admin interaktif dengan Next.js...",
            "writer": "Joko"
        },
        {
            "id": 12,
            "title": "Cara Deploy Next.js ke Vercel",
            "slug": "deploy-nextjs-vercel",
            "content": "Panduan langkah demi langkah untuk deploy aplikasi Next.js...",
            "writer": "Kiki"
        },
        {
            "id": 13,
            "title": "Routing Dinamis di Next.js",
            "slug": "routing-dinamis-nextjs",
            "content": "Belajar tentang dynamic dan catch-all routes...",
            "writer": "Lina"
        },
        {
            "id": 14,
            "title": "Autentikasi dengan NextAuth.js",
            "slug": "autentikasi-nextauth",
            "content": "Menggunakan NextAuth.js untuk autentikasi pengguna...",
            "writer": "Maman"
        },
        {
            "id": 15,
            "title": "CRUD dengan Next.js dan Prisma",
            "slug": "crud-nextjs-prisma",
            "content": "Membuat aplikasi CRUD menggunakan Next.js dan Prisma ORM...",
            "writer": "Nana"
        },
        {
            "id": 16,
            "title": "State Management di Next.js",
            "slug": "state-management-nextjs",
            "content": "Menggunakan Redux, Zustand, atau Context API...",
            "writer": "Omar"
        },
        {
            "id": 17,
            "title": "Membuat Mode Gelap di Next.js",
            "slug": "mode-gelap-nextjs",
            "content": "Menggunakan Tailwind CSS dan local storage untuk dark mode...",
            "writer": "Putri"
        },
        {
            "id": 18,
            "title": "Testing di Next.js",
            "slug": "testing-nextjs",
            "content": "Menggunakan Jest dan React Testing Library...",
            "writer": "Qori"
        },
        {
            "id": 19,
            "title": "Next.js vs Gatsby vs Remix",
            "slug": "nextjs-gatsby-remix",
            "content": "Perbandingan tiga framework populer berbasis React...",
            "writer": "Rama"
        },
        {
            "id": 20,
            "title": "Cara Membuat Portfolio dengan Next.js",
            "slug": "portfolio-nextjs",
            "content": "Langkah-langkah membuat portfolio interaktif...",
            "writer": "Siti"
        }
    ]

    return (
        <>
            <h1>Blogs Page</h1>
            <Link href={"/"} >Back to Home</Link>
            <br />

            <h2 >
                {/* Penggunaan replace akan langsung mengarahkan ke route saat kembali */}
                <Link href="/blogs/Hahahah" replace>Link with replace</Link>
            </h2>

            {blogs.map((blog) => (
                <h2 key={blog.id}>
                    <Link href={`/blogs/${blog.slug}`}>{blog.title}</Link>
                </h2>
            ))}
        </>
    )
};
