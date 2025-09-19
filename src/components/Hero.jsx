// src/components/Hero.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const heroImages = [
  "/images/hero/1.jpg",
  "/images/hero/2.jpg",
  "/images/hero/3.jpg",
  "/images/hero/4.jpg",
  "/images/hero/6.jpg",
  "/images/hero/7.jpg",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 6000); // switch every 6 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background slideshow */}
      <div className="absolute inset-0">
        <AnimatePresence>
          <motion.img
            key={current}
            src={heroImages[current]}
            alt="Hotel Sri Krishna"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </AnimatePresence>
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Hero content */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative text-center text-white px-6 z-10"
      >
        <h1 className="text-4xl md:text-6xl font-serif mb-4 drop-shadow-lg">
          Welcome to <span className="block md:inline">Hotel Sri Krishna</span>
        </h1>

        <p className="mb-6 text-lg md:text-xl font-light">
          Comfort & Tradition in the Heart of Koraput
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#rooms"
            className="bg-gold text-royal font-semibold px-6 py-3 rounded-xl shadow hover:bg-white hover:text-royal transition"
          >
            Explore Rooms
          </a>
          <a
            href="https://wa.me/918895575244?text=Hello%20Hotel%20Sri%20Krishna"
            target="_blank"
            rel="noreferrer"
            className="bg-white/90 text-royal px-6 py-3 rounded-xl shadow hover:bg-gold hover:text-white transition"
          >
            Chat on WhatsApp
          </a>
        </div>
      </motion.div>
    </section>
  );
}
