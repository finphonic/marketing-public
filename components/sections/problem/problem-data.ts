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
    title: "Expensive Traditional Advice",
    description: "Financial advisors can cost up to 1% of AUM, making professional advice inaccessible for many."
  },
  {
    icon: Users,
    title: "Impersonal Experience",
    description: "Repeating your story to multiple agents is frustrating and time-consuming."
  },
  {
    icon: Clock,
    title: "Limited Availability",
    description: "Advisors are often rushed and lack the patience to address all your concerns."
  }
];