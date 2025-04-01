interface PricingPlan {
  title: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export const plans: PricingPlan[] = [
  {
    title: "Starter",
    price: "$500/month",
    description: "Perfect for occasional advice",
    features: [
      "Up to 5 advisors, 200 calls/month.",
      "Basic AI voice agent: call handling, lead qualification.",
      "Email summaries",
      "Standard support"
    ]
  },
  {
    title: "Professional",
    price: "$1,000/month",
    description: "Ideal for active planning",
    features: [
      "6-10 advisors, 500 calls/month",
      "Adds analytics, CRM integration",
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
      "10+ advisors, unlimited calls.",
      "Full features: compliance tools, bespoke integrations.",
      "Dedicated support"
    ]
  }
];