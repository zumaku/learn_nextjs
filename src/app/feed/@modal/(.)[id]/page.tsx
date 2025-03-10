import Image from "next/image";
import { feedData, FeedData } from "../../data";
import Modal from "@/components/modal";

export default async function FeedDetail({
    params
}: {
    params: Promise<{id: string}>
}) {
    const { id } = await params
    const data: FeedData | undefined = feedData.find((x) => x.id === Number(id))!

    return (
        <Modal>
            <h1 className="text-4xl text-center font-bold">{data.name}</h1>
            <Image
                alt={data.name}
                src={data.src}
                className="w-60 my-6"
            />
            <p className="mb-20">{data.description}</p>
        </Modal>
    );
}