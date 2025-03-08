

export default async function ArtikelDetial({params, searchParams}: {
    params: Promise<{artikelId: string}>,
    searchParams: Promise<{sembarang?: string}>
}) {
    const {artikelId} = await params
    const {sembarang = "id"} = await searchParams

    return(<>
        <h1>Artikel Detail</h1>
        <p>Dengan `params` ({artikelId}) dan `searchParams` ({sembarang})</p>
    </>)
};
