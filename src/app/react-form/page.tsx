"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ReactFormPage() {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")

    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)

        try {
            const res = await fetch("/react-form/api", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({title, price, description})
            })

            if(res.ok) router.push("/products-db")

        } catch (err) {
            setIsError(true)
            console.error("Error: ", err)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="w-full h-screen flex justify-center items-center">
            <form onSubmit={handleSubmit} className="w-60 flex flex-col items-center p-2 border border-gray-400 shadow rounded-xl">
                <h1 className="font-bold mb-4 text-center text-xl">Add Product Form</h1>
                {isError && <p className="mb-2 text-red-500"><span className="font-semibold">Gagal Submit!</span> Coba lagi nanti.</p>}
                <input value={title} onChange={(e) => setTitle(e.target.value)} className="w-full mb-2 p-1 rounded-lg" type="text" placeholder="Title" required />
                <input value={price} onChange={(e) => setPrice(e.target.value)} className="w-full mb-2 p-1 rounded-lg" type="number" placeholder="Price" required />
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="w-full mb-2 p-1 rounded-lg" placeholder="Description"></textarea>
                {!isLoading ? <button className="p-2 rounded bg-blue-600">Sumbit</button> : <button className="p-2 rounded bg-blue-300 text-gray-500">Sumbiting..</button>}
            </form>
        </div>
    );
}