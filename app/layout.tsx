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
  title: "Code Corner",
  description: "Code Corner Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-white antialiased`}
      >
        <nav className="container bg-white p-6 mx-auto ">
          <div className="row flex justify-between item-center p-10">
            <div>
              <img
                src="/code_corner_logo.svg"
                alt="Code Corner Logo"
                className="h-10 w-10"
              />
            </div>
            <div className="hidden md:flex space-x-6 justify-space-between">
              <Link href="/" className="hover:text-red-300">
                Home
              </Link>
              <Link href="/" className="hover:text-red-300">
                Categories
              </Link>
              <Link href="/" className="hover:text-red-300">
                Profile
              </Link>
              <Link href="/" className="hover:text-red-300">
                Search
              </Link>
              <Link href="/" className="text-red-800  hover:text-red-300">
                About Me
              </Link>
              <Link href="/" className="hover:text-red-300">
                Contact Me
              </Link>
            </div>

            <div className="md:hidden">
              <button className="py-2 px-6 mx-6 rounded-full bg-slate-500 hover:bg-orange-600 text-white">
                Sign in
              </button>
              <button className="py-2 px-6 mx-6 rounded-full bg-slate-500 hover:bg-orange-600 text-white">
                Sign up
              </button>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
