import {
  BatteryCharging,
  Cable,
  Fan,
  Gauge,
  Lamp,
  PanelsTopLeft,
  Shirt,
  Zap,
  LucideIcon,
} from "lucide-react";
import { Category } from "./types";

interface CategoryMeta {
  icon: LucideIcon;
  gradient: string; // tailwind gradient classes for card watermark / accent
  blurb: string;
}

export const categoryMeta: Record<Category, CategoryMeta> = {
  "Solar Generators": {
    icon: BatteryCharging,
    gradient: "from-gold-500/25 via-amber-400/10 to-transparent",
    blurb: "Portable power stations for outages, small and large.",
  },
  Inverters: {
    icon: Zap,
    gradient: "from-amber-400/25 via-gold-500/10 to-transparent",
    blurb: "Convert stored energy into clean, appliance-ready power.",
  },
  "Charge Controllers": {
    icon: Gauge,
    gradient: "from-emerald-400/20 via-gold-500/10 to-transparent",
    blurb: "Regulate panel output to charge batteries safely.",
  },
  "Solar Panels": {
    icon: PanelsTopLeft,
    gradient: "from-gold-500/25 via-amber-500/10 to-transparent",
    blurb: "Capture sunlight and convert it into usable electricity.",
  },
  "Solar Fans": {
    icon: Fan,
    gradient: "from-emerald-400/20 via-gold-500/10 to-transparent",
    blurb: "Low-draw cooling built to run on solar and inverters.",
  },
  "Solar Irons": {
    icon: Shirt,
    gradient: "from-amber-400/20 via-gold-500/10 to-transparent",
    blurb: "Everyday appliances re-engineered for low power draw.",
  },
  "Solar Street Lights": {
    icon: Lamp,
    gradient: "from-gold-500/25 via-amber-400/10 to-transparent",
    blurb: "Dusk-to-dawn lighting for compounds, roads and estates.",
  },
  Accessories: {
    icon: Cable,
    gradient: "from-slate-400/20 via-gold-500/10 to-transparent",
    blurb: "Batteries, cabling and connectors to complete your setup.",
  },
};
