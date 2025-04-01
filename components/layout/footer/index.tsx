import { FooterLinks } from "./footer-links";
import { FooterSocial } from "./footer-social";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-muted/50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <FooterLinks
            title="Product"
            links={[
              { label: "Features", href: "#features" },
              { label: "Pricing", href: "#pricing" },
              { label: "For Business", href: "#for-business" },
              { label: "For Consumers", href: "#for-consumers" }
            ]}
          />
          <FooterLinks
            title="Company"
            links={[
              { label: "About", href: "#" },
              { label: "Blog", href: "#" },
              { label: "Careers", href: "#" },
              { label: "Contact", href: "#" }
            ]}
          />
          <FooterLinks
            title="Resources"
            links={[
              { label: "Documentation", href: "#" },
              { label: "Help Center", href: "#" },
              { label: "Community", href: "#community" },
              { label: "API", href: "#" }
            ]}
          />
          <FooterLinks
            title="Legal"
            links={[
              { label: "Privacy", href: "#" },
              { label: "Terms", href: "#" },
              { label: "Security", href: "#" },
              { label: "Cookies", href: "#" }
            ]}
          />
        </div>
        <Separator className="mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} FinPhonic Ai Inc. All rights reserved.
          </p>
          <FooterSocial />
        </div>
      </div>
    </footer>
  );
}