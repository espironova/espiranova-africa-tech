import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, Users, TrendingUp } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";

const PortfolioPage = () => {
  const projects = [
    {
      id: 1,
      title: "Package Yangu Logistics",
      description: "Fast & reliable delivery services platform with shipment tracking and logistics management. Built for African markets with mobile-first approach.",
      category: "Logistics Platform",
      image: "/lovable-uploads/package-yangu-logistics-EspiraNova-solutions-payments-africa.png",
      
      features: ["Real-time tracking", "Route optimization", "Payment integration", "Admin dashboard"],
      status: "Live",
      url: "https://www.packageyangulogistics.com/"
    },
    {
      id: 2,
      title: "Cozy Invoice",
      description: "Effortless invoicing platform designed for African businesses with professional invoice creation, client management, and payment tracking.",
      category: "SaaS Platform",
      image: "/lovable-uploads/cozy-invoice-screenshot.png",
      
      features: ["Invoice templates", "Client management", "Payment tracking", "Multi-currency support"],
      status: "Live",
      url: "https://cozyinvoicekeeper-one.vercel.app/"
    },
    {
      id: 3,
      title: "Vitabuz Inventory",
      description: "Inventory management simplified - track inventory, manage sales, and analyze business performance with comprehensive reporting and analytics.",
      category: "Business Management",
      image: "/lovable-uploads/inventory-management-EspiraNova-Vitabuz-smart-africa.png",
      
      features: ["Stock management", "Sales analytics", "Low stock alerts", "Barcode scanning"],
      status: "Live",
      url: "https://vitabuzsmart.africa/"
    },
    {
      id: 4,
      title: "Kabene & Co. Advocates",
      description: "Tailored legal solutions with integrity and precision. Comprehensive case management system for law firms with document management and client portals.",
      category: "Legal Tech",
      image: "/lovable-uploads/kabeneadvocates-EspiraNova-web-digital-solutions.png",
      features: ["Case management", "Document storage", "Client portals", "Billing integration"],
      status: "Live",
      url: "https://www.kabeneadvocates.co.ke/"
    },
    {
      id: 5,
      title: "Glorious Church Elburgon",
      description: "Modern church website with sermon management, event scheduling, and community engagement features. Built to connect and inspire the congregation.",
      category: "Church Management",
      image: "/lovable-uploads/glorious-church-elburgon-EspiraNova-espiranova-solutions-websites.png",
      features: ["Sermon archive", "Event calendar", "Member portal", "Online giving"],
      status: "Live",
      url: "https://www.gloriouschurchelburgon.com/"
    },
    {
      id: 6,
      title: "Zoza",
      description: "Track Kenya's development projects with transparency and accountability. Platform for monitoring housing, markets, agriculture, and community development initiatives.",
      category: "Civic Tech",
      image: "/lovable-uploads/zoza-screenshot.png",
      features: ["Project tracking", "Public engagement", "Data visualization", "Reporting tools"],
      status: "Live",
      url: "https://www.zoza.co.ke/"
    },
    {
      id: 7,
      title: "Loise N.K & Co. Advocates",
      description: "Modern legal excellence - Professional law firm website providing comprehensive legal services with integrity, commitment, and excellence to clients nationally, regionally, and internationally.",
      category: "Legal Services",
      image: "/lovable-uploads/loise-advocates-screenshot.png",
      features: ["Practice areas showcase", "Team profiles", "Consultation booking", "Client resources"],
      status: "Live",
      url: "https://www.loisenkadvocates.co.ke/"
    }
  ];

  const stats = [
    { icon: Calendar, label: "Years of Experience", value: "8+" },
    { icon: Users, label: "Happy Clients", value: "50+" },
    { icon: TrendingUp, label: "Projects Completed", value: "100+" },
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Portfolio - Successful Projects & Case Studies"
        description="Explore EspiraNova's portfolio of successful technology projects including logistics platforms, invoicing systems, inventory management, and digital solutions across various industries in Africa."
        keywords="portfolio, case studies, software projects, web applications, mobile apps, technology solutions, client work, African tech projects"
        url="https://espiranova.com/portfolio"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-hero-move scale-105"
          style={{ backgroundImage: `url(/lovable-uploads/680b85d9-b389-4be9-9b2a-7638c311663e.png)` }}
          role="img"
          aria-label="EspiraNova featured work in logistics, invoicing, inventory, legal tech"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Featured Work
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
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
              <Card 
                key={index} 
                className="p-6 text-center bg-card border-0 hover:shadow-cyan transition-all duration-500 group hover:scale-105 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <stat.icon className="w-12 h-12 text-primary mx-auto mb-4 transition-transform duration-300 group-hover:scale-110" />
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
              <Card 
                key={project.id} 
                className={`overflow-hidden border-0 bg-card hover:shadow-cyan transition-all duration-500 group animate-fade-in ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } lg:flex`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="lg:w-1/2 relative overflow-hidden image-zoom">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    title={`${project.title} by EspiraNova - ${project.category}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-64 sm:h-72 lg:h-80 xl:h-96 object-contain bg-muted/50 transition-transform duration-500"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full transition-all duration-300 hover:bg-primary/20">
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
                  
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{project.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground group/item">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full transition-transform duration-300 group-hover/item:scale-150"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    <Button variant="hero" className="w-fit group/btn hover:shadow-glow transition-all duration-300">
                      View Project <ExternalLink className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                    </Button>
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <Card className="p-8 md:p-12 bg-gradient-hero text-center max-w-4xl mx-auto hover:shadow-intense transition-all duration-500">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-white/90 text-lg leading-relaxed mb-8">
              Join our growing list of satisfied clients. Let's build something amazing together.
            </p>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105">
                Discuss Your Project
              </Button>
            </Link>
          </Card>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PortfolioPage;
