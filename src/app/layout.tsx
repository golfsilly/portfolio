import "@/styles/globals.css";
import "@radix-ui/themes/styles.css";
import "aos/dist/aos.css";
import { cn } from "@/lib/utils";
import { sarabun } from "@/config/fonts";
import { NextThemeProvider } from "@/provider/ThemeProvider";
import RadixThemeProvider from "@/provider/RadixThemeProvider";
import { GoogleAnalytics } from "@next/third-parties/google";
import { GoogleTagManager } from "@next/third-parties/google";
import { siteMetadata } from "@/config/siteMetadata";
import Cookie from "@/components/CookieConsent";
import { Toaster } from "@/components/ui/sonner";
import { ScollToTop } from "@/components/ScollToTop";

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
