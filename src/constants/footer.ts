import type { LucideIcon } from "lucide-react";
import { MessageSquare, BookOpen, Mail } from "lucide-react";

export interface FooterBox {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  type: "input" | "button" | "subscribe";
  actionText?: string;
  placeholder?: string;
  variant?: "default" | "highlight";
}

export const FOOTER_BOXES: FooterBox[] = [
  {
    id: "suggestion",
    icon: MessageSquare,
    title: "Suggestion Box",
    description: "Missing a flavor? Tell us.",
    type: "input",
    placeholder: "Type here...",
    variant: "default",
  },
  {
    id: "library",
    icon: BookOpen,
    title: "Community Library",
    description: "Donate a book, get a free brew.",
    type: "button",
    actionText: "How it works",
    variant: "default",
  },
  {
    id: "feedback",
    icon: Mail,
    title: "Feedback",
    description: "We listen to everything.",
    type: "button",
    actionText: "Open Form",
    variant: "default",
  },
];

export interface SocialLink {
  label: string;
  href: string;
  badge?: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "CAREERS", href: "/career", badge: "HIRING" },
  { label: "INSTAGRAM", href: "#" },
  { label: "PRIVACY", href: "#" },
];

export const FOOTER_CONFIG = {
  copyright: "© 2025 SNICKER DOODLE COFFEEWORKS",
  newsletter: {
    title: "Don't miss the drop.",
    description: "Event updates & secret menus.",
    placeholder: "Email",
  },
};
