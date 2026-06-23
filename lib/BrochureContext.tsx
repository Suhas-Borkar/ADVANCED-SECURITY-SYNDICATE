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

Advanced Security Syndicate is a premier regional distributor of
security and surveillance systems across India. We source and
supply certified CCTV cameras, storage drives, network switching,
and integrated telecom infrastructure from global and domestic
brand principals.

-------------------------------------------
1. CRITICAL PERFORMANCE NUMBERS:
-------------------------------------------
• Business Volume Transacted: ₹168+ Crore
• Active Channel Sub-Dealers: 5,000+ Retailers
• Brand Partnerships: 14+ Strategic Manufacturers
• Regional Presence: 40+ Cities

-------------------------------------------
2. STRATEGIC BRAND ALLIANCES & ROLES:
-------------------------------------------
• Connect-G: Authorized National Distributor (Racks, SMPS, Fiber PT)
• Syntel Telecom: Authorized National Distributor (Digital EPABX, SIP)
• Cofe: Authorized National Distributor (4G LTE SIM CPE Units)
• Prama: Authorized Regional Channel Partner (IP Cameras, PoE NVRs)
• Prizor: Authorized Accessory Partner (Storage Accessories, Rugged Cabling)
• Seagate: Certified Regional Partner (SkyHawk Surveillance Storage)
• CP Plus: Distributor Partner (Smart CCTV Systems, Hybrid NVRs)
• TP-Link: Networking Partner (Omada PoE Switches, Wireless Access)
• D-Link: Networking Partner (Managed Switches, IP Cameras)

-------------------------------------------
3. CORE REGISTERED ADDRESSES & OFFICES:
-------------------------------------------
• Pune Corporate Office: Office No. 06, Narshinha Residency, Opp Union Bank, New Sangavi, Pune - 411027
  Hotline: +918830851805 | +919689147700 || Email: advancedssyn@gmail.com

===========================================
ADVANCED SECURITY SYNDICATE - ENGINEERED FOR TRUSTED SECURITY
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
