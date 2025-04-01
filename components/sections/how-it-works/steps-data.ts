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
    description: "Start a conversation with our AI advisor and share your financial goals."
  },
  {
    icon: ClipboardList,
    title: "Questions",
    description: "Answer targeted questions to help our AI understand your unique situation."
  },
  {
    icon: Share2,
    title: "Post-call Handoffs",
    description: "Receive detailed summaries and action items after each consultation."
  },
  {
    icon: Database,
    title: "CRM Integration",
    description: "All your information is automatically organized and stored securely."
  }
];