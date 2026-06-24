import type { Metadata } from "next";
import HomeView from "@/components/HomeView";

export const metadata: Metadata = {
  title: "Advanced Security Syndicate — Security & Surveillance Distributor in India",
  description:
    "Advanced Security Syndicate is a regional distributor of CCTV cameras, recorders, storage media and accessories since 2021. Authorized distributor of CP Plus, Seagate, D-Link, TP-Link & more. Pune, Maharashtra.",
  openGraph: {
    title: "Advanced Security Syndicate — Security & Surveillance Distributor",
    description:
      "Regional distributor of CCTV cameras, recorders, storage media and accessories. CP Plus, Seagate, D-Link, TP-Link & 11+ brands. Top #10 distributor in India.",
    images: [{ url: "/logo/logo.png", alt: "Advanced Security Syndicate" }],
  },
  twitter: {
    title: "Advanced Security Syndicate — Security & Surveillance Distributor",
    description: "Regional distributor of CCTV cameras & security solutions. CP Plus, Seagate, D-Link, TP-Link & more.",
  },
  alternates: {
    canonical: "https://assyndicate.com",
  },
};

export default function HomePage() {
  return <HomeView />;
}
