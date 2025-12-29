import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu as MenuIcon, X } from "lucide-react";
import { NAV_LINKS, MOBILE_NAV_LINKS, HEADER_CONFIG } from "../constants/header";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-beige border-b-2 border-brown px-4 py-2 flex justify-between items-center shadow-sm">
      <Link to="/" className="flex items-center ">
        <img
          src={HEADER_CONFIG.logoPath}
          alt={HEADER_CONFIG.logoAlt}
          className="w-10 h-10 md:w-12 md:h-12 object-contain"
        />
        <span className="text-xl md:text-2xl font-['Stinger'] font-black tracking-tighter text-brown">
          {HEADER_CONFIG.brandName}
        </span>
      </Link>

      <div className="hidden md:flex gap-8 font-['Lexend_Deca'] font-bold text-sm tracking-wide ">
        {NAV_LINKS.map((link) => (
          <a
            key={link.id}
            href={link.href}
            className="hover:text-accent transition-colors hover:underline decoration-wavy"
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="flex gap-4">
        <button className="hidden md:block bg-brown text-beige px-4 py-1.5 rounded-full font-bold text-sm hover:bg-accent hover:text-brown transition-colors">
          {HEADER_CONFIG.ctaButton.text}
        </button>
        <button
          className="md:hidden text-brown"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-beige border-b-2 border-brown p-6 flex flex-col gap-6 font-bold text-xl z-50 shadow-xl">
          {MOBILE_NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/career"
            className="text-accent"
            onClick={() => setIsMenuOpen(false)}
          >
            We're Hiring!
          </a>
        </div>
      )}
    </nav>
  );
};
