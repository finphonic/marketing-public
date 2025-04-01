"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface Feature {
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    title: "Automated Onboarding",
    description: "Save hours of administrative work with AI-powered lead qualifying"
  },
  {
    title: "CRM Integration",
    description: "Seamlessly integrate with your existing CRM systems for efficient client management"
  },
  {
    title: "Best Practices",
    description: "Industry-leading practices pre-built into every conversation"
  }
];

export function FeatureList() {
  return (
    <div className="space-y-6">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="flex gap-4"
        >
          <div className="flex-shrink-0">
            <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
              <Check className="h-4 w-4 text-primary" />
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-1">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}