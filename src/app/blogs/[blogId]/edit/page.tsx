export default async function BlogEdit({params}: {params: Promise<{blogId: string}>}) {
    const {blogId} = await params
    return <h1>Edit Blog {blogId}</h1>
};
