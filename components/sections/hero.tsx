"use client";

import { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import GLOBE from 'vanta/dist/vanta.globe.min';
import * as THREE from 'three';
import WordRotate from "@/components/magicui/word-rotate";
import FilloutForm from '@/components/sections/hero/FilloutForm';

const words = ["Anytime", "Anywhere", "24/7", "Qualify leads"];

export function HeroSection() {
  const [currentWord, setCurrentWord] = useState(0);
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      setVantaEffect(
        GLOBE({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 0.80,
          color: 0x00D4FF,
          backgroundColor: 0x0A2540
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={vantaRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20 z-10"></div> {/* Dark overlay */}
      <div className="relative z-20 text-center px-4 flex flex-col items-center max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6 mb-16"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-white inline-flex items-center justify-center flex-wrap">
            <span>Qualify Leads with AI Voice Agents for Financial Advisors</span>
            <span className="whitespace-nowrap">
              {" "}<span className="text-primary inline-block">
                <WordRotate words={words} />
              </span>
            </span>
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4"
        >
          <FilloutForm />
         
        
          
        </motion.div>
      </div>
    </div>
  );
}