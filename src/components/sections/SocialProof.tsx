"use client";

import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

export default function SocialProof() {
  const posts = [
    { id: 1, user: "@nightowl_rkl", img: "https://images.unsplash.com/photo-1545128485-c400e7702796?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 2, user: "@foodie.diaries", img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 3, user: "@vibes.only", img: "https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 4, user: "@rourkela.nights", img: "https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
  ];

  return (
    <section className="py-24 relative bg-void">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight">
              Seen At <br/>
              <span className="text-gold">Fusion Tales</span>
            </h2>
          </div>
          <a href="#" className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 rounded-full text-white transition-colors">
            <Instagram className="w-5 h-5" />
            <span className="font-display uppercase tracking-widest text-sm font-bold">Follow the Vibe</span>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {posts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden group cursor-pointer"
            >
              <img 
                src={post.img} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="Social post" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-void/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                <Instagram className="w-4 h-4 text-white" />
                <span className="text-white font-medium text-sm">{post.user}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
