import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const rotatingPhrases = [
  "Smart digital solutions",
  "Automation that eliminates manual work",
  "Solutions built for Africa",
  "Simple systems. Real results.",
];

export const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Start fade out
      setIsVisible(false);
      
      // After fade out completes, change text and fade in
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % rotatingPhrases.length);
        setIsVisible(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      className="relative min-h-screen flex items-center -mt-24 pt-24 overflow-hidden"
    >
      {/* Background Image with Blur */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage: `url(/lovable-uploads/hero-tech-bg.jpg)`,
          filter: 'blur(3px)',
        }}
      />
      
      {/* Dark Overlay for text readability */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(
              to bottom,
              hsla(215, 50%, 8%, 0.85),
              hsla(215, 50%, 8%, 0.9)
            ),
            radial-gradient(
              ellipse 80% 50% at 70% 20%,
              hsla(185, 75%, 50%, 0.15),
              transparent 50%
            ),
            radial-gradient(
              ellipse 60% 40% at 20% 80%,
              hsla(210, 85%, 45%, 0.1),
              transparent 50%
            )
          `
        }}
      />
      
      <div className="max-w-7xl mx-auto px-8 py-24 lg:py-32 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="text-left">
            {/* Main Headline */}
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-8 animate-fade-in"
            >
              Innovation with Impact
            </h1>

            {/* Subtitle */}
            <p 
              className="text-xl md:text-2xl text-white/90 font-medium leading-relaxed mb-10 animate-fade-in"
              style={{ animationDelay: '0.3s' }}
            >
              At EspiraNova, we empower growing businesses with:
            </p>

            {/* Rotating Text */}
            <div 
              className="h-20 md:h-24 mb-12 flex items-start"
              style={{ animationDelay: '0.5s' }}
            >
              <p
                className={`text-2xl md:text-3xl lg:text-4xl font-semibold text-brand-cyan transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-4"
                }`}
                style={{
                  transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
                  textShadow: '0 0 30px hsla(185, 75%, 50%, 0.5)'
                }}
              >
                {rotatingPhrases[currentIndex]}
              </p>
            </div>

            {/* CTA Button */}
            <div 
              className="animate-fade-in"
              style={{ animationDelay: '0.6s' }}
            >
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="bg-brand-cyan hover:bg-brand-light-cyan text-brand-navy px-10 py-6 text-lg font-semibold transition-all duration-300 hover:shadow-glow hover:scale-105 btn-magnetic"
                >
                  Book a Consultation
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column - Image */}
          <div 
            className="relative animate-fade-in lg:order-last order-first"
            style={{ animationDelay: '0.4s' }}
          >
            <div className="relative group">
              <img
                src="/lovable-uploads/hero-business-meeting.png"
                alt="Business professionals collaborating in a modern meeting"
                className="w-full h-auto rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
              />
              {/* Subtle glow effect behind image */}
              <div 
                className="absolute -inset-4 -z-10 rounded-3xl opacity-30 transition-opacity duration-500 group-hover:opacity-50"
                style={{
                  background: 'radial-gradient(ellipse at center, hsla(185, 75%, 50%, 0.3), transparent 70%)'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
