"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/data/products";
import { categoryMeta } from "@/lib/category-meta";

export default function CategoryShowcase() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="mb-14 flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-gold-400">
            The Range
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ivory-100 sm:text-4xl">
            Everything for one power system
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-slate-400">
          Mix and match generators, panels and appliances — every category
          is stocked, warrantied, and installed by our own technicians.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {categories.map((cat, i) => {
          const meta = categoryMeta[cat];
          const Icon = meta.icon;
          return (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
            >
              <Link
                href="/"
                // href={`/shop?category=${encodeURIComponent(cat)}`}
                className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-navy-700/70 bg-gradient-to-br ${meta.gradient} bg-navy-800/40 p-5 transition-all hover:-translate-y-1 hover:border-gold-400/50`}
              >
                <div className="flex items-start justify-between">
                  <Icon
                    className="h-8 w-8 text-gold-400 transition-transform duration-500 group-hover:scale-110"
                    strokeWidth={1.5}
                  />
                  <ArrowUpRight className="h-4 w-4 text-slate-500 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold-400" />
                </div>
                <div className="mt-8">
                  <h3 className="font-display text-sm font-semibold text-ivory-100">
                    {cat}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
                    {meta.blurb}
                  </p>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
