type Shop = {
    children: React.ReactNode,
    cart: React.ReactNode,
    products: React.ReactNode
}

export default function ShopLayout({
    children,
    cart,
    products
}: Shop) {
    return (
        <div className="w-full h-screen p-5">
            <h1 className="w-full text-center text-2xl font-bold mb-4">Soping</h1>
            <div className="flex">
                <div className="w-1/2 border rounded-4xl m-2 p-5">{cart}</div>
                <div className="w-1/2 border rounded-4xl m-2 p-5">{products}</div>
            </div>
            {children}
        </div>
    );
}