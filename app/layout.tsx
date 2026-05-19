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
      <body className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <nav className="w-full flex-none md:w-64">
          <li><Link href="/">Work</Link></li>
          <li><Link href="/Contact">Contact</Link></li>
          <li><Link href="/Me">Me</Link></li>
        </nav>
        <main className="grow p-6 md:overflow-y-auto md:p-12">{children}</main>
      </body>
    </html>
  );
}
