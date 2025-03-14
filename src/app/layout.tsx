import { ThemeProvider } from "@/components/ThemeProvider";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <ThemeProvider>
        <body>{children}</body>
      </ThemeProvider>
    </html>
  );
}