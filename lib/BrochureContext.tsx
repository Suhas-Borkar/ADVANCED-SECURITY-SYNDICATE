"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface BrochureContextType {
  brochureOpen: boolean;
  openBrochure: () => void;
  closeBrochure: () => void;
  downloadBrochure: () => void;
}

const BrochureContext = createContext<BrochureContextType>({
  brochureOpen: false,
  openBrochure: () => {},
  closeBrochure: () => {},
  downloadBrochure: () => {},
});

export function BrochureProvider({ children }: { children: ReactNode }) {
  const [brochureOpen, setBrochureOpen] = useState(false);

  const downloadBrochure = () => {
    const textData = `===========================================
ADVANCED SECURITY SYNDICATE - DIGITAL BROCHURE
===========================================
Certified Security Solutions Provider
Status: Authorized Direct Channel Partner

Advanced Security Syndicate is a premier security solutions
company specializing in CCTV Security Cameras, Enterprise EPABX
Servers, Surveillance Hard Drives, Active PoE Switches, and
heavy-gauge passive networking accessories.

-------------------------------------------
1. CRITICAL PERFORMANCE NUMBERS:
-------------------------------------------
• Cumulative Business Transacted: ₹250+ Crore
• Channel Sub-Dealers Activated: 5,000+ Retailers
• Brand Partnerships: 10+ Global & Domestic Leaders
• Operational Regional Coverages: 40+ Cities

-------------------------------------------
2. STRATEGIC BRAND ALLIANCES & ROLES:
-------------------------------------------
• Connect-G: Authorized National Distributor (Racks, SMPS, Fiber PT)
• Syntel Telecom: Authorized National Distributor (Digital EPABX, SIP)
• Cofe Routers: Authorized National Distributor (4G LTE SIM CPE Units)
• Hikvision: Regional Channel Partner (AcuSense IP Cameras, NVRs)
• Prama India: Regional Channel Partner (NDAA Compliant Indian Cams)
• Seagate: Certified Regional Partner (SkyHawk Surveillance Storage)
• CP Plus: Distributor Partner (Smart Visual Locks, Wi-Fi EzyKam)

-------------------------------------------
3. CORE REGISTERED ADDRESSES & OFFICES:
-------------------------------------------
• Nagpur Headquarters: ACGR Building, Civil Lines, Nagpur - 440001
  Hotline: +91 91580 XXXXX | Email: info@acgr.in
• Indore Regional Office: Vijay Nagar Ring Road, Indore, MP - 452010
  Hotline: +91 94222 XXXXX | Email: mp.sales@acgr.in
• Central Warehouses: Kalamboli industrial Park, Navi Mumbai - 410218
  Email: logistics@acgr.in

===========================================
ADVANCED SECURITY SYNDICATE - ENGINEERED FOR SECURITY
===========================================`;

    const blob = new Blob([textData], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Advanced_Security_Syndicate_Brochure.txt";
    link.click();
    URL.revokeObjectURL(url);

    setBrochureOpen(true);
  };

  return (
    <BrochureContext.Provider
      value={{
        brochureOpen,
        openBrochure: () => setBrochureOpen(true),
        closeBrochure: () => setBrochureOpen(false),
        downloadBrochure,
      }}
    >
      {children}
    </BrochureContext.Provider>
  );
}

export const useBrochure = () => useContext(BrochureContext);
