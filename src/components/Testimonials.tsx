import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sophie Martin",
      role: "Busy parent",
      rating: 5,
      text: "CasaFix saved me so much time! I found an amazing cleaner who now comes weekly. The booking process was so simple, and the quality is consistently excellent.",
      avatar: "SM"
    },
    {
      name: "David Rodriguez",
      role: "Professional carpenter",
      rating: 5,
      text: "As a professional on CasaFix, I love the monthly subscription model. No commission fees means I keep everything I earn, and I've built a great client base.",
      avatar: "DR"
    },
    {
      name: "Emma Johnson",
      role: "Remote worker",
      rating: 5,
      text: "I needed urgent help with furniture assembly, and CasaFix connected me with someone within hours. The professional was friendly, skilled, and reasonably priced.",
      avatar: "EJ"
    },
    {
      name: "Pierre Dubois",
      role: "Handyman",
      rating: 5,
      text: "The platform is fair and transparent. I appreciate that customers can see my reviews and I can showcase my skills. It's helped me grow my business significantly.",
      avatar: "PD"
    }
  ];

  return (
    <section id="reviews" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            What our community says
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real stories from customers and professionals who've experienced the CasaFix difference.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-6 shadow-card border border-border/50 animate-slide-up hover:shadow-soft transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground text-sm">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <Quote className="h-5 w-5 text-muted-foreground/50" />
              </div>

              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <div className="inline-flex items-center space-x-6 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="font-medium">4.9/5</span>
            </div>
            <span>•</span>
            <span>Based on 2,500+ reviews</span>
            <span>•</span>
            <span>98% customer satisfaction</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;