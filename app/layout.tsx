import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Dock } from "@/components/layout/Dock";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elijah | Minimal Portfolio",
  description:
    "A minimal portfolio duplicate of jestsee.com built with Next.js and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          "antialiased min-h-screen bg-background text-foreground font-sans selection:bg-white/20 flex flex-col items-center",
        )}
      >
        <div className="w-full max-w-7xl px-6 flex-1 flex flex-col">
          <main className="flex-1 w-full py-20 animate-in fade-in duration-500">
            {children}
          </main>
          <Footer />
        </div>
        <Dock />
      </body>
    </html>
  );
}
