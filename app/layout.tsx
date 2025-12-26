import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://learnmark.com'),
  title: {
    template: '%s | Learnmark',
    default: 'Learnmark - Leading Cloud-based Products and Solutions',
  },
  description: 'Learnmark provides leading cloud-native consulting, products, and solutions to help enterprises transform their technology.',
  openGraph: {
    title: 'Learnmark - Leading Cloud-based Products and Solutions',
    description: 'Learnmark provides leading cloud-native consulting, products, and solutions to help enterprises transform their technology.',
    url: 'https://learnmark.com',
    siteName: 'Learnmark',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Learnmark - Leading Cloud-based Products and Solutions',
    description: 'Learnmark provides leading cloud-native consulting, products, and solutions.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-R5GXYQ84NP" />
    </html>
  );
}
