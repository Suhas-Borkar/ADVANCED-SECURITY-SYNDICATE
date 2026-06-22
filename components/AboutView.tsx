"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import {
  Trophy, Milestone, Award, ShieldAlert, HeartHandshake, Mail
} from "lucide-react";
import { LEADERSHIP } from "@/lib/data";

export default function AboutView() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"vision" | "timeline" | "compliance">("vision");

  const impactStats = [
    { value: "40+", label: "Regional Hub Cities", desc: "Active bulk storage dispatches across India" },
    { value: "5000+", label: "Retailers Activated", desc: "Certified sub-dealers and high-street shops" },
    { value: "₹250+ Cr", label: "Financial Turnovers", desc: "Business transacted since 2021 launch" },
    { value: "10+", label: "Strategic Brands", desc: "Top global IoT and storage partners" },
  ];

  const milestones = [
    { year: "2021", title: "Corporate Inception", desc: "Incorporated ACGR India with a central office in Maharashtra, setting up foundational regional partnerships for Hikvision and Prama." },
    { year: "2022", title: "National Alliances Partner", desc: "Acquired National Authorized Distributor titles for Connect-G active accessories and Syntel digital EPABX telecom servers." },
    { year: "2023", title: "Frictionless Cargo Hubs", desc: "Secured our master warehouse hub expanding same-day dispatches & setting up direct local product warranty and diagnostics desk." },
    { year: "2024", title: "5k Dealer Network Milestone", desc: "Reached 5,000+ active retail integrations and extended network coverage to Chhattisgarh, Gujarat, and Goa." },
    { year: "2026", title: "Smart AI IoT Surges", desc: "Began deploying smart AI analytics processors, massive-scale Seagate SkyHawk diagnostics integration, and customized municipal surveillance tenders." },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">

      <section className="relative bg-slate-900 py-24 overflow-hidden text-center text-white">
        <div className="absolute inset-0 bg-grid-mesh opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-1 bg-white/10 px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider text-brand-300 uppercase mb-4"
          >
            <Trophy className="w-3.5 h-3.5" />
            Establishment Impact Report
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl font-black tracking-tight"
          >
            Regional Electronic Security <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-sky-300">
              Distributor Since 2021
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto mt-6 text-slate-300 font-sans text-sm sm:text-base leading-relaxed"
          >
            ACGR India was founded with a singular conviction: to establish a modern, transparent, and frictionless security hardware supply-chain across India.
          </motion.p>
        </div>
      </section>

      <section className="relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xl p-8 sm:p-12">
          <div className="text-center mb-10">
            <span className="font-mono text-xs font-bold text-slate-400 tracking-wider uppercase block">
              ACGR INDIA METRICS
            </span>
            <h3 className="font-display font-bold text-2xl text-slate-900 mt-1">
              Growth By The Numbers
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, idx) => (
              <div key={idx} className="p-6 bg-slate-50 border border-slate-200/60 rounded-2xl flex flex-col justify-between">
                <div>
                  <span className="block font-mono text-3xl sm:text-4xl font-black text-brand-600 tracking-tight">
                    {stat.value}
                  </span>
                  <span className="block font-display font-extrabold text-slate-900 text-sm tracking-wide uppercase mt-2">
                    {stat.label}
                  </span>
                </div>
                <p className="text-slate-500 text-xs font-sans mt-3">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex border-b border-slate-200 mb-12 justify-center">
          {[
            { id: "vision", label: "Core Vision & Focus", icon: Milestone },
            { id: "timeline", label: "Our Active Timeline", icon: Milestone },
            { id: "compliance", label: "Ethics & Compliance", icon: Award },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as "vision" | "timeline" | "compliance")}
                className={`py-4 px-4 sm:px-8 font-display font-bold text-sm tracking-wide border-b-2 transition-all flex items-center gap-2 ${
                  activeTab === tab.id
                    ? "border-brand-600 text-brand-700"
                    : "border-transparent text-slate-500 hover:text-slate-900"
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {activeTab === "vision" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center animate-fade-in">
            <div className="space-y-6">
              <h3 className="font-display font-extrabold text-2xl text-slate-900">
                Pioneering Next-Gen Distribution Channels
              </h3>
              <p className="text-slate-600 font-sans text-sm leading-relaxed">
                Most surveillance distributors act purely as paper commodity brokers. At ACGR, we believe distribution requires active technical value injection.
              </p>
              <p className="text-slate-600 font-sans text-sm leading-relaxed">
                By maintaining highly organized testing labs in Maharashtra, we diagnostic-screen critical firmware updates, conduct hardware burn-in benchmarks, and package complete passive assembly systems for field deployment.
              </p>
              <div className="space-y-3 pt-2">
                {[
                  "Active dealer credit assistance packages",
                  "Direct product RMA swap guarantees under 72 Hrs",
                  "Field tender specification draft support"
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-2 items-center text-slate-800 text-xs font-semibold">
                    <HeartHandshake className="w-4 h-4 text-brand-600 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-brand-600 to-indigo-800 p-8 rounded-3xl text-white space-y-6 shadow-lg shadow-brand-900/10">
              <span className="text-xs font-mono uppercase bg-white/20 text-brand-100 px-2 py-0.5 rounded font-bold">
                The ACGR Guarantee
              </span>
              <h4 className="font-display font-black text-xl">"Zero Failure Shipments"</h4>
              <p className="text-sm font-sans font-light leading-relaxed text-slate-200">
                We know that security hardware failures at client installation sites halt security personnel, cause operational legal liability, and erode system integrator trust. That is why our dispatches adhere to rigorous zero-defect targets.
              </p>
              <div className="p-4 bg-white/10 rounded-xl border border-white/15 flex justify-between items-center text-xs font-mono">
                <span>RMA Rate (2023-2026):</span>
                <span className="font-bold text-emerald-300">&lt; 0.12%</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === "timeline" && (
          <div className="relative border-l border-slate-200 ml-4 pl-8 space-y-12 animate-fade-in py-4">
            {milestones.map((st, sIdx) => (
              <div key={sIdx} className="relative group">
                <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-white border-4 border-brand-600 group-hover:bg-brand-500 transition-colors" />
                <span className="inline-block font-mono text-sm font-black text-brand-600 bg-brand-50 px-2.5 py-0.5 rounded mb-2">
                  {st.year}
                </span>
                <h4 className="font-display font-extrabold text-lg text-slate-900">{st.title}</h4>
                <p className="text-slate-500 text-xs sm:text-sm font-sans leading-relaxed mt-1 max-w-3xl">{st.desc}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "compliance" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 animate-fade-in">
            <div className="border border-slate-200 p-6 rounded-2xl bg-white space-y-4">
              <div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center border border-orange-100">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h4 className="font-display font-bold text-lg text-slate-900">Cybersecurity Compliance</h4>
              <p className="text-slate-500 text-xs sm:text-sm font-sans leading-relaxed">
                All cameras, NVRs, and active networking elements distributed by ACGR comply with strict secure local regulatory guidelines. We prioritize NDAA compliant cameras, secure Indian firmware arrays, and encrypted storage media.
              </p>
            </div>
            <div className="border border-slate-200 p-6 rounded-2xl bg-white space-y-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="font-display font-bold text-lg text-slate-900">Transparent Channel Model</h4>
              <p className="text-slate-500 text-xs sm:text-sm font-sans leading-relaxed">
                We maintain an authentic, 100% channel-loyal policy. ACGR India never quotes against standard registered dealers or contracts directly with consumer end-users, safeguarding our partner's contract margins.
              </p>
            </div>
          </div>
        )}
      </section>

      <section className="py-24 bg-slate-100 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold text-brand-600 uppercase tracking-widest block">
              ACGR INDIA DIRECTORS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
              The Leadership Team
            </h2>
            <p className="text-slate-500 text-sm font-sans mt-3">
              Steered by seasoned industry veterans providing decades of accumulative security, logistics and enterprise telecom distribution wisdom.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {LEADERSHIP.map((leader) => (
              <div
                key={leader.id}
                className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="aspect-square bg-slate-100 overflow-hidden relative">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover object-top transition-transform duration-350 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://picsum.photos/seed/${leader.id}/400/400`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <span className="text-xs font-mono text-brand-300 font-bold">ACGR EXECUTIVE LEADERSHIP</span>
                  </div>
                </div>
                <div className="p-6 space-y-3.5">
                  <div>
                    <h3 className="font-display font-black text-xl text-slate-900">{leader.name}</h3>
                    <p className="text-xs font-mono text-brand-600 font-bold uppercase mt-0.5">{leader.role}</p>
                  </div>
                  <p className="text-slate-500 text-xs sm:text-sm font-sans leading-relaxed">{leader.bio}</p>
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400">CONTACT DIAL:</span>
                    <a
                      href={`mailto:${leader.email}`}
                      className="text-brand-600 hover:text-brand-700 font-bold flex items-center gap-1"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      {leader.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h3 className="font-display text-2xl sm:text-3xl font-black text-slate-900">
          Ready to Work with Us?
        </h3>
        <p className="text-slate-500 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
          Open a verified channel dealership account today and secure special bulk pricing terms, certified training, and prompt diagnostics logs.
        </p>
        <button
          onClick={() => router.push("/contact")}
          className="px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white font-display font-semibold rounded-xl text-sm transition-all shadow"
        >
          Open a Channel Account
        </button>
      </section>

    </div>
  );
}
