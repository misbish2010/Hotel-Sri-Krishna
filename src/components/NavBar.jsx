// src/components/Navbar.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from '../images/logo_circle_black_inside.png';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed w-full z-30 bg-white/60 backdrop-blur-md shadow-sm"
    >
      <div className="container-max px-4 py-3 flex items-center justify-between">
        {/* Logo / Name */}

        <a href="#home" className="flex items-center space-x-2">
          <img src={logo} alt="Hotel Sri Krishna Logo" className="h-10 w-auto" />
          <span className="text-2xl font-serif text-royal">Hotel Sri Krishna</span>
        </a>

        {/* Desktop Menu */}
        <div className="space-x-6 hidden md:flex">
          <a href="#home" className="text-sm hover:text-royal">
            Home
          </a>
          <a href="#rooms" className="text-sm hover:text-royal">
            Rooms
          </a>
          <a href="#gallery" className="text-sm hover:text-royal">
            Gallery
          </a>
          <a href="#about" className="text-sm hover:text-royal">
            About
          </a>
          <a href="#contact" className="text-sm hover:text-royal">
            Contact
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-royal text-xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 shadow-lg">
          <div className="flex flex-col space-y-4 px-6 py-4 text-royal">
            <a href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>
            <a href="#rooms" onClick={() => setMenuOpen(false)}>
              Rooms
            </a>
            <a href="#gallery" onClick={() => setMenuOpen(false)}>
              Gallery
            </a>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </div>
        </div>
      )}
    </motion.nav>
  );
}
