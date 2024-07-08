import React from "react";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import { siteMetadata } from "@/config/siteMetadata";

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  keywords: ["golfsilly", "portfolio", "website"],
  authors: [
    {
      name: "golfsilly",
      url: "https://golfsilly.vercel.app",
    },
  ],
  creator: "golfsilly",
  icons: {
    icon: "/favicons/favicon.ico",
    shortcut: "/favicons/favicon.ico",
    apple: "/apple-touch-icon/apple-touch-icon.png",
  },
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: "./",
    siteName: siteMetadata.title,
    images: [
      {
        url: "#",
        width: 800,
        height: 600,
      },
      {
        url: "#",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

interface DefaultLayoutProps {
  children: React.ReactNode | React.ReactNode[];
}

export default async function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <>
      <Header />
      {/* <Navbar /> */}
      <main className="flex flex-col max-w-screen-lg mx-auto py-0">
      {children}
      </main>
      <Footer />
    </>
  );
}
