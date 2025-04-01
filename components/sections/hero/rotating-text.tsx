"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";

const words = ["Anytime, Anywhere", "24/7"];

export function RotatingText() {
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="relative inline-block min-w-[200px]">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[currentWord]}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-primary absolute left-0"
        >
          {words[currentWord]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}