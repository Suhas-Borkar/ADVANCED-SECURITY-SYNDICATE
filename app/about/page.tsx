import type { Metadata } from "next";
import AboutView from "@/components/AboutView";

export const metadata: Metadata = {
  title: "About Us — Advanced Security Syndicate",
  description:
    "Learn about Advanced Security Syndicate — a regional distributor of electronic security and surveillance solutions in India since 2021. ₹168 Cr revenue in FY 2025–26. Top #10 surveillance distributor ranked region-wise.",
  openGraph: {
    title: "About Advanced Security Syndicate",
    description:
      "Regional distributor of security & surveillance solutions since 2021. Revenue grew from ₹27 Cr to ₹168 Cr in just 2 years. Top #10 surveillance distributor in India.",
    images: [{ url: "/logo/logo.png", alt: "Advanced Security Syndicate" }],
  },
  twitter: {
    title: "About Advanced Security Syndicate",
    description: "Regional distributor of security & surveillance solutions since 2021. ₹168 Cr revenue FY 2025–26.",
  },
  alternates: {
    canonical: "https://assyndicate.com/about",
  },
};

export default function AboutPage() {
  return <AboutView />;
}
