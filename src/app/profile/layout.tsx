import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Profile"
}

export default function ProfileLayout({children}: {children: React.ReactNode}) {
    return <>
        {children}
        <h1>End of Profile</h1>
    </>
};