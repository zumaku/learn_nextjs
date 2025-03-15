import { addProduct } from "@/prisma-db";
import { redirect } from "next/navigation";

export default function ReactFormPage() {
    
    const createProductAction = async (formData: FormData) => {
        "use server"

        const title = formData.get("title") as string
        const price = formData.get("price") as string
        const description = formData.get("description") as string

        await addProduct(title, parseInt(price), description)
        redirect("/products-db")
    }

    return (
        <div className="w-full h-screen flex justify-center items-center">
            <form action={createProductAction} className="w-60 flex flex-col items-center p-2 border border-gray-400 shadow rounded-xl">
                <h1 className="font-bold mb-4 text-center text-xl">Add Product Form</h1>
                <input name="title" className="w-full mb-2 p-1 rounded-lg" type="text" placeholder="Title" required />
                <input name="price" className="w-full mb-2 p-1 rounded-lg" type="number" placeholder="Price" required />
                <textarea name="description" className="w-full mb-2 p-1 rounded-lg" placeholder="Description"></textarea>
                <button className="p-2 rounded bg-blue-600">Sumbit</button>
            </form>
        </div>
    );
}