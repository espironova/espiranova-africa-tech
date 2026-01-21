import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { FeaturedWorkCarousel } from "@/components/FeaturedWorkCarousel";
import { ImpactMetrics } from "@/components/ImpactMetrics";

const Index = () => {
  const painPoints = [
    { 
      image: "/lovable-uploads/messy-spreadsheet.jpg",
      label: "Messy Spreadsheets",
      description: "Data scattered across Excel files"
    },
    { 
      image: "/lovable-uploads/paper-forms.png",
      label: "Paper Forms",
      description: "Stacks of documents everywhere"
    },
    { 
      image: "/lovable-uploads/whatsapp-chaos.avif",
      label: "WhatsApp Chaos",
      description: "Business running on chat"
    },
    { 
      image: "/lovable-uploads/outdated-websites.png",
      label: "Outdated Websites",
      description: "Sites that don't work for you"
    },
  ];

  const coreServices = [
    {
      image: "/lovable-uploads/inventory-management-EspiraNova-Vitabuz-smart-africa.png",
      title: "SME Automation",
      subtitle: "Internal Apps & Workflows",
      description: "Custom tools to streamline operations and eliminate repetitive tasks",
      link: "/services"
    },
    {
      image: "/lovable-uploads/kabeneadvocates-EspiraNova-web-digital-solutions.png",
      title: "Modern Websites",
      subtitle: "That Work For You",
      description: "Transform static sites into dynamic platforms that drive business",
      link: "/services"
    },
    {
      image: "/lovable-uploads/cozy-invoice-screenshot.png",
      title: "Digital Migration",
      subtitle: "Paper → Cloud",
      description: "Step-by-step transformation from manual to intelligent systems",
      link: "/services"
    },
    {
      image: "/lovable-uploads/package-yangu-logistics-EspiraNova-solutions-payments-africa.png",
      title: "API Integrations",
      subtitle: "M-Pesa, Banks & More",
      description: "Connect with payment systems and third-party services seamlessly",
      link: "/services"
    },
  ];

  const whyReasons = [
    { title: "2-4 Week Delivery", description: "Fast turnaround without sacrificing quality" },
    { title: "Africa-First Approach", description: "Built specifically for Kenyan & African contexts" },
    { title: "AI-Powered Development", description: "Smart workflows that deliver better systems faster" },
    { title: "Ongoing Support", description: "We don't disappear after launch" },
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="EspiraNova - We Design Websites & Automate Business Processes"
        description="EspiraNova builds modern websites and simple systems that eliminate manual work for African businesses. From Excel to cloud-based automation."
        keywords="web design Kenya, business automation Africa, custom web apps, digital transformation, eliminate manual work, cloud-based systems"
        url="https://espiranova.co.ke"
      />
      <Navigation />
      <Hero />
      
      {/* Impact Metrics */}
      <ImpactMetrics />
      
      {/* Pain Points Section - Bold Design */}
      <section className="relative py-16 md:py-24 bg-background overflow-hidden">
        {/* Geometric Pattern Background */}
        <div className="absolute inset-0 geometric-pattern" />
        
        {/* Gradient Accent */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-destructive/50 to-transparent" />
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 rounded-full border border-destructive/30 bg-destructive/5 text-destructive text-sm font-medium tracking-wide uppercase mb-4">
              The Problem
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4 tracking-tight">
              Still Trapped in <span className="text-destructive">The Past?</span>
            </h2>
            <p className="text-base text-muted-foreground">
              These are the tools holding your business back. Sound familiar?
            </p>
          </div>
          
          {/* Pain Points Grid - Image Based */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto mb-12">
            {painPoints.map((point, index) => (
              <Card 
                key={index}
                className="group relative overflow-hidden border-0 bg-card hover:shadow-2xl transition-all duration-500 cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={point.image}
                    alt={point.label}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Red Overlay on Hover */}
                  <div className="absolute inset-0 bg-destructive/0 group-hover:bg-destructive/20 transition-colors duration-300" />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                </div>
                
                {/* Content */}
                <div className="p-4">
                  <h3 className="text-base font-bold text-foreground mb-1 group-hover:text-destructive transition-colors duration-300">
                    {point.label}
                  </h3>
                  <p className="text-sm text-muted-foreground">{point.description}</p>
                </div>
                
                {/* Hover Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-destructive/30 rounded-lg transition-colors duration-300 pointer-events-none" />
              </Card>
            ))}
          </div>
          
          {/* Solution Statement */}
          <div className="text-center max-w-4xl mx-auto">
            <Card className="relative p-6 md:p-10 bg-gradient-to-r from-brand-cyan/10 via-brand-blue/10 to-brand-cyan/10 border-brand-cyan/20 overflow-hidden group hover:shadow-cyan transition-all duration-500">
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-lg border-2 border-transparent bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-cyan bg-clip-border opacity-20" />
              
              <p className="text-lg md:text-xl lg:text-2xl font-bold text-foreground leading-relaxed">
                We replace all that with{" "}
                <span className="text-brand-cyan">simple, custom-built systems</span>
                {" "}— designed specifically for{" "}
                <span className="text-brand-mustard">YOUR</span> business.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Services - Visual Cards */}
      <section className="relative py-16 md:py-24 bg-brand-navy overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `
            linear-gradient(hsl(185 75% 50%) 1px, transparent 1px),
            linear-gradient(90deg, hsl(185 75% 50%) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }} />
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full border border-brand-cyan/30 bg-brand-cyan/5 text-brand-cyan text-sm font-medium tracking-wide uppercase mb-4">
              What We Build
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">
              Solutions That <span className="text-brand-mustard">Actually Work</span>
            </h2>
            <p className="text-base text-white/60 max-w-2xl mx-auto">
              Real projects. Real results. See what we can build for you.
            </p>
          </div>
          
          {/* Services Grid - Visual */}
          <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {coreServices.map((service, index) => (
              <Link 
                key={index}
                to={service.link}
                className="group"
              >
                <Card className="relative overflow-hidden border-0 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 h-full">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/50 to-transparent" />
                    
                    {/* Floating Arrow */}
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-brand-cyan/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
                      <ExternalLink className="w-5 h-5 text-brand-cyan" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-5">
                    <div className="text-brand-mustard text-sm font-medium mb-1">{service.subtitle}</div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-white/60 text-sm">{service.description}</p>
                  </div>
                  
                  {/* Hover Border */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-brand-cyan/30 rounded-lg transition-colors duration-300 pointer-events-none" />
                </Card>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/services">
              <Button 
                size="lg" 
                className="bg-brand-cyan hover:bg-brand-light-cyan text-brand-navy px-8 py-6 text-base font-bold transition-all duration-300 hover:scale-105 group"
              >
                View All Services
                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Diagonal Divider */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-background" style={{
          clipPath: 'polygon(0 100%, 100% 100%, 100% 0)',
        }} />
      </section>

      {/* Why EspiraNova - Bold Design */}
      <section className="relative py-16 md:py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left - Text Content */}
            <div>
              <span className="inline-block px-4 py-2 rounded-full border border-brand-cyan/30 bg-brand-cyan/5 text-brand-cyan text-sm font-medium tracking-wide uppercase mb-4">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6 tracking-tight">
                Not Your Typical <span className="text-brand-mustard">Tech Company</span>
              </h2>
              
              <div className="space-y-5">
                {whyReasons.map((reason, index) => (
                  <div 
                    key={index}
                    className="flex gap-4 items-start group animate-fade-in"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-mustard/20 transition-colors duration-300">
                      <span className="text-brand-cyan font-bold text-base group-hover:text-brand-mustard transition-colors duration-300">0{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-foreground mb-1">{reason.title}</h3>
                      <p className="text-sm text-muted-foreground">{reason.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right - Visual */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden">
                <img 
                  src="/lovable-uploads/hero-team-africa.png"
                  alt="EspiraNova Team"
                  className="w-full h-auto rounded-2xl"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy/60 via-transparent to-transparent" />
                
                {/* Floating Stats Card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-2xl font-black text-white">50<span className="text-brand-mustard">+</span></div>
                      <div className="text-white/70 text-xs">Projects Completed</div>
                    </div>
                    <div className="w-px h-10 bg-white/20" />
                    <div>
                      <div className="text-2xl font-black text-white">100<span className="text-brand-mustard">%</span></div>
                      <div className="text-white/70 text-xs">Client Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-3 -right-3 w-20 h-20 border-2 border-brand-mustard/30 rounded-xl rotate-12" />
              <div className="absolute -bottom-3 -left-3 w-14 h-14 bg-brand-cyan/20 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Projects */}
      <section className="relative py-16 md:py-24 bg-muted/30 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-blue/20 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-brand-cyan/20 blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full border border-brand-cyan/30 bg-brand-cyan/5 text-brand-cyan text-sm font-medium tracking-wide uppercase mb-4">
              Our Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4 tracking-tight">
              Featured <span className="text-brand-mustard">Work</span>
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              See how we've helped businesses eliminate manual work and build systems that actually work.
            </p>
          </div>
          
          <FeaturedWorkCarousel />
          
          <div className="text-center mt-10">
            <Link to="/portfolio">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-brand-cyan/50 text-brand-cyan hover:bg-brand-cyan/10 hover:border-brand-cyan px-8 py-6 text-base font-semibold transition-all duration-300"
              >
                View All Projects
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
