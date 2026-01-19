import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const bulletPoints = [
  "Smart digital solutions",
  "Automation that eliminates manual work",
  "Solutions built for Africa",
  "Simple systems. Real results.",
];

export const Hero = () => {
  const [visibleBullets, setVisibleBullets] = useState<number[]>([]);

  useEffect(() => {
    // Sequential animation for bullets with premium timing
    bulletPoints.forEach((_, index) => {
      setTimeout(() => {
        setVisibleBullets(prev => [...prev, index]);
      }, 800 + index * 700);
    });
  }, []);

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center -mt-24 pt-24"
      style={{
        backgroundColor: 'hsl(215 50% 8%)',
        backgroundImage: `
          linear-gradient(
            to bottom,
            hsla(215, 50%, 8%, 0.9),
            hsla(215, 50%, 8%, 0.95)
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
          ),
          linear-gradient(
            160deg,
            transparent 40%,
            hsla(185, 75%, 50%, 0.05) 45%,
            transparent 50%
          )
        `
      }}
    >
      <div className="max-w-4xl mx-auto px-8 py-44 lg:py-48 text-center">
        {/* Main Headline */}
        <h1 
          className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-14 animate-fade-in"
        >
          Innovation with Impact
        </h1>

        {/* Subtitle */}
        <p 
          className="text-2xl md:text-3xl text-white/90 font-medium leading-relaxed mb-16 animate-fade-in"
          style={{ animationDelay: '0.3s' }}
        >
          At EspiraNova, we empower growing businesses with:
        </p>

        {/* Animated Bullet List */}
        <ul className="space-y-9 mb-16">
          {bulletPoints.map((point, index) => (
            <li
              key={index}
              className={`text-xl md:text-2xl lg:text-3xl font-semibold text-white/95 transition-all duration-700 ${
                visibleBullets.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)'
              }}
            >
              {point}
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div 
          className="animate-fade-in"
          style={{ animationDelay: '0.6s' }}
        >
          <Link to="/contact">
            <Button 
              size="lg" 
              className="bg-brand-cyan hover:bg-brand-light-cyan text-brand-navy px-10 py-6 text-lg font-semibold transition-all duration-300 hover:shadow-lg"
            >
              Book a Consultation
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
