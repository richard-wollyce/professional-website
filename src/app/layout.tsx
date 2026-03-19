import type { Metadata } from "next";
import { Gelasio, Inter } from "next/font/google";

import { siteContent } from "@/lib/site-content";
import "../styles/globals.css";

const displayFont = Gelasio({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteContent.seo.url),
  title: siteContent.seo.title,
  description: siteContent.seo.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteContent.seo.title,
    description: siteContent.seo.description,
    url: siteContent.seo.url,
    siteName: siteContent.brand.professionalName,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: siteContent.seo.ogImage,
        width: 1200,
        height: 630,
        alt: siteContent.seo.ogImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteContent.seo.title,
    description: siteContent.seo.description,
    images: [siteContent.seo.ogImage],
  },
  icons: {
    icon: "/favicon.ico",
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
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${displayFont.variable} ${bodyFont.variable} bg-background font-sans text-foreground antialiased`}
      >
        <div className="relative min-h-screen overflow-x-clip">{children}</div>
      </body>
    </html>
  );
}
