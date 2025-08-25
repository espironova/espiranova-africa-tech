import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, Users, TrendingUp } from "lucide-react";

const PortfolioPage = () => {
  const projects = [
    {
      id: 1,
      title: "Package Delivery Platform",
      description: "Fast & reliable delivery services platform with shipment tracking and logistics management. Built for African markets with mobile-first approach.",
      category: "Web Application",
      image: "/lovable-uploads/b945bafd-eeaa-47d9-b5cb-ca4debdfb7b1.png",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      features: ["Real-time tracking", "Route optimization", "Payment integration", "Admin dashboard"],
      status: "Live"
    },
    {
      id: 2,
      title: "Cozy Invoice",
      description: "Effortless invoicing platform designed for African businesses with professional invoice creation, client management, and payment tracking.",
      category: "SaaS Platform",
      image: "/lovable-uploads/b945bafd-eeaa-47d9-b5cb-ca4debdfb7b1.png",
      technologies: ["React", "Django", "PostgreSQL", "Stripe API"],
      features: ["Invoice templates", "Client management", "Payment tracking", "Multi-currency support"],
      status: "Live"
    },
    {
      id: 3,
      title: "Vitabuz Inventory",
      description: "Inventory management simplified - track inventory, manage sales, and analyze business performance with comprehensive reporting and analytics.",
      category: "Business Management",
      image: "/lovable-uploads/b945bafd-eeaa-47d9-b5cb-ca4debdfb7b1.png",
      technologies: ["Vue.js", "Laravel", "MySQL", "Chart.js"],
      features: ["Stock management", "Sales analytics", "Low stock alerts", "Barcode scanning"],
      status: "Live"
    },
    {
      id: 4,
      title: "Legal Solutions Platform",
      description: "Tailored legal solutions with integrity and precision. Comprehensive case management system for law firms with document management and client portals.",
      category: "Legal Tech",
      image: "/lovable-uploads/b945bafd-eeaa-47d9-b5cb-ca4debdfb7b1.png",
      technologies: ["React", "Express.js", "MongoDB", "AWS S3"],
      features: ["Case management", "Document storage", "Client portals", "Billing integration"],
      status: "In Development"
    }
  ];

  const stats = [
    { icon: Calendar, label: "Years of Experience", value: "8+" },
    { icon: Users, label: "Happy Clients", value: "50+" },
    { icon: TrendingUp, label: "Projects Completed", value: "100+" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Featured Work
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Discover our portfolio of successful projects that showcase our expertise in 
            creating innovative digital solutions for diverse industries.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 text-center bg-card border-0 hover:shadow-card transition-all duration-300">
                <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <Card key={project.id} className={`overflow-hidden border-0 bg-card hover:shadow-card transition-all duration-300 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } lg:flex`}>
                <div className="lg:w-1/2">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </div>
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <span className={`ml-2 text-sm font-medium px-3 py-1 rounded-full ${
                      project.status === 'Live' 
                        ? 'text-success bg-success/10' 
                        : 'text-accent bg-accent/10'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{project.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Button variant="hero" className="w-fit">
                    View Project <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <Card className="p-8 md:p-12 bg-gradient-hero text-center max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-white/90 text-lg leading-relaxed mb-8">
              Join our growing list of satisfied clients. Let's build something amazing together.
            </p>
            <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
              Discuss Your Project
            </Button>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;