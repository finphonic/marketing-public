"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ProblemCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export function ProblemCard({ icon: Icon, title, description, index }: ProblemCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      <Card className="p-6 h-full flex flex-col items-center text-center">
        <Icon className="h-8 w-8 text-primary" />
        <h3 className="text-xl font-semibold mt-4 mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </Card>
    </motion.div>
  );
}