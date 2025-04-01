import { Clock, Users, Calculator } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Qualify yourself on your Financial goals anytime, anywhere, without scheduling appointments."
  },
  {
    icon: Users,
    title: "Personalized Experience",
    description: "Receive tailored advice based on your unique financial situation and goals."
  },
  {
    icon: Calculator,
    title: "Save time & Accurate handoff",
    description: "Human advisors take over when needed, ensuring trust."
  }
];