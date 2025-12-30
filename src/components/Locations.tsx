import React from "react";
import { GridSection } from "./ui/GridSection";
import { LocationCard } from "./ui/LocationCard";

export const Locations: React.FC = () => {
  return (
    <GridSection bg="#F5F1E3" id="locations">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-['Stinger'] font-bold mb-4">
          find your spot
        </h2>
        <p className="font-['Lexend_Deca'] text-gray-600">
          TWO LOCATIONS • ONE VIBE
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <LocationCard
          title="KALYAN (HQ)"
          address="Shop 4, Mangeshi World, Beside D-Mart, Kalyan West, 421301."
        />
        <LocationCard
          title="AMBERNATH"
          address="Plot 45, Near Shiv Mandir, Ambernath East, 421501."
        />
      </div>
    </GridSection>
  );
};
