"use client";

import { motion } from "framer-motion";
import { useState, MouseEvent } from "react";

const allItems = [
  // 🍝 Pasta Trio
  { name: "Creamy Alfredo", category: "Pasta", price: "₹100 / ₹130", img: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { name: "Spicy Arrabbiata", category: "Pasta", price: "₹80 / ₹110", img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { name: "Pink Rosa", category: "Pasta", price: "₹100 / ₹130", img: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  
  // 🟢 Veg Starters
  { name: "Veg Ball Manchurian", category: "Veg Starter", price: "₹60 / ₹100", img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { name: "Chilli Paneer", category: "Veg Starter", price: "₹90 / ₹170", img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { name: "Paneer Manchurian", category: "Veg Starter", price: "₹80 / ₹170", img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { name: "Paneer 65", category: "Veg Starter", price: "₹90 / ₹170", img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { name: "Dragon Paneer", category: "Veg Starter", price: "₹100 / ₹190", img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { name: "Crispy Corn", category: "Veg Starter", price: "₹60 / ₹120", img: "https://images.unsplash.com/photo-1517618258380-6056637b51b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { name: "Honey Chilli Potato", category: "Veg Starter", price: "₹100 / ₹180", img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },

  // 🔴 Non-Veg Starters
  { name: "Drums of Heaven", category: "Non-Veg Starter", price: "₹90 / ₹180", img: "https://images.unsplash.com/photo-1525755662778-989d0524087e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { name: "Dragon Chicken", category: "Non-Veg Starter", price: "₹90 / ₹180", img: "https://images.unsplash.com/photo-1525755662778-989d0524087e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { name: "Chilli Chicken", category: "Non-Veg Starter", price: "₹90 / ₹180", img: "https://images.unsplash.com/photo-1525755662778-989d0524087e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { name: "Chicken Majestic", category: "Non-Veg Starter", price: "₹100 / ₹190", img: "https://images.unsplash.com/photo-1525755662778-989d0524087e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { name: "Crispy Chicken", category: "Non-Veg Starter", price: "₹100 / ₹200", img: "https://images.unsplash.com/photo-1569058242253-113ccf3bd07c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },

  // 🥪 Sandwich Arena
  { name: "Cheesy Veg Coleslaw", category: "Sandwich", price: "₹80", img: "https://images.unsplash.com/photo-1550508139-2ce138a164c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { name: "Cheesy Paneer Tikka", category: "Sandwich", price: "₹100", img: "https://images.unsplash.com/photo-1550508139-2ce138a164c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { name: "Cheesy Chicken Tikka", category: "Sandwich", price: "₹120", img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { name: "Hot Garlic Chicken", category: "Sandwich", price: "₹90", img: "https://images.unsplash.com/photo-1481070555726-e2fe8357725c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },

  // 🍜 Noodles
  { name: "Hakka Noodles (Chicken)", category: "Noodles", price: "₹70 / ₹120", img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { name: "Chilli Garlic Noodles (Veg)", category: "Noodles", price: "₹60 / ₹100", img: "https://images.unsplash.com/photo-1552611052-33e04de081de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { name: "Schezwan Noodles (Egg)", category: "Noodles", price: "₹70 / ₹120", img: "https://images.unsplash.com/photo-1552611052-33e04de081de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },

  // ☕ Coffee Classics
  { name: "Cappuccino", category: "Coffee", price: "₹80", img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { name: "Hazelnut Cappuccino", category: "Coffee", price: "₹130", img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },

  // 🧊 Cold Coffee Range
  { name: "FT Special Cold Coffee", category: "Cold Coffee", price: "₹150", img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { name: "Iced Mocha", category: "Cold Coffee", price: "₹90", img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
];

export default function InteractiveMenu() {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section id="menu" className="py-32 bg-obsidian relative z-20 overflow-hidden" onMouseMove={handleMouseMove}>
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-24 flex justify-between items-end">
          <h2 className="text-sm font-sans uppercase tracking-[0.4em] text-stone">
            The Full Index
          </h2>
          <span className="text-xs font-mono text-flame tracking-widest uppercase">Est. 2026</span>
        </div>

        <div className="flex flex-col border-t border-bone/10 relative">
          {allItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => setHoveredImage(item.img)}
              onMouseLeave={() => setHoveredImage(null)}
              className="group flex items-center justify-between py-8 border-b border-bone/10 hover-trigger hover:px-6 transition-all duration-500 ease-out"
            >
              <div className="flex items-center gap-12 w-full md:w-auto">
                <span className="font-mono text-stone text-xs hidden md:block">
                  {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                </span>
                <h3 className="text-3xl md:text-5xl font-display font-light text-bone group-hover:text-flame group-hover:italic transition-colors duration-500">
                  {item.name}
                </h3>
              </div>
              <div className="flex items-center gap-12">
                <span className="font-sans text-stone text-xs uppercase tracking-[0.2em] hidden md:block">
                  {item.category}
                </span>
                <span className="font-mono text-bone text-lg group-hover:text-flame transition-colors duration-500">
                  {item.price}
                </span>
              </div>
            </motion.div>
          ))}

          {/* Floating Hover Image */}
          <motion.div
            className="fixed top-0 left-0 w-64 h-80 rounded-sm overflow-hidden pointer-events-none z-50 mix-blend-screen grayscale hidden md:block"
            animate={{
              x: mousePos.x - 128, // Center X
              y: mousePos.y - 160, // Center Y
              opacity: hoveredImage ? 0.6 : 0,
              scale: hoveredImage ? 1 : 0.8,
              rotate: hoveredImage ? (mousePos.x % 10 - 5) : 0 // Subtle rotation based on mouse pos
            }}
            transition={{ type: "tween", ease: "backOut", duration: 0.4 }}
          >
            {hoveredImage && (
              <img src={hoveredImage} alt="Menu preview" className="w-full h-full object-cover opacity-80" />
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
