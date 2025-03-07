"use client"

import { useState } from "react";

export default function Counter() {
    const [val, setVal] = useState(0)
    return(<>
        <h1>Value {val}</h1>
        <button onClick={() => setVal(val+1)}>+</button>
        <button onClick={() => setVal(val-1)}>-</button>
    </>)
};