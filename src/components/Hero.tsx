import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import heroImage from "@/assets/hero-bg.jpg";

const phrases = [
  "Innovation with Impact",
  "Simple Systems, Big Results",
  "World-Class Digital Solutions",
  "Built for African Businesses"
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
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-hero-move"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Navy Gradient Overlay - Brand Colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/95 via-brand-navy/85 to-brand-deep-blue/80" />
      
      {/* Animated accent gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-brand-cyan/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-brand-blue/10 rounded-full blur-3xl animate-float-gentle" />
      </div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-center">
          {/* Left Content - 3 columns */}
          <div className="lg:col-span-3 text-center lg:text-left">
            {/* Slogan Label */}
            <div className="inline-flex items-center gap-2 mb-6 animate-fade-in">
              <span className="px-4 py-2 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-sm font-medium tracking-wide">
                Innovation for Impact
              </span>
            </div>

            {/* Static Intro */}
            <p className="text-lg md:text-xl text-white/80 mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              At EspiraNova, we empower growing businesses with:
            </p>

            {/* Vertical Slide Animation - Abacus Style */}
            <div className="h-[80px] md:h-[100px] lg:h-[120px] overflow-hidden mb-8">
              <div className="relative h-full">
                {phrases.map((phrase, index) => (
                  <h1
                    key={index}
                    className={`absolute inset-0 flex items-center justify-center lg:justify-start text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold transition-all duration-700 ease-out ${
                      index === currentIndex 
                        ? "translate-y-0 opacity-100" 
                        : index < currentIndex || (currentIndex === 0 && index === phrases.length - 1)
                        ? "-translate-y-full opacity-0"
                        : "translate-y-full opacity-0"
                    }`}
                  >
                    <span className="glow-text-cyan">{phrase}</span>
                  </h1>
                ))}
              </div>
            </div>

            {/* Description */}
            <p className="text-base md:text-lg text-white/70 mb-10 max-w-xl mx-auto lg:mx-0 animate-fade-in leading-relaxed" style={{ animationDelay: '0.3s' }}>
              We build fast, affordable web apps and modern websites that automate daily business processes — from manual tasks to intelligent, cloud-based systems.
            </p>

            {/* CTA Button */}
            <div className="flex justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.4s' }}>
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

          {/* Right Side - Floating Image - 2 columns */}
          <div className="lg:col-span-2 hidden lg:block">
            <div className="relative animate-float-gentle">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-brand-cyan/20 rounded-2xl blur-2xl transform scale-95" />
              
              <div className="relative rounded-2xl overflow-hidden shadow-cyan border border-brand-cyan/20">
                <img 
                  src="/lovable-uploads/inventory-management-EspiraNova-Vitabuz-smart-africa.png" 
                  alt="EspiraNova Dashboard Preview" 
                  className="w-full h-auto rounded-2xl"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 to-transparent" />
              </div>
              
              {/* Floating accent elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-brand-cyan/30 rounded-full blur-xl animate-float" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-brand-blue/30 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
            </div>
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