"use client";

import { motion } from "framer-motion";

export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1541592102775-7b56e6d19485?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1563805042-7684c8a9e9cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  ];

  // Duplicate for infinite scroll loop
  const duplicatedImages = [...images, ...images];

  return (
    <section id="gallery" className="py-24 bg-primaryVoid relative overflow-hidden">
      {/* Grain overlay for cinematic feel */}
      <div className="grain-overlay" />

      <div className="container mx-auto px-6 max-w-7xl mb-12 relative z-10">
        <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter text-highlight">
          Visual <span className="text-accentText">Tasting</span>
        </h2>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative w-full flex overflow-hidden">
        {/* Left/Right Fade Masks to blend into void */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-primaryVoid to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-primaryVoid to-transparent z-10 pointer-events-none" />
        
        <div className="flex w-max animate-scroll">
          {duplicatedImages.map((src, idx) => (
            <div
              key={idx}
              className="relative w-72 h-96 md:w-96 md:h-[30rem] mx-4 overflow-hidden group cursor-pointer"
            >
              <img 
                src={src} 
                alt={`Gallery image ${idx}`} 
                className="w-full h-full object-cover feathered-mask grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-[0.16,1,0.3,1] group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
