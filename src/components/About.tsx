import { Card } from "@/components/ui/card";

export const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Who We Are
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          </div>
          
          <Card className="p-8 md:p-12 shadow-card border-0 bg-card">
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              <strong className="text-foreground">EspiraNova</strong> is an innovative technology solutions provider 
              committed to igniting digital transformation across Africa. Born from a passion to inspire progress 
              through intuitive software, we fuse cutting-edge AI, robust API development, and bespoke applications 
              to uplift small and medium enterprises, freelancers, and diverse industries.
            </p>
            
            <p className="text-lg leading-relaxed text-muted-foreground mb-8">
              Led by a founder with over eight years of API engineering expertise and Apigee mastery, our team 
              crafts tailored web and mobile solutions—such as the transformative <strong className="text-primary">Cozy Invoice</strong> for 
              streamlined invoicing—to address unique business challenges.
            </p>
            
            <div className="bg-gradient-hero p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-white/90 text-lg">
                To be the catalyst for new possibilities, empowering businesses with simple, impactful technology.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};