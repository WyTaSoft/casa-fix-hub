import { Search, Calendar, CheckCircle2 } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Search",
      description: "Browse trusted professionals in your area and compare services, prices, and reviews.",
      color: "text-primary"
    },
    {
      icon: Calendar,
      title: "Book",
      description: "Select your preferred professional and schedule a convenient time that works for you.",
      color: "text-secondary"
    },
    {
      icon: CheckCircle2,
      title: "Done",
      description: "Enjoy your service and pay securely through the platform. Rate your experience.",
      color: "text-primary"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            How it works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Getting help for your home has never been this simple. Three easy steps to connect with trusted professionals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="text-center group animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-card shadow-soft mb-6 group-hover:scale-110 transition-transform duration-300 ${step.color}`}>
                <step.icon className="h-10 w-10" />
              </div>
              
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                {index + 1}. {step.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;