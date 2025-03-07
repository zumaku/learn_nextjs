"use client"

import { usePathname } from "next/navigation"

export default function NotFound() {
    const pathName = usePathname()
    const productId = pathName.split("/")[2]
    const reviewId = pathName.split("/")[4]

    return <h1>Sorry, it`s 404. Product {productId} with Review Id {reviewId}</h1>
};
