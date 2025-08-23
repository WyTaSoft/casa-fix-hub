import { Users, TrendingUp, DollarSign, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const ForProfessionals = () => {
  const benefits = [
    {
      icon: Users,
      title: "Monthly subscription",
      description: "Pay a simple monthly fee for unlimited visibility and access to customers."
    },
    {
      icon: DollarSign,
      title: "No commission",
      description: "Keep 100% of what you earn. We don't take a cut from your hard-earned money."
    },
    {
      icon: TrendingUp,
      title: "Grow your business",
      description: "Build your reputation through reviews and grow your customer base organically."
    },
    {
      icon: Calendar,
      title: "Flexible schedule",
      description: "Work when you want, where you want. You're in control of your availability."
    }
  ];

  return (
    <section id="for-professionals" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative animate-slide-up">
            <div className="bg-card rounded-3xl p-8 shadow-card border border-border/50">
              <h4 className="text-xl font-semibold text-foreground mb-6">Professional Dashboard</h4>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                  <span className="text-sm text-muted-foreground">This month's earnings</span>
                  <span className="font-semibold text-foreground">€2,340</span>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                  <span className="text-sm text-muted-foreground">Completed jobs</span>
                  <span className="font-semibold text-foreground">47</span>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-primary/10 rounded-lg">
                  <span className="text-sm text-primary">Subscription fee</span>
                  <span className="font-semibold text-primary">€29/month</span>
                </div>
                
                <div className="pt-4 border-t">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Customer rating</span>
                    <div className="flex items-center space-x-1">
                      <span className="font-semibold text-foreground">4.8</span>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              For professionals
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Join our community of trusted professionals and grow your business with a fair, transparent platform that puts you first.
            </p>

            <div className="space-y-6 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-xl">
                    <benefit.icon className="h-6 w-6 text-secondary" />
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

            <div className="space-y-4">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Join as professional
              </Button>
              <p className="text-sm text-muted-foreground">
                Start with a 30-day free trial. Cancel anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForProfessionals;