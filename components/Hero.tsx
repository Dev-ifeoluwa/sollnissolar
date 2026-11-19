"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import PowerFlow from "./PowerFlow";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 lg:pt-44 lg:pb-28">
      {/* Ambient sunrise glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 h-[560px] bg-sunrise-radial opacity-30 animate-pulse-ray"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid-fade"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-navy-600 bg-navy-800/60 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-gold-400"
          >
            <ShieldCheck className="h-3.5 w-3.5" />
            Trusted off-grid power since 2023
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="text-balance font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ivory-100 sm:text-5xl lg:text-6xl"
          >
            Power that doesn&apos;t wait
            <span className="block text-gold-400">for the grid.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-slate-400"
          >
            Sollnissolar designs, sells and installs generators,
            inverters, panels and everyday solar appliances built for
            Nigerian homes and businesses — sized correctly the first
            time, backed by real warranty support.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <Link
              href="/"
              // href="/shop"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-sm font-semibold text-navy-950 shadow-[0_0_24px_rgba(244,165,34,0.4)] transition-all hover:-translate-y-0.5 hover:bg-gold-400 hover:shadow-[0_0_32px_rgba(244,165,34,0.6)]"
            >
              Shop the Range
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/#why"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-navy-600 px-7 py-3.5 text-sm font-semibold text-ivory-100 transition-colors hover:border-gold-400/60 hover:text-gold-400"
            >
              How We Size Your System
            </Link>
          </motion.div>

          <motion.dl
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-navy-700/70 pt-8"
          >
            {[
              ["20+", "Systems Installed"],
              ["16kWh", "Capacity Deployed"],
              ["24/7", "Support Line"],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="font-mono text-2xl font-semibold text-ivory-100">
                  {value}
                </dt>
                <dd className="mt-1 text-xs text-slate-500">{label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="hidden justify-self-center lg:block"
        >
          <PowerFlow />
        </motion.div>
      </div>
    </section>
  );
}
