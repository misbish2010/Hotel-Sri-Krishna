// src/components/Gallery.jsx
import React, { useState } from "react";
import Slider from "react-slick";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const photos = [
  { src: "/images/gallery/1.JPG", title: "Deluxe AC Room" },
  { src: "/images/gallery/2.jpeg", title: "Non-AC Room" },
  { src: "/images/gallery/3.jpeg", title: "Non-AC Room" },
  { src: "/images/gallery/4.jpeg", title: "Non-AC Room" },
  { src: "/images/gallery/5.jpg", title: "Non-AC Room" },
  { src: "/images/gallery/6.jpg", title: "Non-AC Room" },
  { src: "/images/gallery/7.jpeg", title: "Non-AC Room" },
  { src: "/images/gallery/8.jpeg", title: "Non-AC Room" },
  { src: "/images/gallery/9.jpeg", title: "Non-AC Room" },
  { src: "/images/gallery/10.jpeg", title: "Non-AC Room" },
  { src: "/images/gallery/11.jpeg", title: "Non-AC Room" },
  { src: "/images/gallery/12.jpeg", title: "Non-AC Room" },
  { src: "/images/gallery/13.jpeg", title: "Non-AC Room" },
  { src: "/images/gallery/14.jpeg", title: "Non-AC Room" },
  { src: "/images/gallery/15.jpeg", title: "Non-AC Room" },
  { src: "/images/gallery/16.jpeg", title: "Non-AC Room" },
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
