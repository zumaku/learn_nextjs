type DashboardChildrens = {
    children: React.ReactNode,
    barchart: React.ReactNode,
    linechart: React.ReactNode,
    piechart: React.ReactNode
}

export default function Page({
    children,
    barchart,
    linechart,
    piechart
}: DashboardChildrens) {
    return (
        <div className="w-full h-screen p-3">
            <div>
                {barchart}
                {linechart}
                {piechart}
            </div>
            {children}
        </div>
    );
}