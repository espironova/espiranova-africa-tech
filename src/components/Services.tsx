import { Card } from "@/components/ui/card";
import { Code, Smartphone, Globe, Database, Users, Brain } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Tailored solutions built around your specific needs."
    },
    {
      icon: Globe,
      title: "Web Applications",
      description: "Browser-based solutions with rich functionality."
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      description: "iOS and Android apps delivering exceptional user experiences."
    },
    {
      icon: Database,
      title: "API Development",
      description: "Robust APIs enabling seamless system connectivity."
    },
    {
      icon: Users,
      title: "Specialized Software",
      description: "Employee Management, CRM, Product Catalog, and Document Management Systems."
    },
    {
      icon: Brain,
      title: "AI-Powered Solutions",
      description: "Data-driven insights and automation for measurable growth."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            What We Offer
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We provide a full spectrum of custom technology solutions designed to simplify processes, 
            enhance productivity, and drive measurable results.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="p-6 hover:shadow-card transition-all duration-300 border-0 bg-card group hover:scale-105">
              <div className="w-12 h-12 rounded-lg bg-gradient-primary mb-4 flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};