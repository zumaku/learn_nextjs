"use client"

import { useRouter } from "next/router";

export default function OrderPlace() {
    const router = useRouter()

    const handleOrder = () => {
        router.replace("/payment")
    }
    
    return (
        <>
            <h1>Order Place</h1>
            <ul>
                <li>Bakso</li>
                <li>Jalkot</li>
                <li>Nasgor</li>
            </ul>
            <button onClick={handleOrder}>Order Now</button>
        </>
    );
}