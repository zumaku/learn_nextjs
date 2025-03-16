import { getProducts } from "@/prisma-db";
import Link from "next/link";
import { deleteProductAction } from "../action/page";

export type Products = {
    id: number,
    title: string,
    price: number,
    description: string | null
}

export default async function ProductsPage() {
    const products: Products[] = await getProducts()
    
    return (
        <ul className="space-y-4 p-2 flex flex-wrap justify-center">
            {products.map((product) => (
                <li key={product.id} className="w-1/3 p-4 m-1 shadow-md rounded-lg border">
                    <Link href={`/products-db/${product.id}`}>
                        <h1 className="font-bold text-xl">{product.title}</h1>
                    </Link>
                    <p className="font-semibold">$ {product.price}</p>
                    <p className="mb-2">{product.description}</p>
                    <form action={deleteProductAction.bind(null, product.id)}>
                        <button className="bg-red-600 text-white p-2 rounded-lg">Delete</button>
                    </form>
                </li>
            ))}
        </ul>
    );
}