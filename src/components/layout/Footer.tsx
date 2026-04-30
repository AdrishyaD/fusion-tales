"use client";

import { motion } from "framer-motion";
import { Instagram, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="pt-20 pb-10 bg-void border-t border-white/10 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gold/10 blur-[120px] rounded-[100%] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-display font-bold uppercase tracking-widest text-white mb-4">
              Fusion Tales
            </h2>
            <p className="text-gray-400 font-light max-w-sm mb-8">
              Not Just Food. A Whole Vibe. The ultimate night destination in Rourkela.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-white hover:text-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-white hover:text-gold transition-colors">
                <MapPin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="glass-card p-6 rounded-3xl border-white/5 flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1 w-full relative h-32 rounded-xl overflow-hidden grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              {/* Minimal Map Overlay */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14782.75330368819!2d84.85324545!3d22.23297125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a201c3b1a89c891%3A0xc3e7df2440938b!2sCivil%20Township%2C%20Rourkela%2C%20Odisha!5e0!3m2!1sen!2sin!4v1714400000000!5m2!1sen!2sin" 
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }} 
                loading="lazy" 
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <p className="text-white font-medium mb-1">Municipal Food Court, Udit Nagar</p>
              <p className="text-gray-400 text-sm mb-4">Rourkela, Odisha 769012</p>
              <button className="px-6 py-2 bg-white text-void rounded-full font-display font-bold text-xs uppercase tracking-widest hover:bg-gold transition-colors">
                Get Directions
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs text-gray-500 font-display uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Fusion Tales.</p>
          <p className="mt-2 md:mt-0">Designed in the Void.</p>
        </div>
      </div>
    </footer>
  );
}
