"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface TestimonialCardProps {
  icon: LucideIcon;
  industry: string;
  stat: string;
  description: string;
  index: number;
}

export function TestimonialCard({ icon: Icon, industry, stat, description, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      <Card className="p-6">
        <Icon className="h-8 w-8 text-primary mb-4" />
        <h3 className="text-xl font-semibold mb-2">{industry}</h3>
        <div className="text-2xl font-bold text-primary mb-2">{stat}</div>
        <p className="text-muted-foreground">{description}</p>
      </Card>
    </motion.div>
  );
}