export interface NavLink {
  label: string;
  href: string;
  id: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "ABOUT", href: "#about", id: "about" },
  { label: "LOCATIONS", href: "#locations", id: "locations" },
  { label: "MENU", href: "#menu", id: "menu" },
  { label: "STORIES", href: "#stories", id: "stories" },
];

export const MOBILE_NAV_LINKS: NavLink[] = [
  { label: "About", href: "#about", id: "about" },
  { label: "Locations", href: "#locations", id: "locations" },
  { label: "Menu", href: "#menu", id: "menu" },
  { label: "Stories", href: "#stories", id: "stories" },
];

export const HEADER_CONFIG = {
  logoPath: "/logo/logo-nobg.png",
  logoAlt: "Snicker Doodle Logo",
  brandName: "snicker doodle.",
  ctaButton: {
    text: "Order Now",
    action: "order",
  },
};
