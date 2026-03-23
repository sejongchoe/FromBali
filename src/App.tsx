/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef } from "react";
import { motion } from "motion/react";
import { ArrowRight, Instagram, Facebook, Twitter, MousePointer2 } from "lucide-react";

const HorizontalSection = ({ 
  children, 
  image, 
  fontClass = "font-sans" 
}: { 
  children: React.ReactNode; 
  image: string; 
  fontClass?: string 
}) => (
  <section className="horizontal-section">
    <div className="absolute inset-0 z-0">
      <img
        src={image}
        alt="Bali Scene"
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
    </div>
    <div className={`relative z-10 h-full flex flex-col justify-end p-8 md:p-20 ${fontClass}`}>
      {children}
    </div>
  </section>
);

export default function App() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="h-screen w-screen overflow-hidden bg-black selection:bg-white selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-nav px-8 py-6 flex justify-between items-center">
        <div className="font-display text-2xl tracking-tighter">FROMBALI</div>
      </nav>

      {/* Horizontal Scroll Container */}
      <div ref={scrollRef} className="horizontal-container no-scrollbar">
        
        {/* 01. Introduction - Anton */}
        <HorizontalSection 
          image="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=2400"
          fontClass="font-display"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-[9px] tracking-[0.5em] mb-4 block opacity-60">01 / INTRODUCTION</span>
            <h1 className="text-huge uppercase">FromBali</h1>
            <p className="text-base mt-6 tracking-widest opacity-80 max-w-2xl">
              FromBali is where volunteers from around the world come together for sharing cultures, stories, and experiences.
            </p>
          </motion.div>
        </HorizontalSection>

        {/* 02. Volunteering - Playfair Display */}
        <HorizontalSection 
          image="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=2400"
          fontClass="font-serif"
        >
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="max-w-3xl"
          >
            <span className="text-[9px] tracking-[0.3em] mb-6 block uppercase font-sans font-bold">02 / VOLUNTEERING</span>
            <h2 className="text-huge italic leading-tight">Good Work,<br/>Good Vibes.</h2>
            <p className="text-base mt-8 leading-relaxed opacity-90 font-light">
              You'll contribute up to 4 hours a day, with 2 weekday days off each week.
            </p>
          </motion.div>
        </HorizontalSection>

        {/* 03. Kitchen - Space Grotesk */}
        <HorizontalSection 
          image="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=2400"
          fontClass="font-space"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="max-w-4xl"
          >
            <span className="text-[9px] tracking-[0.3em] mb-6 block uppercase font-bold">03 / KITCHEN</span>
            <h2 className="text-huge font-bold uppercase">Eat Well,<br/>Every Day.</h2>
            <p className="text-base mt-8 opacity-80 font-light">
              Gather in the kitchen and cook together, turning every meal into a moment worth remembering.
            </p>
          </motion.div>
        </HorizontalSection>

        {/* 04. Relaxation - Cormorant Garamond */}
        <HorizontalSection 
          image="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=2400"
          fontClass="font-cormorant"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-2xl"
          >
            <span className="text-[9px] tracking-[0.3em] mb-6 block uppercase font-sans font-bold">04 / RELAXATION</span>
            <h2 className="text-huge italic">Unwind Your Way.</h2>
            <p className="text-lg mt-8 leading-relaxed opacity-90">
              Head to our cafeteria on the first or second floor and let yourself recharge.
            </p>
          </motion.div>
        </HorizontalSection>

        {/* 05. Volunteer Location - Syne */}
        <HorizontalSection 
          image="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=2400"
          fontClass="font-syne"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="max-w-3xl"
          >
            <span className="text-[9px] tracking-[0.3em] mb-6 block uppercase font-bold">05 / VOLUNTEER LOCATION</span>
            <p className="text-xl font-medium uppercase leading-tight opacity-90">
              FromBali can connect you with volunteering opportunities in other regions. Please reach out to us if you are interested in it.
            </p>
          </motion.div>
        </HorizontalSection>

      </div>

      {/* Scroll Indicator */}
      <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center space-y-2 opacity-30">
        <span className="text-[8px] uppercase tracking-[0.5em]">Swipe right to explore</span>
      </div>
    </div>
  );
}
