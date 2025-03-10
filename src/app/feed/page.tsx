import Link from "next/link";
import { feedData } from "./data";
import Image from "next/image";

export default function FeedPage() {
    return (
        <div className="flex flex-col">
            <h1 className="w-full p-4 text-center text-3xl font-bold mb-10">Feed Tech Trands</h1>
            <div className="flex gap-4 flex-wrap justify-center">
                {feedData.map((data) => (
                    <div
                        className="flex flex-col border rounded-xl p-6 bg-white" 
                        key={data.id}
                    >
                        <Link 
                            href={`feed/${data.id}`}
                            className="w-72 aspect-square flex flex-col"
                        >
                            <Image
                                alt={data.name}
                                src={data.src}
                                className="w-full object-fit aspect-square mb-5"
                            />
                            <h1 className="font-bold text-xl text-center">{data.name}</h1>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}