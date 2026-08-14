import { Product } from "@/lib/types";

export const products: Product[] = [
  // Solar Generators
  {
    id: "gen-1000",
    name: "Sollnis PowerCube 1000",
    category: "Solar Generators",
    price: 480000,
    compareAtPrice: 545000,
    specs: ["1000W", "1024Wh", "6 Outlets"],
    description:
      "Compact all-in-one power station for laptops, routers, and small appliances during outages. Recharges from wall, car, or solar panel.",
    badge: "Bestseller",
    rating: 4.7,
    reviews: 212,
    warrantyYears: 2,
  },
  {
    id: "gen-2500",
    name: "Sollnis PowerCube 2500 Pro",
    category: "Solar Generators",
    price: 1150000,
    specs: ["2500W", "2560Wh", "LiFePO4"],
    description:
      "Whole-home backup for fridges, TVs, and multiple rooms of lighting. LiFePO4 cells rated for 3,500+ charge cycles.",
    badge: "New",
    rating: 4.9,
    reviews: 64,
    warrantyYears: 5,
  },
  {
    id: "gen-4000",
    name: "Sollnis PowerCube 4000 Business",
    category: "Solar Generators",
    price: 2180000,
    specs: ["4000W", "4096Wh", "Stackable"],
    description:
      "Built for shops, clinics, and small offices. Stack up to four units for extended runtime and higher surge capacity.",
    badge: null,
    rating: 4.8,
    reviews: 31,
    warrantyYears: 5,
  },

  // Inverters
  {
    id: "inv-1500",
    name: "Sollnis PureWave 1.5kVA",
    category: "Inverters",
    price: 195000,
    specs: ["1.5kVA", "12V", "Pure Sine"],
    description:
      "Entry-level pure sine inverter for homes running lights, fans, and a TV. Quiet operation with automatic mains changeover.",
    badge: "Bestseller",
    rating: 4.6,
    reviews: 340,
    warrantyYears: 2,
  },
  {
    id: "inv-3500",
    name: "Sollnis PureWave 3.5kVA Hybrid",
    category: "Inverters",
    price: 465000,
    specs: ["3.5kVA", "24V", "MPPT Built-in"],
    description:
      "Hybrid inverter with an integrated MPPT charge controller — connect panels directly, no separate controller needed.",
    badge: null,
    rating: 4.8,
    reviews: 158,
    warrantyYears: 3,
  },
  {
    id: "inv-7500",
    name: "Sollnis PureWave 7.5kVA Tri-Phase",
    category: "Inverters",
    price: 980000,
    specs: ["7.5kVA", "48V", "3-Phase Ready"],
    description:
      "High-capacity inverter for larger homes, boreholes, and small industrial loads. Supports parallel stacking for scale.",
    badge: "Limited Stock",
    rating: 4.9,
    reviews: 47,
    warrantyYears: 5,
  },

  // Charge Controllers
  {
    id: "cc-30",
    name: "Sollnis ChargeGuard 30A PWM",
    category: "Charge Controllers",
    price: 26000,
    specs: ["30A", "12/24V", "PWM"],
    description:
      "Reliable, no-frills charge controller for small panel arrays up to 400W. LCD display shows battery and charging status.",
    badge: null,
    rating: 4.4,
    reviews: 98,
    warrantyYears: 1,
  },
  {
    id: "cc-60mppt",
    name: "Sollnis ChargeGuard 60A MPPT",
    category: "Charge Controllers",
    price: 89000,
    specs: ["60A", "12/24/48V", "MPPT"],
    description:
      "MPPT tracking recovers up to 30% more energy than PWM controllers, especially on cloudy days. Bluetooth monitoring app.",
    badge: "Eco Pick",
    rating: 4.8,
    reviews: 121,
    warrantyYears: 3,
  },
  {
    id: "cc-100mppt",
    name: "Sollnis ChargeGuard 100A MPPT",
    category: "Charge Controllers",
    price: 138000,
    specs: ["100A", "48V", "MPPT"],
    description:
      "For larger residential and commercial arrays. Handles high-voltage panel strings with over-charge and over-discharge protection.",
    badge: null,
    rating: 4.7,
    reviews: 39,
    warrantyYears: 3,
  },

  // Solar Panels
  {
    id: "panel-330",
    name: "Sollnis SunSheet 330W Mono",
    category: "Solar Panels",
    price: 78000,
    specs: ["330W", "Monocrystalline", "25yr Output"],
    description:
      "High-efficiency monocrystalline cells for maximum output per square metre of roof space. Anodized aluminium frame.",
    badge: "Bestseller",
    rating: 4.8,
    reviews: 265,
    warrantyYears: 12,
  },
  {
    id: "panel-450",
    name: "Sollnis SunSheet 450W Bifacial",
    category: "Solar Panels",
    price: 112000,
    specs: ["450W", "Bifacial", "IP68"],
    description:
      "Captures reflected light on the rear face for up to 15% more yield on elevated mounts. Built for tropical humidity.",
    badge: "New",
    rating: 4.9,
    reviews: 52,
    warrantyYears: 15,
  },
  {
    id: "panel-100flex",
    name: "Sollnis SunSheet 100W Flex",
    category: "Solar Panels",
    price: 65000,
    specs: ["100W", "Flexible", "Boats/RVs"],
    description:
      "Lightweight, bendable panel for curved roofs, boats, and mobile setups. Ships with a portable mounting kit.",
    badge: null,
    rating: 4.5,
    reviews: 74,
    warrantyYears: 5,
  },

  // Solar Fans
  {
    id: "fan-ceiling",
    name: "Sollnis BreezeCharge Ceiling Fan",
    category: "Solar Fans",
    price: 42000,
    specs: ["DC Motor", "18W", "Remote"],
    description:
      "Ultra-low-power ceiling fan built for solar and inverter setups, running comfortably on a small battery bank overnight.",
    badge: "Eco Pick",
    rating: 4.6,
    reviews: 187,
    warrantyYears: 1,
  },
  {
    id: "fan-standing",
    name: "Sollnis BreezeCharge Rechargeable Stand Fan",
    category: "Solar Fans",
    price: 32000,
    specs: ["Solar Panel Incl.", "8hr Runtime", "3 Speed"],
    description:
      "Comes bundled with its own small solar panel and battery — charges by day, cools the room through the night.",
    badge: "Bestseller",
    rating: 4.5,
    reviews: 304,
    warrantyYears: 1,
  },

  // Solar Irons
  {
    id: "iron-classic",
    name: "Sollnis SunPress Classic Iron",
    category: "Solar Irons",
    price: 24500,
    specs: ["800W", "DC Compatible", "Ceramic Plate"],
    description:
      "Low-wattage dry iron designed to run comfortably on inverter and solar power without tripping small systems.",
    badge: null,
    rating: 4.4,
    reviews: 96,
    warrantyYears: 1,
  },
  {
    id: "iron-steam",
    name: "Sollnis SunPress Steam Iron",
    category: "Solar Irons",
    price: 34000,
    specs: ["1000W", "Steam", "Auto Shut-off"],
    description:
      "Steam pressing on a solar-friendly power draw, with an auto shut-off timer to protect your battery reserve.",
    badge: "New",
    rating: 4.6,
    reviews: 41,
    warrantyYears: 1,
  },

  // Solar Street Lights
  {
    id: "street-60w",
    name: "Sollnis LumaPath 60W All-in-One",
    category: "Solar Street Lights",
    price: 62000,
    specs: ["60W LED", "Motion Sensor", "IP66"],
    description:
      "Panel, battery, and LED fixture in a single unit for fast installation on estate roads and compound perimeters.",
    badge: "Bestseller",
    rating: 4.7,
    reviews: 233,
    warrantyYears: 3,
  },
  {
    id: "street-120w",
    name: "Sollnis LumaPath 120W Split-Type",
    category: "Solar Street Lights",
    price: 118000,
    specs: ["120W LED", "Separate Panel", "Remote Control"],
    description:
      "Higher-output split design for main roads and large compounds, with a remote to adjust brightness and schedule.",
    badge: null,
    rating: 4.8,
    reviews: 88,
    warrantyYears: 3,
  },
  {
    id: "street-200w",
    name: "Sollnis LumaPath 200W Estate",
    category: "Solar Street Lights",
    price: 176000,
    specs: ["200W LED", "5-Night Backup", "Dusk-to-Dawn"],
    description:
      "Engineered for estate and highway installations, storing enough charge for up to five nights of cloudy weather.",
    badge: "Eco Pick",
    rating: 4.9,
    reviews: 27,
    warrantyYears: 5,
  },

  // Accessories
  {
    id: "acc-battery-lifepo4",
    name: "Sollnis CoreCell 200Ah LiFePO4 Battery",
    category: "Accessories",
    price: 620000,
    specs: ["200Ah", "12.8V", "6000+ Cycles"],
    description:
      "Deep-cycle lithium battery built for daily solar charge/discharge cycles, with a built-in management system.",
    badge: "New",
    rating: 4.9,
    reviews: 58,
    warrantyYears: 5,
  },
  {
    id: "acc-cable-kit",
    name: "Sollnis Solar Cable & MC4 Connector Kit",
    category: "Accessories",
    price: 18500,
    specs: ["10m", "4mm\u00b2", "MC4 Included"],
    description:
      "UV-resistant outdoor cable pre-fitted with MC4 connectors for fast, weatherproof panel-to-controller wiring.",
    badge: null,
    rating: 4.5,
    reviews: 143,
    warrantyYears: 1,
  },
];

export const categories = [
  "Solar Generators",
  "Inverters",
  "Charge Controllers",
  "Solar Panels",
  "Solar Fans",
  "Solar Irons",
  "Solar Street Lights",
  "Accessories",
] as const;
