import { DollarSign, Clock, Users } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface Problem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const problems: Problem[] = [
  {
    icon: DollarSign,
    title: "Efficiency Boost",
    description: "Handles repetitive calls, saving advisors 30% of their time, per industry trends"
  },
  {
    icon: Users,
    title: "Lead Quality",
    description: "Qualifies leads with 95% intent accuracy goal, reducing wasted effort"
  },
  {
    icon: Clock,
    title: "Limited Availability",
    description: "Advisors are often rushed and lack the patience to address all your concerns."
  }
];