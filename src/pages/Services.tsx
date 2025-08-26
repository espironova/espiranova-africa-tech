import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Smartphone, Globe, Database, Users, Brain, CheckCircle } from "lucide-react";

const ServicesPage = () => {
  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Tailored solutions built around your specific needs and business requirements.",
      features: ["Custom web applications", "Desktop software solutions", "System integrations", "Legacy system modernization"]
    },
    {
      icon: Globe,
      title: "Web Applications",
      description: "Browser-based solutions with rich functionality and modern user experiences.",
      features: ["Progressive web apps", "E-commerce platforms", "Content management systems", "Single-page applications"]
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      description: "iOS and Android apps delivering exceptional user experiences.",
      features: ["Native mobile apps", "Cross-platform solutions", "Mobile-first design", "App store deployment"]
    },
    {
      icon: Database,
      title: "API Development",
      description: "Robust APIs enabling seamless system connectivity and data exchange.",
      features: ["RESTful API design", "GraphQL implementations", "Third-party integrations", "API documentation"]
    },
    {
      icon: Users,
      title: "Specialized Software",
      description: "Employee Management, CRM, Product Catalog, and Document Management Systems.",
      features: ["HR management systems", "Customer relationship management", "Inventory tracking", "Document workflows"]
    },
    {
      icon: Brain,
      title: "AI-Powered Solutions",
      description: "Data-driven insights and automation for measurable growth.",
      features: ["Machine learning models", "Predictive analytics", "Process automation", "Data visualization"]
    }
  ];

  const approach = [
    "Personalized Approach – Solutions tailored to your workflow",
    "Transparent Process – Clear updates at every stage",
    "Continuous Support – Long-term system maintenance and assistance",
    "Industry Expertise – Valuable insights from diverse sectors",
    "Cutting-Edge Technology – Future-ready innovations",
    "Cost-Effective Results – High-value technology at sustainable costs"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(/src/assets/hero-bg.jpg)` }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            We provide a full spectrum of custom technology solutions designed to simplify processes, 
            enhance productivity, and drive measurable results.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-card transition-all duration-300 border-0 bg-card group hover:scale-105">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary mb-4 flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Our Approach
              </h2>
              <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                At EspiraNova, we prioritize a personalized approach. Every solution is designed to fit seamlessly 
                into your workflow with transparent processes and unwavering support.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                {approach.slice(0, 3).map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-success mt-1 flex-shrink-0" />
                    <p className="text-lg text-foreground">{item}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-6">
                {approach.slice(3).map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-success mt-1 flex-shrink-0" />
                    <p className="text-lg text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <Card className="p-8 md:p-12 bg-gradient-hero text-center max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-white/90 text-lg leading-relaxed mb-8">
              Let's discuss how our technology solutions can drive your business forward. 
              Contact us today for a personalized consultation.
            </p>
            <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
              Start Your Project
            </Button>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;