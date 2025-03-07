export default async function ProductDetail({params}:
    {params: Promise<{productId: string}>}
) {
    const productId = (await params).productId
    return <h1>Product Detail {productId}</h1>
};