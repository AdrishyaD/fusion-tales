"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen w-full bg-obsidian overflow-hidden flex flex-col items-center justify-center">
      
      {/* Immersive Background Media */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 w-full h-full z-0 mask-editorial"
      >
        <img 
          src="https://images.unsplash.com/photo-1541592102775-7b56e6d19485?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Cinematic Food"
          className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />
      </motion.div>

      {/* Massive Editorial Typography */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center text-center mt-20 pointer-events-none">
        <motion.h1 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-[12vw] leading-[0.8] font-display font-light text-bone tracking-tighter"
        >
          FUSION<br/>
          <span className="italic font-medium text-flame">TALES</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="mt-12 text-stone font-sans text-sm md:text-base uppercase tracking-[0.4em] max-w-md mx-auto"
        >
          A Culinary Collision.<br/> Rourkela, Odisha.
        </motion.p>
      </div>

      {/* Minimal Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20 pointer-events-none"
      >
        <div className="w-[1px] h-24 bg-bone/20 relative overflow-hidden">
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="w-full h-1/2 bg-gradient-to-b from-transparent via-bone to-transparent"
          />
        </div>
      </motion.div>

    </section>
  );
}
