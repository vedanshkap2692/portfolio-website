import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vedansh Kapoor | AI Engineer & Data Scientist",
  description:
    "Portfolio of Vedansh Kapoor — AI Engineer, Data Scientist, and builder of intelligent systems. A samurai's journey through the world of machine learning.",
  keywords: [
    "AI Engineer",
    "Data Scientist",
    "Machine Learning",
    "Portfolio",
    "Vedansh Kapoor",
  ],
  openGraph: {
    title: "Vedansh Kapoor | AI Engineer & Data Scientist",
    description:
      "A samurai's journey through the world of machine learning and AI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-temple-black text-scroll">
        {children}
      </body>
    </html>
  );
}
