import React from "react";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import bg from "../assets/bg.webp";

const reviews = [
  {
    id: 1,
    text: "Finally, a place in Kalyan that gets it. The coffee is serious, but the vibe is not.",
    author: "Riya Sharma",
    role: "Regular since 2024",
    rating: 5,
  },
  {
    id: 2,
    text: "The Origami workshop changed my weekend routine. Best cold brew in the city, hands down.",
    author: "Aditya P.",
    role: "Creative Director",
    rating: 5,
  },
  {
    id: 3,
    text: "I come for the wifi, I stay for the snickerdoodles. A genuine third place.",
    author: "Sarah Jenkins",
    role: "Freelancer",
    rating: 4,
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section className="relative py-20 bg-brown/10">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${bg})` }}
      />
      <div className="max-w-4xl mx-auto px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-['Stinger'] font-bold text-brown mb-2">
            local love.
          </h2>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {reviews.map((review) => (
              <CarouselItem key={review.id} className="md:basis-1/1 pl-4">
                <div className="p-2">
                  <div className="bg-white border-2 border-brown p-8 md:p-10 shadow-[4px_4px_0px_0px_#4A1215] hover:shadow-[2px_2px_0px_0px_#4A1215] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-300">
                    <div className="flex flex-col text-center">
                      <div className="flex gap-1 mb-6 justify-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            fill={i < review.rating ? "#FBBC12" : "none"}
                            stroke={i < review.rating ? "none" : "#4A1215"}
                            className="stroke-1"
                          />
                        ))}
                      </div>

                      <blockquote className="text-xl md:text-2xl font-['Stinger'] leading-tight text-brown mb-6">
                        "{review.text}"
                      </blockquote>

                      <div className="text-sm text-brown/80 mt-4">
                        <div className="font-bold">{review.author}</div>
                        <div className="text-xs text-brown/60">
                          {review.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="hidden md:flex -left-12 bg-white border-2 border-brown text-brown hover:bg-accent w-10 h-10" />
          <CarouselNext className="hidden md:flex -right-12 bg-white border-2 border-brown text-brown hover:bg-accent w-10 h-10" />
        </Carousel>
      </div>
    </section>
  );
};
