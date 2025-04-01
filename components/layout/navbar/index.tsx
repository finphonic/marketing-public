"use client";

import { motion } from "framer-motion";
import { NavigationLinks } from "./navigation-links";
import { MobileMenu } from "./mobile-menu";
import { Button } from "@/components/ui/button";
import { Bot } from "lucide-react";
import FilloutForm from '@/components/sections/hero/FilloutForm';

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Bot className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg">FinPhonic</span>
          </div>
          
          <nav className="hidden md:flex">
            <NavigationLinks />
          </nav>

          <div className="flex items-center gap-4">
            <FilloutForm />
            <MobileMenu />
          </div>
        </div>
      </div>
    </motion.header>
  );
}