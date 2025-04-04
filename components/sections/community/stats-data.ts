import { Users, MessageSquare, Star } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface Stat {
  icon: LucideIcon;
  title: string;
  value: string;
  description: string;
}

export const stats: Stat[] = [
  {
    icon: Users,
    title: "Active Members",
    value: "100+",
    description: "Join our growing community of financial enthusiasts"
  },
  {
    icon: MessageSquare,
    title: "Daily Discussions",
    value: "10+",
    description: "Engage in meaningful conversations about finance"
  },
  {
    icon: Star,
    title: "Stories",
    value: "10+",
    description: "Real people discussing about Fintech & Ai"
  }
];