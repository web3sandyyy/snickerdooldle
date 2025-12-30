import photo1 from "../assets/images/indoor1.webp";
import photo2 from "../assets/images/indoor2.webp";
import photo3 from "../assets/images/outdoor1.webp";
import photo4 from "../assets/images/food1.webp";
import photo5 from "../assets/images/food2.webp";
import photo6 from "../assets/images/food3.webp";

export const galleryPhotos = [
  {
    id: 1,
    image: photo1,
    alt: "Cafe interior",
    caption: "cozy corner",
    rotation: "rotate-2",
    bgColor: "bg-sage/20",
    translate: "",
  },
  {
    id: 2,
    image: photo2,
    alt: "Coffee brewing",
    caption: "the brew bar",
    rotation: "-rotate-3",
    bgColor: "bg-accent/20",
    translate: "md:translate-y-8",
  },
  {
    id: 3,
    image: photo3,
    alt: "Outdoor seating",
    caption: "outdoor vibes",
    rotation: "rotate-1",
    bgColor: "bg-magenta/10",
    translate: "col-span-2 md:col-span-1",
  },
  {
    id: 4,
    image: photo4,
    alt: "Cafe details",
    caption: "little details",
    rotation: "-rotate-2",
    bgColor: "bg-sage/30",
    translate: "md:-translate-y-4",
  },
  {
    id: 5,
    image: photo5,
    alt: "Food spread",
    caption: "fresh bites",
    rotation: "rotate-3",
    bgColor: "bg-accent/30",
    translate: "",
  },
  {
    id: 6,
    image: photo6,
    alt: "Community gathering",
    caption: "together",
    rotation: "-rotate-1",
    bgColor: "bg-magenta/20",
    translate: "md:translate-y-6",
  },
];
