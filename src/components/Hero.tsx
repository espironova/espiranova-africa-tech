import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import heroImage from "@/assets/hero-bg.jpg";

export const Hero = () => {
  const [currentText, setCurrentText] = useState("");
  const fullText = "Inspire. Innovate. Impact.";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setCurrentText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 150);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden -mt-20 pt-20">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-float"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-transparent to-cyan-500/20 animate-glow" />
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-blue-400/5 to-transparent animate-shimmer" 
           style={{
             background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1), transparent)',
             backgroundSize: '200% 100%'
           }} />
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            EspiraNova
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-white mb-4 min-h-[3rem] flex items-center justify-center">
            <span className="inline-block">
              {currentText}
              <span className="animate-pulse">|</span>
            </span>
          </p>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Igniting digital transformation across Africa with cutting-edge AI, robust API development, 
            and bespoke applications that uplift businesses and communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/portfolio">
              <Button variant="hero" size="lg" className="min-w-[200px]">
                Explore Our Work
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="min-w-[200px] text-white border-white hover:bg-white hover:text-primary">
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};