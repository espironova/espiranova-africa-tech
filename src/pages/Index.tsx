import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Code, Smartphone, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";

const Index = () => {
  const highlights = [
    {
      icon: Code,
      title: "Custom Software",
      description: "Tailored solutions for your unique business needs"
    },
    {
      icon: Globe,
      title: "Web Applications",
      description: "Modern, responsive web solutions"
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "iOS and Android applications"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="EspiraNova - Ignite. Innovate. Impact."
        description="Innovative technology solutions provider igniting digital transformation across Africa with cutting-edge AI, robust API development, and bespoke applications that uplift businesses and communities."
        keywords="technology solutions Africa, custom software development Kenya, API development, AI solutions, web applications, mobile apps, digital transformation Africa"
        url="https://espiranova.com"
      />
      <Navigation />
      <Hero />
      
      {/* Quick Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Technology Solutions for Africa
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We are an innovative technology solutions provider committed to igniting digital 
              transformation across Africa through cutting-edge AI, robust API development, 
              and bespoke applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {highlights.map((item, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-card transition-all duration-300 border-0 bg-card group hover:scale-105">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary mb-4 flex items-center justify-center mx-auto group-hover:shadow-glow transition-all duration-300">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="hero" size="lg">
                Explore All Services <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Featured Projects Teaser */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Featured Work
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover some of our successful projects that showcase our expertise 
              in creating innovative digital solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <a href="https://www.packageyangulogistics.com/" target="_blank" rel="noopener noreferrer">
              <Card className="overflow-hidden border-0 bg-card hover:shadow-card transition-all duration-300 group hover:scale-105">
                <img 
                  src="/lovable-uploads/0207f092-a550-48d0-ac3d-0f905a7c97e1.png" 
                  alt="Package Yangu Logistics"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-foreground">Package Yangu Logistics</h3>
                  <p className="text-muted-foreground text-sm">Fast & reliable delivery services</p>
                </div>
              </Card>
            </a>
            
            <a href="https://cozyinvoicekeeper-one.vercel.app/" target="_blank" rel="noopener noreferrer">
              <Card className="overflow-hidden border-0 bg-card hover:shadow-card transition-all duration-300 group hover:scale-105">
                <img 
                  src="/lovable-uploads/22e49366-a76a-4bd7-bb52-0fbfc7f05334.png" 
                  alt="Cozy Invoice"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-foreground">Cozy Invoice</h3>
                  <p className="text-muted-foreground text-sm">Effortless invoicing for African businesses</p>
                </div>
              </Card>
            </a>
            
            <a href="https://vitabuzsmart.africa/" target="_blank" rel="noopener noreferrer">
              <Card className="overflow-hidden border-0 bg-card hover:shadow-card transition-all duration-300 group hover:scale-105">
                <img 
                  src="/lovable-uploads/7c4038d8-d7bb-4c3f-b239-81d70e8e220b.png" 
                  alt="Vitabuz Inventory"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-foreground">Vitabuz Inventory</h3>
                  <p className="text-muted-foreground text-sm">Inventory management simplified</p>
                </div>
              </Card>
            </a>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/portfolio">
              <Button variant="outline" size="lg">
                View All Projects <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
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
              Join businesses across Africa who trust EspiraNova to deliver innovative 
              technology solutions that drive growth and success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/portfolio">
                <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                  View Our Work
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="accent" size="lg">
                  Start Your Project
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Index;
