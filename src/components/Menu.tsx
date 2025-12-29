import { GridSection } from "./ui/GridSection";
import { WobblyButton } from "./ui/WobblyButton";
import { MENU_CATEGORIES, MENU_ITEMS, MENU_CONFIG } from "../constants/menu";

export const Menu = () => {
  return (
    <GridSection bg="#F5F1E3" id="menu">
      <div className="grid md:grid-cols-12 gap-12">
        {/* Left: Description */}
        <div className="md:col-span-5">
          <h2 className="text-5xl font-['Stinger'] font-bold mb-8">
            {MENU_CONFIG.title}
          </h2>
          <div className="space-y-8">
            {MENU_CATEGORIES.map((category) => {
              const Icon = category.icon;
              return (
                <div key={category.id} className="flex gap-4">
                  <div
                    className={`w-12 h-12 rounded-full ${category.bgColor} ${category.textColor} flex items-center justify-center shrink-0`}
                  >
                    <Icon />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">{category.title}</h3>
                    <p className="opacity-80">{category.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-12">
            <WobblyButton>{MENU_CONFIG.ctaButton}</WobblyButton>
          </div>
        </div>

        {/* Right: The Menu Board */}
        <div className="md:col-span-7 bg-brown text-beige p-8 md:p-12 rounded-lg relative shadow-[10px_10px_0px_0px_rgba(0,0,0,0.2)]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gray-400 rounded-full border-2 border-[#2a0a0c]"></div>
          <h3 className="text-center font-['Stinger'] text-2xl mb-8 border-b border-beige/20 pb-4">
            {MENU_CONFIG.boardTitle}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 font-['Lexend_Deca']">
            {MENU_ITEMS.map((item, index) => (
              <div key={index} className="flex justify-between items-end">
                <span>{item.name}</span>
                <span className="border-b border-dotted border-beige/50 grow mx-2"></span>
                <span>₹{item.price}</span>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-xs font-['Lexend_Deca'] opacity-60">
            {MENU_CONFIG.disclaimer}
          </p>
        </div>
      </div>
    </GridSection>
  );
};
