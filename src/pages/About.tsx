import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Lightbulb, Shield, Zap } from "lucide-react";

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
              
              <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                Led by a founder with over eight years of API engineering expertise and Apigee mastery, our team 
                crafts tailored web and mobile solutions—such as the transformative <strong className="text-primary">Cozy Invoice</strong> for 
                streamlined invoicing—to address unique business challenges.
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
    </div>
  );
};

export default AboutPage;