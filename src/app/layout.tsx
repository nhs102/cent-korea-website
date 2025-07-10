// src/app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; // Import global CSS
import Header from "@/components/Header"; // Import Header component
import Footer from "@/components/Footer"; // Import Footer component

// Font configuration (applying Tailwind variables)
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CENT KOREA", // Set website title
  description: "센트 코리아의 공식 웹사이트입니다.", // Set website description
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Apply font variables and antialiased class directly to <html> for global effect.
    // This also helps prevent hydration errors by ensuring no whitespace between <html> and <body>.
    <html lang="ko" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body>
        {/* Header Component */}
        <Header />
        {/* Main content area with top padding to account for fixed header */}
        <main className="pt-24">{children}</main>
        {/* Footer Component */}
        <Footer />
      </body>
    </html>
  );
}




