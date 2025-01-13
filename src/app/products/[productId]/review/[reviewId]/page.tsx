export default async function ProductReview({params}: {params: Promise<{
    productId: string, reviewId: string
}>}) {
    const {productId, reviewId} = await params

    return (
        <>
            <h1>Product Id: {productId}</h1>
            <h1>Review Id: {reviewId}</h1>
        </>
    )
}

// Sekarang coba kunjungi http://localhost:3000/products/1/review/2