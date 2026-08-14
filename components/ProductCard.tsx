"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Product } from "@/lib/types";
import { categoryMeta } from "@/lib/category-meta";

const badgeStyles: Record<string, string> = {
  Bestseller: "bg-gold-500 text-navy-950",
  New: "bg-emerald-400 text-navy-950",
  "Eco Pick": "bg-navy-800 text-emerald-400 ring-1 ring-emerald-400/40",
  "Limited Stock": "bg-amber-500 text-navy-950",
};

function formatNaira(amount: number) {
  return "\u20a6" + amount.toLocaleString("en-NG");
}

export default function ProductCard({ product }: { product: Product }) {
  const meta = categoryMeta[product.category];
  const Icon = meta.icon;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-navy-700/70 bg-navy-800/50 transition-colors hover:border-gold-400/40"
    >
      {product.badge && (
        <span
          className={`absolute left-4 top-4 z-10 rounded-full px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wide ${
            badgeStyles[product.badge]
          }`}
        >
          {product.badge}
        </span>
      )}

      <div
        className={`relative flex h-44 items-center justify-center bg-gradient-to-br ${meta.gradient} bg-navy-900`}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-6 -right-6 h-28 w-28 rounded-full bg-gold-500/10 blur-2xl transition-all duration-500 group-hover:bg-gold-500/20"
        />
        <Icon
          className="h-16 w-16 text-ivory-100/90 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3"
          strokeWidth={1.3}
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
            {product.category}
          </span>
          <span className="flex items-center gap-1 text-xs text-slate-400">
            <Star className="h-3.5 w-3.5 fill-gold-400 text-gold-400" />
            {product.rating.toFixed(1)}
            <span className="text-slate-500">({product.reviews})</span>
          </span>
        </div>

        <h3 className="font-display text-base font-semibold leading-snug text-ivory-100">
          {product.name}
        </h3>

        <p className="line-clamp-2 text-sm leading-relaxed text-slate-400">
          {product.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {product.specs.map((spec) => (
            <span
              key={spec}
              className="rounded-md bg-navy-900/80 px-2 py-1 font-mono text-[10px] text-emerald-400 ring-1 ring-navy-600"
            >
              {spec}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-end justify-between pt-3">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-mono text-lg font-semibold text-ivory-100">
                {formatNaira(product.price)}
              </span>
              {product.compareAtPrice && (
                <span className="font-mono text-xs text-slate-500 line-through">
                  {formatNaira(product.compareAtPrice)}
                </span>
              )}
            </div>
            <span className="text-[11px] text-slate-500">
              {product.warrantyYears}yr warranty
            </span>
          </div>
          <button className="rounded-full border border-navy-600 px-4 py-2 text-xs font-semibold text-ivory-100 transition-colors hover:border-gold-400 hover:bg-gold-500 hover:text-navy-950">
            Request Quote
          </button>
        </div>
      </div>
    </motion.article>
  );
}
