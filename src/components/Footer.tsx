import { ArrowRight } from "lucide-react";
import { GridSection } from "./ui/GridSection";
import { FOOTER_BOXES, SOCIAL_LINKS, FOOTER_CONFIG } from "../constants/footer";

export const Footer = () => {
  return (
    <GridSection bg="#2D0A0C" className="text-beige">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        {FOOTER_BOXES.map((box) => {
          const Icon = box.icon;
          return (
            <div
              key={box.id}
              className="border border-beige/20 p-6 rounded-lg hover:bg-beige/5 transition-colors"
            >
              <Icon className="mb-4 text-accent" />
              <h3 className="font-bold text-xl mb-2">{box.title}</h3>
              <p className="text-sm opacity-70 mb-4">{box.description}</p>
              {box.type === "input" && (
                <input
                  className="bg-transparent border-b border-beige/30 w-full py-1 focus:outline-none text-sm"
                  placeholder={box.placeholder}
                />
              )}
              {box.type === "button" && (
                <button className="text-accent text-sm underline">
                  {box.actionText}
                </button>
              )}
            </div>
          );
        })}

        {/* Newsletter Box */}
        <div className="border border-beige/20 p-6 rounded-lg bg-accent text-brown">
          <h3 className="font-bold text-xl mb-2 font-['Stinger']">
            {FOOTER_CONFIG.newsletter.title}
          </h3>
          <p className="text-sm mb-4">{FOOTER_CONFIG.newsletter.description}</p>
          <div className="flex bg-white rounded overflow-hidden p-1">
            <input
              className="bg-transparent w-full px-2 text-sm focus:outline-none"
              placeholder={FOOTER_CONFIG.newsletter.placeholder}
            />
            <button className="bg-brown text-white p-2 rounded hover:bg-black">
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* BOTTOM LINKS */}
      <div className="mt-20 pt-8 border-t border-beige/10 flex flex-col md:flex-row justify-between items-center gap-6 font-['Lexend_Deca'] text-xs opacity-60">
        <div>{FOOTER_CONFIG.copyright}</div>
        <div className="flex gap-6">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-white hover:underline flex items-center gap-1"
            >
              {link.label}{" "}
              {link.badge && (
                <span className="bg-accent text-brown px-1 rounded text-[10px]">
                  {link.badge}
                </span>
              )}
            </a>
          ))}
        </div>
      </div>
    </GridSection>
  );
};
