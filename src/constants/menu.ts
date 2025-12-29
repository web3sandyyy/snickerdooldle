import type { LucideIcon } from "lucide-react";
import { Coffee, Clock } from "lucide-react";

export interface MenuCategory {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  bgColor: string;
  textColor: string;
}

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: "coffee",
    icon: Coffee,
    title: "Specialty Coffee",
    description:
      "Single-origin beans, roasted locally. Pour-overs, AeroPress, and our signature cold brews.",
    bgColor: "bg-brown",
    textColor: "text-beige",
  },
  {
    id: "bakes",
    icon: Clock,
    title: "Slow Bakes",
    description:
      "Sourdough toasts, cinnamon snickerdoodles, and gluten-free treats baked fresh daily.",
    bgColor: "bg-mustard",
    textColor: "text-brown",
  },
];

export interface MenuItem {
  name: string;
  price: number;
}

export const MENU_ITEMS: MenuItem[] = [
  { name: "Espresso Tonic", price: 220 },
  { name: "Vietnamese Cold Brew", price: 240 },
  { name: "Classic Snickerdoodle", price: 120 },
  { name: "Mushroom Bagel", price: 280 },
  { name: "Hot Chocolate (Dark)", price: 210 },
  { name: "Seasonal Fruit Tart", price: 190 },
];

export const MENU_CONFIG = {
  title: "what we brew.",
  boardTitle: "CURRENT ROTATION",
  disclaimer: "* Prices exclusive of taxes. Oat milk available.",
  ctaButton: "Download Full Menu",
};
