"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, Phone } from "lucide-react";

export default function CTASection() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-3xl border border-navy-700/70 bg-navy-800/50 px-8 py-14 sm:px-14"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold-500/20 blur-3xl animate-drift"
        />
        <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-gold-400">
              Get Started
            </span>
            <h2 className="mt-3 max-w-md font-display text-3xl font-semibold text-ivory-100 sm:text-4xl">
              Tell us what you need power for
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">
              Reach the Sollnis team directly — a real engineer replies to
              every enquiry within one business day, not a chatbot.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href="tel:+2349136745664"
              className="flex items-center gap-3 rounded-xl border border-navy-600 bg-navy-900/60 px-5 py-4 transition-colors hover:border-gold-400/50"
            >
              <Phone className="h-5 w-5 text-gold-400" />
              <div>
                <p className="text-sm font-semibold text-ivory-100">
                  Call the sales desk
                </p>
                <p className="text-xs text-slate-500">+2349136745664</p>
              </div>
            </a>
            <a
              href="https://wa.me/2349136745664"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-navy-600 bg-navy-900/60 px-5 py-4 transition-colors hover:border-gold-400/50"
            >
              <MessageCircle className="h-5 w-5 text-gold-400" />
              <div>
                <p className="text-sm font-semibold text-ivory-100">
                  Chat on WhatsApp
                </p>
                <p className="text-xs text-slate-500">Fastest response</p>
              </div>
            </a>
            <a
              href="mailto:info.sollnistechnologies@gmail.com"
              className="flex items-center gap-3 rounded-xl border border-navy-600 bg-navy-900/60 px-5 py-4 transition-colors hover:border-gold-400/50"
            >
              <Mail className="h-5 w-5 text-gold-400" />
              <div>
                <p className="text-sm font-semibold text-ivory-100">
                  Email us
                </p>
                <p className="text-xs text-slate-500">
                  info.sollnistechnologies@gmail.com
                </p>
              </div>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
