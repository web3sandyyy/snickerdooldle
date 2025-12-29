import React from "react";
import { Heart } from "lucide-react";
import { GridSection } from "./ui/GridSection";

export const Testimonials: React.FC = () => {
  return (
    <GridSection bg="#FBBC12">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block bg-brown text-beige p-3 rounded-full mb-6">
          <Heart fill="#F5F1E3" />
        </div>
        <h2 className="text-3xl md:text-5xl font-['Fredoka'] font-bold mb-12 text-brown">
          "Finally, a place in Kalyan that gets it. The coffee is serious, but
          the vibe is not."
        </h2>
        <div className="flex justify-center items-center gap-4">
          <div className="w-12 h-12 bg-white rounded-full border-2 border-brown overflow-hidden">
            <img src="/api/placeholder/100/100" alt="User" />
          </div>
          <div className="text-left">
            <div className="font-bold font-['Space_Mono']">Riya Sharma</div>
            <div className="text-xs uppercase opacity-80">
              Regular since 2024
            </div>
          </div>
        </div>
      </div>
    </GridSection>
  );
};
