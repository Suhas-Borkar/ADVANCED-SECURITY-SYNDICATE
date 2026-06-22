"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "motion/react";
import {
  Mail, Phone, MapPin, Send,
  CheckCircle, ShieldCheck, Compass, Landmark
} from "lucide-react";
import { InquiryFormState } from "@/lib/types";

export default function ContactView() {
  const searchParams = useSearchParams();
  const initialBrandInterest = searchParams.get("brand") ?? "";

  const [selectedOffice, setSelectedOffice] = useState<"head" | "regional" | "central">("head");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState("");
  const [formData, setFormData] = useState<InquiryFormState>({
    name: "",
    contactNo: "",
    email: "",
    city: "",
    userType: "",
    subject: initialBrandInterest ? `Inquiry regarding ${initialBrandInterest}` : "",
    message: "",
    brandsOfInterest: initialBrandInterest ? [initialBrandInterest] : []
  });
  const [formErrors, setFormErrors] = useState<Partial<InquiryFormState>>({});

  const officeDetails = {
    head: {
      title: "ACGR Corporate headquarters",
      address: "ACGR Building, Civil Lines Zone, Nagpur, Maharashtra - 440001",
      phone: "+91 91580 XXXXX / 0712 - 25XXXX",
      email: "info@acgr.in",
      locationHint: "Near High-Court Square, Central Business District",
      coords: "LAT: 21.1458° N, LON: 79.0882° E"
    },
    regional: {
      title: "Indore Distribution branch",
      address: "Alliance Trade House, Vijay Nagar Ring Road, Indore, Madhya Pradesh - 452010",
      phone: "+91 94222 XXXXX / 0731 - 40XXXX",
      email: "mp.sales@acgr.in",
      locationHint: "Behind Corporate Square Plaza",
      coords: "LAT: 22.7533° N, LON: 75.8937° E"
    },
    central: {
      title: "Central Logistics Warehouse Hub",
      address: "Apex Logistics Yards, Kalamboli industrial park, Navi Mumbai, Maharashtra - 410218",
      phone: "+91 98200 XXXXX",
      email: "logistics@acgr.in",
      locationHint: "Close to Nhava Sheva JNPT Shipping Corridor",
      coords: "LAT: 19.0284° N, LON: 73.1025° E"
    }
  };

  const handleBrandSelect = (brandName: string) => {
    setFormData((prev) => {
      const alreadySelected = prev.brandsOfInterest.includes(brandName);
      return {
        ...prev,
        brandsOfInterest: alreadySelected
          ? prev.brandsOfInterest.filter((b) => b !== brandName)
          : [...prev.brandsOfInterest, brandName]
      };
    });
  };

  const validateForm = () => {
    const errors: Partial<InquiryFormState> = {};
    if (!formData.name.trim()) errors.name = "Full Name is required";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Valid Email is required";
    if (!formData.contactNo.trim() || formData.contactNo.length < 10) errors.contactNo = "10-digit Phone is required";
    if (!formData.city.trim()) errors.city = "City is required";
    if (!formData.userType) errors.userType = "Please select who you are" as any;
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    const generatedTicket = `ACGR-TKT-${Math.floor(100000 + Math.random() * 900000)}`;
    setTicketId(generatedTicket);
    setFormSubmitted(true);
  };

  const handleResetForm = () => {
    setFormData({
      name: "", contactNo: "", email: "", city: "",
      userType: "", subject: "", message: "", brandsOfInterest: []
    });
    setFormSubmitted(false);
  };

  return (
    <div className="bg-slate-50 min-h-screen">

      <section className="bg-slate-900 py-16 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-mesh opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-300">
            CONNECT AN EXPERT
          </span>
          <h1 className="font-display text-4xl font-extrabold tracking-tight">
            Distributor Help Desk
          </h1>
          <p className="max-w-2xl mx-auto text-slate-400 text-xs sm:text-sm">
            Reach out with commercial inquiries, bulk stock reservations, or authorized warranty RMA audits. Our response desk is active 24/7.
          </p>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          <div className="lg:col-span-5 space-y-8">
            <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-4 border border-slate-800 shadow-lg">
              <div className="flex gap-3.5 items-center">
                <div className="bg-brand-600 p-2.5 rounded-lg text-white">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg">Engineered for Security</h4>
                  <p className="text-[10px] font-mono text-slate-500 uppercase">AUTHORIZED ACGR SEAL</p>
                </div>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed font-sans mt-2">
                As certified partners in Central and Western India, we stand as authorized distributors ensuring direct hardware supply security and premium billing terms.
              </p>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
              <h3 className="font-display font-extrabold text-lg text-slate-900 flex items-center gap-2">
                <Landmark className="w-5 h-5 text-brand-600" />
                Office Localization Desk
              </h3>
              <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-100 rounded-xl">
                {[
                  { id: "head", label: "Nagpur HQ" },
                  { id: "regional", label: "Indore" },
                  { id: "central", label: "Mumbai Port" },
                ].map((off) => (
                  <button
                    key={off.id}
                    onClick={() => setSelectedOffice(off.id as "head" | "regional" | "central")}
                    className={`py-2 px-1 text-center font-sans tracking-wide text-xs font-semibold rounded-lg transition-all ${
                      selectedOffice === off.id
                        ? "bg-white text-slate-900 shadow-sm"
                        : "text-slate-500 hover:text-slate-950"
                    }`}
                  >
                    {off.label}
                  </button>
                ))}
              </div>
              <div className="space-y-4 pt-2">
                <div>
                  <span className="text-[10px] uppercase font-mono font-bold text-slate-400 block tracking-wider">
                    {officeDetails[selectedOffice].title}
                  </span>
                  <p className="text-sm font-semibold text-slate-800 font-sans mt-1">
                    {officeDetails[selectedOffice].address}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-[9px] uppercase font-mono text-slate-400 block">CALL CONTACT:</span>
                    <span className="font-mono font-bold text-slate-700 mt-0.5 block">{officeDetails[selectedOffice].phone}</span>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase font-mono text-slate-400 block">SUPPORT DESK EMAIL:</span>
                    <span className="font-mono font-bold text-brand-600 mt-0.5 block break-all">{officeDetails[selectedOffice].email}</span>
                  </div>
                </div>
                <div className="p-3 bg-brand-50/50 rounded-xl border border-brand-100 flex gap-2 text-[11px] text-slate-600 leading-relaxed items-start">
                  <Compass className="w-4 h-4 text-brand-600 mt-0.5 shrink-0" />
                  <div>
                    <span><strong>Location Guide:</strong> {officeDetails[selectedOffice].locationHint}</span>
                    <span className="block font-mono text-[9px] font-bold text-brand-800 uppercase mt-0.5">
                      GPS LOG: {officeDetails[selectedOffice].coords}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-10 shadow-sm">
            {!formSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-display font-extrabold text-2xl text-slate-900">
                    Submit Channel Inquiry
                  </h3>
                  <p className="text-slate-500 text-xs font-sans mt-0.5">
                    Fields marked with <span className="text-red-500 font-bold">*</span> are required to assign a representative.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-black text-slate-500 uppercase block">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className={`w-full p-3 bg-slate-50 border rounded-xl outline-none text-sm transition-all text-slate-800 ${
                        formErrors.name ? "border-red-500 bg-red-50/20" : "border-slate-200 focus:border-brand-500 focus:bg-white"
                      }`}
                      placeholder="e.g. Sandeep Birari"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                    {formErrors.name && (
                      <span className="text-[10px] text-red-500 font-semibold block">{formErrors.name}</span>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-black text-slate-500 uppercase block">
                      Contact Phone No <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      className={`w-full p-3 bg-slate-50 border rounded-xl outline-none text-sm transition-all text-slate-800 ${
                        formErrors.contactNo ? "border-red-500 bg-red-50/20" : "border-slate-200 focus:border-brand-500 focus:bg-white"
                      }`}
                      placeholder="e.g. 91580 2XXXX"
                      value={formData.contactNo}
                      onChange={(e) => setFormData({ ...formData, contactNo: e.target.value })}
                    />
                    {formErrors.contactNo && (
                      <span className="text-[10px] text-red-500 font-semibold block">{formErrors.contactNo}</span>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-black text-slate-500 uppercase block">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      className={`w-full p-3 bg-slate-50 border rounded-xl outline-none text-sm transition-all text-slate-800 ${
                        formErrors.email ? "border-red-500 bg-red-50/20" : "border-slate-200 focus:border-brand-500 focus:bg-white"
                      }`}
                      placeholder="e.g. partners@acgr.in"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    {formErrors.email && (
                      <span className="text-[10px] text-red-500 font-semibold block">{formErrors.email}</span>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-black text-slate-500 uppercase block">
                      City of Business <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className={`w-full p-3 bg-slate-50 border rounded-xl outline-none text-sm transition-all text-slate-800 ${
                        formErrors.city ? "border-red-500 bg-red-50/20" : "border-slate-200 focus:border-brand-500 focus:bg-white"
                      }`}
                      placeholder="e.g. Nagpur"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    />
                    {formErrors.city && (
                      <span className="text-[10px] text-red-500 font-semibold block">{formErrors.city}</span>
                    )}
                  </div>

                  <div className="space-y-1.5 sm:col-span-2">
                    <label className="text-xs font-mono font-black text-slate-500 uppercase block">
                      Who you are? <span className="text-red-500">*</span>
                    </label>
                    <select
                      className={`w-full p-3 bg-slate-50 border rounded-xl outline-none text-sm transition-all text-slate-800 ${
                        formErrors.userType ? "border-red-500 bg-red-50/20" : "border-slate-200 focus:border-brand-500 focus:bg-white"
                      }`}
                      value={formData.userType}
                      onChange={(e) => setFormData({ ...formData, userType: e.target.value as InquiryFormState["userType"] })}
                    >
                      <option value="">-- Choose Category --</option>
                      <option value="Distributor">Wholesaler / Master Distributor</option>
                      <option value="Sub-Distributor">Regional Sub-Distributor</option>
                      <option value="System Integrator">Security Systems Integrator / Installer</option>
                      <option value="Retailer">High-Street Retail Shop Owner</option>
                      <option value="End-User">Industrial / Commercial Corporate End-User</option>
                    </select>
                    {formErrors.userType && (
                      <span className="text-[10px] text-red-500 font-semibold block">{formErrors.userType}</span>
                    )}
                  </div>
                </div>

                <div className="space-y-2 border-t border-slate-100 pt-4">
                  <label className="text-xs font-mono font-black text-slate-500 uppercase block">
                    Brands of Interest (Multi-select optional):
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {["Connect-G", "Syntel", "Hikvision", "Prama", "Seagate", "CP Plus", "Cofe"].map((br) => {
                      const isChecked = formData.brandsOfInterest.includes(br);
                      return (
                        <button
                          key={br}
                          type="button"
                          onClick={() => handleBrandSelect(br)}
                          className={`p-2.5 rounded-xl border text-xs font-sans text-left font-semibold transition-all flex items-center justify-between ${
                            isChecked
                              ? "bg-brand-600 border-brand-500 text-white"
                              : "bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-700"
                          }`}
                        >
                          <span>{br}</span>
                          <span className={`${isChecked ? "bg-white/20 text-white" : "bg-slate-200 text-slate-400"} text-[9px] font-black px-1.5 py-0.5 rounded-lg`}>
                            {isChecked ? "ADD" : "OFF"}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-black text-slate-500 uppercase block">
                    Your Message / Tender Specs details:
                  </label>
                  <textarea
                    rows={4}
                    className="w-full p-3 bg-slate-50 border border-slate-200 focus:border-brand-500 focus:bg-white rounded-xl outline-none text-sm transition-all text-slate-800 placeholder:text-slate-400"
                    placeholder="Provide specific model counts, regional project scope, or custom billing timelines required..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-brand-600 hover:bg-brand-500 text-white font-display font-semibold rounded-xl text-sm transition-colors duration-200 flex items-center justify-center gap-2 shadow"
                >
                  <Send className="w-4 h-4" />
                  Submit Distributor Inquiry
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10 space-y-6"
              >
                <div className="w-16 h-16 bg-emerald-50 text-emerald-500 border border-emerald-100 rounded-full flex items-center justify-center mx-auto shadow">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display font-extrabold text-3xl text-slate-900">THANK YOU!</h3>
                  <p className="text-slate-500 text-sm max-w-sm mx-auto font-sans leading-relaxed">
                    We appreciate your interest in ACGR India. Our distribution desk will review your tax details and reach out within 24 working hours.
                  </p>
                </div>
                <div className="p-5 bg-slate-50 border rounded-2xl max-w-md mx-auto space-y-3">
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block font-bold uppercase">REFERENCE TICKET:</span>
                    <strong className="font-mono text-lg text-slate-800 tracking-wide font-black block mt-0.5">
                      {ticketId}
                    </strong>
                  </div>
                  <div className="pt-2.5 border-t border-slate-200">
                    <span className="text-[10px] font-mono text-slate-400 block font-bold uppercase">ASSIGNED REPRESENTATIVE DESK:</span>
                    <strong className="text-xs font-semibold text-slate-700 block mt-0.5">
                      WEST-CENTRAL PARTNER SERVICES
                    </strong>
                  </div>
                </div>
                <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    type="button"
                    onClick={handleResetForm}
                    className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 border font-display font-semibold rounded-xl text-xs transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                  <a
                    href="mailto:sales@acgr.in"
                    className="px-6 py-3 bg-slate-900 hover:bg-brand-600 text-white font-display font-semibold rounded-xl text-xs transition-colors inline-block"
                  >
                    Direct Email Desk
                  </a>
                </div>
              </motion.div>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}
