export default function Card({children, className}: {children:React.ReactNode, className?: string}) {
    return (
        <div className={`flex justify-center h-60 items-center border rounded-xl p-3 bg-slate-200 hover:bg-slate-300 ${className}`}>
            {children}
        </div>
    );
}