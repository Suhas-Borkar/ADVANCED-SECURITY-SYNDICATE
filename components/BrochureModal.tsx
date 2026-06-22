"use client";

import { Printer, Shield, CheckCircle } from "lucide-react";
import { useBrochure } from "@/lib/BrochureContext";

export default function BrochureModal() {
  const { brochureOpen, closeBrochure } = useBrochure();

  if (!brochureOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl border border-slate-200 w-full max-w-3xl overflow-hidden shadow-2xl animate-scale-up print:p-0 print:border-0 print:shadow-none">

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
              onClick={closeBrochure}
              className="p-1 px-2 text-slate-400 hover:text-white rounded bg-slate-850 hover:bg-slate-800 text-xs font-bold transition-colors"
            >
              Close
            </button>
          </div>
        </div>

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

              <div className="space-y-3 p-5 bg-emerald-50/30 rounded-2xl border border-emerald-100">
                <span className="text-xs font-mono font-bold text-emerald-850 uppercase tracking-widest block">Distribution focus</span>
                <ul className="space-y-1.5 text-xs">
                  <li>✔ Direct authorized warranties channel</li>
                  <li>✔ Under-24 Hr logistical dispatches</li>
                  <li>✔ High payload stock inventory depth</li>
                  <li>✔ Technical coaches training lab</li>
                </ul>
              </div>
            </div>
          </div>

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
  );
}
