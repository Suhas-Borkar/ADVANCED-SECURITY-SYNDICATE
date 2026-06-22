"use client";

import { useRouter } from "next/navigation";
import { Shield, Mail, Phone, MapPin, Download, CheckCircle } from "lucide-react";
import { useBrochure } from "@/lib/BrochureContext";

export default function Footer() {
  const router = useRouter();
  const { downloadBrochure } = useBrochure();
  const currentYear = new Date().getFullYear();

  const handleNav = (href: string) => {
    router.push(href);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="relative overflow-hidden bg-brand-900 py-16 px-4 sm:px-6 lg:px-8 border-b border-brand-800">
        <div className="absolute inset-0 bg-grid-mesh opacity-30" />
        <div className="relative max-w-5xl mx-auto text-center">
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            RAISING INDIA'S SURVEILLANCE STANDARDS
          </h2>
          <p className="max-w-2xl mx-auto text-slate-200 text-base sm:text-lg font-sans mb-8 leading-relaxed">
            Partner with India's most agile security distributor. Get immediate access to authorized stock, certified warranties, and expert channel assistance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => handleNav("/contact")}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-slate-900 font-display font-semibold hover:bg-brand-50 transition-all duration-150 shadow-md flex items-center justify-center gap-2"
            >
              Get Started Now
            </button>
            <button
              onClick={downloadBrochure}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-transparent text-white border border-slate-400 hover:border-white hover:bg-white/10 transition-all duration-150 font-display font-semibold flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download Brochure
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-brand-600 text-white p-2 rounded-lg">
                <Shield className="w-5 h-5" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                ACGR India
              </span>
            </div>
            <p className="text-sm text-slate-400 font-sans leading-relaxed">
              Authorized national and regional distributors of world-class security cameras, surveillance storage, telecom EPABX systems, and intelligent active-passive networking gear. Certified since 2021.
            </p>
            <div className="flex items-center gap-2 pt-2 text-slate-200 text-xs font-mono">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              AUTHORIZED CHANNEL DESK SYSTEM
            </div>
          </div>

          <div>
            <h3 className="font-display text-white font-bold text-sm uppercase tracking-wider mb-6">
              Navigation
            </h3>
            <ul className="space-y-3.5 text-sm">
              {[
                { href: "/", label: "Home Base" },
                { href: "/about", label: "About The Company" },
                { href: "/brands", label: "Authorized Brands" },
                { href: "/performance", label: "Dealer Calculation Tools" },
                { href: "/contact", label: "Contact Channel" },
              ].map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => handleNav(item.href)}
                    className="text-slate-400 hover:text-white transition-colors duration-150 font-medium"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-white font-bold text-sm uppercase tracking-wider mb-6">
              Strategic Portfolio
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <span className="text-xs font-semibold uppercase font-mono text-brand-400 block mb-0.5">National Distribution</span>
                Connect-G • Syntel • Cofe Routers
              </li>
              <li>
                <span className="text-xs font-semibold uppercase font-mono text-brand-400 block mb-0.5">Regional Distribution</span>
                Hikvision • Prama Cameras • Seagate SkyHawk
              </li>
              <li>
                <span className="text-xs font-semibold uppercase font-mono text-brand-400 block mb-0.5">Core Categories</span>
                CCTV Systems • Surveillance Storage • Active-Passive LAN • Optical Fiber Gear
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-white font-bold text-sm uppercase tracking-wider mb-6">
              Headquarters
            </h3>
            <ul className="space-y-4 text-sm font-sans text-slate-400">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                <span>ACGR India Building, Corporate Central Zone, Maharashtra, India.</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-500 shrink-0" />
                <span>+91 91580 XXXXX / +91 94222 XXXXX</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-500 shrink-0" />
                <span className="break-all">info@acgr.in / sales@acgr.in</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {currentYear} ACGR India Private Limited. All Rights Reserved. Engineered for Security.
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
              100% Genuine Stock Certified
            </span>
            <span>CIN: U31909MH2021PTCXXXXXX</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
