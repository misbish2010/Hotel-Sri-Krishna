// src/components/Gallery.jsx
import React, { useState } from "react";
import Slider from "react-slick";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const photos = [
  { src: "https://images.unsplash.com/photo-1501117716987-c8e63d0c2f3c?auto=format&fit=crop&w=800&q=60" },
  { src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=60" },
  { src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=60" },
  { src: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=60" },
  { src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=60" },
  { src: "https://images.unsplash.com/photo-1505691723518-36a2a6d3b1f6?auto=format&fit=crop&w=800&q=60" },
];

export default function HotelGallery() {
  const [index, setIndex] = useState(-1);

  // Mobile carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <section id="gallery" className="py-12">
      <h2 className="text-center text-3xl font-serif mb-8">Gallery</h2>

      {/* Desktop Auto-scroll Strip */}
      <div className="hidden md:block overflow-hidden">
        <div className="flex animate-slide gap-4">
          {[...photos, ...photos].map((p, i) => (
            <img
              key={i}
              src={p.src}
              alt={`Hotel photo ${i}`}
              className="w-72 h-48 object-cover rounded-lg shadow cursor-pointer"
              loading="lazy"
              onClick={() => setIndex(i % photos.length)}
            />
          ))}
        </div>
      </div>

      {/* Mobile Carousel */}
      <div className="block md:hidden">
        <Slider {...settings}>
          {photos.map((p, i) => (
            <div key={i} className="px-2">
              <img
                src={p.src}
                alt={`Gallery ${i}`}
                className="w-full h-64 object-cover rounded-lg shadow cursor-pointer"
                loading="lazy"
                onClick={() => setIndex(i)}
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Lightbox for both */}
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={photos.map((p) => ({ src: p.src }))}
      />
    </section>
  );
}
