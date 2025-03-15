import SubmitButton from "@/components/SubmitButton";
import { addProduct } from "@/prisma-db";
import { error } from "console";
import { redirect } from "next/navigation";
import { useActionState } from "react";

type Errors = {
    title?: string
    price?: string
    description?: string
}

type FormState = {
    errors: Errors
}

export default function ReactFormPage() {

    const initialState: FormState = {
        errors: {},
    }

    const [state, formAction, isPanding] = useActionState(createProductAction, initialState)


    const createProductAction = async (formData: FormData) => {
        "use server"

        const title = formData.get("title") as string
        const price = formData.get("price") as string
        const description = formData.get("description") as string

        const errors: Errors = {}

        if(!title) errors.title = "Title is required"
        if(!price) errors.price = "Price is required"
        if(!description) errors.description = "Description is required"
    
        if(Object.keys(errors).length > 0) return {errors}

        await addProduct(title, parseInt(price), description)
        redirect("/products-db")
    }

    return (
        <div className="w-full h-screen flex justify-center items-center">
            <form action={formAction} className="w-60 flex flex-col items-center p-2 border border-gray-400 shadow rounded-xl">
                <h1 className="font-bold mb-4 text-center text-xl">Add Product Form</h1>
                {state.errors.title && <p className="mb-2 text-red-600">{state.errors.title}</p>}
                <input name="title" className="w-full mb-2 p-1 rounded-lg" type="text" placeholder="Title" required />
                {state.errors.price && <p className="mb-2 text-red-600">{state.errors.price}</p>}
                <input name="price" className="w-full mb-2 p-1 rounded-lg" type="number" placeholder="Price" required />
                {state.errors.description && <p className="mb-2 text-red-600">{state.errors.price}</p>}
                <textarea name="description" className="w-full mb-2 p-1 rounded-lg" placeholder="Description"></textarea>

                {/* <SubmitButton /> */}
                <button type="submit" className="p-2 rounded bg-blue-600 disabled:bg-blue-400 disabled:text-gray-600" disabled={isPanding}>Sumbit</button>
            </form>
        </div>
    );
}