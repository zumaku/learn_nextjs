import { notFound } from "next/navigation"

export default async function ReviewId({params}: {
    params: Promise<{productId: string, id: string}>
}) {
    const {productId, id} = await params
    if(parseInt(id) >= 1000) notFound()
    return <h1>Produk Id {productId}, Id nya {id}</h1>
};