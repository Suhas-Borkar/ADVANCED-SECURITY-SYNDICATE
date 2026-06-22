import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  Search, SlidersHorizontal, ArrowUpRight, Check,
  BookOpen, Star, Building2, ShieldCheck, Mail, Map 
} from "lucide-react";
import { BRANDS, DEALE_REGIONS } from "../data";
import { Brand } from "../types";

interface BrandsViewProps {
  onOpenConsultation: (brandName?: string) => void;
}

export default function BrandsView({ onOpenConsultation }: BrandsViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedState, setSelectedState] = useState("All");

  const categories = ["All", "Camera", "Storage", "Networking", "Telecom", "Accessories"];
  const indianStates = ["All", "Maharashtra", "Gujarat", "Madhya Pradesh", "Chhattisgarh", "Goa"];

  const filteredBrands = BRANDS.filter((b) => {
    const matchesCategory = selectedCategory === "All" || b.category === selectedCategory;
    const matchesSearch = b.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          b.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const filteredDealers = DEALE_REGIONS.filter((d) => {
    return selectedState === "All" || d.state === selectedState;
  });

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* 1. Hero banner */}
      <section className="relative bg-slate-900 py-20 text-white overflow-hidden">
        <div className="absolute inset-0 bg-dot-mesh opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-300">
            AUTHORIZED DISTRIBUTION PORTFOLIO
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-black tracking-tight">
            Powering India's Security <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-sky-300">
              Infrastructure
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-slate-400 text-xs sm:text-sm leading-relaxed">
            Strategic alliances with elite global and domestic manufacturers to ensure guaranteed stock depth, genuine serial identifiers, and direct tech RMA warranty pathways.
          </p>
        </div>
      </section>

      {/* 2. Interactive Brands Catalog with search & tabs */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm space-y-6 mb-12">
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Search inputs */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search authorized brands (e.g. Hikvision, Seagate, Syntel)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-250 focus:border-brand-500 focus:bg-white rounded-xl text-sm font-sans text-slate-800 outline-none transition-all placeholder:text-slate-400"
              />
            </div>

            {/* Quick stats on items */}
            <div className="text-xs font-mono text-slate-500 bg-slate-150 px-3 py-1.5 rounded-lg border border-slate-200 self-start md:self-auto">
              SHOWING <span className="font-bold text-slate-900">{filteredBrands.length}</span> OF <span className="font-bold text-slate-900">{BRANDS.length}</span> BRANDS
            </div>
          </div>

          {/* Categories select tabs pill layout */}
          <div className="flex flex-wrap gap-1.5 border-t border-slate-100 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4.5 py-2 rounded-lg font-sans font-medium text-xs sm:text-sm tracking-wide transition-all ${
                  selectedCategory === cat
                    ? "bg-brand-600 text-white shadow-sm shadow-brand-600/10"
                    : "bg-slate-100 hover:bg-slate-200/80 text-slate-650"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Brand Display Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredBrands.map((brand) => (
            <div 
              key={brand.id}
              className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-6">
                
                {/* Brand Header */}
                <div className="flex items-start justify-between border-b border-slate-100 pb-5">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl bg-slate-50 border border-slate-200 w-14 h-14 rounded-2xl flex items-center justify-center p-2 shadow-sm">
                      {brand.logo}
                    </span>
                    <div>
                      <h3 className="font-display font-black text-xl text-slate-900">
                        {brand.name}
                      </h3>
                      <span className="text-[10px] font-mono text-slate-500 font-bold uppercase block mt-0.5">
                        Established: {brand.foundedYear}
                      </span>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono font-bold tracking-wider px-2.5 py-1 bg-brand-50 text-brand-700 border border-brand-200 rounded-full uppercase">
                    {brand.relationshipType}
                  </span>
                </div>

                {/* Scope & Description */}
                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block">Scope Info</span>
                  <p className="text-slate-600 text-xs sm:text-sm font-sans leading-relaxed">
                    {brand.longDescription}
                  </p>
                </div>

                {/* Featured Products */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block">Distributed Product Categories</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {brand.featuredProducts.map((p, idx) => (
                      <div key={idx} className="p-2.5 bg-slate-50 border border-slate-150 rounded-xl text-xs font-semibold text-slate-700 flex gap-2 items-center">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{p}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Inquiry & CTAs */}
              <div className="border-t border-slate-100 mt-8 pt-6 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase text-slate-400 font-mono">
                  Category: {brand.category}
                </span>

                <button
                  onClick={() => onOpenConsultation(brand.name)}
                  className="px-5 py-2.5 bg-slate-900 hover:bg-brand-600 text-white font-sans font-semibold text-xs rounded-xl shadow transition-colors flex items-center gap-1 group active:scale-95"
                >
                  Direct Inquiry
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>

            </div>
          ))}

          {filteredBrands.length === 0 && (
            <div className="lg:col-span-2 text-center py-20 bg-white border border-slate-205 rounded-3xl space-y-4">
              <Search className="w-12 h-12 text-slate-300 mx-auto" />
              <h4 className="font-display font-bold text-xl text-slate-800">No authorized brands discovered matching criteria.</h4>
              <p className="text-slate-500 text-xs max-w-md mx-auto">Try selecting another product category tab or resetting the search toolbar input query above.</p>
              <button 
                onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-705 text-xs font-bold rounded-lg transition-colors border"
              >
                Reset Filter Settings
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 3. Interactive Regional Distribution Lookup Directory */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-mesh opacity-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 bg-brand-500/15 border border-brand-500/30 text-brand-300 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider">
                <Map className="w-3.5 h-3.5" />
                Regional Partner Registry
              </div>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
                Locate a Nearby Channel partner
              </h2>
              <p className="text-slate-450 text-xs sm:text-sm font-sans leading-relaxed">
                Looking to purchase immediate stock from nearby regional hubs? Scan our network registry of verified regional sub-distributors across West & Central India.
              </p>
            </div>

            {/* Filter Lookup Selector */}
            <div className="lg:col-span-5 space-y-1.5">
              <label className="text-xs font-mono font-bold text-slate-400 block uppercase">
                Filter Dealers By Indian State:
              </label>
              <div className="flex flex-wrap gap-2">
                {indianStates.map((st) => (
                  <button
                    key={st}
                    onClick={() => setSelectedState(st)}
                    className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold tracking-wider transition-colors border ${
                      selectedState === st
                        ? "bg-brand-600 border-brand-500 text-white"
                        : "bg-slate-800 border-slate-710 text-slate-400 hover:text-white"
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Registry list layout table/cards */}
          <div className="bg-slate-850 border border-slate-810 rounded-2xl overflow-hidden shadow-2xl">
            <div className="p-4 bg-slate-800 border-b border-slate-700/80 hidden sm:grid sm:grid-cols-12 text-xs font-mono font-bold text-slate-400 uppercase tracking-widest gap-4">
              <span className="sm:col-span-3">State / City</span>
              <span className="sm:col-span-4">Dealer Name</span>
              <span className="sm:col-span-3">Assigned Area Coverage</span>
              <span className="sm:col-span-2 text-right">RMA Desk Hotline</span>
            </div>

            <div className="divide-y divide-slate-800/60 max-h-[460px] overflow-y-auto">
              {filteredDealers.map((d, index) => (
                <div 
                  key={index} 
                  className="p-5 sm:p-4 grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-4 text-xs sm:text-sm font-sans hover:bg-slate-800/40 transition-colors"
                >
                  {/* State & City column */}
                  <div className="sm:col-span-3 flex sm:flex-col justify-between sm:justify-center border-b sm:border-0 border-slate-800 pb-2 sm:pb-0">
                    <span className="font-mono text-xs text-brand-300 font-bold uppercase sm:tracking-wider">
                      {d.state}
                    </span>
                    <span className="text-white font-bold tracking-tight">
                      {d.city}
                    </span>
                  </div>

                  {/* Dealer corporate title column */}
                  <div className="sm:col-span-4 flex flex-col justify-center">
                    <span className="text-slate-100 font-semibold text-sm">
                      {d.dealerName}
                    </span>
                    <span className="text-slate-500 text-[10px] uppercase font-mono tracking-widest mt-0.5">
                      AUTHORIZED CHANNEL TIER 1
                    </span>
                  </div>

                  {/* Coverage details column */}
                  <div className="sm:col-span-3 flex flex-col justify-center text-slate-350">
                    <span className="text-xs">
                      {d.coverage}
                    </span>
                  </div>

                  {/* Contact column */}
                  <div className="sm:col-span-2 flex items-center justify-between sm:justify-end gap-2 shrink-0">
                    <span className="sm:hidden text-xs text-slate-400 uppercase font-mono">hotline:</span>
                    <span className="font-mono text-brand-300 font-bold text-xs sm:text-sm text-right bg-slate-800 px-3 py-1 sm:p-0 rounded border border-slate-700/60 sm:border-0">
                      {d.contact}
                    </span>
                  </div>

                </div>
              ))}

              {filteredDealers.length === 0 && (
                <div className="text-center py-16 text-slate-500">
                  No active strategic channel sub-distributors registered in this specific region yet. Contact ACGR Corporate headquarters directly.
                </div>
              )}
            </div>
          </div>

          <p className="text-slate-500 text-[10px] font-mono text-center mt-6">
            *SECURE LOGS BULLETIN: Regional dispatches require verified tax registration numbers. Inquire at headquarters to activate reseller billing terms.
          </p>

        </div>
      </section>

    </div>
  );
}
