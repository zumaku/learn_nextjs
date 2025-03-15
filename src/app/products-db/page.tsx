import { getProducts } from "@/prisma-db";
import Link from "next/link";

export type Products = {
    id: number,
    title: string,
    price: number,
    description: string | null
}

export default async function ProductsPage() {
    const products: Products[] = await getProducts()
    
    return (
        <ul className="space-y-4 p-4">
            {products.map((product) => (
                <li key={product.id} className="p-4 shadow-md rounded-lg border">
                    <Link href={`/products-db/${product.id}`}>
                        <h1 className="font-bold text-xl">{product.title}</h1>
                    </Link>
                    <p className="font-semibold">$ {product.price}</p>
                    <p>{product.description}</p>
                </li>
            ))}
        </ul>
    );
}