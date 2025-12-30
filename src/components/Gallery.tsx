import { GridSection } from "./ui/GridSection";
import { galleryPhotos } from "../constants/gallery";

export const Gallery = () => {
  return (
    <GridSection bg="#fff" id="gallery">
      <div className="mb-12 text-center">
        <h2 className="text-4xl md:text-6xl font-['Stinger'] font-bold text-brown mb-4">
          the space.
        </h2>
        <p className="text-brown/70 text-sm">WHERE THE MAGIC HAPPENS</p>
      </div>

      {/* Photo Collage Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
        {galleryPhotos.map((photo) => (
          <div
            key={photo.id}
            className={`relative group cursor-pointer ${photo.translate}`}
          >
            <div
              className={`bg-white border-2 border-brown p-3 ${photo.rotation} hover:rotate-0 transition-all duration-300 shadow-[4px_4px_0px_0px_#4A1215] hover:shadow-[2px_2px_0px_0px_#4A1215] hover:translate-x-[2px] hover:translate-y-[2px]`}
            >
              <div className={`aspect-square ${photo.bgColor} overflow-hidden`}>
                <img
                  src={photo.image}
                  alt={photo.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-xs text-brown mt-2 text-center">
                {photo.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </GridSection>
  );
};
