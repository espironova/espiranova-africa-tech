import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Lightbulb, Shield, Zap } from "lucide-react";
import { SEO } from "@/components/SEO";
import sharedLogo from "@/assets/partners/shared-logo.png";
 
const AboutPage = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Inspiration",
      description: "Sparking creativity and growth in every solution.",
      gradient: "from-accent to-accent/80"
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Building trust through transparent communication.",
      gradient: "from-primary to-primary-glow"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Pioneering cutting-edge technology for the future.",
      gradient: "from-success to-success/80"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="About EspiraNova - Leading Technology Solutions Provider in Africa"
        description="Learn about EspiraNova's mission to ignite digital transformation across Africa. Over 8 years of API engineering expertise, delivering innovative software solutions to empower businesses and communities."
        keywords="about EspiraNova, African technology company, Kenya based technology company, Website development company,custom software development company, POS systems,API development company,software development team, API engineering Kenya, digital transformation Africa, best websites, best custom software development, best API development, best POS systems, best software development team, best API engineering, best digital transformation, solutions for businesses, solutions for communities, solutions for Africa"
        url="https://espiranova.com/about"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-hero-move"
          style={{ backgroundImage: `url(/lovable-uploads/93de2e72-0ee8-43e9-aafb-0e4b80c79f3a.png)` }}
          role="img"
          aria-label="EspiraNova team and technology solutions in Africa"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About EspiraNova
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Igniting digital transformation across Africa with passion, expertise, and innovation.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Who We Are
              </h2>
              <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            </div>
            
            <Card className="p-8 md:p-12 shadow-card border-0 bg-card">
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                <strong className="text-foreground">EspiraNova</strong> is an innovative technology solutions provider 
                committed to igniting digital transformation across Africa. Born from a passion to inspire progress 
                through intuitive software, we fuse cutting-edge AI, robust API development, and bespoke applications 
                to uplift small and medium enterprises, freelancers, and diverse industries.
              </p>
              
              
              <div className="bg-gradient-hero p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-white/90 text-lg">
                  To be the catalyst for new possibilities, empowering businesses with simple, impactful technology.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Our Values
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-card transition-all duration-300 border-0 bg-card group hover:scale-105">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${value.gradient} mx-auto mb-6 flex items-center justify-center group-hover:shadow-glow transition-all duration-300`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Partners */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Our Partners
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted by businesses and organizations across Africa
            </p>
          </div>
          
          {/* Sliding Partners Logos */}
          <div className="relative overflow-hidden">
            <div className="flex items-center gap-12 sm:gap-16 w-max animate-slide-logos" aria-label="Partner logos marquee">
              {/* First set */}
              <img 
                src="/lovable-uploads/package-yangu-new.png" 
                alt="Package Yangu Logistics - Logistics Platform by EspiraNova"
                title="Package Yangu Logistics - Logistics Platform by EspiraNova"
                loading="lazy"
                decoding="async"
                className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
              <img 
                src="/lovable-uploads/cozy-invoice-new.png" 
                alt="Cozy Invoice Management platform by EspiraNova"
                title="Cozy Invoice - Invoicing Management Software by EspiraNova"
                loading="lazy"
                decoding="async"
                className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
              <img 
                src="/lovable-uploads/glorious-mission-outreach.jpg" 
                alt="Glorious Mission Outreach Ministries partner logo"
                title="Glorious Mission Outreach - Church Digital Solutions by EspiraNova"
                loading="lazy"
                decoding="async"
                className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
              <img
                src={sharedLogo}
                alt="Shared partner logo"
                loading="lazy"
                decoding="async"
                className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
              />

              {/* Duplicate set for seamless loop */}
              <img 
                src="/lovable-uploads/package-yangu-new.png" 
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto object-contain opacity-90"
              />
              <img 
                src="/lovable-uploads/cozy-invoice-new.png" 
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto object-contain opacity-90"
              />
              <img 
                src="/lovable-uploads/glorious-mission-outreach.jpg" 
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto object-contain opacity-90"
              />
              <img
                src={sharedLogo}
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto object-contain opacity-90"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Roots */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 bg-gradient-hero text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Our Roots
              </h3>
              <p className="text-white/90 text-lg leading-relaxed">
                Rooted in Kenya, EspiraNova harnesses industry knowledge and faith-inspired resilience 
                to empower communities, mentoring youth and peers toward a brighter future. We believe 
                in the transformative power of technology to create opportunities and drive sustainable 
                growth across the African continent.
              </p>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutPage;