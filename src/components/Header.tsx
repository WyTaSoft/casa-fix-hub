import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg"></div>
          <span className="text-xl font-bold text-foreground">CasaFix</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
            Services
          </a>
          <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors">
            How it works
          </a>
          <a href="#for-professionals" className="text-muted-foreground hover:text-primary transition-colors">
            For Professionals
          </a>
          <a href="#reviews" className="text-muted-foreground hover:text-primary transition-colors">
            Reviews
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="hidden sm:inline-flex">
            Sign In
          </Button>
          <Button variant="hero">
            Book a service
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;