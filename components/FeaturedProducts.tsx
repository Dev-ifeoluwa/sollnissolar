"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "./ProductCard";

const featured = products.filter((p) => p.badge === "Bestseller").slice(0, 4);

export default function FeaturedProducts() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="mb-12 flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-gold-400">
            Customer Favourites
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ivory-100 sm:text-4xl">
            What most homes install first
          </h2>
        </div>
        <Link
          href="/shop"
          className="group inline-flex items-center gap-1.5 text-sm font-semibold text-gold-400 hover:text-gold-300"
        >
          View full shop
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {featured.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </motion.div>
    </section>
  );
}
