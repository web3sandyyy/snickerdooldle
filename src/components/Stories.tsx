import { ArrowRight } from "lucide-react";
import { GridSection } from "./ui/GridSection";
import { StoryCard } from "./ui/StoryCard";

export const Stories= () => {
  return (
    <GridSection bg="#fff" id="stories">
      <div className="flex justify-between items-end mb-8 px-2">
        <h2 className="text-4xl md:text-5xl font-['Fredoka'] font-bold text-brown">
          recent stories.
        </h2>
        <div className="flex gap-2 text-brown">
          <span className="font-['Space_Mono'] text-sm">
            SCROLL FOR VIBES
          </span>
          <ArrowRight />
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="flex overflow-x-auto pb-8 gap-6 snap-x hide-scrollbar">
        <StoryCard
          title="Gaali Geet Night"
          date="OCT 24"
          image="/api/placeholder/400/400"
        />
        <StoryCard
          title="Brewing 101"
          date="OCT 18"
          image="/api/placeholder/400/401"
        />
        <StoryCard
          title="Sunday Brunch"
          date="OCT 12"
          image="/api/placeholder/400/402"
        />
        <StoryCard
          title="Zine Making"
          date="OCT 05"
          image="/api/placeholder/400/403"
        />
        <StoryCard
          title="Live Jazz"
          date="SEP 28"
          image="/api/placeholder/400/404"
        />
        <StoryCard
          title="New Bean Launch"
          date="SEP 20"
          image="/api/placeholder/400/405"
        />
      </div>
    </GridSection>
  );
};
