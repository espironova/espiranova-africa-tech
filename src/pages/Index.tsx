import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  ArrowRight, 
  FileText, 
  Table, 
  ClipboardList, 
  MessageCircle, 
  Globe,
  Rocket,
  Brain,
  Globe2,
  RefreshCw,
  Zap,
  Server,
  CreditCard,
  Headphones,
  Camera
} from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { FeaturedWorkCarousel } from "@/components/FeaturedWorkCarousel";
import logo from "@/assets/espiranova-logo-main.jpg";

const Index = () => {
  const painPoints = [
    { icon: Table, label: "Excel Sheets" },
    { icon: ClipboardList, label: "Paper Forms" },
    { icon: Camera, label: "Photo Records" },
    { icon: MessageCircle, label: "WhatsApp Approvals" },
    { icon: Globe, label: "Outdated Websites" },
    { icon: FileText, label: "Manual Records" },
  ];

  const coreServices = [
    {
      icon: Zap,
      title: "SME Automation & Internal Apps",
      description: "Custom internal tools to streamline your operations and eliminate repetitive tasks"
    },
    {
      icon: Globe,
      title: "Modern Websites → Business Systems",
      description: "Transform static sites into dynamic platforms that work for your business"
    },
    {
      icon: Server,
      title: "Manual → Digital → Intelligent Migration",
      description: "Step-by-step digital transformation from paper to cloud-based systems"
    },
    {
      icon: CreditCard,
      title: "API & Payment Integrations",
      description: "Connect with M-Pesa, banks, and third-party services seamlessly"
    },
    {
      icon: Headphones,
      title: "Hosting, Domains & Ongoing Support",
      description: "Full lifecycle support so your systems keep running smoothly"
    }
  ];

  const whyEspiraNova = [
    {
      icon: Rocket,
      title: "Faster Delivery",
      description: "Faster delivery than traditional developers"
    },
    {
      icon: Brain,
      title: "Innovative Solutions",
      description: "We use smart development workflows that help us build better systems faster and more affordably."
    },
    {
      icon: Globe2,
      title: "Built for Africa",
      description: "Built for Kenyan & African businesses"
    },
    {
      icon: RefreshCw,
      title: "Ongoing Support",
      description: "Ongoing support & hosting included"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="EspiraNova - We Help SMEs Eliminate Manual Work"
        description="EspiraNova builds fast, affordable web apps and modern websites that automate daily business processes — from Excel and WhatsApp to intelligent, cloud-based systems."
        keywords="SME automation Kenya, business automation Africa, custom web apps, digital transformation, eliminate manual work, cloud-based systems"
        url="https://espiranova.co.ke"
      />
      <Navigation />
      <Hero />
      
      {/* Pain Points Section - Animated Marquee */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-brand-sky/30 to-background relative overflow-hidden">
        {/* Blurred Logo Watermark Background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <img 
            src={logo}
            alt=""
            aria-hidden="true"
            className="w-[600px] h-auto opacity-[0.04] blur-xl"
          />
        </div>
        
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-brand-cyan/5 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground animate-fade-in">
              Still Running Your Business On...
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto"></div>
          </div>
          
          {/* Animated Marquee */}
          <div className="marquee-container py-8 mb-12">
            <div className="marquee-content">
              {/* First set of items */}
              {painPoints.map((point, index) => (
                <div 
                  key={`first-${index}`}
                  className="flex-shrink-0 group"
                >
                  <Card className="px-8 py-6 border-destructive/30 bg-destructive/5 hover:bg-destructive/10 hover:scale-105 transition-all duration-300 cursor-pointer min-w-[180px] hover:shadow-lg">
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-14 h-14 rounded-xl bg-destructive/20 flex items-center justify-center group-hover:bg-destructive/30 transition-all duration-300 group-hover:rotate-6">
                        <point.icon className="w-7 h-7 text-destructive transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <p className="text-sm font-semibold text-foreground whitespace-nowrap">{point.label}</p>
                    </div>
                  </Card>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {painPoints.map((point, index) => (
                <div 
                  key={`second-${index}`}
                  className="flex-shrink-0 group"
                >
                  <Card className="px-8 py-6 border-destructive/30 bg-destructive/5 hover:bg-destructive/10 hover:scale-105 transition-all duration-300 cursor-pointer min-w-[180px] hover:shadow-lg">
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-14 h-14 rounded-xl bg-destructive/20 flex items-center justify-center group-hover:bg-destructive/30 transition-all duration-300 group-hover:rotate-6">
                        <point.icon className="w-7 h-7 text-destructive transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <p className="text-sm font-semibold text-foreground whitespace-nowrap">{point.label}</p>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          {/* Solution Statement */}
          <div className="text-center max-w-3xl mx-auto">
            <Card className="p-8 md:p-10 bg-gradient-to-r from-brand-cyan/10 via-brand-blue/10 to-brand-cyan/10 border-brand-cyan/30 shadow-cyan hover:shadow-intense transition-all duration-500">
              <p className="text-xl md:text-2xl font-semibold text-foreground leading-relaxed">
                We replace all that with{" "}
                <span className="glow-text-cyan">simple, custom-built systems</span>
                {" "}— built only for <span className="text-brand-cyan font-bold">YOUR</span> business.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 md:py-28 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-blue/20 via-transparent to-brand-cyan/20"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Our Core Services
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Everything you need to move from manual processes to intelligent, automated systems.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {coreServices.map((service, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-cyan transition-all duration-500 border-0 bg-card/80 backdrop-blur-sm group hover:scale-105 animate-fade-in relative overflow-hidden hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-brand-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary mb-4 flex items-center justify-center group-hover:shadow-glow transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{service.description}</p>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="hero" size="lg" className="bg-gradient-primary hover:shadow-cyan transition-all duration-300 hover:scale-105 btn-magnetic">
                View All Packages <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why EspiraNova */}
      <section className="py-20 md:py-28 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-brand-cyan/20 blur-3xl animate-pulse"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Why EspiraNova?
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {whyEspiraNova.map((item, index) => (
              <Card 
                key={index} 
                className="p-6 text-center hover:shadow-cyan transition-all duration-500 border-0 bg-card/50 backdrop-blur-sm group hover:scale-105 animate-fade-in hover:-translate-y-2"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-14 h-14 rounded-full bg-gradient-primary mb-4 flex items-center justify-center mx-auto group-hover:shadow-glow transition-all duration-300 animate-float group-hover:animate-none">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Projects Carousel */}
      <section className="py-20 md:py-28 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-blue/20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-brand-cyan/20 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Featured Work
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how we've helped businesses eliminate manual work and build systems that actually work.
            </p>
          </div>
          
          <FeaturedWorkCarousel />
          
          <div className="text-center mt-12">
            <Link to="/portfolio">
              <Button variant="outline" size="lg" className="hover:scale-105 transition-all duration-300 border-brand-cyan/50 hover:border-brand-cyan hover:bg-brand-cyan/10">
                View All Projects <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6">
          <Card className="p-8 md:p-12 bg-gradient-hero text-center max-w-4xl mx-auto border-0 shadow-cyan hover:shadow-intense transition-all duration-500">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Eliminate Manual Work?
            </h3>
            <p className="text-white/90 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Get a free automation assessment and discover how much time and money you could save with simple, custom-built systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/portfolio">
                <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-brand-navy transition-all duration-300 hover:scale-105">
                  View Our Work
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" className="bg-brand-cyan hover:bg-brand-light-cyan text-brand-navy font-semibold transition-all duration-300 hover:scale-105 hover:shadow-glow">
                  Get Free Assessment <ArrowRight className="w-4 h-4 ml-2" />
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
