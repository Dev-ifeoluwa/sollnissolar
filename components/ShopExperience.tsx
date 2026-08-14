"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Search, SlidersHorizontal } from "lucide-react";
import { products, categories } from "@/data/products";
import { Category } from "@/lib/types";
import ProductCard from "./ProductCard";

type SortOption = "featured" | "price-asc" | "price-desc" | "rating";

const sortLabels: Record<SortOption, string> = {
  featured: "Featured",
  "price-asc": "Price: Low to High",
  "price-desc": "Price: High to Low",
  rating: "Highest Rated",
};

export default function ShopExperience() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") as Category | null;

  const [activeCategory, setActiveCategory] = useState<Category | "All">(
    initialCategory && categories.includes(initialCategory)
      ? initialCategory
      : "All"
  );
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortOption>("featured");

  const filtered = useMemo(() => {
    let list = products.filter((p) => {
      const matchesCategory =
        activeCategory === "All" || p.category === activeCategory;
      const matchesQuery =
        query.trim().length === 0 ||
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });

    switch (sort) {
      case "price-asc":
        list = [...list].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list = [...list].sort((a, b) => b.price - a.price);
        break;
      case "rating":
        list = [...list].sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }
    return list;
  }, [activeCategory, query, sort]);

  return (
    <div>
      {/* Search + sort */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-xs">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products…"
            className="w-full rounded-full border border-navy-600 bg-navy-800/60 py-2.5 pl-10 pr-4 text-sm text-ivory-100 placeholder:text-slate-500 focus:border-gold-400 focus:outline-none"
          />
        </div>

        <div className="flex items-center gap-2 text-sm text-slate-400">
          <SlidersHorizontal className="h-4 w-4" />
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortOption)}
            className="rounded-full border border-navy-600 bg-navy-800/60 px-3 py-2 text-sm text-ivory-100 focus:border-gold-400 focus:outline-none"
          >
            {Object.entries(sortLabels).map(([value, label]) => (
              <option key={value} value={value} className="bg-navy-800">
                {label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Category tabs */}
      <div className="mb-10 flex flex-wrap gap-2">
        {(["All", ...categories] as const).map((cat) => {
          const active = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors ${
                active
                  ? "text-navy-950"
                  : "text-slate-400 hover:text-ivory-100"
              }`}
            >
              {active && (
                <motion.span
                  layoutId="active-category-pill"
                  className="absolute inset-0 rounded-full bg-gold-500"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          );
        })}
      </div>

      <p className="mb-6 font-mono text-xs uppercase tracking-widest text-slate-500">
        {filtered.length} product{filtered.length !== 1 && "s"}
      </p>

      {/* Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <div className="rounded-2xl border border-dashed border-navy-600 py-20 text-center">
          <p className="font-display text-lg text-ivory-100">
            No products match that search.
          </p>
          <p className="mt-2 text-sm text-slate-500">
            Try a different keyword or clear the category filter.
          </p>
        </div>
      )}
    </div>
  );
}
