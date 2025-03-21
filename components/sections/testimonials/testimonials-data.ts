import { HeartPulse, ShoppingCart, GraduationCap, HeadphonesIcon } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface Testimonial {
  icon: LucideIcon;
  industry: string;
  stat: string;
  description: string;
}

export const testimonials: Testimonial[] = [
  {
    icon: HeadphonesIcon,
    industry: "Customer Support",
    stat: "40% Faster",
    description: "Reduced average handling time while improving satisfaction by 25%"
  },
  {
    icon: HeartPulse,
    industry: "Healthcare",
    stat: "30% More Efficient",
    description: "Increased appointment scheduling efficiency in telemedicine"
  },
  {
    icon: ShoppingCart,
    industry: "Retail",
    stat: "20% Higher Sales",
    description: "Boosted conversions with personalized recommendations"
  },
  {
    icon: GraduationCap,
    industry: "Education",
    stat: "15% Better Results",
    description: "Improved learning outcomes with AI tutoring assistance"
  }
];