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
    value: "10,000+",
    description: "Join our growing community of financial enthusiasts"
  },
  {
    icon: MessageSquare,
    title: "Daily Discussions",
    value: "500+",
    description: "Engage in meaningful conversations about finance"
  },
  {
    icon: Star,
    title: "Success Stories",
    value: "1,000+",
    description: "Real people achieving their financial goals"
  }
];