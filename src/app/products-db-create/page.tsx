"use client"

import { FormState } from "../action/page";
import { createProductAction } from "../action/page";
import { useActionState } from "react";

export default function ReactFormPage() {

    const initialState: FormState = {
        errors: {},
    }

    const [state, formAction, isPanding] = useActionState(createProductAction, initialState)

    return (
        <div className="w-full h-screen flex justify-center items-center">
            <form action={formAction} className="w-60 flex flex-col items-center p-2 border border-gray-400 shadow rounded-xl">
                <h1 className="font-bold mb-4 text-center text-xl">Add Product Form</h1>
                {state.errors.title && <p className="mb-2 text-red-600">{state.errors.title}</p>}
                <input name="title" className="w-full mb-2 p-1 rounded-lg" type="text" placeholder="Title" />
                {state.errors.price && <p className="mb-2 text-red-600">{state.errors.price}</p>}
                <input name="price" className="w-full mb-2 p-1 rounded-lg" type="number" placeholder="Price" />
                {state.errors.description && <p className="mb-2 text-red-600">{state.errors.description}</p>}
                <textarea name="description" className="w-full mb-2 p-1 rounded-lg" placeholder="Description"></textarea>

                {/* <SubmitButton /> */}
                <button type="submit" className="p-2 rounded bg-blue-600 disabled:bg-blue-400 disabled:text-gray-600" disabled={isPanding}>Sumbit</button>
            </form>
        </div>
    );
}