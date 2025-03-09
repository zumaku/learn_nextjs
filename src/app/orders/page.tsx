"use client"

import { useRouter } from "next/navigation";

export default function OrderPage() {
    const router = useRouter()
    
    const handleOrder = () => {
        router.replace("/payment")
    }
    
    return (
        <div>
            <h1>Order Place</h1>
            <ul>
                <li>Bakso</li>
                <li>Jalkot</li>
                <li>Nasgor</li>
            </ul>
            <button onClick={handleOrder}>Order Now</button>
        </div>
    );
}