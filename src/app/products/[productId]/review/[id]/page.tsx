import { notFound } from "next/navigation"

export default async function ReviewId({params}: {
    params: Promise<{productId: string, id: string}>
}) {
    // const getRand = (count: number) => {return Math.floor(Math.random() * count)}
    // const random = getRand(2)
    // if(random === 1) throw new Error("Error Loading Review")

    const {productId, id} = await params
    if(parseInt(id) >= 1000) notFound()
    
    return <h1>Produk Id {productId}, Id nya {id}</h1>
};