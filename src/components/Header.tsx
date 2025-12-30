import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu as MenuIcon, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, MOBILE_NAV_LINKS, HEADER_CONFIG } from "../constants/header";
import { WobblyButton } from "./ui/WobblyButton";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-beige border-b-2 border-brown px-4 py-2 flex justify-between items-center shadow-sm group">
      <Link to="/" className="flex items-center ">
        <img
          src={HEADER_CONFIG.logoPath}
          alt={HEADER_CONFIG.logoAlt}
          className="w-10 h-10  object-contain group-hover:rotate-360 duration-1000"
        />
        <span className="text-xl md:text-2xl font-['Stinger'] font-medium tracking-tighter text-brown">
          {HEADER_CONFIG.brandName}
        </span>
      </Link>

      <div className="hidden md:flex gap-8 font-['Lexend_Deca'] font-bold text-sm tracking-wide ">
        {NAV_LINKS.map((link) => (
          <a
            key={link.id}
            href={link.href}
            className=" transition-colors hover:underline decoration-wavy duration-200"
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="flex gap-4">
        <WobblyButton className="shadow-brown/50 hidden md:block !px-4 !py-1.5 rounded-full font-bold text-sm"> {HEADER_CONFIG.ctaButton.text}</WobblyButton>
        {/* <button className="hidden md:block bg-brown text-beige px-4 py-1.5 rounded-full font-bold text-sm hover:bg-accent hover:text-brown transition-colors">
          {HEADER_CONFIG.ctaButton.text}
        </button> */}
        <motion.button
          className="md:hidden text-brown"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          animate={{ rotate: isMenuOpen ? 90 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {isMenuOpen ? <X /> : <MenuIcon />}
        </motion.button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute top-full left-0 w-full bg-beige border-b-2 border-brown overflow-hidden z-50 shadow-xl"
          >
            <div className="p-6 flex flex-col gap-6 font-bold text-xl">
              {MOBILE_NAV_LINKS.map((link, index) => (
                <motion.a
                  key={link.id}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="/career"
                className=""
                onClick={() => setIsMenuOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: MOBILE_NAV_LINKS.length * 0.1 }}
              >
                We're Hiring!
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
    </nav>
  );
};
