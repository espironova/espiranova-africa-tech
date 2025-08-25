import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export const WhyChooseUs = () => {
  const reasons = [
    "Personalized Approach – Solutions tailored to your workflow",
    "Transparent Process – Clear updates at every stage",
    "Continuous Support – Long-term system maintenance and assistance",
    "Industry Expertise – Valuable insights from diverse sectors",
    "Cutting-Edge Technology – Future-ready innovations",
    "Cost-Effective Results – High-value technology at sustainable costs"
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Why Choose Us?
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {reasons.slice(0, 3).map((reason, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-success mt-1 flex-shrink-0" />
                  <p className="text-lg text-foreground">{reason}</p>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              {reasons.slice(3).map((reason, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-success mt-1 flex-shrink-0" />
                  <p className="text-lg text-foreground">{reason}</p>
                </div>
              ))}
            </div>
          </div>
          
          <Card className="mt-12 p-8 md:p-12 bg-gradient-hero text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Our Approach
            </h3>
            <p className="text-white/90 text-lg leading-relaxed">
              At EspiraNova, we prioritize a personalized approach. Every solution is designed to fit seamlessly 
              into your workflow. With transparent processes, regular updates, and unwavering support, we deliver 
              cost-effective, high-quality results tailored to your unique business needs.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};