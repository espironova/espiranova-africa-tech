import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Code, Globe, Database, Users, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { FeaturedWorkCarousel } from "@/components/FeaturedWorkCarousel";

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
      icon: Database,
      title: "API Development & Integrations",
      description: "Seamless connections and robust API solutions"
    },
    {
      icon: Users,
      title: "Specialized Software",
      description: "Industry-specific applications and tools"
    },
    {
      icon: TrendingUp,
      title: "Data-driven Performance",
      description: "From Data to Decisions",
      tagline: "From Data to Decisions"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="EspiraNova - Innovation with Impact"
        description="Driving digital transformation with innovative solutions, seamless integrations, and tailored applications to empower businesses and communities across Africa."
        keywords="technology solutions Africa, custom software development Kenya, API development, AI solutions, web applications, digital transformation Africa, data analytics"
        url="https://espiranova.com"
      />
      <Navigation />
      <Hero />
      
      {/* Quick Overview */}
      <section className="py-20 bg-background relative overflow-hidden">
        {/* Tech Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 via-transparent to-accent/20"></div>
          <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-primary opacity-10 blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-accent opacity-10 blur-3xl"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Technology Solutions for Africa
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Empowering Africa's digital future with innovative solutions, custom applications, 
              and seamless API integrations that drive transformation, growth, and lasting impact.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {highlights.map((item, index) => (
              <Card 
                key={index} 
                className="p-6 text-center hover:shadow-card transition-all duration-500 border-0 bg-card/50 backdrop-blur-sm group hover:scale-105 animate-fade-in relative overflow-hidden"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary mb-4 flex items-center justify-center mx-auto group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{item.description}</p>
                  {item.tagline && (
                    <p className="text-primary text-xs font-medium mt-2 italic">{item.tagline}</p>
                  )}
                </div>
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
      
      {/* Featured Projects Carousel */}
      <section className="py-20 bg-muted/30 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-primary blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gradient-accent blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
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
          
          <FeaturedWorkCarousel />
          
          <div className="text-center mt-12">
            <Link to="/portfolio">
              <Button variant="outline" size="lg" className="hover:scale-105 transition-all duration-300">
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
