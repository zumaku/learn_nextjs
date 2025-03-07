export default async function BooksSlugs({params}: {
    params: Promise<{slug: string[]}>
}) {
    const {slug} = await params

    switch(slug?.length) {
        case 1:
            return <h1>Book {slug[0]}</h1>
        case 2:
            return <h1>Book {slug[0]} {slug[1]}</h1>
        case 3:
            return <h1>Book {slug[0]} {slug[1]} {slug[2]}</h1>
        case 4:
            return <h1>Book {slug[0]} {slug[1]} {slug[2]} {slug[3]}</h1>
    }

    return <h1>Books Pages</h1>
};