import Card from "@/components/card";
import Link from "next/link";

export default function Notificaions() {
    return (
        <div>
            <Card className="flex-col" >
                <h3 className="font-bold text-lg">Notifications</h3>
                <div>
                    <Link href={"/dashboard/archive"}>Show Archive</Link>
                </div>
            </Card>
        </div>
    );
}