import { Sparkles, Shirt, Wrench, Package } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Sparkles,
      title: "Cleaning",
      description: "Professional home cleaning services for a spotless living space.",
      features: ["Deep cleaning", "Regular maintenance", "Eco-friendly products", "Flexible scheduling"]
    },
    {
      icon: Shirt,
      title: "Ironing",
      description: "Expert ironing services to keep your clothes looking perfect.",
      features: ["Professional pressing", "Delicate fabric care", "Quick turnaround", "Pickup & delivery"]
    },
    {
      icon: Wrench,
      title: "Small repairs",
      description: "Quick fixes for your home's minor maintenance needs.",
      features: ["Plumbing fixes", "Electrical repairs", "Wall mounting", "Door adjustments"]
    },
    {
      icon: Package,
      title: "Furniture assembly",
      description: "Professional assembly service for all your furniture needs.",
      features: ["IKEA assembly", "Office furniture", "Tool included", "Clean-up service"]
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Services we offer
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From everyday maintenance to special projects, our trusted professionals are here to help with all your home service needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-soft transition-all duration-300 group animate-slide-up border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="h-8 w-8 text-primary-foreground" />
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button variant="outline" className="w-full group-hover:bg-accent transition-colors">
                Book now
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;