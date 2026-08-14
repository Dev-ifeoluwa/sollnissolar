import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ShopExperience from "@/components/ShopExperience";

export const metadata = {
  title: "Shop — Sollnis Solar",
  description:
    "Browse solar generators, inverters, charge controllers, panels, fans, irons, street lights and accessories.",
};

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-navy-950">
      <Navbar />

      <section className="relative overflow-hidden pb-4 pt-36 lg:pt-44">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-40 h-[420px] bg-sunrise-radial opacity-20"
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <span className="font-mono text-xs uppercase tracking-widest text-gold-400">
            Full Catalogue
          </span>
          <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold text-ivory-100 sm:text-5xl">
            Shop the Sollnis range
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-400">
            Every generator, inverter, panel and appliance we sell, with
            real specs and Naira pricing. Not sure what you need? Request a
            quote and our engineers will size it for you.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <Suspense fallback={<ShopFallback />}>
          <ShopExperience />
        </Suspense>
      </section>

      <Footer />
    </main>
  );
}

function ShopFallback() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="h-96 animate-pulse rounded-2xl border border-navy-700/70 bg-navy-800/40"
        />
      ))}
    </div>
  );
}
