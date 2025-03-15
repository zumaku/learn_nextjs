"use server"

import { addProduct } from "@/prisma-db"
import { redirect } from "next/navigation"

export type Errors = {
    title?: string
    price?: string
    description?: string
}

export type FormState = {
    errors: Errors
}

export const createProductAction = async (prevState: FormState, formData: FormData) => {
    "use server"

    const title = formData.get("title") as string
    const price = formData.get("price") as string
    const description = formData.get("description") as string

    const errors: Errors = {}

    if(!title) errors.title = "Title is required"
    if(!price) errors.price = "Price is required"
    if(!description) errors.description = "Description is required"

    if(Object.keys(errors).length > 0) return {errors}

    await addProduct(title, parseInt(price), description)
    redirect("/products-db")
}