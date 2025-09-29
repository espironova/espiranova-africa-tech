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
    image: "/lovable-uploads/package-yangu-new.png",
    url: "https://www.packageyangulogistics.com/",
    features: ["Real-time tracking", "Fleet management", "Route optimization"]
  },
  {
    id: 2,
    title: "Cozy Invoice",
    description: "Effortless invoicing for African businesses",
    category: "Business Software",
    image: "/lovable-uploads/cozy-invoice-new.png",
    url: "https://cozyinvoicekeeper-one.vercel.app/",
    features: ["Automated billing", "Payment tracking", "Multi-currency support"]
  },
  {
    id: 3,
    title: "Vitabuz Inventory",
    description: "Inventory management simplified",
    category: "Business Software",
    image: "/lovable-uploads/7c4038d8-d7bb-4c3f-b239-81d70e8e220b.png",
    url: "https://vitabuzsmart.africa/",
    features: ["Stock management", "Analytics", "Multi-location support"]
  },
  {
    id: 4,
    title: "Glorious Church Elburgon",
    description: "Modern church management platform",
    category: "Religious Organizations",
    image: "/lovable-uploads/glorious-church-new.png",
    url: "https://glorious-church-elburgon.vercel.app/",
    features: ["Member management", "Event planning", "Donation tracking"]
  },
  {
    id: 5,
    title: "Kabene & Co. Advocates",
    description: "Professional legal services platform",
    category: "Legal Services",
    image: "/lovable-uploads/747bed90-af81-4593-b723-10a1caea83f7.png",
    url: "https://www.kabeneadvocates.co.ke/",
    features: ["Case management", "Client portal", "Document automation"]
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
              <Card className="overflow-hidden border-0 bg-card/80 backdrop-blur-sm hover:shadow-elegant transition-all duration-500 group h-full">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={`${project.title} - ${project.category} by EspiraNova`}
                    title={`${project.title} by EspiraNova`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex flex-wrap gap-1 mb-2">
                        {project.features.slice(0, 2).map((feature, idx) => (
                          <span key={idx} className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white/30"
                  >
                    <ExternalLink className="w-4 h-4 text-white" />
                  </a>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
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