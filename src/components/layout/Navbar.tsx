"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className={`glass-card px-8 py-4 rounded-full flex items-center justify-between w-full transition-all duration-300 ${
          scrolled ? "bg-void/80 border-white/10" : "bg-transparent border-transparent shadow-none"
        }`}>
          <a href="#" className="flex items-center gap-2">
            <img 
              src="/logo.jpg" 
              alt="Fusion Tales" 
              className="h-10 w-auto rounded-full border border-bone/20 hover:scale-105 transition-transform duration-300"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {["The Vibe", "Menu", "Gallery"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors tracking-widest uppercase font-display"
              >
                {item}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center justify-center bg-white text-void px-6 py-2.5 rounded-full text-xs font-bold hover:bg-gold transition-all duration-300 uppercase tracking-widest"
          >
            Book Table
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </motion.header>
  );
}
