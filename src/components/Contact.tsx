import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Let's Shape Tomorrow
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground">
              Explore our work and partner with us to discover how EspiraNova can elevate your business operations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 text-center bg-card border-0 hover:shadow-card transition-all duration-300">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Location</h3>
              <p className="text-muted-foreground text-sm">
                The Piano, PQW+/HFG<br />
                Near 171 Brookside Dr, Nairobi
              </p>
            </Card>
            
            <Card className="p-6 text-center bg-card border-0 hover:shadow-card transition-all duration-300">
              <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Phone</h3>
              <p className="text-muted-foreground">+254 728 143 812</p>
            </Card>
            
            <Card className="p-6 text-center bg-card border-0 hover:shadow-card transition-all duration-300">
              <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Email</h3>
              <p className="text-muted-foreground">info@espiranova.com</p>
            </Card>
          </div>
          
          <Card className="p-8 md:p-12 bg-gradient-hero text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Our Roots
            </h3>
            <p className="text-white/90 text-lg leading-relaxed mb-8">
              Rooted in Kenya, EspiraNova harnesses industry knowledge and faith-inspired resilience 
              to empower communities, mentoring youth and peers toward a brighter future.
            </p>
            <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
              Start Your Project
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};