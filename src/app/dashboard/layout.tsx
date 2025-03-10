type DashboardType = {
    children: React.ReactNode,
    barchart: React.ReactNode,
    linechart: React.ReactNode,
    piechart: React.ReactNode,
    notifications: React.ReactNode
}

export default function LayoutDashboard({
    children,
    barchart,
    linechart,
    piechart,
    notifications
}: DashboardType) {
    const isAdmin = true
    return (
        <div className="w-full flex flex-col">
            <div className="w-full mb-3">{children}</div>
            <div className="flex">
                <div className="flex flex-col w-1/2">
                    <div>{barchart}</div>
                    <div>{linechart}</div>
                </div>
                <div className="w-1/2">{notifications}</div>
            </div>
            {isAdmin && <div className="w-full">{piechart}</div>}
        </div>
    );
}