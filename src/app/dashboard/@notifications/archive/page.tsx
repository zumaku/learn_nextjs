import Card from "@/components/card";
import Link from "next/link";

export default function ArchiveNotificaions() {
    return (
        <div>
            <Card className="flex-col" >
                <h3 className="font-bold text-lg">Archive Notifications</h3>
                <div>
                    <Link href={"/dashboard"}>Hide Archive</Link>
                </div>
            </Card>
        </div>
    );
}