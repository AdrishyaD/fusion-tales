"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center space-y-12"
        >
          <div className="inline-block relative">
            <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight text-white relative z-10">
              The Fusion Tale
            </h2>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-amber" />
          </div>

          <p className="text-xl md:text-3xl font-light text-gray-300 leading-relaxed">
            Fusion Tales isn't just a cafe; it's a culinary experiment.
          </p>
          
          <p className="text-lg md:text-xl text-gray-500 font-light max-w-2xl mx-auto leading-loose">
            We meticulously deconstruct the vibrant, spicy soul of Rourkela and fuse it with the refined techniques of the West. It's an alchemy of flavors designed for the sophisticated palate, presented in an atmosphere of unapologetic modernism.
          </p>
        </motion.div>
      </div>
      
      {/* Background subtle elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-amber/5 rounded-full blur-[100px] -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald/5 rounded-full blur-[120px]" />
    </section>
  );
}
