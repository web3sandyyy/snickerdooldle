import React from "react";
import { theme } from "../../theme/config";

interface GridSectionProps {
  bg?: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const GridSection = ({
  bg = theme.beige,
  children,
  className = "",
  id,
}: GridSectionProps) => (
  <div
    id={id}
    className={`relative border-b-2 border-brown overflow-hidden ${className}`}
    style={{ backgroundColor: bg }}
  >
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: `linear-gradient(${theme.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${theme.gridColor} 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
      }}
    />
    <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
      {children}
    </div>
  </div>
);
