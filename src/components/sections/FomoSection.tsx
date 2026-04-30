"use client";

import { motion } from "framer-motion";
import { Flame, MapPin } from "lucide-react";
import { useState, useEffect } from "react";

export default function FomoSection() {
  const [peopleCount, setPeopleCount] = useState(42);

  useEffect(() => {
    // Simulate real-time people looking
    const interval = setInterval(() => {
      setPeopleCount(prev => prev + Math.floor(Math.random() * 5) - 2);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-void border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid md:grid-cols-3 gap-6">
          
          <motion.div 
            whileHover={{ y: -5 }}
            className="glass-card p-8 rounded-3xl flex flex-col items-center text-center justify-center border-t-neonRed/30"
          >
            <div className="w-16 h-16 rounded-full bg-neonRed/10 flex items-center justify-center mb-6">
              <Flame className="w-8 h-8 text-neonRed" />
            </div>
            <h3 className="text-2xl font-display font-bold text-white mb-2">Most Ordered Tonight</h3>
            <p className="text-gray-400 font-light">Spicy Marshal Mocktail</p>
            <div className="mt-4 px-4 py-1 rounded-full bg-neonRed/20 text-neonRed text-xs font-bold uppercase tracking-widest animate-pulse">
              Running Out
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="glass-card p-8 rounded-3xl flex flex-col items-center text-center justify-center border-t-gold/30"
          >
            <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-6">
              <span className="text-3xl">🍕</span>
            </div>
            <h3 className="text-2xl font-display font-bold text-white mb-2">Today's Secret Drop</h3>
            <p className="text-gray-400 font-light">The Truffle Mushroom Edit</p>
            <p className="mt-4 text-gold text-sm font-bold uppercase tracking-widest">
              Only 12 Left
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="glass-card p-8 rounded-3xl flex flex-col items-center text-center justify-center border-t-neonTeal/30"
          >
            <div className="w-16 h-16 rounded-full bg-neonTeal/10 flex items-center justify-center mb-6">
              <MapPin className="w-8 h-8 text-neonTeal" />
            </div>
            <h3 className="text-2xl font-display font-bold text-white mb-2">Live Activity</h3>
            <p className="text-gray-400 font-light">People checking the vibe</p>
            <div className="mt-4 flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neonTeal opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-neonTeal"></span>
              </span>
              <span className="text-white font-display font-bold">{peopleCount} Right Now</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
