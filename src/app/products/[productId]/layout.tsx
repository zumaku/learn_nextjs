export default function Layout({children}: {children: React.ReactNode}) {
    const getRand = (count: number) => {return Math.floor(Math.random() * count)}
    const random = getRand(2)
    if(random === 1) throw new Error("Error Loading Review")
    
    return (
        <section>
            <h1>Ini adalah Produk</h1>
            {children}
        </section>
    );
}