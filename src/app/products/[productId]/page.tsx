import { Metadata } from "next"

type Props = {params: Promise<{productId: string}>}

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
    const {productId} = await params
    return {
        title: `Products ${productId}`,
        description: `Thi is metadata for product id ${productId}`
    }
}

export default async function ProductDetail({params}: Props) {
    const productId = (await params).productId
    return <h1>Product Detail {productId}</h1>
};