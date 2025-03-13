"use client"

import { useState } from "react";

export default function Dashboard() {
    const [name, setName] = useState("Zuma")
    return (
        <div>
            <h1>Welcome {name}</h1>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
    );
}