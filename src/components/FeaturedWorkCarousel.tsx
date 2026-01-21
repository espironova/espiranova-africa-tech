import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: 1,
    title: "Package Yangu Logistics",
    description: "Fast & reliable delivery services",
    category: "Logistics",
    image: "/lovable-uploads/package-yangu-logistics-EspiraNova-solutions-payments-africa.png",
    url: "https://www.packageyangulogistics.com/",
    features: ["Real-time tracking", "Fleet management", "Route optimization"]
  },
  {
    id: 2,
    title: "Cozy Invoice",
    description: "Effortless invoicing for African businesses",
    category: "Business Software",
    image: "/lovable-uploads/cozy-invoice-screenshot.png",
    url: "https://cozyinvoicekeeper-one.vercel.app/",
    features: ["Automated billing", "Payment tracking", "Multi-currency support"]
  },
  {
    id: 3,
    title: "Vitabuz Inventory",
    description: "Inventory management simplified",
    category: "Business Software",
    image: "/lovable-uploads/inventory-management-EspiraNova-Vitabuz-smart-africa.png",
    url: "https://vitabuzsmart.africa/",
    features: ["Stock management", "Analytics", "Multi-location support"]
  },
  {
    id: 4,
    title: "Glorious Church Elburgon",
    description: "Modern church website",
    category: "Religious Organizations",
    image: "/lovable-uploads/glorious-church-elburgon-EspiraNova-espiranova-solutions-websites.png",
    url: "https://www.gloriouschurchelburgon.com/",
    features: ["Member management", "Event planning", "Donation tracking"]
  },
  {
    id: 5,
    title: "Kabene & Co. Advocates",
    description: "Professional legal services platform",
    category: "Legal Services",
    image: "/lovable-uploads/kabeneadvocates-EspiraNova-web-digital-solutions.png",
    url: "https://www.kabeneadvocates.co.ke/",
    features: ["Case management", "Client portal", "Document automation"]
  },
  {
    id: 6,
    title: "Zoza",
    description: "Track Kenya's development projects with transparency",
    category: "Civic Tech",
    image: "/lovable-uploads/zoza-screenshot.png",
    url: "https://www.zoza.co.ke/",
    features: ["Project tracking", "Public engagement", "Data visualization"]
  },
  {
    id: 7,
    title: "Loise N.K & Co. Advocates",
    description: "Modern legal excellence and professional services",
    category: "Legal Services",
    image: "/lovable-uploads/loise-advocates-screenshot.png",
    url: "https://www.loisenkadvocates.co.ke/",
    features: ["Practice areas", "Team profiles", "Consultation booking"]
  }
];

export const FeaturedWorkCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "start",
    skipSnaps: false,
    dragFree: true
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: any) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  // Auto-play functionality
  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    const onPointerDown = () => clearInterval(autoplay);
    const onPointerUp = () => {
      clearInterval(autoplay);
      setTimeout(() => {
        const newAutoplay = setInterval(() => {
          emblaApi.scrollNext();
        }, 5000);
        return () => clearInterval(newAutoplay);
      }, 5000);
    };

    emblaApi.on("pointerDown", onPointerDown);
    emblaApi.on("pointerUp", onPointerUp);

    return () => {
      clearInterval(autoplay);
      emblaApi.off("pointerDown", onPointerDown);
      emblaApi.off("pointerUp", onPointerUp);
    };
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {projects.map((project, index) => (
            <div key={project.id} className="flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
              <Card className="overflow-hidden border-0 bg-card hover:shadow-2xl transition-all duration-500 group h-full relative">
                {/* Project Number Overlay */}
                <div className="absolute top-4 left-4 z-10 text-6xl font-black text-white/10 group-hover:text-brand-cyan/20 transition-colors duration-300">
                  {String(index + 1).padStart(2, '0')}
                </div>
                
                <div className="relative overflow-hidden h-56">
                  <img 
                    src={project.image} 
                    alt={`${project.title} - ${project.category} by EspiraNova`}
                    title={`${project.title} by EspiraNova`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  
                  {/* Hover Features */}
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                    <div className="flex flex-wrap gap-1">
                      {project.features.slice(0, 2).map((feature, idx) => (
                        <span key={idx} className="px-2 py-1 bg-brand-cyan/20 backdrop-blur-sm rounded-full text-xs text-brand-cyan font-medium">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 w-10 h-10 bg-brand-cyan rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 hover:shadow-glow"
                  >
                    <ExternalLink className="w-5 h-5 text-brand-navy" />
                  </a>
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-brand-cyan/10 text-brand-cyan rounded-full text-xs font-semibold mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-brand-cyan transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                {/* Hover Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-brand-cyan/30 rounded-lg transition-colors duration-300 pointer-events-none" />
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <Button
          variant="outline"
          size="icon"
          className="w-10 h-10 rounded-full border-primary/20 hover:border-primary hover:bg-primary hover:text-white transition-all duration-300"
          onClick={scrollPrev}
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>

        {/* Dots indicator */}
        <div className="flex gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                index === selectedIndex
                  ? "bg-primary w-6"
                  : "bg-primary/30 hover:bg-primary/60"
              )}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          className="w-10 h-10 rounded-full border-primary/20 hover:border-primary hover:bg-primary hover:text-white transition-all duration-300"
          onClick={scrollNext}
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};