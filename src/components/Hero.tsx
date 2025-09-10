import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import heroImage from "@/assets/hero-bg.jpg";

export const Hero = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentColor, setCurrentColor] = useState(0);
  const fullText = "Ignite. Innovate. Impact.";
  const colors = ["text-white", "text-cyan-300", "text-blue-300", "text-primary-glow"];

  useEffect(() => {
    let index = 0;
    let colorIndex = 0;
    
    const typewriterTimer = setInterval(() => {
      if (index <= fullText.length) {
        setCurrentText(fullText.slice(0, index));
        index++;
      } else {
        // Reset and start over
        setTimeout(() => {
          index = 0;
          setCurrentText("");
        }, 2000);
      }
    }, 150);

    const colorTimer = setInterval(() => {
      colorIndex = (colorIndex + 1) % colors.length;
      setCurrentColor(colorIndex);
    }, 1000);

    return () => {
      clearInterval(typewriterTimer);
      clearInterval(colorTimer);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden -mt-20 pt-20">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-hero-move"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <p className={`text-4xl md:text-6xl font-bold mb-4 min-h-[4rem] flex items-center justify-center transition-colors duration-500 ${colors[currentColor]}`}>
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
              <Button variant="magnetic" size="lg" className="min-w-[200px] animate-fade-in">
                Explore Our Work
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="min-w-[200px] text-white border-white/80 hover:bg-white hover:text-black backdrop-blur-sm hover:shadow-intense animate-fade-in">
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