"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, PhoneCall } from "lucide-react";

const navItems = [
  { id: "home", label: "Home", href: "/" },
  { id: "about", label: "About Us", href: "/about" },
  { id: "brands", label: "Distributors", href: "/brands" },
  // { id: "performance", label: "Performance & Tools", href: "/performance" },
  { id: "contact", label: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleNavClick = (href: string) => {
    router.push(href);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div
            onClick={() => handleNavClick("/")}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <img
              src="/logo/logo.jpeg"
              alt="Advanced Security Syndicate"
              className="h-12 w-auto object-contain group-hover:opacity-90 transition-opacity"
            />
          </div>

          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.href)}
                  className={`px-4 py-2 rounded-lg font-sans font-medium text-sm transition-all duration-200 relative ${
                    active
                      ? "text-brand-600 bg-brand-50/70"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/65"
                  }`}
                >
                  {item.label}
                  {active && (
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-brand-600 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => handleNavClick("/contact")}
              className="flex items-center gap-2 bg-slate-900 hover:bg-brand-700 text-white font-sans font-medium text-sm px-5 py-2.5 rounded-lg shadow-lg shadow-slate-900/10 hover:shadow-brand-600/15 transition-all duration-200 group active:scale-95"
            >
              <PhoneCall className="w-4 h-4 group-hover:animate-bounce" />
              Contact an Expert
            </button>
          </div>

          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-500 hover:text-slate-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 py-4 px-6 animate-fade-in divide-y divide-slate-100">
          <div className="space-y-1.5 pb-4">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.href)}
                  className={`w-full text-left px-3 py-2.5 rounded-lg font-sans font-semibold text-base transition-all duration-150 flex items-center justify-between ${
                    active
                      ? "text-brand-700 bg-brand-100"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {item.label}
                  {active && <div className="w-2 h-2 rounded-full bg-brand-600" />}
                </button>
              );
            })}
          </div>
          <div className="pt-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleNavClick("/contact");
              }}
              className="w-full text-center flex items-center justify-center gap-2 bg-slate-900 hover:bg-brand-700 text-white font-sans font-medium py-3 rounded-lg shadow-lg"
            >
              <PhoneCall className="w-4 h-4" />
              Contact an Expert
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
