"use client"

// Error Boundary hanya bisa digunakan di client

export default function ErrorBoundary({error}: {error: Error}) {
    return (
        <>
            <h1 className="text-red-600">[Waduh, Error Pak.]</h1>
            <p>{error.message}</p>
        </>
    );
}