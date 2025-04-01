interface PricingPlan {
  title: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export const plans: PricingPlan[] = [
  {
    title: "Tier 1: Starter",
    price: "$500/month",
    description: "For small firms with up to 5 advisors.",
    features: [
      "Handles up to 200 inbound calls monthly.",
      "Basic AI voice agent features: call answering, intent recognition, and lead qualification."
    ]
  },
  {
    title: "Tier 2: Professional",
    price: "$1,000/month",
    description: "For mid-sized firms with 6-10 advisors.",
    features: [
      "Handles up to 500 inbound calls monthly.",
      "Includes Starter features plus advanced analytics (call performance, client sentiment)."
    ]
  },
  {
    title: "Tier 3: Enterprise",
    price: "Custom Pricing",
    description: "For firms with 10+ advisors or custom needs.",
    features: [
      "Unlimited call handling.",
      "Includes Professional features plus compliance monitoring tools, bespoke integrations, and dedicated account management."
    ]
  }
];