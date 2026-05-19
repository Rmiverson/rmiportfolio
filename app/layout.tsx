import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RMIPortfolio",
  description: "Portfolio for Riley M. Iverson",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex flex-col h-full">
        <div className="flex flex-row w-full p-4 bg-olive-200 text-black">
          <nav className="flex flex-auto flex-row gap-4">
            <div><Link href="/">Work</Link></div>
            <div><Link href="/Contact">Contact</Link></div>
            <div><Link href="/Me">Me</Link></div>
          </nav>
          <div className="flex-none">Riley M. Iverson</div>
        </div>
        <main className="grow md:overflow-y-auto">{children}</main>
      </body>
    </html>
  );
}
