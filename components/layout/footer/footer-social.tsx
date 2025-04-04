import { Twitter, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FooterSocial() {
  return (
    <div className="flex items-center gap-4">
      <Button variant="ghost" size="icon">
        <Twitter className="h-5 w-5" />
      </Button>
      <Button variant="ghost" size="icon">
      <a href="https://www.linkedin.com/company/finphonic/" target="_blank">
        <Linkedin className="h-5 w-5" />
        </a>
      </Button>
      <Button variant="ghost" size="icon">
        
        <Github className="h-5 w-5" />
        
      </Button>
    </div>
  );
}