import { Suspense } from "react";
import ContactView from "@/components/ContactView";

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-50" />}>
      <ContactView />
    </Suspense>
  );
}
