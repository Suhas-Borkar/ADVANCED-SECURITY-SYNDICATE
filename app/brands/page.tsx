import type { Metadata } from "next";
import BrandsView from "@/components/BrandsView";

export const metadata: Metadata = {
  title: "Authorized Brands — Advanced Security Syndicate",
  description:
    "Authorized regional distributor for CP Plus, Seagate SkyHawk, D-Link, TP-Link, Connect-G, Syntel, iVOOMi, Zebion, Gold, AOC, Trion Cables and more. Genuine stock, certified warranties.",
  openGraph: {
    title: "Authorized Brands — Advanced Security Syndicate",
    description:
      "Authorized distributor for 11+ security brands — CP Plus, Seagate, D-Link, TP-Link & more. Genuine stock with certified warranties across India.",
    images: [{ url: "/logo/og-image.png", alt: "Advanced Security Syndicate Brands" }],
  },
  twitter: {
    title: "Authorized Brands — Advanced Security Syndicate",
    description: "Authorized distributor for CP Plus, Seagate, D-Link, TP-Link & 11+ security brands.",
  },
  alternates: {
    canonical: "https://assyndicate.com/brands",
  },
};

export default function BrandsPage() {
  return <BrandsView />;
}
