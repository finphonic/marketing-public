"use client";

import { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import GLOBE from 'vanta/dist/vanta.globe.min';
import * as THREE from 'three';
import WordRotate from "@/components/magicui/word-rotate";

const words = ["Anytime", "Anywhere", "24/7", "On-the-Go"];

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
            <span>Your Personalized Financial Advisor</span>
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
          <form className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 border border-gray-300 rounded-md"
              required
            />
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg"
              onClick={async (e) => {
                e.preventDefault();
                const email = (document.querySelector('input[type="email"]') as HTMLInputElement).value;
                if (email) {
                  try {
                    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({
                        service_id: 'your_service_id',
                        template_id: 'your_template_id',
                        user_id: 'your_user_id',
                        template_params: {
                          to_email: 'finphonic@gmail.com',
                          from_email: email,
                        },
                      }),
                    });
                    if (response.ok) {
                      alert('We will be in touch soon');
                    } else {
                      alert('Failed to send email');
                    }
                  } catch (error) {
                    alert('An error occurred');
                  }
                } else {
                  alert('Please enter a valid email');
                }
              }}
            >
              Sign Up For Beta Launch 
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}