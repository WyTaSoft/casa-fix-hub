import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import ForCustomers from "@/components/ForCustomers";
import ForProfessionals from "@/components/ForProfessionals";
import Community from "@/components/Community";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <HowItWorks />
      <Services />
      <ForCustomers />
      <ForProfessionals />
      <Community />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
