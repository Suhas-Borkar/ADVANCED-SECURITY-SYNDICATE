"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import {
  Trophy, Milestone, Award, ShieldAlert, HeartHandshake
} from "lucide-react";

export default function AboutView() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"vision" | "timeline" | "compliance">("vision");

  const impactStats = [
    { value: "15+ Cities", label: "Pan-India Coverage", desc: "Serving system integrators across Maharashtra & beyond" },
    { value: "5+ Years", label: "Industry Experience", desc: "Trusted security distributor since 2021" },
    { value: "11+", label: "Strategic Brands", desc: "CP Plus, Seagate, D-Link, TP-Link & more" },
    { value: "Top #10", label: "Regional Distributor", desc: "Surveillance distributor ranking in India" },
  ];

  const milestones = [
    { year: "2021", title: "Company Founded", desc: "Advanced Security Syndicate established in Pune, Maharashtra — supplying CCTV cameras, recorders, storage media and accessories to channel partners across the region." },
    { year: "FY 2024–25", title: "Strong Market Entry", desc: "Completed first reported financial year. CP Plus emerged as top-selling brand, followed by Seagate — establishing a strong foundation for growth." },
    { year: "FY 2025–26", title: "Major Brand Expansion", desc: "Significant growth achieved across the network. Expanded brand portfolio to include D-Link, Zebion, iVOOMi, Prama, and Honeywell alongside existing partners." },
    { year: "2026–27", title: "Ambitious Growth Targets", desc: "Targeting substantial expansion for FY 2026–27, with CP Plus and Seagate leading growth across new regions and dealer segments." },
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
            Certified Security Solutions <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-accent-400">
              by Advanced Security Syndicate
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto mt-6 text-slate-300 font-sans text-sm sm:text-base leading-relaxed"
          >
            Advanced Security Syndicate is a regional distributor of electronic security and surveillance solutions in India. Since 2021, we have supplied CCTV cameras, recorders, storage media and accessories to channel partners, distributors and enterprise buyers across the region.
          </motion.p>
        </div>
      </section>

      <section className="relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xl p-8 sm:p-12">
          <div className="text-center mb-10">
            <span className="font-mono text-xs font-bold text-slate-400 tracking-wider uppercase block">
              ADVANCED SECURITY SYNDICATE — METRICS
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

      {/* Company Performance */}
      <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-grid-mesh opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-mono font-bold text-brand-400 uppercase tracking-widest block mb-2">
              OUR REACH & NETWORK
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
              Reach By The Numbers
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Coverage cards */}
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="flex-1 bg-white/5 border border-white/10 rounded-3xl p-8 text-center">
                <p className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-3">Brand Partners</p>
                <p className="font-display font-black text-4xl sm:text-5xl text-white">11+</p>
                <p className="text-slate-400 text-xs font-sans mt-3">Authorized manufacturers</p>
              </div>
              <div className="flex flex-col items-center gap-1 shrink-0">
                <div className="text-accent-400 font-black text-2xl">›</div>
                <div className="text-accent-400 font-black text-2xl">›</div>
                <div className="text-accent-400 font-black text-2xl">›</div>
                <span className="text-xs font-mono text-accent-400 font-bold mt-1">Growing</span>
              </div>
              <div className="flex-1 bg-brand-600/20 border border-brand-500/40 rounded-3xl p-8 text-center ring-1 ring-brand-500/30">
                <p className="text-xs font-mono text-brand-300 uppercase tracking-widest mb-3">City Coverage</p>
                <p className="font-display font-black text-4xl sm:text-5xl text-white">15+</p>
                <p className="text-brand-300 text-xs font-sans mt-3">Cities across India</p>
              </div>
            </div>

            {/* Text content */}
            <div className="space-y-8">
              <div className="space-y-3">
                <h3 className="font-display font-bold text-lg text-accent-400">Expanding Network</h3>
                <p className="text-slate-300 font-sans text-sm leading-relaxed">
                  Since 2021, Advanced Security Syndicate has steadily grown its network of authorized brand partnerships and regional presence — serving system integrators and dealers across Maharashtra and beyond.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="font-display font-bold text-lg text-accent-400">Partner-First Approach</h3>
                <p className="text-slate-300 font-sans text-sm leading-relaxed">
                  Our growth reflects a commitment to channel partner success — offering certified products, genuine stock, same-day dispatches, and dedicated technical support at every step.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-2">
                {[
                  { label: "Brands", value: "11+" },
                  { label: "Cities", value: "15+" },
                  { label: "Ranking", value: "Top #10" },
                ].map((m) => (
                  <div key={m.label} className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
                    <span className="block font-mono font-black text-2xl text-brand-400">{m.value}</span>
                    <span className="block text-xs font-sans text-slate-400 mt-1">{m.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Standing */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div>
            <span className="text-xs font-mono font-bold text-brand-600 uppercase tracking-widest block mb-3">
              COMPETITIVE STANDING
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900">
              Our Numbers Tell the Story
            </h2>
          </div>
          <p className="text-slate-600 font-sans text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            At <span className="font-bold text-slate-900">Advanced Security Syndicate</span>, our numbers tell the story of our growth. We are proud to be ranked among the{" "}
            <span className="font-bold text-brand-600">Top #10 Surveillance Distributors</span> region-wise, serving a vast network of partners across the region. We remain the preferred choice for cutting-edge security solutions and reliable distribution.
          </p>
          <div className="flex flex-wrap justify-center gap-6 pt-4">
            {[
              { value: "Top #10", label: "Regional Distributor Ranking" },
              { value: "15+ Cities", label: "Pan-India Coverage" },
              { value: "5+ Years", label: "In the Industry" },
              { value: "11+", label: "Brand Alliances" },
            ].map((item) => (
              <div key={item.label} className="bg-brand-50 border border-brand-200 rounded-2xl px-8 py-5 text-center min-w-[140px]">
                <span className="block font-mono font-black text-3xl text-brand-700">{item.value}</span>
                <span className="block text-xs font-sans text-slate-500 mt-1.5 font-medium">{item.label}</span>
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
                Pioneering Next-Gen Security Solutions
              </h3>
              <p className="text-slate-600 font-sans text-sm leading-relaxed">
                Most security providers operate as simple resellers. At Advanced Security Syndicate, we believe every solution requires active technical value — precision engineering, not just product delivery.
              </p>
              <p className="text-slate-600 font-sans text-sm leading-relaxed">
                By maintaining highly organized testing labs, we diagnostic-screen critical firmware updates, conduct hardware burn-in benchmarks, and deploy complete, field-ready security systems.
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
            <div className="bg-gradient-to-br from-brand-700 to-brand-900 p-8 rounded-3xl text-white space-y-6 shadow-lg shadow-brand-900/10">
              <span className="text-xs font-mono uppercase bg-white/20 text-brand-100 px-2 py-0.5 rounded font-bold">
                The A.S.S. Guarantee
              </span>
              <h4 className="font-display font-black text-xl">"Zero Failure. Zero Compromise."</h4>
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

      <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h3 className="font-display text-2xl sm:text-3xl font-black text-slate-900">
          Ready to Work with Us?
        </h3>
        <p className="text-slate-500 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
          Connect with Advanced Security Syndicate today to get premium security solutions, certified products, and dedicated technical support for your project.
        </p>
        <button
          onClick={() => router.push("/contact")}
          className="px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white font-display font-semibold rounded-xl text-sm transition-all shadow"
        >
          Get in Touch
        </button>
      </section>

    </div>
  );
}
