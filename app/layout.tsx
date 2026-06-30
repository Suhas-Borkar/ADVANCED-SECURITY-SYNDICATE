import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://assyndicate.com"),
  title: "Advanced Security Syndicate — Regional Distributor of Security & Surveillance Solutions",
  description:
    "Advanced Security Syndicate is a regional distributor of electronic security and surveillance solutions in India. Since 2021, supplying CCTV cameras, recorders, storage media and accessories — CP Plus, Seagate, D-Link, TP-Link and more. Ranked Top #10 Surveillance Distributor. Serving 15+ cities across India.",
  keywords: [
    "Advanced Security Syndicate",
    "CCTV distributor India",
    "surveillance solutions Pune",
    "CP Plus distributor",
    "Seagate SkyHawk distributor",
    "D-Link distributor",
    "TP-Link distributor",
    "security camera distributor Maharashtra",
    "CCTV cameras Pune",
    "network storage distributor",
    "electronic security solutions",
    "regional distributor surveillance India",
  ],
  authors: [{ name: "Advanced Security Syndicate" }],
  creator: "Advanced Security Syndicate",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://assyndicate.com",
  },
  openGraph: {
    title: "Advanced Security Syndicate — Certified Security Solutions",
    description:
      "Regional distributor of electronic security & surveillance solutions in India. CP Plus, Seagate, D-Link, TP-Link and 11+ brands. Top #10 distributor. Serving 15+ cities across India.",
    type: "website",
    locale: "en_IN",
    siteName: "Advanced Security Syndicate",
    images: [{ url: "/logo/og-image.png", width: 1200, height: 630, alt: "Advanced Security Syndicate" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Advanced Security Syndicate — Certified Security Solutions",
    description: "Regional distributor of security & surveillance solutions. CP Plus, Seagate, D-Link, TP-Link & more.",
    images: ["/logo/og-image.png"],
  },
  icons: {
    icon: "/logo/logo-OG.png",
    apple: "/logo/logo-OG.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <ClientLayout>{children}</ClientLayout>
        <SpeedInsights />
      </body>
    </html>
  );
}
