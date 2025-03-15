"use client"

import { useFormStatus } from "react-dom"

export default function SubmitButton() {
    const {pending} = useFormStatus()

    return !pending ? <button type="submit" className="p-2 rounded bg-blue-600">Sumbit</button> : <button className="p-2 rounded bg-blue-300 text-gray-500" disabled>Sumbiting..</button>
}