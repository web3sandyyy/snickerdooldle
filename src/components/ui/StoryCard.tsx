import React from "react";

interface StoryCardProps {
  title: string;
  date: string;
  image: string;
}

export const StoryCard: React.FC<StoryCardProps> = ({ title, date, image }) => (
  <div className="min-w-[300px] md:min-w-[350px] bg-white border-2 border-brown p-3 shadow-md snap-center">
    <div className="aspect-square bg-gray-200 mb-3 overflow-hidden border border-brown">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
      />
    </div>
    <h4 className="font-['Fredoka'] font-bold text-xl text-brown">
      {title}
    </h4>
    <p className="font-['Space_Mono'] text-xs text-gray-500 mt-1">{date}</p>
  </div>
);
