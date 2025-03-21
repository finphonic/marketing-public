import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/components/sections/hero";
import { ProblemSection } from "@/components/sections/problem";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { ForBusinessSection } from "@/components/sections/for-business";
import { ForConsumersSection } from "@/components/sections/for-consumers";
import { PricingSection } from "@/components/sections/pricing";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { CommunitySection } from "@/components/sections/community";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <ProblemSection />
        <HowItWorksSection />
        <ForBusinessSection />
        <ForConsumersSection />
        <TestimonialsSection />
        <PricingSection />
        <CommunitySection />
      </main>
      <Footer />
    </>
  );
}