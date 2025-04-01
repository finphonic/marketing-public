"use client";

import { motion } from "framer-motion";
import { PriceCard } from "./price-card";
import { plans } from "./pricing-data";

export function PricingSection() {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Affordable, Transparent Pricing for Smarter Financial Advice
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Spend less time onboarding, more time on strategy
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PriceCard
              key={index}
              title={plan.title}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              popular={plan.popular}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}