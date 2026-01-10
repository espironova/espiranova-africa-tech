import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import heroImage from "@/assets/hero-bg.jpg";

const phrases = [
  "Innovation with Impact",
  "We Help SMEs Eliminate Manual Work",
  "Simple Systems, Real Results",
  "Built for African Businesses"
];

const colors = [
  "text-cyan-400",
  "text-blue-400",
  "text-emerald-400",
  "text-primary"
];

const carouselSlides = [
  "EspiraNova builds fast, affordable web apps and modern websites that automate daily business processes — from manual tasks to intelligent, cloud-based systems.",
  "Most businesses waste hours on manual tasks. We replace all that with simple, custom-built systems — delivered fast.",
  "Faster delivery than traditional developers. Built for Kenyan & African businesses. Ongoing support included."
];

export const Hero = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [selectedSlide, setSelectedSlide] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  // Typewriter effect
  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentPhrase.length) {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        } else {
          // Hold the complete phrase
          setTimeout(() => setIsDeleting(true), 2500);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, phraseIndex]);

  // Carousel auto-play
  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [emblaApi]);

  // Track selected slide
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedSlide(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden -mt-20 pt-20">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-hero-move"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Typewriter Animated Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 min-h-[1.2em]">
            <span className={`${colors[phraseIndex]} transition-colors duration-500`}>
              {displayText}
            </span>
            <span className="animate-pulse text-white">|</span>
          </h1>

          {/* Sliding Carousel */}
          <div className="mb-10">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {carouselSlides.map((slide, index) => (
                  <div 
                    key={index} 
                    className="flex-[0_0_100%] min-w-0 px-4"
                  >
                    <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                      {slide}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {carouselSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    selectedSlide === index 
                      ? "bg-primary w-6" 
                      : "bg-white/40 hover:bg-white/60"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Link to="/contact">
              <Button variant="magnetic" size="lg" className="min-w-[280px] animate-fade-in text-lg">
                Get a Free Automation Assessment <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};
