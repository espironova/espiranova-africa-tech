import { useEffect, useRef, useState } from "react";

interface Metric {
  value: string;
  numericValue: number;
  suffix: string;
  label: string;
}

const metrics: Metric[] = [
  { value: "50+", numericValue: 50, suffix: "+", label: "Happy Clients" },
  { value: "100+", numericValue: 100, suffix: "+", label: "Projects Delivered" },
  { value: "5+", numericValue: 5, suffix: "+", label: "Years Experience" },
  { value: "98%", numericValue: 98, suffix: "%", label: "Client Satisfaction" },
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
      className="relative py-16 md:py-20 bg-gradient-to-b from-slate-50 to-white overflow-hidden"
    >
      {/* Subtle Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `
          radial-gradient(circle at 25% 25%, hsl(185 75% 50%) 2px, transparent 2px),
          radial-gradient(circle at 75% 75%, hsl(45 85% 55%) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }} />

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-brand-cyan/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-brand-mustard/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-brand-navy">OUR </span>
            <span className="text-brand-cyan relative inline-block">
              IMPACT
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-brand-cyan via-brand-mustard to-brand-cyan rounded-full" />
            </span>
          </h2>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className={`relative group text-center p-6 rounded-2xl bg-white shadow-lg border border-slate-200 transition-all duration-500 hover:shadow-xl hover:border-brand-cyan/30 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Hexagon Background Accent */}
              <div className="absolute -top-3 -right-3 w-12 h-12 opacity-20 group-hover:opacity-40 transition-opacity">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-brand-cyan">
                  <polygon points="50 1, 95 25, 95 75, 50 99, 5 75, 5 25" />
                </svg>
              </div>

              {/* Number */}
              <div className="text-3xl md:text-4xl font-bold text-brand-navy mb-2">
                <span className="text-brand-cyan">{counts[index]}</span>
                <span className="text-brand-mustard">{metric.suffix}</span>
              </div>

              {/* Label */}
              <p className="text-slate-600 text-sm font-medium">
                {metric.label}
              </p>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-brand-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
            </div>
          ))}
        </div>
      </div>

      {/* Diagonal Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full h-8 md:h-12">
          <path d="M0 60L1440 0V60H0Z" fill="hsl(215 50% 12%)" />
        </svg>
      </div>
    </section>
  );
};
