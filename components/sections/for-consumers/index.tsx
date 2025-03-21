"use client";

import { motion } from "framer-motion";
import { FeatureCard } from "./feature-card";
import { features } from "./features-data";

export function ForConsumersSection() {
  return (
    <section id="for-consumers" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Speak to Your AI Financial Advisor Anytime, Anywhere
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get instant access to professional financial advice without the hefty fees
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}