import Link from "next/link";
import { Facebook, Instagram, Sun, Twitter } from "lucide-react";
import { categories } from "@/data/products";

export default function Footer() {
  return (
    <footer className="border-t border-navy-700/60 bg-navy-950">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-gold-400 to-amber-500">
                <Sun className="h-4 w-4 text-navy-950" strokeWidth={2.5} />
              </span>
              <span className="font-display text-base font-semibold text-ivory-100">
                Sollnis Solar
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500">
              Correctly-sized solar systems and appliances for Nigerian
              homes and businesses — sold, installed and supported by one
              team.
            </p>
            <div className="mt-6 flex gap-3">
              {[Twitter, Instagram, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-navy-600 text-slate-400 transition-colors hover:border-gold-400/50 hover:text-gold-400"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-slate-500">
              Shop
            </h4>
            <ul className="mt-4 space-y-3">
              {categories.slice(0, 5).map((cat) => (
                <li key={cat}>
                  <Link
                    href={`/shop?category=${encodeURIComponent(cat)}`}
                    className="text-sm text-slate-400 hover:text-gold-400"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-slate-500">
              Company
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/#why" className="text-sm text-slate-400 hover:text-gold-400">
                  Why Sollnis
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-sm text-slate-400 hover:text-gold-400">
                  Full Shop
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-sm text-slate-400 hover:text-gold-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-slate-500">
              Head Office
            </h4>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              No 14 Omisanjana
              <br />
              sije road, Ado Ekiti
              <br />
              Nigeria
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-navy-700/60 pt-8 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Sollnis Solar. All rights reserved.
          </p>
          <p className="font-mono text-xs text-slate-600">
            Built for uninterrupted power.
          </p>
        </div>
      </div>
    </footer>
  );
}
