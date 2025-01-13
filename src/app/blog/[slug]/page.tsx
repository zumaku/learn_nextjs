export default async function BlogDetail({params}: {params: Promise<{slug: string}>}){
    const { slug } = await params
    
    const slugToTitle = (slug: string): string => {
        const words = slug.split('-');
        const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
        return capitalizedWords.join(' ');
    }
    
    return (
        <>
            <h3>Read Blog</h3>
            <h1>{slugToTitle(slug)}</h1>
        </>
    )
}