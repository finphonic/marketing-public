"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface PriceCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  index: number;
  popular?: boolean;
}

export function PriceCard({ title, price, description, features, index, popular }: PriceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      <Card className={`p-6 relative ${popular ? 'border-primary shadow-lg' : ''}`}>
        {popular && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm">
            Most Popular
          </div>
        )}
        <div className="text-center mb-6">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <div className="text-3xl font-bold mb-2">{price}</div>
          <p className="text-muted-foreground">{description}</p>
        </div>
        <ul className="space-y-4 mb-6">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        <Button className="w-full" variant={popular ? "default" : "outline"}>
          Get Started
        </Button>
      </Card>
    </motion.div>
  );
}