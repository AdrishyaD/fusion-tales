"use client";

import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section className="py-32 bg-primaryVoid relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 relative"
          >
            {/* The Logo Sun (Eclipse Effect) */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-mintGlow/10 rounded-full blur-[80px] pointer-events-none -z-10" />
            
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-black uppercase tracking-tighter leading-none text-highlight">
              Where Rourkela <br/> Meets the Horizon.
            </h2>
            
            <p className="text-xl md:text-2xl text-accentText font-light leading-relaxed">
              A culinary collision of Indo-Chinese heat and Continental soul. Taste the friction.
            </p>

            <button className="px-8 py-4 bg-transparent border border-mintGlow/30 text-mintGlow font-display font-bold uppercase tracking-widest text-sm rounded-full hover:bg-mintGlow hover:text-primaryVoid transition-colors duration-300 mt-4 text-glow-mint">
              Join the Culture
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[60vh] rounded-[2rem] overflow-hidden glass-card border-white/5"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute w-full h-full object-cover opacity-60 mix-blend-screen"
            >
              <source src="https://assets.mixkit.co/videos/preview/mixkit-liquid-background-with-black-and-purple-colors-31620-large.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-br from-mintGlow/5 to-transparent mix-blend-overlay" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
