"use client"

import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function ErrorBoundary({error, reset}: {error: Error, reset: () => void}) {
    const router = useRouter()
    const reload = () => {
        startTransition(() => {
            router.refresh()
            reset()
        })
    }

    return (
        <>
            <h1 className="text-red-600">[Waduh, Error Pak.]</h1>
            <p>{error.message}</p>
            <button onClick={() => reload()} className="border p-2 bg-gray-400">Reset</button>
        </>
    );
}