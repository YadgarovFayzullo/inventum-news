import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
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
      <body className={`${manrope.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
