"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import {
  ShieldCheck, Award, Zap, Truck, Users, Activity,
  ChevronRight, ArrowUpRight, FileDown, Stars
} from "lucide-react";
import { BRANDS, SERVICES, TESTIMONIALS } from "@/lib/data";
import { Brand } from "@/lib/types";
import { useBrochure } from "@/lib/BrochureContext";

export default function HomeView() {
  const router = useRouter();
  const { downloadBrochure } = useBrochure();
  const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { value: "₹168 Cr+", label: "Revenue FY 2025–26", sub: "6× growth in two fiscal years" },
    { value: "11+", label: "Brand Partnerships", sub: "Regional distribution alliances" },
    { value: "Top #10", label: "Surveillance Distributor", sub: "Ranked region-wise in India" },
    { value: "Since 2021", label: "Established & Growing", sub: "₹27 Cr → ₹168 Cr in 2 years" },
  ];

  return (
    <div className="bg-slate-50 relative">
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/acgr_hero_surveillance_1782124477760.jpg"
            alt="ACGR India Surveillance Hero"
            title="Advanced Security Syndicate — Security & Surveillance Distributor"
            className="w-full h-full object-cover object-center opacity-40 scale-105 filter saturate-[0.8] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-grid-mesh opacity-25" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-brand-500/10 border border-brand-500/30 text-brand-400 px-3 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
              Certified Security Solutions Provider
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-[1.1]"
            >
              Your Trusted Security <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-accent-400">
                & Surveillance Partner
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed font-sans font-light"
            >
              Advanced Security Syndicate connects premium global manufacturers with local system integrators — delivering secure logistics, certified warranties, and expert technical training.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <button
                onClick={() => router.push("/contact")}
                className="px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white font-display font-semibold rounded-xl text-base shadow-lg shadow-brand-600/20 hover:shadow-brand-500/30 transition-all duration-150 flex items-center justify-center gap-2 active:scale-[0.98]"
              >
                Connect to an Expert
                <ChevronRight className="w-5 h-5" />
              </button>
              <button
                onClick={downloadBrochure}
                className="px-8 py-4 bg-slate-905/30 hover:bg-white/10 text-white border border-slate-700 rounded-xl font-display font-semibold transition-all duration-150 flex items-center justify-center gap-2"
              >
                <FileDown className="w-5 h-5 text-slate-400" />
                Download Brochure
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Stats Dashboard */}
      <section className="relative z-20 -mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl shadow-slate-900/10 border border-slate-200/80 p-6 sm:p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 lg:divide-x divide-slate-100">
          {stats.map((stat, idx) => (
            <div key={idx} className="pt-6 sm:pt-0 lg:px-6 first:pt-0 first:pl-0">
              <span className="block font-mono text-3xl sm:text-4xl font-extrabold text-brand-700 tracking-tight">
                {stat.value}
              </span>
              <span className="block font-display font-bold text-slate-900 text-sm tracking-wide uppercase mt-1">
                {stat.label}
              </span>
              <span className="block text-xs font-sans text-slate-500 mt-1">
                {stat.sub}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. About section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-600 font-mono bg-brand-50 px-2.5 py-1 rounded">
              Established 2021
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
              Advanced Security Solutions for a Safer Tomorrow
            </h2>
            <p className="text-base text-slate-600 font-sans leading-relaxed">
              Advanced Security Syndicate was built to meet the growing demand for specialized, smart surveillance and security solutions — expanding from targeted projects into a comprehensive security ecosystem.
            </p>
            <p className="text-base text-slate-600 font-sans leading-relaxed">
              We stand apart through robust physical stock availability, eliminating standard shipment backlogs, and offering local diagnostics, warranty replacements, and dedicated partner support.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                "100% genuine guaranteed stock",
                "Frictionless billing, same-day dispatches",
                "Direct manufacturer authorized warranty",
                "Advanced integration training courses"
              ].map((text, index) => (
                <div key={index} className="flex gap-2.5 items-start">
                  <div className="bg-emerald-50 text-emerald-600 p-1 rounded-full shrink-0 border border-emerald-200 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-semibold text-slate-700 leading-snug">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="absolute inset-0 bg-brand-600/5 rounded-3xl blur-xl" />
            <div className="relative bg-white border border-slate-200 p-8 rounded-3xl shadow-lg space-y-6">
              <div className="flex items-center gap-4 border-b border-slate-100 pb-6">
                <div className="bg-slate-100 p-3 rounded-2xl text-slate-800">
                  <Award className="w-8 h-8 text-brand-600" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg text-slate-900">Certified Security Provider Seal</h4>
                  <p className="text-xs font-mono text-slate-500">CERTIFICATE NO: ASS-SEC2024A</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-brand-50/50 rounded-xl border border-brand-100 flex justify-between items-center">
                  <div>
                    <span className="block text-xs font-mono text-brand-800 font-bold uppercase">Direct Brand Access</span>
                    <span className="text-sm text-slate-700 font-medium font-sans">Authorized Partner — CP Plus & Prizor</span>
                  </div>
                  <span className="text-xs bg-brand-600 text-white font-mono px-2 py-0.5 rounded font-medium">VERIFIED</span>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/65 flex justify-between items-center">
                  <div>
                    <span className="block text-xs font-mono text-slate-500 font-bold uppercase">Corporate Logistics</span>
                    <span className="text-sm text-slate-700 font-medium font-sans">Centralized Hub Dispatches within 24 Hrs</span>
                  </div>
                  <span className="text-xs bg-slate-800 text-slate-100 font-mono px-2 py-0.5 rounded font-medium">99.8% OTD</span>
                </div>
              </div>
              <button
                onClick={() => router.push("/about")}
                className="w-full py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-850 font-display font-semibold rounded-xl text-sm transition-all duration-150 flex items-center justify-center gap-2 group"
              >
                Learn More About Our Journey
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Brand Ticker */}
      <section className="py-12 bg-white border-y border-slate-200 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <span className="text-xs font-mono font-bold tracking-widest text-slate-400 uppercase">
              AUTHORIZED DISTRIBUTION SYSTEM & NETWORK
            </span>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
            {BRANDS.map((brand) => (
              <div
                key={brand.id}
                onClick={() => setSelectedBrand(brand)}
                className="flex flex-col items-center gap-4 bg-white hover:bg-brand-50 border border-slate-200/80 hover:border-brand-300 hover:shadow-md p-2 rounded-2xl cursor-pointer transition-all duration-200 group shadow-sm"
              >
                <div className="w-full h-30 flex items-center justify-center">
                  {brand.image ? (
                    <img src={brand.image} alt={brand.name} title={brand.name} className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-200" />
                  ) : (
                    <span className="text-5xl group-hover:scale-110 transition-transform">{brand.logo}</span>
                  )}
                </div>
                <span className="font-display font-semibold text-slate-700 text-sm text-center leading-tight">{brand.name}</span>
              </div>
            ))}
          </div>
          {/* <p className="text-center text-xs text-slate-500 font-sans mt-4">
            *Click on any strategic brand logo to view certified product catalogs and regional distributor roles.
          </p> */}
        </div>
      </section>

      {/* 5. Services */}
      <section className="py-24 bg-slate-100/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold text-brand-600 uppercase tracking-widest">
              Certified Services
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
              Our Core Authorized Portfolio
            </h2>
            <p className="text-slate-500 text-sm sm:text-base font-sans mt-3">
              Providing holistic supply solutions. We distribute only highest quality networking elements, hardware security cameras, and storage systems.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((serv) => (
              <div
                key={serv.id}
                className="bg-white border border-slate-150 rounded-2xl p-6 sm:p-8 hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 mb-6 group-hover:bg-brand-600 group-hover:text-white transition-all duration-350">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-extrabold text-xl text-slate-900 mb-3 group-hover:text-brand-700 transition-colors">
                    {serv.title}
                  </h3>
                  <p className="text-slate-500 text-sm font-sans leading-relaxed mb-6">{serv.description}</p>
                  <ul className="space-y-2.5 mb-8">
                    {serv.features.map((feat, fi) => (
                      <li key={fi} className="flex gap-2 text-slate-700 text-xs font-medium font-sans items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={() => router.push("/contact")}
                  className="w-full py-3 bg-slate-50 hover:bg-brand-50 text-slate-700 hover:text-brand-800 border border-slate-200 hover:border-brand-300 font-display font-semibold rounded-xl text-xs transition-colors duration-150 flex items-center justify-center gap-1.5"
                >
                  Request Customized Quotation
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Why ACGR */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16 items-end">
          <div className="lg:col-span-2 space-y-4">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-brand-600">
              TRUSTED ENGAGEMENTS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900">
              What Sets Advanced Security Syndicate Apart?
            </h2>
            <p className="text-slate-500 text-sm sm:text-base font-sans">
              Outstanding growth built on reliable delivery, genuine products, and authentic commercial partnerships.
            </p>
          </div>
          <div className="text-left lg:text-right">
            <button
              onClick={() => router.push("/performance")}
              className="inline-flex items-center gap-2 bg-slate-900 text-white font-sans font-semibold text-sm px-5 py-3 rounded-lg hover:bg-brand-600 transition-all shadow shadow-slate-900/10"
            >
              Access Dealer Tools
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Trusted Partnerships", desc: "Collaborations built directly with manufacturer global leaders to safeguard channel tier pricing.", icon: Users },
            { title: "Unmatched Quality", desc: "Rigorous diagnostic testing of all passive networks, optical patches and telemetry camera components.", icon: ShieldCheck },
            { title: "Expert Support", desc: "Technical engineers on standby 24/7 assisting systems integrators with custom tenders.", icon: Activity },
            { title: "Nationwide Reach", desc: "Immediate active dispatches across Maharashtra, Gujarat, Madhya Pradesh, Chhattisgarh & Goa.", icon: Truck },
            { title: "Latest Innovations", desc: "Continuous introduction of new AI Smart Cameras, massive storage solutions, and LTE routers.", icon: Zap },
            { title: "Agile Supply Chain", desc: "Extensively stocked logistics hubs eradicating lead-times, supporting credit terms for certified partners.", icon: Award },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200/85 hover:border-slate-300 p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 space-y-4"
              >
                <div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center border border-orange-100">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="font-display font-bold text-lg text-slate-900">{item.title}</h4>
                <p className="text-slate-500 text-xs sm:text-sm font-sans leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 7. Distribution Flow */}
      <section className="py-24 bg-slate-900 text-slate-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-mesh opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold text-brand-400 tracking-widest uppercase">
              DISTRIBUTION WORKFLOW
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Seamless Supply Flow
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-3">
              Providing frictionless logistical coordination from manufacturing factories straight to your regional project site.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {[
              { step: "01", label: "Source Directly", desc: "Volume contracts with CP Plus, Seagate, Syntel, D-Link, TP-Link, iVOOMi and other brand principals." },
              { step: "02", label: "Stocked Locally", desc: "Inventory housed in our Pune-based hub, enabling rapid fulfilment across Maharashtra and beyond." },
              { step: "03", label: "Fast Regional Delivery", desc: "Same-day dispatch via express cargo directly to channel partners, dealers, and system integrators." },
            ].map((step, sIdx) => (
              <div
                key={sIdx}
                className="relative bg-slate-850 border border-slate-800 p-6 sm:p-8 rounded-2xl text-center z-10"
              >
                <div className="w-12 h-12 rounded-full bg-brand-600 text-white font-mono font-bold text-lg flex items-center justify-center mx-auto mb-6 shadow-lg shadow-brand-600/10">
                  {step.step}
                </div>
                <h4 className="font-display font-extrabold text-lg text-white mb-2">{step.label}</h4>
                <p className="text-slate-400 text-xs sm:text-sm font-sans leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Testimonials */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-brand-900 to-brand-700 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-grid-mesh opacity-10" />
          <Stars className="absolute right-8 top-8 w-12 h-12 text-brand-400/20" />
          <div className="relative max-w-3xl">
            <span className="text-xs font-mono font-bold tracking-widest text-brand-300 uppercase">
              DEALER TESTIMONIALS
            </span>
            <div className="mt-8 min-h-[140px] flex items-center">
              <div>
                <p className="text-lg sm:text-xl font-sans font-light italic leading-relaxed text-slate-100">
                  "{TESTIMONIALS[currentTestimonialIndex].content}"
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-500 font-display font-medium text-white flex items-center justify-center">
                    {TESTIMONIALS[currentTestimonialIndex].name[0]}
                  </div>
                  <div>
                    <h5 className="font-display font-bold text-sm text-white">
                      {TESTIMONIALS[currentTestimonialIndex].name}
                    </h5>
                    <p className="text-xs text-brand-200">
                      {TESTIMONIALS[currentTestimonialIndex].role}, {TESTIMONIALS[currentTestimonialIndex].company} • {TESTIMONIALS[currentTestimonialIndex].location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-2 mt-8">
              {TESTIMONIALS.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setCurrentTestimonialIndex(dotIdx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-150 ${
                    currentTestimonialIndex === dotIdx ? "bg-brand-400 w-6" : "bg-white/35"
                  }`}
                  aria-label={`Go to testimonial ${dotIdx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brand Detail Modal */}
      {selectedBrand && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl border border-slate-200 w-full max-w-2xl overflow-hidden shadow-2xl animate-scale-up">
            <div className="p-6 bg-slate-900 text-white flex justify-between items-center relative">
              <div className="flex items-center gap-3">
                <div className="w-16 h-10 bg-white rounded-xl flex items-center justify-center p-1.5 shrink-0">
                  {selectedBrand.image ? (
                    <img src={selectedBrand.image} alt={selectedBrand.name} title={selectedBrand.name} className="w-full h-full object-contain" />
                  ) : (
                    <span className="text-2xl">{selectedBrand.logo}</span>
                  )}
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl">{selectedBrand.name}</h3>
                  <span className="text-[10px] font-mono text-brand-300 tracking-wider font-semibold uppercase">
                    {selectedBrand.relationshipType}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedBrand(null)}
                className="p-1 px-2 text-slate-400 hover:text-white rounded bg-slate-800 transition-colors"
              >
                Close
              </button>
            </div>
            <div className="p-8 space-y-6">
              <div>
                <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wide">Brand Summary</span>
                <p className="text-slate-600 font-sans text-sm mt-1 leading-relaxed">{selectedBrand.description}</p>
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wide">Operational Scale</span>
                <p className="text-slate-700 font-sans text-sm mt-1 leading-relaxed">{selectedBrand.longDescription}</p>
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wide">Distributed Featured Products</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                  {selectedBrand.featuredProducts.map((p, idx) => (
                    <div key={idx} className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-sans text-slate-700 flex gap-2 items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0" />
                      {p}
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500">
                  Partnership established: {selectedBrand.foundedYear}
                </span>
                <button
                  onClick={() => {
                    setSelectedBrand(null);
                    router.push(`/contact?brand=${encodeURIComponent(selectedBrand.name)}`);
                  }}
                  className="px-5 py-2.5 bg-brand-600 hover:bg-brand-500 text-white font-sans font-semibold text-xs rounded-xl shadow transition-colors"
                >
                  Direct Inquiry for {selectedBrand.name}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
