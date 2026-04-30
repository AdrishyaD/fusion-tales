"use client";

import { motion } from "framer-motion";
import { Activity, Users, Clock } from "lucide-react";

export default function LiveVibe() {
  return (
    <section className="py-24 relative -mt-20 z-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 neon-border relative overflow-hidden"
        >
          {/* Subtle animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-neonTeal/5 to-neonRed/5 animate-pulse-slow pointer-events-none" />

          <div className="flex-1 relative z-10">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-2 h-2 rounded-full bg-neonRed animate-pulse" />
              <h3 className="text-neonRed font-display font-bold tracking-widest uppercase text-sm">
                Live Now
              </h3>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
              The Fusion Experience
            </h2>
            <p className="text-gray-400 font-light">Join the rhythm of the city.</p>
          </div>

          <div className="flex-1 w-full grid grid-cols-2 md:grid-cols-3 gap-4 relative z-10">
            <div className="bg-void/50 p-4 rounded-2xl border border-white/5 flex flex-col gap-2">
              <Activity className="w-5 h-5 text-neonTeal" />
              <p className="text-sm text-gray-500 uppercase tracking-wider font-display text-[10px]">Vibe</p>
              <p className="text-white font-medium">DJ & Deep House</p>
            </div>
            <div className="bg-void/50 p-4 rounded-2xl border border-white/5 flex flex-col gap-2">
              <Users className="w-5 h-5 text-gold" />
              <p className="text-sm text-gray-500 uppercase tracking-wider font-display text-[10px]">Crowd Level</p>
              <p className="text-white font-medium">High Energy</p>
            </div>
            <div className="bg-void/50 p-4 rounded-2xl border border-white/5 flex flex-col gap-2 col-span-2 md:col-span-1">
              <Clock className="w-5 h-5 text-white" />
              <p className="text-sm text-gray-500 uppercase tracking-wider font-display text-[10px]">Peak Hours</p>
              <p className="text-white font-medium">7PM – 11PM</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
