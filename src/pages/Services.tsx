import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Zap, 
  Globe, 
  Server, 
  Sparkles, 
  Cloud,
  CheckCircle, 
  Clock, 
  Users, 
  ArrowRight,
  TrendingDown,
  AlertCircle,
  BarChart3
} from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";

const ServicesPage = () => {
  const packages = [
    {
      id: "automation-sprint",
      icon: Zap,
      title: "SME Automation Sprint",
      badge: "FLAGSHIP",
      timeline: "2–4 weeks",
      idealFor: "SMEs stuck in Excel, paper, WhatsApp",
      description: "Get a custom web app that eliminates repetitive admin work.",
      features: [
        "Simple custom web app",
        "Automated workflows",
        "Admin dashboard",
        "Hosted on Vercel + custom domain"
      ],
      results: [
        { icon: TrendingDown, text: "40–70% reduction in admin work" },
        { icon: AlertCircle, text: "Fewer errors" },
        { icon: BarChart3, text: "Faster reporting" }
      ],
      cta: "Start Your Sprint"
    },
    {
      id: "website-upgrade",
      icon: Globe,
      title: "Website → Business System Upgrade",
      badge: null,
      timeline: "2–3 weeks",
      idealFor: "Companies with outdated or static websites",
      description: "Your website becomes a working tool, not a brochure.",
      features: [
        "Modern website (fast, mobile-first)",
        "Lead capture & forms",
        "Booking / enquiries",
        "AI chat assistant",
        "Analytics dashboard"
      ],
      results: null,
      cta: "Upgrade Your Website"
    },
    {
      id: "digital-migration",
      icon: Server,
      title: "Manual → Digital → Intelligent Migration",
      badge: null,
      timeline: "4–8 weeks",
      idealFor: "NGOs, SACCOs, institutions, growing SMEs",
      description: "Full digital transformation from paper-based to intelligent cloud systems.",
      features: [
        "Custom cloud system",
        "Data migration",
        "Workflow automation",
        "AI insights layer",
        "Staff training"
      ],
      results: null,
      cta: "Plan Your Migration"
    },
    {
      id: "micro-apps",
      icon: Sparkles,
      title: "AI Micro-Apps (Quick Wins)",
      badge: "FAST",
      timeline: "1–2 weeks",
      idealFor: "Businesses needing quick solutions",
      description: "Small apps built fast to solve specific problems.",
      features: [
        "Invoice tracking",
        "Stock systems",
        "Client management",
        "Reporting dashboards"
      ],
      results: null,
      cta: "Build a Micro-App"
    },
    {
      id: "managed-hosting",
      icon: Cloud,
      title: "Hosting, Domains & Managed Systems",
      badge: null,
      timeline: "Ongoing",
      idealFor: "All businesses needing reliable hosting",
      description: "Keep your systems running smoothly with managed hosting and support.",
      features: [
        "Vercel hosting",
        "Custom domain",
        "SSL & monitoring",
        "Minor updates included"
      ],
      results: null,
      cta: "Get Managed Hosting"
    }
  ];

  const approach = [
    "We start by understanding your actual workflow, not just your wishlist",
    "AI-assisted development means faster builds at lower cost",
    "You get a working system in weeks, not months",
    "We train your team and provide ongoing support",
    "Built specifically for Kenyan and African business contexts",
    "Transparent pricing with no hidden costs"
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Service Packages - EspiraNova"
        description="Focused service packages designed for African SMEs. From automation sprints to full digital migration, we help you eliminate manual work with simple systems."
        keywords="SME automation packages, business system upgrade, digital migration Kenya, AI micro-apps, managed hosting Africa"
        url="https://espiranova.co.ke/services"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-hero-move scale-105"
          style={{ backgroundImage: `url(/lovable-uploads/dad02b7e-ac50-4612-8d4e-b6d45e772c11.png)` }}
          role="img"
          aria-label="EspiraNova services: SME automation, web apps, digital migration"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 animate-fade-in">
            Solutions That <span className="text-brand-mustard">Actually Solve</span> Problems
          </h1>
          <p className="text-lg text-white/90 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Choose from focused service packages designed for African SMEs. 
            No fluff, just working systems delivered fast.
          </p>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-16 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-primary opacity-10 blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-accent opacity-10 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              Our Service Packages
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-brand-cyan to-brand-mustard mx-auto mb-6"></div>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto">
              Each package is designed to deliver real results. Pick what fits your needs.
            </p>
          </div>
          
          <div className="space-y-6 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <Card 
                key={pkg.id} 
                className={`p-5 md:p-6 hover:shadow-cyan transition-all duration-500 border-0 bg-card/80 backdrop-blur-sm animate-fade-in relative overflow-hidden group hover:-translate-y-1 ${pkg.badge === 'FLAGSHIP' ? 'ring-2 ring-brand-mustard' : ''}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-brand-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {pkg.badge && (
                  <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold animate-pulse-glow ${pkg.badge === 'FLAGSHIP' ? 'bg-brand-mustard text-brand-navy' : 'bg-brand-cyan text-brand-navy'}`}>
                    {pkg.badge}
                  </div>
                )}
                
                <div className="grid md:grid-cols-3 gap-5 relative z-10">
                  {/* Left: Icon, Title, Meta */}
                  <div className="md:col-span-1">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-brand-cyan to-brand-light-cyan mb-3 flex items-center justify-center group-hover:shadow-glow transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <pkg.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold mb-2 text-foreground">{pkg.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Clock className="w-4 h-4 text-brand-mustard" />
                      <span>{pkg.timeline}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{pkg.idealFor}</span>
                    </div>
                  </div>
                  
                  {/* Middle: Description & Features */}
                  <div className="md:col-span-1">
                    <p className="text-sm text-muted-foreground mb-3">{pkg.description}</p>
                    <ul className="space-y-1.5">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-foreground group/item">
                          <CheckCircle className="w-4 h-4 text-success flex-shrink-0 transition-transform duration-300 group-hover/item:scale-110" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Right: Results & CTA */}
                  <div className="md:col-span-1 flex flex-col justify-between">
                    {pkg.results && (
                      <div className="mb-3">
                        <p className="text-sm font-semibold text-foreground mb-2">Results you'll see:</p>
                        <ul className="space-y-1.5">
                          {pkg.results.map((result, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-brand-mustard">
                              <result.icon className="w-4 h-4 flex-shrink-0" />
                              {result.text}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <Link to="/contact" className="mt-auto">
                      <Button variant="hero" className="w-full group/btn hover:shadow-glow transition-all duration-300">
                        {pkg.cta} <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                How We Work
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-brand-cyan to-brand-mustard mx-auto mb-6"></div>
              <p className="text-base text-muted-foreground max-w-3xl mx-auto">
                We're not like other developers. Here's what makes working with us different.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {approach.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 p-4 rounded-lg bg-card/50 hover:bg-card transition-all duration-300 hover:shadow-card group animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CheckCircle className="w-5 h-5 text-brand-mustard mt-0.5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                  <p className="text-sm text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <Card className="p-6 md:p-10 bg-gradient-hero text-center max-w-4xl mx-auto hover:shadow-intense transition-all duration-500">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
              Not Sure Which Package is <span className="text-brand-mustard">Right for You?</span>
            </h3>
            <p className="text-white/90 text-base leading-relaxed mb-6">
              Get a free automation assessment. We'll analyze your current processes 
              and recommend the best solution for your business.
            </p>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="bg-white/10 border-brand-mustard text-white hover:bg-brand-mustard hover:text-brand-navy transition-all duration-300 hover:scale-105">
                Get Free Assessment <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </Card>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ServicesPage;
