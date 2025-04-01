"use client";

import { motion } from "framer-motion";
import { StatCard } from "./stat-card";
import { stats } from "./stats-data";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

export function CommunitySection() {
  return (
    <section id="community" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Financial Advisor AI Community on Discord
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Connect with other users, share insights, and help shape the future of AI financial advice
          </p>
          <Button size="lg" className="mb-12">
            <MessageSquare className="mr-2 h-5 w-5" />
            Join Discord
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}