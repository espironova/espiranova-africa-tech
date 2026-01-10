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
  Headphones
} from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { FeaturedWorkCarousel } from "@/components/FeaturedWorkCarousel";

const Index = () => {
  const painPoints = [
    { icon: FileText, label: "Manual records" },
    { icon: Table, label: "Excel sheets" },
    { icon: ClipboardList, label: "Paper forms" },
    { icon: MessageCircle, label: "WhatsApp approvals" },
    { icon: Globe, label: "Outdated websites" },
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
      
      {/* Pain Points Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-primary opacity-10 blur-3xl"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Most Businesses Waste Hours Every Day On...
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto mb-12">
            {painPoints.map((point, index) => (
              <Card 
                key={index} 
                className="p-6 text-center border-destructive/20 bg-destructive/5 hover:bg-destructive/10 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-full bg-destructive/20 mb-4 flex items-center justify-center mx-auto">
                  <point.icon className="w-6 h-6 text-destructive" />
                </div>
                <p className="text-sm font-medium text-foreground">{point.label}</p>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Card className="inline-block p-6 md:p-8 bg-success/10 border-success/20">
              <p className="text-lg md:text-xl font-semibold text-foreground">
                We replace all that with <span className="text-success">simple, custom-built systems</span> — delivered fast using advanced development workflows.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 via-transparent to-accent/20"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
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
                className="p-6 hover:shadow-card transition-all duration-500 border-0 bg-card/80 backdrop-blur-sm group hover:scale-105 animate-fade-in relative overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary mb-4 flex items-center justify-center group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
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
              <Button variant="hero" size="lg">
                View All Packages <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why EspiraNova */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-gradient-accent blur-3xl"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Why EspiraNova?
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {whyEspiraNova.map((item, index) => (
              <Card 
                key={index} 
                className="p-6 text-center hover:shadow-card transition-all duration-500 border-0 bg-card/50 backdrop-blur-sm group hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-14 h-14 rounded-full bg-gradient-primary mb-4 flex items-center justify-center mx-auto group-hover:shadow-glow transition-all duration-300">
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
      <section className="py-20 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-primary blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gradient-accent blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
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
              Ready to Eliminate Manual Work?
            </h3>
            <p className="text-white/90 text-lg leading-relaxed mb-8">
              Get a free automation assessment and discover how much time and money you could save with simple, custom-built systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/portfolio">
                <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                  View Our Work
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="accent" size="lg">
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
