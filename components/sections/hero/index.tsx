"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { VantaBackground } from "./vanta-background";
import WordRotate from "@/components/magicui/word-rotate";

const rotatingWords = ["Anytime"," Anywhere", "24/7", "On-the-Go"];

export function HeroSection() {
  return (
    <VantaBackground>
      <div className="relative z-10 text-center px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Your Personalized Financial Advisor
          </h1>
          <br/>
          <div className="h-[60px]">
            <WordRotate 
              words={rotatingWords} 
              className="text-4xl md:text-6xl font-bold text-primary"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12"
        >
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
            Talk to Your AI Advisor Now
          </Button>


          
        </motion.div>
      </div>
    </VantaBackground>
  );
}