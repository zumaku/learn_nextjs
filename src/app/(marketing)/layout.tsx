import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Marketing NextJS",
};

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="bg-slate-800 text-lg text-center w-full p-5 text-white">
          Header
        </header>
        <main className="p-5">{children}</main>
        <footer className="bg-slate-800 text-lg text-center w-full p-5 text-white">
          Footer
        </footer>
      </body>
    </html>
  );
}
