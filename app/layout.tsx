import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/src/components/layout/Header";
import navigationData from "@/src/data/navigation.json";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Agrada — Teatr w Drodze",
  description: "Oficjalna strona Teatru Agrada",
};

const logo = {
  src: "/images/logo-agrada.png",
  alt: "Teatr Agrada",
  href: "/",
  title: "AGRADA",
  tagline: "teatr w drodze",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header logo={logo} nav={navigationData.nav} />
        {children}
      </body>
    </html>
  );
}
