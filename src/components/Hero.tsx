import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const bulletPoints = [
  "Smart digital solutions",
  "Automation that eliminates manual work",
  "Solutions built for Africa",
];

export const Hero = () => {
  const [visibleBullets, setVisibleBullets] = useState<number[]>([]);

  useEffect(() => {
    // Sequential animation for bullets
    bulletPoints.forEach((_, index) => {
      setTimeout(() => {
        setVisibleBullets(prev => [...prev, index]);
      }, 400 + index * 150);
    });
  }, []);

  return (
    <section className="min-h-[90vh] flex items-center bg-white -mt-20 pt-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="order-1">
            {/* Subtle Slogan */}
            <p 
              className="text-xs tracking-[0.2em] uppercase text-brand-navy/60 font-medium mb-6 animate-fade-in"
            >
              Innovation with Impact
            </p>

            {/* Intro Text */}
            <p 
              className="text-xl md:text-2xl text-brand-navy font-medium leading-relaxed mb-6 animate-fade-in"
              style={{ animationDelay: '0.1s' }}
            >
              At EspiraNova, we empower growing businesses with:
            </p>

            {/* Animated Bullet List */}
            <ul className="space-y-3 mb-8">
              {bulletPoints.map((point, index) => (
                <li
                  key={index}
                  className={`flex items-start gap-3 text-lg text-brand-navy/80 transition-all duration-400 ease-out ${
                    visibleBullets.includes(index)
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-2"
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan mt-2.5 flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div 
              className="animate-fade-in"
              style={{ animationDelay: '0.5s' }}
            >
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="bg-brand-navy hover:bg-brand-deep-blue text-white px-8 py-3 text-base font-medium transition-colors duration-300"
                >
                  Book a Consultation
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="order-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <img
                src="/lovable-uploads/hero-business-meeting.png"
                alt="Business team collaborating with digital dashboard"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
