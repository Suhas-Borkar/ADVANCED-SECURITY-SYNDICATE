import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeView from "./components/HomeView";
import AboutView from "./components/AboutView";
import BrandsView from "./components/BrandsView";
import PerformanceView from "./components/PerformanceView";
import ContactView from "./components/ContactView";
import { Download, X, Printer, Shield, CheckCircle, HeartHandshake } from "lucide-react";

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>("home");
  const [initialBrandInterest, setInitialBrandInterest] = useState<string>("");
  const [brochureOpen, setBrochureOpen] = useState(false);

  // Shortcut bridge to contact desk with specific prefilled brand interest
  const handleOpenConsultation = (brandName?: string) => {
    if (brandName) {
      setInitialBrandInterest(brandName);
    } else {
      setInitialBrandInterest("");
    }
    setCurrentPage("contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Trigger download of official corporate brochure summary file (client-side text blob of the credentials ledger)
  const handleDownloadBrochure = () => {
    const textData = `===========================================
ACGR INDIA PRIVATE LIMITED - DIGITAL BROCHURE
===========================================
Authorized National & Regional Surveillance Distributor
Established: 2021
Status: Certified Direct Channel Partner
CIN: U31909MH2021PTCXXXXXX

ACGR India is Central & Western India's premium tech-loyal
distribution house. We specialize in CCTV Security Cameras,
Enterprise EPABX Servers, Surveillance Hard Drives, Active PoE
Switches, and heavy-gauge passive networking accessories.

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
ENGINEERED FOR SECURITY - CHANNELS LOCK GURANTTEE
===========================================`;

    const blob = new Blob([textData], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "ACGR_India_Corporate_Brochure.txt";
    link.click();
    URL.revokeObjectURL(url);
    
    // Also trigger the beautiful visual ledger modal for client preview
    setBrochureOpen(true);
  };

  const renderActiveView = () => {
    switch (currentPage) {
      case "home":
        return (
          <HomeView
            setCurrentPage={setCurrentPage}
            onOpenConsultation={() => handleOpenConsultation()}
            onDownloadBrochure={handleDownloadBrochure}
          />
        );
      case "about":
        return (
          <AboutView 
            onOpenConsultation={() => handleOpenConsultation()} 
          />
        );
      case "brands":
        return (
          <BrandsView 
            onOpenConsultation={handleOpenConsultation} 
          />
        );
      case "performance":
        return (
          <PerformanceView />
        );
      case "contact":
        return (
          <ContactView 
            initialBrandInterest={initialBrandInterest} 
          />
        );
      default:
        return (
          <HomeView
            setCurrentPage={setCurrentPage}
            onOpenConsultation={() => handleOpenConsultation()}
            onDownloadBrochure={handleDownloadBrochure}
          />
        );
    }
  };

  return (
    <div className="flex flex-col min-h-screen text-slate-800 bg-slate-50 selection:bg-brand-600 selection:text-white">
      
      {/* Universal Header */}
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {renderActiveView()}
      </main>

      {/* Universal Footer */}
      <Footer
        setCurrentPage={setCurrentPage}
        onOpenConsultation={() => handleOpenConsultation()}
        onDownloadBrochure={handleDownloadBrochure}
      />

      {/* Interactive print-friendly Corporate Ledger Brochure Viewer */}
      {brochureOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl border border-slate-200 w-full max-w-3xl overflow-hidden shadow-2xl animate-scale-up print:p-0 print:border-0 print:shadow-none">
            
            {/* Header controls */}
            <div className="p-5 bg-slate-900 text-white flex justify-between items-center print:hidden border-b">
              <div className="flex items-center gap-2.5">
                <Shield className="w-5 h-5 text-brand-400" />
                <span className="font-display font-medium text-sm">ACGR Certified Ledger Brochure</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => window.print()}
                  className="px-3.5 py-1.5 bg-slate-800 hover:bg-slate-750 text-slate-100 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <Printer className="w-3.5 h-3.5" />
                  Print Brochure
                </button>
                <button
                  onClick={() => setBrochureOpen(false)}
                  className="p-1 px-2 text-slate-400 hover:text-white rounded bg-slate-850 hover:bg-slate-800 text-xs font-bold transition-colors"
                >
                  Close
                </button>
              </div>
            </div>

            {/* Print Area of the Ledger Brochure */}
            <div className="p-8 sm:p-12 space-y-8 print:p-0">
              
              <div className="flex items-center justify-between border-b pb-6 border-slate-200">
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="font-display font-black text-3xl tracking-tight text-slate-900">ACGR</span>
                    <span className="font-space text-xs tracking-wider text-brand-600 uppercase bg-brand-50 px-1 py-0.5 rounded border border-brand-200">INDIA</span>
                  </div>
                  <span className="text-[10px] font-mono font-bold tracking-widest text-slate-450 block uppercase mt-0.5">
                    National Surveillance & telecom distributor
                  </span>
                </div>
                
                <div className="text-right text-xs font-mono text-slate-400">
                  <span>CIN: U31909MH2021PTCXXXXXX</span>
                  <span className="block mt-0.5">CERTIFICATION: DIRECT PARTNER</span>
                </div>
              </div>

              {/* Grid lists of metrics */}
              <div className="bg-slate-50 border rounded-2xl p-6 grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { title: "250+ Crore", desc: "Turnover transacted" },
                  { title: "5,000+", desc: "Retail sub-dealers" },
                  { title: "10+ Premium", desc: "Strategic alliances" },
                  { title: "40+ Cities", desc: "Active network logs" }
                ].map((m, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <span className="font-mono text-lg font-black text-brand-600 tracking-tight">{m.title}</span>
                    <p className="text-slate-500 text-[10px] uppercase font-mono tracking-wider">{m.desc}</p>
                  </div>
                ))}
              </div>

              {/* Content description list */}
              <div className="space-y-6 text-sm text-slate-700 leading-relaxed font-sans">
                <p>
                  The corporate brochure text has been successfully downloaded to your local device downloads folder! ACGR India maintains fully certified direct supply chains with global manufacturing houses.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                  <div className="space-y-3 p-5 bg-brand-50/40 rounded-2xl border border-brand-100">
                    <span className="text-xs font-mono font-bold text-brand-850 uppercase tracking-widest block">Strategic Alliances</span>
                    <ul className="space-y-1.5 text-xs">
                      <li>• <strong>Connect-G</strong> - Active-passive accessories</li>
                      <li>• <strong>Syntel Telecom</strong> - Unified EPABX servers</li>
                      <li>• <strong>Hikvision Pro</strong> - Acusense video CCTV</li>
                      <li>• <strong>Seagate SkyHawk</strong> - Optimised HDD storage</li>
                    </ul>
                  </div>

                  <div className="space-y-3 p-5 bg-emerald-50/30 rounded-2xl border border-emerald-105">
                    <span className="text-xs font-mono font-bold text-emerald-850 uppercase tracking-widest block font-bold">Distribution focus</span>
                    <ul className="space-y-1.5 text-xs">
                      <li>✔ Direct authorized warranties channel</li>
                      <li>✔ Under-24 Hr logistical dispatches</li>
                      <li>✔ High payload stock inventory depth</li>
                      <li>✔ Technical coaches training lab</li>
                    </ul>
                  </div>
                </div>

              </div>

              {/* Ledger closing banner */}
              <div className="border-t pt-6 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                  ACGR CHANNEL SECURE GUARANTEE
                </span>
                <span>Active Ledger Ref: {new Date().getFullYear()}</span>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
}
