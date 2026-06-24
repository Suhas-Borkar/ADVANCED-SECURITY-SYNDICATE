import TermsAndConditionsView from "@/components/Terms&ConditionsView"
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Terms & Conditions — Advanced Security Syndicate",
  description:
    "Read the detailed terms and conditions for purchasing, installing, and using CCTV security camera systems from Advanced Security Syndicate. Learn about warranties, returns, and service policies.",
  openGraph: {
    title: "Terms & Conditions — Advanced Security Syndicate",
    description:
      "Read the detailed terms and conditions for purchasing, installing, and using CCTV security camera systems from Advanced Security Syndicate. Learn about warranties, returns, and service policies.",
    images: [{ url: "/logo/logo.png", alt: "Advanced Security Syndicate" }],
  },
  twitter: {
    title: "Terms & Conditions — Advanced Security Syndicate",
    description: "Read the detailed terms and conditions for purchasing, installing, and using CCTV security camera systems from Advanced Security Syndicate. Learn about warranties, returns, and service policies",
  },
  alternates: {
    canonical: "https://assyndicate.com/terms",
  },
};


export default function TermsPage(){
    return ( <TermsAndConditionsView/> )
}
