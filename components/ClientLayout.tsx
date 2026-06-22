"use client";

import { ReactNode } from "react";
import { BrochureProvider } from "@/lib/BrochureContext";
import Header from "./Header";
import Footer from "./Footer";
import BrochureModal from "./BrochureModal";

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <BrochureProvider>
      <div className="flex flex-col min-h-screen text-slate-800 bg-slate-50 selection:bg-brand-600 selection:text-white">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <BrochureModal />
      </div>
    </BrochureProvider>
  );
}
