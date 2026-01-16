import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const phrases = [
  "Smart digital solutions",
  "Automation that eliminates manual work",
  "Solutions built for Africa",
  "Simple systems. Real results"
];

export const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cycle through phrases
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % phrases.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden -mt-20 pt-20">
      {/* Background Image - New Team Photo */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/lovable-uploads/hero-team-africa.png)` }}
      />
      
      {/* Navy Gradient Overlay - Brand Colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/90 via-brand-navy/80 to-brand-deep-blue/70" />
      
      {/* Animated accent gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-brand-cyan/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-brand-blue/10 rounded-full blur-3xl animate-float-gentle" />
      </div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Slogan - Large, Centered, Static */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 animate-fade-in tracking-tight">
            <span className="glow-text-cyan">INNOVATION WITH IMPACT</span>
          </h1>

          {/* Static Intro */}
          <p className="text-xl md:text-2xl text-white/90 mb-6 animate-fade-in font-medium" style={{ animationDelay: '0.1s' }}>
            At EspiraNova, we empower growing businesses with:
          </p>

          {/* Vertical Slide Animation - Abacus Style */}
          <div className="h-[60px] md:h-[70px] lg:h-[80px] overflow-hidden mb-10">
            <div className="relative h-full">
              {phrases.map((phrase, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 flex items-center justify-center text-xl md:text-2xl lg:text-3xl font-semibold transition-all duration-700 ease-out ${
                    index === currentIndex 
                      ? "translate-y-0 opacity-100" 
                      : index < currentIndex || (currentIndex === 0 && index === phrases.length - 1)
                      ? "-translate-y-full opacity-0"
                      : "translate-y-full opacity-0"
                  }`}
                >
                  <span className="text-brand-cyan">• {phrase}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Link to="/contact">
              <Button 
                variant="magnetic" 
                size="lg" 
                className="min-w-[280px] text-lg bg-gradient-to-r from-brand-blue to-brand-cyan hover:from-brand-cyan hover:to-brand-blue text-white border-0 animate-pulse-glow"
              >
                Get a Free Automation Assessment 
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-brand-cyan/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-brand-cyan rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};
