import PrivacyPolicyView from "@/components/PrivacyPolicyView"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy — Advanced Security Syndicate",
  description:
    "Review the privacy practices of Advanced Security Syndicate, including data collection, usage, cookies, and rights for users of acgrindia.com.",
  openGraph: {
    title: "Privacy Policy — Advanced Security Syndicate",
    description:
      "Review the privacy practices of Advanced Security Syndicate, including data collection, usage, cookies, and rights for users of acgrindia.com.",
    images: [{ url: "/logo/logo.jpeg", alt: "Advanced Security Syndicate" }],
  },
  twitter: {
    title: "Privacy Policy — Advanced Security Syndicate",
    description:
      "Review the privacy practices of Advanced Security Syndicate, including data collection, usage, cookies, and rights for users of acgrindia.com.",
  },
}

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyView />
}
