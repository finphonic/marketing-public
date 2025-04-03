"use client";

import { cn } from "@/lib/utils";
import { smoothScrollTo } from "@/lib/smooth-scroll";

interface NavigationLinksProps {
  className?: string;
}

export function NavigationLinks({ className }: NavigationLinksProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    smoothScrollTo(id);
  };

  return (
    <div className={cn("flex items-center gap-6", className)}>
      {[
        ["how-it-works", "How It Works"],
        ["for-business", "For Business"],
        ["for-consumers", "For Consumers"],
       /* ["pricing", "Pricing"] */,
        ["community", "Community"],
      ].map(([id, label]) => (
        <a
          key={id}
          href={`#${id}`}
          onClick={(e) => handleClick(e, id)}
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          {label}
        </a>
      ))}
    </div>
  );
}