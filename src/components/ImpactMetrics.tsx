import { useEffect, useRef, useState } from "react";

interface Metric {
  value: string;
  numericValue: number;
  suffix: string;
  label: string;
  description: string;
}

const metrics: Metric[] = [
  { value: "50", numericValue: 50, suffix: "+", label: "Projects Delivered", description: "Custom solutions built" },
  { value: "100", numericValue: 100, suffix: "%", label: "Client Satisfaction", description: "Happy customers" },
  { value: "2-4", numericValue: 3, suffix: " weeks", label: "Average Delivery", description: "Fast turnaround" },
  { value: "3", numericValue: 3, suffix: "+", label: "African Markets", description: "Kenya, Uganda, Tanzania" },
];

export const ImpactMetrics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState<number[]>(metrics.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const frameDuration = 1000 / 60;
    const totalFrames = Math.round(duration / frameDuration);

    let frame = 0;
    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setCounts(metrics.map((m) => Math.round(m.numericValue * easeOutQuart)));

      if (frame === totalFrames) {
        clearInterval(timer);
      }
    }, frameDuration);

    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-brand-navy overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `
          linear-gradient(hsl(185 75% 50%) 1px, transparent 1px),
          linear-gradient(90deg, hsl(185 75% 50%) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
      }} />
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full border border-brand-cyan/30 bg-brand-cyan/5 text-brand-cyan text-sm font-medium tracking-wide uppercase mb-6">
            Our Impact
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Numbers That <span className="text-brand-cyan">Matter</span>
          </h2>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className={`relative group ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Card */}
              <div className="relative p-6 md:p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-brand-cyan/30 hover:bg-white/10 transition-all duration-500 text-center">
                {/* Glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-brand-cyan/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />
                
                {/* Number */}
                <div className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-2 tracking-tight">
                  {index === 2 ? "2-4" : counts[index]}
                  <span className="text-brand-cyan">{metric.suffix}</span>
                </div>
                
                {/* Label */}
                <div className="text-white font-semibold mb-1">{metric.label}</div>
                <div className="text-white/50 text-sm">{metric.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Diagonal Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-background" style={{
        clipPath: 'polygon(0 100%, 100% 100%, 100% 0)',
      }} />
    </section>
  );
};
