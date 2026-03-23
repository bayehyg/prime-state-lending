import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prime State Lending | Modern Mortgages in WA",
  description: "Experience a fully digital mortgage process with transparent rates, expert local guidance, and absolutely no hidden fees.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
