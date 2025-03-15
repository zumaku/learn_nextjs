import { addProduct } from "@/prisma-db";

export async function POST(request: Request) {
    const {title, price, description} = await request.json()
    const product = await addProduct(title, parseInt(price), description)
    return new Response(JSON.stringify(product), {
        headers: {"Content-Type": "application/json"},
    })
}