"use client"

import { use } from "react"

export default function ArtikelDetial({params, searchParams}: {
    params: Promise<{artikelId: string}>,
    searchParams: Promise<{sembarang?: string}>
}) {
    const {artikelId} = use(params)
    const {sembarang = "id"} = use(searchParams)

    return(<>
        <h1>Artikel Detail</h1>
        <p>Dengan `params` ({artikelId}) dan `searchParams` ({sembarang})</p>
    </>)
};
