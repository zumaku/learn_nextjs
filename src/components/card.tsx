export default function Card({children}: {children:React.ReactNode}) {
    return (
        <div className="flex justify-center h-60 items-center border rounded-xl p-3 bg-slate-200 hover:bg-slate-300">
            {children}
        </div>
    );
}