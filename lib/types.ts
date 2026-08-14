export type Category =
  | "Solar Generators"
  | "Inverters"
  | "Charge Controllers"
  | "Solar Panels"
  | "Solar Fans"
  | "Solar Irons"
  | "Solar Street Lights"
  | "Accessories";

export type Badge = "Bestseller" | "New" | "Eco Pick" | "Limited Stock" | null;

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  compareAtPrice?: number;
  specs: string[]; // short spec chips, e.g. "5kVA", "48V", "IP65"
  description: string;
  badge: Badge;
  rating: number; // 0-5
  reviews: number;
  warrantyYears: number;
}
