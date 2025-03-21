interface PricingPlan {
  title: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export const plans: PricingPlan[] = [
  {
    title: "Basic",
    price: "$0.10/min",
    description: "Perfect for occasional advice",
    features: [
      "24/7 AI advisor access",
      "Basic financial planning",
      "Email summaries",
      "Pay-as-you-go"
    ]
  },
  {
    title: "Pro",
    price: "$49/month",
    description: "Ideal for active planning",
    features: [
      "500 minutes included",
      "Advanced planning tools",
      "Priority support",
      "Custom action plans"
    ],
    popular: true
  },
  {
    title: "Enterprise",
    price: "Custom",
    description: "For financial institutions",
    features: [
      "Unlimited AI usage",
      "White-label solution",
      "API access",
      "Dedicated support"
    ]
  }
];