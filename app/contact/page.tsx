import type { Metadata } from "next";
import { Suspense } from "react";
import ContactView from "@/components/ContactView";

export const metadata: Metadata = {
  title: "Contact Us — Advanced Security Syndicate",
  description:
    "Get in touch with Advanced Security Syndicate. Office No. 06, Narshinha Residency, Opp Union Bank, New Sangavi, Pune – 411027. Phone: +91 8830851805 | +91 9689147700. Email: Info@assyndicate.com || advancescrtcp55@gmail.com.",
  openGraph: {
    title: "Contact Advanced Security Syndicate",
    description:
      "Reach out for bulk orders, dealer accounts, or product inquiries. Pune, Maharashtra. Phone: +91 9689147700.",
    images: [{ url: "/logo/og-image.png", alt: "Contact Advanced Security Syndicate" }],
  },
  twitter: {
    title: "Contact Advanced Security Syndicate",
    description: "Reach out for bulk orders, dealer accounts, or product inquiries. Pune, Maharashtra. +91 9689147700.",
  },
  alternates: {
    canonical: "https://assyndicate.com/contact",
  },
};

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-50" />}>
      <ContactView />
    </Suspense>
  );
}
