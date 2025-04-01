"use client";

import { motion } from "framer-motion";
import { ProblemCard } from "./problem-card";
import { problems } from "./problem-data";

export function ProblemSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Tired of Expensive, Impersonal Financial Advice?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our AI advisor is cost-effective, available 24/7, and provides tailored advice without the hassle.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <ProblemCard
              key={index}
              icon={problem.icon}
              title={problem.title}
              description={problem.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}