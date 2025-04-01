import { MessageSquare, ClipboardList, Share2, Database } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface Step {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const steps: Step[] = [
  {
    icon: MessageSquare,
    title: "Introduction",
    description: "AI answers inbound calls instantly with introdocution and it personalizes"
  },
  {
    icon: ClipboardList,
    title: "Questions",
    description: "Customize the Ai to ask personalized questions"
  },
  {
    icon: Share2,
    title: "Post-call Handoffs",
    description: "Understands needs, provides info, or qualifies leads."
  },
  {
    icon: Database,
    title: "Advisor Steps In (Human in the loop)",
    description: "Transfers complex queries to advisors with full context."
  }
];