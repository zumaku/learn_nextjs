export default async function BlogDetail({params}: {params: Promise<{blogId: string}>}) {
    const {blogId} = await params
    return <h1>Blog ID {blogId}</h1>
};
