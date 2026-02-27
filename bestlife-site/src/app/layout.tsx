import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Best Life — Track everything that matters",
  description:
    "A privacy-first Everything App for longitudinal insight across health and life.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black`}
      >
        {/* Soft background glow (subtle, modern) */}
        <div className="absolute inset-0 -z-10">
          <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-black/5 blur-3xl" />
        </div>

        <SiteHeader />

        <main className="min-h-screen">{children}</main>

        <SiteFooter />
      </body>
    </html>
  );
}