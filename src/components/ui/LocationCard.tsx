import React from "react";
import { MapPin, ExternalLink } from "lucide-react";
import { WobblyButton } from "./WobblyButton";

interface LocationCardProps {
  title: string;
  address: string;
  mapLink?: string;
}

export const LocationCard: React.FC<LocationCardProps> = ({
  title,
  address,
}) => (
  <div className="bg-white border-2 border-brown p-0 overflow-hidden shadow-[6px_6px_0px_0px_rgba(74,18,21,1)] hover:rotate-1 transition-transform">
    {/* Fake Map Header */}
    <div className="bg-gray-100 border-b-2 border-brown p-4 flex justify-between items-center">
      <div className="flex items-center gap-2 text-brown">
        <MapPin size={18} />
        <span className="font-bold font-['Lexend_Deca']">{title}</span>
      </div>
      <ExternalLink size={16} className="text-gray-500" />
    </div>
    {/* Fake Map Visual */}
    <div className="h-32 bg-[#e5e7eb] relative">
      <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-['Lexend_Deca'] text-xs">
        [ GOOGLE MAPS PREVIEW ]
      </div>
    </div>
    <div className="p-6">
      <p className="font-['Lexend_Deca'] text-brown mb-4 text-sm leading-relaxed">
        {address}
      </p>
      <WobblyButton
        variant="outline"
        className="w-full justify-center text-sm py-2"
      >
        Get Directions
      </WobblyButton>
    </div>
  </div>
);
