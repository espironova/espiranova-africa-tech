import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, BarChart3, Receipt } from "lucide-react";

export const Portfolio = () => {
  const projects = [
    {
      icon: Receipt,
      title: "Cozy Invoice",
      description: "Transformative invoicing solution for streamlined business operations and financial management.",
      category: "Business Solutions"
    },
    {
      icon: Package,
      title: "Package Delivery Platform",
      description: "Simplifying logistics and last-mile delivery with smart routing and real-time tracking.",
      category: "Logistics"
    },
    {
      icon: BarChart3,
      title: "Vita buz Inventory",
      description: "Smart inventory management system designed specifically for SMEs across Africa.",
      category: "Inventory Management"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our Portfolio
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Showcasing African-market-ready projects that demonstrate our commitment to 
            innovation and practical solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="p-6 hover:shadow-card transition-all duration-300 border-0 bg-card group hover:scale-105">
              <div className="w-12 h-12 rounded-lg bg-gradient-accent mb-4 flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                <project.icon className="w-6 h-6 text-white" />
              </div>
              <div className="mb-3">
                <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{project.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">{project.description}</p>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};