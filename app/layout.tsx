import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/event";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "IEEE CS Pro 2026 — An Exclusive Invitation",
    template: "%s · IEEE CS Pro 2026",
  },
  description:
    "You are cordially invited to IEEE CS Pro 2026 — an exclusive leadership & networking forum for CS professionals. Sunday, 26 July 2026, Bengaluru. By invitation only.",
  applicationName: "IEEE CS Pro 2026",
  keywords: [
    "IEEE",
    "IEEE Computer Society",
    "IEEE CS Pro 2026",
    "Bangalore Chapter",
    "leadership round table",
    "CS Professional Connect",
    "AI-ready workforce",
    "Bengaluru",
  ],
  authors: [{ name: "IEEE Computer Society — Bangalore Chapter" }],
  creator: "IEEE Computer Society — Bangalore Chapter",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "IEEE CS Pro 2026",
    locale: "en_IN",
    url: "/",
    title: "IEEE CS Pro 2026 — An Exclusive Invitation",
    description:
      "Leaders. Learners. Impact. · An exclusive leadership & networking forum · 26 July 2026 · Bengaluru · By Invitation Only",
    images: [
      {
        url: "/assets/og/og-image.png",
        width: 1200,
        height: 630,
        alt: "IEEE CS Pro 2026 — An Exclusive Invitation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IEEE CS Pro 2026 — An Exclusive Invitation",
    description:
      "Leaders. Learners. Impact. · An exclusive leadership & networking forum · 26 July 2026 · Bengaluru",
    images: ["/assets/og/og-image.png"],
  },
  icons: {
    icon: [{ url: "/assets/favicon.svg", type: "image/svg+xml" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#0a1a33",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="relative min-h-full">
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
