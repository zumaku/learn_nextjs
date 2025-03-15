import { getProduct } from "@/prisma-db";
import ProductEditForm from "./product-edit-form";
import { Products } from "../page";
import { notFound } from "next/navigation";


export default async function ProductEditPage({params}: {params: Promise<{id: string}>}) {
    const {id} = await params
    const product: Products | null = await getProduct(parseInt(id))

    if(!product) notFound()

    return (
        <ProductEditForm product={product} />
    );
}