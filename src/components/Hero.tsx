import { GridSection } from "./ui/GridSection";
import { WobblyButton } from "./ui/WobblyButton";

export const Hero = () => {
  return (
    <GridSection className="pt-32 md:pt-40">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block bg-mustard border-2 border-brown px-3 py-1 font-['Space_Mono'] text-sm font-bold mb-6 -rotate-2">
            YOUR NEIGHBORHOOD LIVING ROOM
          </span>
          <h1 className="text-6xl md:text-7xl font-['Fredoka'] font-black leading-[0.9] mb-8 text-brown">
            coffee,
            <br />
            culture,
            <br />
            community.
          </h1>
          <p className="text-lg md:text-xl mb-10 leading-relaxed opacity-90">
            Snicker Doodle is more than a cafe. It's a canvas for connection.
            Serving specialty coffee, handmade zines, and slow rituals in the
            heart of Kalyan & Ambernath.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WobblyButton>View Menu</WobblyButton>
            <WobblyButton variant="outline">Upcoming Events</WobblyButton>
          </div>
        </div>

        {/* Hero Image Collage */}
        <div className="relative h-100 hidden md:block">
          {/* Placeholder images - replace with real shots */}
          <div className="absolute top-0 right-0 w-64 h-80 bg-white border-2 border-brown rotate-3 z-10 p-2 shadow-lg">
            <img
              src="/api/placeholder/400/500"
              alt="Coffee Pour"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 left-10 w-60 h-60 bg-mustard border-2 border-brown -rotate-6 z-0 flex items-center justify-center overflow-hidden">
            <img
              src="/api/placeholder/400/400"
              alt="Cafe Vibe"
              className="w-full h-full object-cover mix-blend-multiply opacity-80"
            />
          </div>
        </div>
      </div>
    </GridSection>
  );
};
