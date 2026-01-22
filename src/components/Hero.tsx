import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const marqueeItems = [
  "Smart digital solutions",
  "Automation that eliminates manual work",
  "Solutions built for Africa",
  "Simple systems. Real results.",
  "Modern websites that work",
  "Cloud-based business tools",
];

const rotatingWords = [
  { text: "INNOVATE", style: "font-serif bg-gradient-to-r from-brand-cyan to-brand-light-cyan bg-clip-text text-transparent" },
  { text: "AUTOMATE", style: "font-bold text-brand-mustard" },
  { text: "DOMINATE", style: "font-black text-white [text-shadow:_-1px_-1px_0_hsl(185_75%_50%),_1px_-1px_0_hsl(185_75%_50%),_-1px_1px_0_hsl(185_75%_50%),_1px_1px_0_hsl(185_75%_50%)]" },
];

// Premium easing curves
const smoothOut = [0.22, 1, 0.36, 1];
const overshoot = [0.25, 1.2, 0.25, 1];

// SVG Components for geometric shapes
const Hexagon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 100 100" className={className} style={style} fill="currentColor">
    <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" />
  </svg>
);

const Triangle = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 100 100" className={className} style={style} fill="currentColor">
    <polygon points="50 5 95 95 5 95" />
  </svg>
);

export const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
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

  // Rotating word animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-[90vh] flex items-center -mt-24 pt-24 overflow-hidden"
    >
      {/* Background Image with Ken Burns Animation */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-ken-burns"
        style={{
          backgroundImage: `url(/lovable-uploads/hero-background.jpeg)`,
        }}
      />
      
      {/* Animated Gradient Overlay */}
      <div 
        className="absolute inset-0 animate-gradient-shift"
        style={{
          background: 'linear-gradient(135deg, hsl(215 50% 12% / 0.92) 0%, hsl(210 75% 25% / 0.88) 50%, hsl(215 50% 12% / 0.92) 100%)',
          backgroundSize: '200% 200%',
          animation: 'gradientShift 15s ease infinite',
        }}
      />
      
      {/* Animated Gradient Orbs */}
      <div 
        className="absolute w-[500px] h-[500px] rounded-full opacity-25 blur-3xl transition-all duration-1000 ease-out"
        style={{
          background: 'radial-gradient(circle, hsl(185 75% 50% / 0.4) 0%, transparent 70%)',
          left: `${mousePosition.x * 20}%`,
          top: `${mousePosition.y * 20}%`,
        }}
      />
      <div 
        className="absolute w-[400px] h-[400px] rounded-full opacity-15 blur-3xl transition-all duration-1000 ease-out"
        style={{
          background: 'radial-gradient(circle, hsl(45 85% 55% / 0.3) 0%, transparent 70%)',
          right: `${mousePosition.x * 15}%`,
          bottom: `${mousePosition.y * 15}%`,
        }}
      />
      <div 
        className="absolute w-[350px] h-[350px] rounded-full opacity-20 blur-3xl transition-all duration-1000 ease-out"
        style={{
          background: 'radial-gradient(circle, hsl(210 85% 45% / 0.4) 0%, transparent 70%)',
          right: `${30 + mousePosition.x * 10}%`,
          top: `${20 + mousePosition.y * 10}%`,
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

      {/* Floating Geometric Shapes - Hexagons */}
      <Hexagon className="absolute top-[15%] left-[8%] w-16 h-16 text-brand-cyan/10 animate-float-rotate" />
      <Hexagon className="absolute bottom-[25%] right-[12%] w-20 h-20 text-brand-mustard/15 animate-scale-pulse" />
      <Hexagon className="absolute top-[40%] right-[5%] w-12 h-12 text-brand-cyan/8 animate-drift-diagonal" />
      <Hexagon className="absolute bottom-[35%] left-[15%] w-10 h-10 text-brand-blue/10 animate-float-rotate" style={{ animationDelay: '2s' }} />
      
      {/* Floating Geometric Shapes - Triangles */}
      <Triangle className="absolute top-[20%] right-[18%] w-14 h-14 text-brand-blue/10 animate-drift-diagonal rotate-12" />
      <Triangle className="absolute bottom-[30%] left-[5%] w-16 h-16 text-brand-cyan/12 animate-float-rotate rotate-45" style={{ animationDelay: '1s' }} />
      <Triangle className="absolute top-[55%] left-[25%] w-8 h-8 text-brand-mustard/10 animate-scale-pulse rotate-180" style={{ animationDelay: '3s' }} />
      <Triangle className="absolute bottom-[45%] right-[25%] w-10 h-10 text-brand-light-cyan/8 animate-drift-diagonal" style={{ animationDelay: '4s' }} />

      {/* Additional floating elements */}
      <div className="absolute top-1/4 left-[10%] w-16 h-16 border border-brand-cyan/20 rotate-45 animate-float-gentle opacity-40" />
      <div className="absolute top-1/3 right-[15%] w-12 h-12 border border-brand-mustard/30 rounded-full animate-float opacity-30" />
      <div className="absolute bottom-1/4 left-[20%] w-10 h-10 bg-brand-cyan/10 rotate-12 animate-float-gentle opacity-40" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/3 right-[10%] w-20 h-20 border-2 border-brand-blue/20 rounded-full animate-float opacity-20" style={{ animationDelay: '1s' }} />
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* ESPIRANOVA Eyebrow - Premium Entrance */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: smoothOut }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent to-brand-cyan" />
            <span className="text-brand-cyan text-sm md:text-base font-semibold tracking-[0.3em] uppercase">ESPIRANOVA</span>
            <div className="h-px w-12 md:w-20 bg-gradient-to-l from-transparent to-brand-cyan" />
          </motion.div>
          
          {/* Main Headline - Single Line with Rotating Word */}
          <h1 className="mb-8">
            <div className="flex items-center justify-center gap-4 md:gap-6">
              {/* Rotating Word Container - Animated Entrance */}
              <motion.div 
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5, ease: overshoot }}
                className="relative h-[50px] md:h-[60px] lg:h-[72px] xl:h-[85px] w-[200px] md:w-[280px] lg:w-[350px] xl:w-[420px] overflow-hidden"
              >
                {rotatingWords.map((word, index) => (
                  <span 
                    key={word.text}
                    className={`absolute inset-0 flex justify-center items-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight transition-all duration-700 ease-out ${word.style} ${
                      index === currentWordIndex 
                        ? 'translate-y-0 opacity-100' 
                        : index === (currentWordIndex - 1 + rotatingWords.length) % rotatingWords.length
                          ? '-translate-y-full opacity-0'
                          : 'translate-y-full opacity-0'
                    }`}
                  >
                    {word.text}
                  </span>
                ))}
              </motion.div>
              {/* Static "with impact" - Animated Entrance */}
              <motion.span 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8, ease: smoothOut }}
                className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-brand-mustard tracking-wide"
              >
                with impact
              </motion.span>
            </div>
          </h1>

          {/* Subtitle - Gentle Slide Up */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2, ease: smoothOut }}
            className="text-base md:text-lg text-white/70 font-light max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            We design modern websites and build simple systems that eliminate manual work 
            for growing African businesses.
          </motion.p>

          {/* CTA Buttons - Slide Up Together */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6, ease: smoothOut }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Link to="/contact">
              <Button 
                size="lg" 
                className="relative bg-brand-cyan hover:bg-brand-light-cyan text-brand-navy px-8 py-6 text-base font-bold transition-all duration-300 hover:scale-105 group overflow-hidden"
              >
                <span className="relative z-10">Book a Consultation</span>
                <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan to-brand-light-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -inset-1 bg-brand-cyan/30 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button 
                variant="outline" 
                size="lg"
                className="border-brand-cyan/60 text-brand-cyan hover:bg-brand-cyan/20 hover:border-brand-cyan hover:text-white px-8 py-6 text-base font-medium transition-all duration-300 backdrop-blur-sm bg-white/5"
              >
                View Our Work
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Horizontal Scrolling Marquee - Fade In Last */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2.0 }}
        className="absolute bottom-0 left-0 right-0 py-4 border-t border-white/10 bg-brand-navy/50 backdrop-blur-sm"
      >
        <div className="marquee-container">
          <div className="marquee-content">
            {/* First set */}
            {marqueeItems.map((item, index) => (
              <div key={`first-${index}`} className="flex items-center gap-6 px-3">
                <span className="text-white/60 text-sm font-medium whitespace-nowrap uppercase tracking-widest">
                  {item}
                </span>
                <span className="text-brand-mustard text-lg">✦</span>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {marqueeItems.map((item, index) => (
              <div key={`second-${index}`} className="flex items-center gap-6 px-3">
                <span className="text-white/60 text-sm font-medium whitespace-nowrap uppercase tracking-widest">
                  {item}
                </span>
                <span className="text-brand-mustard text-lg">✦</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator - Fade In */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2.2 }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-5 h-8 border border-white/30 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-brand-cyan rounded-full animate-bounce" />
        </div>
      </motion.div>

      {/* CSS for gradient animation */}
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
};
