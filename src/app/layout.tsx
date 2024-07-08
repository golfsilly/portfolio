import "@/styles/globals.css";
import "@radix-ui/themes/styles.css";
import { cn } from "@/lib/utils";
import { sarabun } from "@/config/fonts";
import { NextThemeProvider } from "@/provider/ThemeProvider";
import RadixThemeProvider from "@/provider/RadixThemeProvider";
import { GoogleAnalytics } from "@next/third-parties/google";
import { GoogleTagManager } from "@next/third-parties/google";
import { siteMetadata } from "@/config/siteMetadata";
import { Metadata } from "next";
import Cookie from "@/components/CookieConsent";
import { Toaster } from "@/components/ui/sonner";
import { ScollToTop } from "@/components/ScollToTop";

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={siteMetadata.language} suppressContentEditableWarning>
      <GoogleTagManager
        gtmId={`${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER}`}
      />
      <GoogleAnalytics gaId={`${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
      <body
        className={cn(
          "min-h-screen bg-background font-sarabun antialiased",
          sarabun.variable
        )}
      >
        <NextThemeProvider>
          <RadixThemeProvider>
            {children}
            <ScollToTop />
            <Cookie />
            <Toaster position="top-right" expand={false} richColors />
          </RadixThemeProvider>
        </NextThemeProvider>
      </body>
    </html>
  );
}
