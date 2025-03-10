import Link from "next/link";

export default function Folder1() {
    return (
        <div>
            <h1 className="text-lg font-bold">Thi is Folder 1</h1>
            <p>Halaman ini adalah halaman untuk mencoba intercepting route.</p>
            <div className="my-5">
                <Link href={"/folder1/folder2"} className="bg-blue-600 text-blue-400 px-4 py-2 rounded my-5">Open Intercepted Folder 2</Link>
                <Link href={"/folder1/folder3"} className="bg-blue-600 text-blue-400 px-4 py-2 rounded my-5">Open Intercepted Folder 3</Link>
            </div>
        </div>
    );
}