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
          {pathName === link.href && pathName !== "/" ? (
            <h2>{link.name}</h2>
          ) : (
            <h4>{link.name}</h4>
          )}
        </Link>
      ))}
      {children}
    </>
  )
}