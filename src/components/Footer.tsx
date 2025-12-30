import { ArrowRight } from "lucide-react";
import { FOOTER_BOXES, SOCIAL_LINKS, FOOTER_CONFIG } from "../constants/footer";

export const Footer = () => {
  return (
    <div className="p-8 bg-brown">
      {/* Decorative "End of Zine" Marker */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* --- INTERACTIVE CARDS (Suggestion, Library, Feedback) --- */}
        {FOOTER_BOXES.map((box, index) => {
          const rotationClass =
            index % 2 === 0 ? "hover:-rotate-2" : "hover:rotate-2";

          return (
            <div
              key={box.id}
              className={`
                group relative bg-[#F5F1E3]/5 border border-[#F5F1E3]/20 p-8 rounded-xl 
                transition-all duration-300 ${rotationClass} hover:bg-[#F5F1E3] hover:text-[#4A1215]
                hover:shadow-[8px_8px_0px_0px_#FBBC12] bg-white
              `}
            >
              <h3 className="font-['Stinger'] font-bold text-2xl mb-3 leading-none">
                {box.title}
              </h3>
              <p className="font-['Space_Mono'] text-xs mb-6 opacity-80 group-hover:opacity-100 leading-relaxed">
                {box.description}
              </p>

              {/* Input Type: "Fill in the blank" style */}
              {box.type === "input" && (
                <div className="relative">
                  <input
                    className="w-full bg-transparent border-b-2 border-current py-2 text-sm focus:outline-none placeholder:text-current/50 placeholder:italic"
                    placeholder={box.placeholder}
                  />
                  <div className="absolute right-0 bottom-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight size={16} />
                  </div>
                </div>
              )}

              {/* Button Type: Underlined Action */}
              {box.type === "button" && (
                <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide border-b-2 border-[#FBBC12] pb-0.5 group-hover:border-[#4A1215]">
                  {box.actionText} <ArrowRight size={14} />
                </button>
              )}
            </div>
          );
        })}

        {/* --- NEWSLETTER "TICKET" --- */}
        <div className="relative border-2 border-dashed border-[#F5F1E3]/30 p-8 rounded-xl bg-[#FBBC12] text-[#4A1215] overflow-hidden group hover:scale-[1.02] transition-transform">
          {/* Decorative Circles (Ticket Holes) */}
          <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#4A1215] rounded-full" />
          <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#4A1215] rounded-full" />

          <h3 className="font-['Stinger'] font-black text-3xl mb-2 uppercase leading-none">
            {FOOTER_CONFIG.newsletter.title}
          </h3>
          <p className="font-['Space_Mono'] text-xs font-bold mb-6 opacity-80">
            {FOOTER_CONFIG.newsletter.description}
          </p>

          <div className="flex items-stretch bg-white border-2 border-[#4A1215] rounded-lg overflow-hidden shadow-[4px_4px_0px_0px_#4A1215]">
            <input
              className="bg-transparent w-full px-4 py-2 text-sm font-bold placeholder:font-normal focus:outline-none"
              placeholder={FOOTER_CONFIG.newsletter.placeholder}
            />
            <button className="bg-[#4A1215] text-[#F5F1E3] px-4 hover:bg-black transition-colors">
              <ArrowRight size={18} />
            </button>
          </div>

          <div className="mt-4 text-[10px] text-center opacity-60">
            * NO SPAM, JUST VIBES.
          </div>
        </div>
      </div>

      {/* --- BOTTOM LINKS (The "Fine Print") --- */}
      <div className="mt-24 pt-8 border-t border-[#F5F1E3]/10 flex flex-col md:flex-row justify-between items-center gap-6  text-xs opacity-60 text-white">
        <div className="uppercase tracking-widest">
          {FOOTER_CONFIG.copyright}
        </div>

        <div className="flex gap-8">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group flex items-center gap-2 text-white transition-colors"
            >
              <span className="group-hover:underline decoration-wavy decoration-[#FBBC12] underline-offset-4">
                {link.label}
              </span>
              {link.badge && (
                <span className="bg-[#FBBC12] text-[#4A1215] px-1.5 py-0.5 rounded text-[10px] font-bold rotate-12 group-hover:rotate-0 transition-transform">
                  {link.badge}
                </span>
              )}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
