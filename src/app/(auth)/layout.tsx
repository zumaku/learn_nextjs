"use client"

import "./style.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Navlinks = {
  name: string, href: string
}

const navLinks: Navlinks[] = [
  {name: "Login", href: "/login"},
  {name: "Register", href: "/register"},
  {name: "Forget Password", href: "/forget-password"}
]

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathName = usePathname()
  return (
    <>
      {navLinks.map((link) => (
        <Link key={link.name} href={link.href}>
            <h2 className={pathName === link.href && pathName !== "/" ? `font-bold text-lg underline` : `text-md underline`}>{link.name}</h2>
        </Link>
      ))}
      {children}
    </>
  )
}