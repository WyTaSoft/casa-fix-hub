import { Button } from "@/components/ui/button";
import { ArrowRight, Users, CheckCircle } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 backdrop-blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center animate-fade-in">
          <h2 className="text-3xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Join CasaFix today
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Whether you need help with your home or want to offer your professional services, 
            CasaFix brings your community together. Simple, fast, reliable.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-lg px-10 py-6 bg-white text-primary hover:bg-white/90 shadow-button"
            >
              <Users className="mr-2 h-5 w-5" />
              Find a professional
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-10 py-6 border-white text-white hover:bg-white/10"
            >
              Become a professional
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-primary-foreground/80">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5" />
              <span>Free to browse</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5" />
              <span>Instant booking</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5" />
              <span>Trusted community</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;