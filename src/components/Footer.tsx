import { Heart } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    "Company": [
      { name: "About", href: "#about" },
      { name: "Contact", href: "#contact" },
      { name: "FAQ", href: "#faq" },
      { name: "Terms", href: "#terms" }
    ],
    "For Customers": [
      { name: "How it works", href: "#how-it-works" },
      { name: "Book a service", href: "#book" },
      { name: "Safety", href: "#safety" },
      { name: "Reviews", href: "#reviews" }
    ],
    "For Professionals": [
      { name: "Join CasaFix", href: "#join" },
      { name: "Pricing", href: "#pricing" },
      { name: "Resources", href: "#resources" },
      { name: "Support", href: "#support" }
    ]
  };

  return (
    <footer className="bg-card border-t py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg"></div>
              <span className="text-xl font-bold text-foreground">CasaFix</span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Connecting communities through trusted home services. 
              Simple, fast, reliable solutions for your everyday needs.
            </p>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>for your community</span>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-foreground mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 CasaFix. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <a href="#privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#cookies" className="hover:text-primary transition-colors">
                Cookie Policy
              </a>
              <a href="#accessibility" className="hover:text-primary transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;