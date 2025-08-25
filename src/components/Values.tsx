import { Card } from "@/components/ui/card";
import { Lightbulb, Shield, Zap } from "lucide-react";

export const Values = () => {
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
  );
};