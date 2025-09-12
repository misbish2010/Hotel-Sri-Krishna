// src/components/Hero.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const heroImages = [
  "https://images.unsplash.com/photo-1501117716987-c8e63d0c2f3c?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=80",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Auto change every 6s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background slideshow */}
      {heroImages.map((img, i) => (
        <motion.div
          key={i}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${img})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: i === current ? 1 : 0 }}
          transition={{ duration: 1.5 }}
        />
      ))}

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative text-center text-white px-4 z-10"
      >

<h1 className="text-4xl md:text-6xl font-serif mb-4 leading-tight">
  Welcome to
  <br className="block md:hidden" />
  Hotel Sri Krishna
</h1>



        <p className="mb-6 text-lg md:text-xl">Comfort & Tradition in the Heart of Koraput</p>
        <div className="flex gap-4 justify-center">
          <a href="#rooms" className="bg-gold text-royal font-semibold px-6 py-3 rounded shadow">
            Explore Rooms
          </a>
          <a
            href="https://wa.me/91XXXXXXXXXX?text=Hello%20Hotel%20Sri%20Krishna"
            target="_blank"
            rel="noreferrer"
            className="bg-white/90 text-royal px-6 py-3 rounded"
          >
            Chat on WhatsApp
          </a>
        </div>
      </motion.div>
    </section>
  );
}
