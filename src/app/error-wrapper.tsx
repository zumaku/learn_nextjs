"use client"

import "./globals.css"

import { useState } from "react"

interface WrapperProps {
    children: React.ReactNode
}

const ErrorSimulator = ({
    message = "An error occurred.",
}: {
    message?: string
}) => {
    const [error, setError] = useState(false)

    if(error) throw new Error(message)
    
    return (
        <button
            title="Simulate an error"
            className="bg-red-950 text-red-500 rounded p-1 leading-none text-sm"
            onClick={() => setError(true)}
        >
            Simulatte Error Now!
        </button>
    )
}

export const ErrorWrapper = ({children}: WrapperProps) => {
    return (
        <div>
            <ErrorSimulator message="Simulated Error in root layout!" />
            {children}
        </div>
    )
}