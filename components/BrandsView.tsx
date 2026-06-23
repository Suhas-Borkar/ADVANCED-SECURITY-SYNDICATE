"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Search, ArrowUpRight, Check
} from "lucide-react";
import { BRANDS } from "@/lib/data";

export default function BrandsView() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const categories = ["All", "Camera", "Storage", "Networking", "Telecom", "Accessories"];

  const filteredBrands = BRANDS.filter((b) => {
    const matchesCategory = selectedCategory === "All" || b.category === selectedCategory;
    const matchesSearch =
      b.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-slate-50 min-h-screen">

      <section className="relative bg-slate-900 py-20 text-white overflow-hidden">
        <div className="absolute inset-0 bg-dot-mesh opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-300">
            AUTHORIZED DISTRIBUTION PORTFOLIO
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-black tracking-tight">
            Powering India's Security <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-accent-400">
              Infrastructure
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-slate-400 text-xs sm:text-sm leading-relaxed">
            Strategic alliances with elite global and domestic manufacturers to ensure guaranteed stock depth, genuine serial identifiers, and direct tech RMA warranty pathways.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm space-y-6 mb-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search authorized brands (e.g. Hikvision, Seagate, Syntel)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 focus:border-brand-500 focus:bg-white rounded-xl text-sm font-sans text-slate-800 outline-none transition-all placeholder:text-slate-400"
              />
            </div>
            <div className="text-xs font-mono text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 self-start md:self-auto">
              SHOWING <span className="font-bold text-slate-900">{filteredBrands.length}</span> OF{" "}
              <span className="font-bold text-slate-900">{BRANDS.length}</span> BRANDS
            </div>
          </div>
          <div className="flex flex-wrap gap-1.5 border-t border-slate-100 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg font-sans font-medium text-xs sm:text-sm tracking-wide transition-all ${
                  selectedCategory === cat
                    ? "bg-brand-600 text-white shadow-sm shadow-brand-600/10"
                    : "bg-slate-100 hover:bg-slate-200/80 text-slate-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredBrands.map((brand) => (
            <div
              key={brand.id}
              className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="flex items-start justify-between border-b border-slate-100 pb-5">
                  <div className="flex items-center gap-4">
                    <div className="bg-white border border-slate-200 w-24 h-16 rounded-2xl flex items-center justify-center p-2.5 shadow-sm overflow-hidden shrink-0">
                      {brand.image ? (
                        <img src={brand.image} alt={brand.name} className="w-full h-full object-contain" />
                      ) : (
                        <span className="text-4xl">{brand.logo}</span>
                      )}
                    </div>
                    <div>
                      <h3 className="font-display font-black text-xl text-slate-900">{brand.name}</h3>
                      <span className="text-[10px] font-mono text-slate-500 font-bold uppercase block mt-0.5">
                        Established: {brand.foundedYear}
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold tracking-wider px-2.5 py-1 bg-brand-50 text-brand-700 border border-brand-200 rounded-full uppercase">
                    {brand.relationshipType}
                  </span>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block">Scope Info</span>
                  <p className="text-slate-600 text-xs sm:text-sm font-sans leading-relaxed">{brand.longDescription}</p>
                </div>

                <div className="space-y-3 pt-2">
                  <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block">Distributed Product Categories</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {brand.featuredProducts.map((p, idx) => (
                      <div key={idx} className="p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 flex gap-2 items-center">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-100 mt-8 pt-6 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase text-slate-400 font-mono">
                  Category: {brand.category}
                </span>
                <button
                  onClick={() => router.push(`/contact?brand=${encodeURIComponent(brand.name)}`)}
                  className="px-5 py-2.5 bg-slate-900 hover:bg-brand-600 text-white font-sans font-semibold text-xs rounded-xl shadow transition-colors flex items-center gap-1 group active:scale-95"
                >
                  Direct Inquiry
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}

          {filteredBrands.length === 0 && (
            <div className="lg:col-span-2 text-center py-20 bg-white border border-slate-200 rounded-3xl space-y-4">
              <Search className="w-12 h-12 text-slate-300 mx-auto" />
              <h4 className="font-display font-bold text-xl text-slate-800">No authorized brands discovered matching criteria.</h4>
              <p className="text-slate-500 text-xs max-w-md mx-auto">Try selecting another product category tab or resetting the search toolbar input query above.</p>
              <button
                onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg transition-colors border"
              >
                Reset Filter Settings
              </button>
            </div>
          )}
        </div>
      </section>


    </div>
  );
}
