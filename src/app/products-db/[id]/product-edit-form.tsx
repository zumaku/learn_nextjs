"use client"

import { FormState } from "../../action/page";
import { editProductAction } from "../../action/page";
import { useActionState } from "react";
import { Products } from "../page";

export default function ProductEditForm({product}: {product: Products}) {

    const initialState: FormState = {
        errors: {},
    }

    const editProductActionWithId = editProductAction.bind(null, product.id)

    const [state, formAction, isPanding] = useActionState(editProductActionWithId, initialState)

    return (
        <div className="w-full h-screen flex justify-center items-center">
            <form action={formAction} className="w-60 flex flex-col items-center p-2 border border-gray-400 shadow rounded-xl">
                <h1 className="font-bold mb-4 text-center text-xl">Edit Product Form</h1>
                {state.errors.title && <p className="mb-2 text-red-600">{state.errors.title}</p>}
                <input name="title" className="w-full mb-2 p-1 rounded-lg" type="text" placeholder="Title" defaultValue={product.title} />
                {state.errors.price && <p className="mb-2 text-red-600">{state.errors.price}</p>}
                <input name="price" className="w-full mb-2 p-1 rounded-lg" type="number" placeholder="Price" defaultValue={product.price} />
                {state.errors.description && <p className="mb-2 text-red-600">{state.errors.description}</p>}
                <textarea name="description" className="w-full mb-2 p-1 rounded-lg" placeholder="Description" defaultValue={product.description ?? ""}></textarea>

                {/* <SubmitButton /> */}
                <button type="submit" className="p-2 rounded bg-blue-600 disabled:bg-blue-400 disabled:text-gray-600" disabled={isPanding}>Sumbit</button>
            </form>
        </div>
    );
}