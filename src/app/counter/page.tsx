"use client"

import { useState } from "react";

export const metadata = {
    title: "This is Metadata in Client Component",
    description: "Metadata in client component should be static metadata. We can't use dynamic metadata in Client Side Rendering(CSR), only in Server Side Rendering (SSR)."
}

export default function CounterPage() {
    const [val, setVal] = useState(0)
    return(<>
        <h1>Value {val}</h1>
        <button onClick={() => setVal(val+1)}>+</button>
        <button onClick={() => setVal(val-1)}>-</button>
    </>)
};
