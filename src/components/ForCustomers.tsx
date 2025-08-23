import { Shield, Clock, CreditCard, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const ForCustomers = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Trusted professionals",
      description: "All our professionals are verified, insured, and rated by the community."
    },
    {
      icon: Clock,
      title: "Book easily",
      description: "Simple booking process with instant confirmation and flexible scheduling."
    },
    {
      icon: CreditCard,
      title: "Pay directly",
      description: "Secure payment processing with multiple options and transparent pricing."
    },
    {
      icon: Star,
      title: "Quality guaranteed",
      description: "Rate your experience and help maintain our high standards of service."
    }
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              For customers
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Experience the easiest way to get help with your home. Our platform connects you with trusted local professionals who care about quality and your satisfaction.
            </p>

            <div className="space-y-6 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button size="lg" variant="hero" className="text-lg px-8">
              Start booking services
            </Button>
          </div>

          <div className="relative animate-slide-up">
            <div className="bg-card rounded-3xl p-8 shadow-card border border-border/50">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-full"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Maria Santos</h4>
                  <p className="text-sm text-muted-foreground">Cleaning specialist</p>
                </div>
                <div className="ml-auto flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium">4.9</span>
                </div>
              </div>
              
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>✓ Background checked</span>
                  <span>✓ Insured</span>
                </div>
                <div className="flex justify-between">
                  <span>✓ 200+ reviews</span>
                  <span>✓ Available today</span>
                </div>
                <div className="pt-4 border-t">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">Deep cleaning</span>
                    <span className="font-semibold text-foreground">€45/h</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForCustomers;