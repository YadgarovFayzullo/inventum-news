import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Inventum — Научная газета",
  description:
    "Inventum — онлайн-научная газета. Последние исследования, открытия и аналитика из мира науки.",
  keywords: [
    "наука",
    "исследования",
    "научные статьи",
    "открытия",
    "Inventum",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
