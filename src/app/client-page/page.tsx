"use client"

import { ServerFuncionExample } from "@/utils/serverFunctionExample";

export default function ClientPage() {
    const result = ServerFuncionExample()
    return (
        <h1>Client Page | {result}</h1>
    );
}