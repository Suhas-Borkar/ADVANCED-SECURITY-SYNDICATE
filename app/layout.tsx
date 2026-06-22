import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

export const metadata: Metadata = {
  title: "ACGR India - National Surveillance & Security Distributor",
  description:
    "ACGR India is Central & Western India's authorized distributor of CCTV cameras, EPABX systems, surveillance storage, and networking gear.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
