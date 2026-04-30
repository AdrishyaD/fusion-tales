"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// ----------------------------------------------------------------------
// ICONS
// ----------------------------------------------------------------------
const PinIcon = ({ className = "text-current" }: { className?: string }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
  </svg>
);
const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
  </svg>
);
const ChevronLeftIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m15 18-6-6 6-6" />
  </svg>
);
const ChevronRightIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 18 6-6-6-6" />
  </svg>
);
const CalendarIcon = ({ className }: { className?: string }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" />
  </svg>
);
const ClockIcon = ({ className }: { className?: string }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);
const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);
const UnderlineScribble = () => (
  <svg className="absolute -bottom-3 left-0 w-[120%] text-[#9FE870]" viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 15C55 5 145 5 195 15" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ----------------------------------------------------------------------
// DATA
// ----------------------------------------------------------------------
const FULL_MENU = {
  "Start Light": [
    { name: "Veg Ball Manchurian", price: "₹60" },
    { name: "Chilli Paneer", price: "₹90" },
    { name: "Paneer Manchurian", price: "₹80" },
    { name: "Crispy Corn", desc: "Golden & addictive", price: "₹60" },
    { name: "Honey Chilli Potato", price: "₹100", badge: "MOST ORDERED" },
  ],
  "Go Heavy": [
    { name: "Drums of Heaven", price: "₹90" },
    { name: "Dragon Chicken", price: "₹90", badge: "MOST ORDERED" },
    { name: "Chicken Manchurian", price: "₹90" },
    { name: "Chilli Chicken", price: "₹90" },
    { name: "Chicken Majestic", price: "₹100" },
  ],
  "Wok Tossed": [
    { name: "Hakka Noodles", desc: "The safe choice", price: "from ₹80" },
    { name: "Chilli Garlic Noodles", desc: "For spice tolerance flexers", price: "from ₹90", badge: "MOST ORDERED" },
    { name: "Schezwan Noodles", desc: "Bold and unbothered", price: "from ₹90" },
  ],
  "Handhelds": [
    { name: "Classic Veg Sandwich", desc: "Fresh & crispy", price: "₹60" },
    { name: "Cheesy Corn Sandwich", desc: "Loaded with cheese", price: "₹90", badge: "MOST ORDERED" },
    { name: "Chicken Tikka Sandwich", desc: "Spicy & loaded", price: "₹120" },
    { name: "Fusion Special Sandwich", desc: "Our signature", price: "₹150", badge: "CHEF'S PICK" },
  ],
  "Late Sips": [
    { name: "Cappuccino", price: "₹90" },
    { name: "Americano", price: "₹80" },
    { name: "Classic Cold Coffee", price: "₹100" },
    { name: "Hazelnut Cold Coffee", price: "₹120" },
    { name: "Frappuccino", price: "₹150" },
  ],
};

const CAROUSEL_SLIDES = [
  {
    id: "dragon_chicken",
    label: "the cravings",
    name: "Dragon Chicken",
    hook: "Fire in every bite.",
    desc: "Smoky. Spicy.\nSlightly addictive.",
    img: "/api/image?name=dragon_chicken",
  },
  {
    id: "chilli_garlic_noodles",
    label: "the obsession",
    name: "Chilli Garlic Noodles",
    hook: "Bold and unbothered.",
    desc: "For spice tolerance\nflexers only.",
    img: "/api/image?name=chilli_garlic_noodles",
  },
  {
    id: "chicken_tikka_sandwich",
    label: "the handheld",
    name: "Chicken Tikka Sandwich",
    hook: "Loaded at every bite.",
    desc: "Spicy & loaded.\nThe 1 AM pick.",
    img: "/api/image?name=chicken_tikka_sandwich",
  },
  {
    id: "crispy_corn",
    label: "the guilty one",
    name: "Crispy Corn",
    hook: "Impossible to share.",
    desc: "Golden. Addictive.\nYou were warned.",
    img: "/api/image?name=crispy_corn",
  },
  {
    id: "honey_chilli_potato",
    label: "the classic",
    name: "Honey Chilli Potato",
    hook: "The crowd favourite.",
    desc: "Sweet heat.\nAlways ordered twice.",
    img: "/api/image?name=crispy_corn",
  },
];

// ----------------------------------------------------------------------
// ANIMATIONS
// ----------------------------------------------------------------------
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// ----------------------------------------------------------------------
// HERO
// ----------------------------------------------------------------------
function Hero() {
  return (
    <section className="relative h-[100svh] w-full bg-[#0B0B0B]">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
          src="/Hero%20section%20image.png"
          alt="Fusion Tales Cafe"
          className="absolute inset-0 w-full h-full object-cover object-[center_top] brightness-[1.1] contrast-[1.15] saturate-[1.1]"
        />
        {/* left vignette for text readability */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(11,11,11,0.92)_0%,rgba(11,11,11,0.82)_20%,rgba(11,11,11,0.35)_48%,rgba(11,11,11,0)_68%)]" />
        {/* bottom fade */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(11,11,11,0)_0%,rgba(11,11,11,0.15)_70%,#0B0B0B_100%)]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute top-6 left-6 md:top-12 md:left-10 z-20 w-14 h-14 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center p-1.5 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
      >
        <div className="relative w-full h-full rounded-full overflow-hidden">
          <Image src="/logo.jpg" alt="Fusion Tales Logo" fill className="object-cover" />
        </div>
      </motion.div>

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-[1100px] mx-auto px-6 md:px-10 w-full">
          <div className="max-w-[520px]">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[#9FE870] text-[11px] md:text-sm mb-4 tracking-widest font-bold uppercase flex items-center gap-2"
            >
              <PinIcon /> ROURKELA • OPEN TILL LATE
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-[3.25rem] md:text-7xl font-bold leading-[1.05] tracking-tight"
            >
              Not just food.<br />
              A whole{" "}
              <span className="text-[#9FE870] italic font-script pr-2 relative inline-block">
                vibe.<UnderlineScribble />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="text-white/70 mt-5 md:mt-6 text-base md:text-lg leading-relaxed max-w-[400px] md:max-w-none"
            >
              We built a corner in Rourkela where the nights always feel a little too short.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <a
                href="#booking"
                className="inline-flex items-center gap-3 mt-8 md:mt-10 px-8 py-3.5 md:py-4 rounded-full bg-[#9FE870] text-black font-bold text-sm md:text-base shadow-[0_0_40px_rgba(159,232,112,0.35)] hover:shadow-[0_0_60px_rgba(159,232,112,0.5)] hover:scale-105 hover:bg-white transition-all duration-300"
              >
                Pull up a chair <ArrowRightIcon />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// EXPERIENCE CAROUSEL
// ----------------------------------------------------------------------
function Experience() {
  const [current, setCurrent] = useState(0);
  const total = CAROUSEL_SLIDES.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  const slide = CAROUSEL_SLIDES[current];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeUp}
      className="py-16 md:py-24"
    >
      <div className="max-w-[1100px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-3 gap-8 md:gap-10 items-start">

          {/* FOOD IMAGE */}
          <div className="w-full relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl group">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id + "-img"}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={slide.img}
                  alt={slide.name}
                  fill
                  className="object-cover brightness-[1.08] contrast-[1.18] group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* TEXT */}
          <div className="text-center md:text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id + "-text"}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-[#9FE870] font-script text-2xl mb-1">{slide.label}</p>
                <h3 className="text-3xl text-white font-bold tracking-tight">{slide.name}</h3>
                <p className="text-[#9FE870] font-script text-xl mt-2 mb-4">{slide.hook}</p>
                <p className="text-white/60 text-sm md:text-base leading-relaxed mx-auto md:mx-0 max-w-[280px] whitespace-pre-line">
                  {slide.desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* CROWD PANEL — text first, image below */}
          <div className="flex flex-col">
            <div className="text-center md:text-left mb-6">
              <p className="text-[#9FE870] font-script text-2xl mb-1">the crowd</p>
              <h3 className="text-2xl text-white font-bold leading-tight mb-2 tracking-tight">
                You didn&apos;t plan this.
              </h3>
              <p className="text-white/60 text-sm leading-relaxed max-w-[280px] mx-auto md:mx-0">
                You came for a coffee. Now it&apos;s 2 AM, the tables are pushed together, and nobody wants to go home. That&apos;s a Fusion Tale.
              </p>
            </div>
            <div className="w-full relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl group">
              <Image
                src="/people vibe.png"
                alt="The Crowd"
                fill
                className="object-cover brightness-[1.08] contrast-[1.18] group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </div>
        </div>

        {/* CAROUSEL CONTROLS */}
        <div className="flex items-center justify-start gap-6 mt-10">
          <button
            onClick={prev}
            className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-white/50 hover:text-white transition-all"
          >
            <ChevronLeftIcon />
          </button>

          <div className="flex items-center gap-2">
            {CAROUSEL_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-2.5 h-2.5 bg-[#9FE870]"
                    : "w-2 h-2 bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-white/50 hover:text-white transition-all"
          >
            <ChevronRightIcon />
          </button>
        </div>
      </div>
    </motion.section>
  );
}

// ----------------------------------------------------------------------
// MENU
// ----------------------------------------------------------------------
function MenuSection() {
  const categories = Object.keys(FULL_MENU);
  const [activeCategory, setActiveCategory] = useState(categories[3]);
  const displayMenu = FULL_MENU[activeCategory as keyof typeof FULL_MENU];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeUp}
      id="menu"
      className="py-10 md:py-14"
    >
      <div className="max-w-[1100px] mx-auto px-6 md:px-10">
        <div className="bg-[#111]/80 rounded-[2rem] px-8 md:px-16 py-14 md:py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">The Menu</h2>
        <p className="text-white/60 mt-3">Real cravings, served hot.</p>

        <div className="flex justify-center gap-2 md:gap-3 mt-8 mb-12 flex-wrap">
          {categories.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveCategory(tab)}
              className={`relative px-5 py-2.5 rounded-full text-[13px] font-medium transition-colors duration-300 ${
                activeCategory === tab ? "text-[#9FE870]" : "text-white/60 hover:text-white"
              }`}
            >
              {activeCategory === tab && (
                <motion.div
                  layoutId="menu-tab-indicator"
                  className="absolute inset-0 bg-[#9FE870]/10 border border-[#9FE870]/30 rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{tab}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-8 md:gap-12 text-left"
          >
            {displayMenu.map((item, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center group border-b border-white/5 md:border-transparent pb-4 md:pb-0"
              >
                <div className="flex flex-col gap-1 pr-4">
                  <p className="text-lg text-white group-hover:text-[#9FE870] transition-colors duration-300">
                    {item.name}
                  </p>
                  <div className="flex items-center gap-3 mt-0.5 flex-wrap">
                    {"desc" in item && (
                      <span className="text-white/50 text-sm">{item.desc}</span>
                    )}
                    {"badge" in item && (
                      <span className="text-[10px] font-bold text-[#9FE870] border border-[#9FE870]/30 px-2 py-0.5 rounded tracking-wide">
                        {item.badge}
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-right text-xl font-medium tracking-wide">
                  {"price" in item ? item.price : ""}
                </p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}

// ----------------------------------------------------------------------
// BOOKING
// ----------------------------------------------------------------------
function Booking() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeUp}
      id="booking"
      className="py-20 md:py-28"
    >
      <div className="max-w-[1100px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-[1fr_1.6fr] gap-12 md:gap-16 border border-white/10 rounded-[2rem] p-8 md:p-14 bg-[#0A0A0A]/50 relative overflow-hidden backdrop-blur-sm">

          <div className="flex flex-col justify-center z-10">
            <h3 className="text-[2.25rem] md:text-[3rem] font-bold leading-[1.1] tracking-tight">
              We&apos;ll keep<br />a chair ready.
            </h3>
            <p className="text-white/60 mt-4 md:mt-5 text-base leading-relaxed max-w-[260px]">
              Or just show up — nights here don&apos;t wait.
            </p>
          </div>

          <form className="flex flex-col gap-3 md:gap-4 z-10" onSubmit={(e) => e.preventDefault()}>
            {/* Row 1: Name | Phone | Guests */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
              <input
                className="w-full bg-[#111] border border-white/10 p-4 rounded-xl text-sm text-white placeholder-white/40 focus:border-[#9FE870]/50 outline-none transition-colors"
                placeholder="Your Name"
              />
              <input
                className="w-full bg-[#111] border border-white/10 p-4 rounded-xl text-sm text-white placeholder-white/40 focus:border-[#9FE870]/50 outline-none transition-colors"
                placeholder="Phone Number"
              />
              <div className="relative w-full">
                <select className="w-full bg-[#111] border border-white/10 p-4 rounded-xl text-sm text-white focus:border-[#9FE870]/50 outline-none appearance-none transition-colors">
                  <option className="bg-[#111] text-white">2 People</option>
                  <option className="bg-[#111] text-white">3 People</option>
                  <option className="bg-[#111] text-white">4 People</option>
                  <option className="bg-[#111] text-white">5+ People</option>
                </select>
                <svg className="absolute right-4 top-4 text-white/60 pointer-events-none" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
            </div>

            {/* Row 2: Date | Time | Confirm */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Date"
                  onFocus={(e) => (e.target.type = "date")}
                  className="w-full bg-[#111] border border-white/10 p-4 rounded-xl text-sm text-white placeholder-white/40 focus:border-[#9FE870]/50 outline-none transition-colors [color-scheme:dark]"
                />
                <CalendarIcon className="absolute right-4 top-4 text-white/60 pointer-events-none" />
              </div>
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Time"
                  onFocus={(e) => (e.target.type = "time")}
                  className="w-full bg-[#111] border border-white/10 p-4 rounded-xl text-sm text-white placeholder-white/40 focus:border-[#9FE870]/50 outline-none transition-colors [color-scheme:dark]"
                />
                <ClockIcon className="absolute right-4 top-4 text-white/60 pointer-events-none" />
              </div>
              <button className="w-full bg-[#9FE870] text-black p-4 rounded-xl font-bold shadow-[0_0_30px_rgba(159,232,112,0.2)] hover:shadow-[0_0_40px_rgba(159,232,112,0.4)] hover:scale-[1.02] hover:bg-white transition-all text-[15px]">
                Confirm Booking
              </button>
            </div>
          </form>

        </div>
      </div>
    </motion.section>
  );
}

// ----------------------------------------------------------------------
// FOOTER
// ----------------------------------------------------------------------
function Footer() {
  return (
    <footer className="py-16 md:py-20 border-t border-white/5">
      <div className="max-w-[1100px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

          {/* COL 1: Tagline */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-3xl md:text-4xl font-bold leading-tight">
              Same time<br />tomorrow?
            </h3>
            <p className="text-[#9FE870] font-script text-xl mt-2">You already know the answer.</p>
          </div>

          {/* COL 2: Brand */}
          <div className="flex flex-col gap-3">
            <p className="text-lg font-bold tracking-widest uppercase leading-none">
              FUSION{" "}
              <span className="font-script text-2xl normal-case font-normal italic tracking-normal">tales</span>
            </p>
            <p className="text-white/50 text-sm">Rourkela&apos;s worst kept secret.</p>
            <a
              href="https://www.instagram.com/fusion_tales_ind"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm w-fit"
            >
              <InstagramIcon /> @fusion_tales_ind
            </a>
          </div>

          {/* COL 3: Open Hours */}
          <div className="flex flex-col gap-2">
            <p className="text-xs font-bold tracking-widest uppercase text-[#9FE870] mb-1">Open Hours</p>
            <p className="text-white/80 text-sm">Open every day</p>
            <p className="text-[#9FE870] font-bold text-sm">11:00 AM – 2:00 AM</p>
          </div>

          {/* COL 4: Get Directions */}
          <div className="flex flex-col gap-2">
            <p className="text-xs font-bold tracking-widest uppercase text-[#9FE870] mb-1">Get Directions</p>
            <p className="text-white/80 text-sm">Food Court, Udit Nagar,</p>
            <p className="text-white/80 text-sm">Rourkela, Odisha 769012</p>
            <a
              href="https://maps.google.com/?q=Food+court,+Udit+Nagar,+Rourkela,+Odisha+769012"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-3 px-5 py-2.5 bg-[#9FE870] text-black rounded-full text-xs font-bold hover:bg-white transition-all w-fit"
            >
              <PinIcon className="text-black" /> Get Directions
            </a>
          </div>

        </div>

        <p className="text-white/20 text-xs text-center mt-14">© 2024 Fusion Tales. All rights reserved.</p>
      </div>
    </footer>
  );
}

// ----------------------------------------------------------------------
// MAIN PAGE
// ----------------------------------------------------------------------
export default function FusionTalesPage() {
  return (
    <main className="bg-[#0B0B0B] text-white min-h-screen font-sans selection:bg-[#9FE870] selection:text-black overflow-x-hidden">
      <nav className="absolute top-0 right-0 z-50 p-6 md:p-10 flex justify-end gap-10 text-[10px] tracking-[0.2em] text-white/80 font-bold uppercase">
        <a href="#menu" className="hover:text-[#9FE870] transition-colors">Menu</a>
        <a href="#booking" className="hover:text-[#9FE870] transition-colors">Book a Table</a>
      </nav>

      <Hero />
      <Experience />
      <MenuSection />
      <Booking />
      <Footer />
    </main>
  );
}
