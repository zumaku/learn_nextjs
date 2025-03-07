export default async function BlogEditVersion({params}: {params: Promise<{blogId: string, version: string}>}) {
    const {blogId, version} = await params
    return <h1>Blog {blogId} edit verion {version}</h1>
};
