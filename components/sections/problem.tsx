"use client";

import { motion } from "framer-motion";
import { DollarSign, Clock, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

export function ProblemSection() {
  const problems = [
    {
      icon: <DollarSign className="h-8 w-8 text-primary" />,
      title: "Efficiency Boost",
      description: "Handles repetitive calls, saving advisors 30% of their time and money, per industry trends"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Lead Quality",
      description: "Qualifies leads with 95% intent accuracy goal, reducing wasted effort"
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Limited Human Availability",
      description: "Advisors are limited to tradional working hours! They often are rushed and lack the patience to address all your concerns."
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-[url('https://magicui.design/r/animated-grid-pattern')] bg-cover bg-center opacity-50 z-0"></div> {/* Animated grid background */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Tired of longer wait times, Innaccurate leads?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Our AI advisor is cost-effective, available 24/7, and provides tailored lead collection without the hassle.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="p-6 h-full flex flex-col items-center text-center">
                {problem.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2">{problem.title}</h3>
                <p className="text-muted-foreground">{problem.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}