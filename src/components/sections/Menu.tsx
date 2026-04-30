"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const menuCategories = [
  {
    title: "Fusion Sandwiches",
    items: [
      { name: "Paneer Tikka Press", desc: "Smoky, spicy, and perfectly pressed.", price: "₹180" },
      { name: "Dragon Chicken", desc: "Finger-sized strips in hot garlic sauce.", price: "₹220" },
    ],
    bestseller: "Paneer Tikka Press",
    color: "amber",
  },
  {
    title: "Artisanal Pizzas",
    items: [
      { name: "The Indo-Italian", desc: "Makhani sauce base with mozzarella & basil.", price: "₹350" },
      { name: "Continental Edge", desc: "Truffle oil, wild mushrooms, and parmesan.", price: "₹420" },
    ],
    color: "emerald",
  },
  {
    title: "Signature Mocktails",
    items: [
      { name: "Spicy Marshal", desc: "Crafted Alchemy. Shaken for the sophisticated.", price: "₹150" },
      { name: "Virgin Mojito", desc: "Classic mint, muddled lime, crisp soda.", price: "₹130" },
    ],
    bestseller: "Spicy Marshal",
    color: "emerald",
  },
  {
    title: "Premium Shakes",
    items: [
      { name: "Black Currant", desc: "High-fidelity creaminess.", price: "₹190" },
      { name: "Oreo KitKat Overload", desc: "Decadent chocolate fusion.", price: "₹210" },
    ],
    color: "amber",
  },
];

export default function Menu() {
  return (
    <section id="menu" className="py-24 relative bg-charcoal/20">
      {/* Void Dust Particles Simulation */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-display font-bold uppercase tracking-widest">
            The Interactive Menu
          </h2>
          <p className="mt-4 text-gray-400 font-light tracking-wide">Hover to explore the alchemy</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {menuCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`group relative p-8 glass rounded-2xl overflow-hidden border border-white/5 transition-all duration-500 hover:border-${category.color}/30`}
            >
              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br from-${category.color}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <h3 className="text-2xl font-display font-bold mb-6 tracking-wide relative z-10">
                {category.title}
              </h3>
              
              <div className="space-y-6 relative z-10">
                {category.items.map((item) => (
                  <div key={item.name} className="group/item">
                    <div className="flex justify-between items-end mb-2">
                      <div className="flex items-center gap-3">
                        <h4 className="text-lg font-medium text-white group-hover/item:text-amber transition-colors">
                          {item.name}
                        </h4>
                        {category.bestseller === item.name && (
                          <span className="flex items-center text-[10px] uppercase tracking-wider text-amber border border-amber/30 px-2 py-0.5 rounded-full">
                            <Sparkles className="w-3 h-3 mr-1" /> Bestseller
                          </span>
                        )}
                      </div>
                      <div className="text-gray-300 font-display">{item.price}</div>
                    </div>
                    <p className="text-sm text-gray-500 font-light h-0 opacity-0 overflow-hidden group-hover/item:h-auto group-hover/item:opacity-100 transition-all duration-300">
                      {item.desc}
                    </p>
                    <div className="w-full h-px bg-white/5 mt-4 group-hover/item:bg-white/10 transition-colors" />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
