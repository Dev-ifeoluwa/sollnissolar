"use client";

import { motion } from "framer-motion";
import {
  ClipboardList,
  Home,
  MessagesSquare,
  Ruler,
  ShieldCheck,
  Truck,
  Wrench,
} from "lucide-react";

const differentiators = [
  {
    icon: Ruler,
    title: "Correctly sized, not oversold",
    body: "We calculate your actual load before recommending a system — no upselling a 5kVA setup you don't need.",
  },
  {
    icon: Wrench,
    title: "Installed by our own techs",
    body: "Every system is installed and commissioned by Sollnis-trained engineers, not a third-party contractor.",
  },
  {
    icon: ShieldCheck,
    title: "Warranty you can actually use",
    body: "Spare parts and batteries are stocked locally, so a warranty claim doesn't mean weeks of waiting.",
  },
];

const steps = [
  {
    icon: MessagesSquare,
    title: "Tell us what you're powering",
    body: "Fridge, fans, a few rooms of lighting, or a full office — send us your appliance list on a call or via WhatsApp.",
  },
  {
    icon: ClipboardList,
    title: "We calculate your load",
    body: "Our engineers size the battery, inverter and panel count against your actual daily usage, not guesswork.",
  },
  {
    icon: Truck,
    title: "You get a fixed quote",
    body: "A itemised quote with product specs, delivery timeline, and installation cost — no hidden extras later.",
  },
  {
    icon: Home,
    title: "We install and commission",
    body: "Our technicians install on-site and walk you through monitoring your system before they leave.",
  },
];

export default function WhySollnis() {
  return (
    <section id="why" className="relative border-t border-navy-700/60 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <span className="font-mono text-xs uppercase tracking-widest text-gold-400">
          Why Sollnis
        </span>
        <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold text-ivory-100 sm:text-4xl">
          Built for how Nigerian homes actually use power
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {differentiators.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-navy-700/70 bg-navy-800/40 p-6"
            >
              <item.icon className="h-7 w-7 text-gold-400" strokeWidth={1.5} />
              <h3 className="mt-5 font-display text-base font-semibold text-ivory-100">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Real sequence — numbering carries information here */}
        <div className="mt-24">
          <h3 className="font-display text-2xl font-semibold text-ivory-100">
            How we size your system
          </h3>

          <div className="relative mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div
              aria-hidden="true"
              className="absolute left-0 right-0 top-6 hidden h-px bg-navy-700 lg:block"
            />
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative"
              >
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-gold-400/50 bg-navy-950 font-mono text-sm font-semibold text-gold-400">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <step.icon
                  className="mt-4 h-5 w-5 text-slate-500"
                  strokeWidth={1.5}
                />
                <h4 className="mt-3 font-display text-sm font-semibold text-ivory-100">
                  {step.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {step.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
