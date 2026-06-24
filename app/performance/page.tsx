import type { Metadata } from "next";
import PerformanceView from "@/components/PerformanceView";

export const metadata: Metadata = {
  title: "CCTV Storage Calculator — Advanced Security Syndicate",
  description:
    "Free CCTV surveillance storage calculator by Advanced Security Syndicate. Estimate HDD storage requirements for your camera count, resolution, FPS and retention days. Powered by Seagate SkyHawk.",
  openGraph: {
    title: "CCTV Storage Calculator — Advanced Security Syndicate",
    description:
      "Calculate exact HDD storage for your CCTV project. Enter cameras, resolution, FPS & retention to get instant estimates. Free tool by Advanced Security Syndicate.",
    images: [{ url: "/logo/logo.png", alt: "CCTV Storage Calculator" }],
  },
  twitter: {
    title: "CCTV Storage Calculator — Advanced Security Syndicate",
    description: "Free tool to calculate HDD storage for CCTV projects. Cameras, resolution, FPS & retention.",
  },
  alternates: {
    canonical: "https://assyndicate.com/performance",
  },
};

export default function PerformancePage() {
  return <PerformanceView />;
}
