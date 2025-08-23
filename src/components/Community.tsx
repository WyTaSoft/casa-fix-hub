import { Heart, Shield, Users, MessageCircle } from "lucide-react";

const Community = () => {
  const features = [
    {
      icon: Heart,
      title: "Friendly network",
      description: "More than a marketplace - we're building a community of neighbors helping neighbors."
    },
    {
      icon: Shield,
      title: "Trust & safety",
      description: "Verified profiles, background checks, and comprehensive insurance for peace of mind."
    },
    {
      icon: Users,
      title: "Local connections",
      description: "Connect with professionals from your own neighborhood who understand your community."
    },
    {
      icon: MessageCircle,
      title: "Reviews & ratings",
      description: "Transparent feedback system that helps maintain quality and builds lasting relationships."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-accent/20 to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Our community
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Inspired by the spirit of AlloVoisins, CasaFix is more than just a service platform. 
            We're building a trusted network where neighbors help neighbors, creating lasting connections in your community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-card rounded-2xl shadow-soft mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card rounded-2xl p-6 shadow-card border border-border/50 animate-slide-up">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-full"></div>
              <div>
                <h4 className="font-medium text-foreground">Local Expert</h4>
                <p className="text-xs text-muted-foreground">In your neighborhood</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              "I love being part of CasaFix. It's not just work - it's helping my neighbors and building real relationships."
            </p>
          </div>

          <div className="bg-card rounded-2xl p-6 shadow-card border border-border/50 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-secondary rounded-full"></div>
              <div>
                <h4 className="font-medium text-foreground">Verified Member</h4>
                <p className="text-xs text-muted-foreground">5-star rating</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              "The quality and trust on CasaFix is amazing. I feel safe knowing everyone is verified and insured."
            </p>
          </div>

          <div className="bg-card rounded-2xl p-6 shadow-card border border-border/50 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-full"></div>
              <div>
                <h4 className="font-medium text-foreground">Happy Customer</h4>
                <p className="text-xs text-muted-foreground">Regular user</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              "It's so convenient to find reliable help in my area. The community aspect makes it feel personal and trustworthy."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;