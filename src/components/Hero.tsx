import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const marqueeItems = [
  "Smart digital solutions",
  "Automation that eliminates manual work",
  "Solutions built for Africa",
  "Simple systems. Real results.",
  "Modern websites that work",
  "Cloud-based business tools",
];

export const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center -mt-24 pt-24 overflow-hidden"
    >
      {/* Background Image with Blur */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{
          backgroundImage: `url(/lovable-uploads/hero-tech-bg.jpg)`,
          filter: 'blur(4px)',
        }}
      />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/95 via-brand-navy/90 to-brand-navy/95" />
      
      {/* Animated Gradient Orbs */}
      <div 
        className="absolute w-[600px] h-[600px] rounded-full opacity-30 blur-3xl transition-all duration-1000 ease-out"
        style={{
          background: 'radial-gradient(circle, hsl(185 75% 50% / 0.4) 0%, transparent 70%)',
          left: `${mousePosition.x * 20}%`,
          top: `${mousePosition.y * 20}%`,
        }}
      />
      <div 
        className="absolute w-[500px] h-[500px] rounded-full opacity-20 blur-3xl transition-all duration-1000 ease-out"
        style={{
          background: 'radial-gradient(circle, hsl(210 85% 45% / 0.4) 0%, transparent 70%)',
          right: `${mousePosition.x * 15}%`,
          bottom: `${mousePosition.y * 15}%`,
        }}
      />
      
      {/* Geometric Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `
          linear-gradient(hsl(185 75% 50%) 1px, transparent 1px),
          linear-gradient(90deg, hsl(185 75% 50%) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }} />

      {/* Floating Geometric Shapes */}
      <div className="absolute top-1/4 left-[10%] w-20 h-20 border border-brand-cyan/20 rotate-45 animate-float-gentle opacity-40" />
      <div className="absolute top-1/3 right-[15%] w-16 h-16 border border-brand-cyan/30 rounded-full animate-float opacity-30" />
      <div className="absolute bottom-1/4 left-[20%] w-12 h-12 bg-brand-cyan/10 rotate-12 animate-float-gentle opacity-40" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/3 right-[10%] w-24 h-24 border-2 border-brand-blue/20 rounded-full animate-float opacity-20" style={{ animationDelay: '1s' }} />
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Eyebrow Text */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-cyan/30 bg-brand-cyan/5 backdrop-blur-sm mb-8 animate-fade-in">
            <div className="w-2 h-2 bg-brand-cyan rounded-full animate-pulse" />
            <span className="text-brand-cyan text-sm font-medium tracking-wide uppercase">Web Design & Business Automation</span>
          </div>
          
          {/* Main Headline - Stacked */}
          <h1 className="mb-8">
            <span 
              className="block text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tight animate-fade-in"
              style={{ animationDelay: '0.1s' }}
            >
              INNOVATE.
            </span>
            <span 
              className="block text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight animate-fade-in bg-gradient-to-r from-brand-cyan via-brand-light-cyan to-brand-cyan bg-clip-text text-transparent"
              style={{ animationDelay: '0.2s' }}
            >
              AUTOMATE.
            </span>
            <span 
              className="block text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tight animate-fade-in"
              style={{ animationDelay: '0.3s' }}
            >
              DOMINATE.
            </span>
          </h1>

          {/* Subtitle */}
          <p 
            className="text-lg md:text-xl text-white/70 font-light max-w-2xl mx-auto mb-12 animate-fade-in leading-relaxed"
            style={{ animationDelay: '0.4s' }}
          >
            We design modern websites and build simple systems that eliminate manual work 
            for growing African businesses.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in"
            style={{ animationDelay: '0.5s' }}
          >
            <Link to="/contact">
              <Button 
                size="lg" 
                className="relative bg-brand-cyan hover:bg-brand-light-cyan text-brand-navy px-10 py-7 text-lg font-bold transition-all duration-300 hover:scale-105 group overflow-hidden"
              >
                <span className="relative z-10">Book a Consultation</span>
                <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan to-brand-light-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-brand-cyan/30 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-10 py-7 text-lg font-medium transition-all duration-300"
              >
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Horizontal Scrolling Marquee */}
      <div className="absolute bottom-0 left-0 right-0 py-6 border-t border-white/10 bg-brand-navy/50 backdrop-blur-sm">
        <div className="marquee-container">
          <div className="marquee-content">
            {/* First set */}
            {marqueeItems.map((item, index) => (
              <div key={`first-${index}`} className="flex items-center gap-8 px-4">
                <span className="text-white/60 text-sm md:text-base font-medium whitespace-nowrap uppercase tracking-widest">
                  {item}
                </span>
                <span className="text-brand-cyan text-xl">✦</span>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {marqueeItems.map((item, index) => (
              <div key={`second-${index}`} className="flex items-center gap-8 px-4">
                <span className="text-white/60 text-sm md:text-base font-medium whitespace-nowrap uppercase tracking-widest">
                  {item}
                </span>
                <span className="text-brand-cyan text-xl">✦</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: '0.8s' }}>
        <span className="text-white/40 text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 border border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-brand-cyan rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};
