import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { SEO } from "@/components/SEO";

const ContactPage = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: ["The Piano, PQW+/HFG", "Near 171 Brookside Dr, Nairobi", "Kenya"],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+254 783238429"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@espiranova.com"],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 1:00 PM", "Sunday: Closed"],
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Contact EspiraNova - Get Your Technology Solution Today"
        description="Contact EspiraNova for custom software development, web applications, mobile apps, and AI solutions. Located in Nairobi, Kenya. Get a free consultation for your technology project."
        keywords="contact EspiraNova, software development consultation, technology solutions Kenya, custom software quote, web development services, API development"
        url="https://espiranova.co.ke/contact"
        breadcrumbs={[{ name: "Contact", url: "https://espiranova.co.ke/contact" }]}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ backgroundImage: `url(/lovable-uploads/hero-tech-bg.jpg)`, filter: 'blur(2px)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 animate-fade-in">
            Get In <span className="text-brand-mustard">Touch</span>
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Let's shape tomorrow together. Contact us to discover how EspiraNova 
            can elevate your business operations.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="p-6 border-0 bg-card shadow-card hover:shadow-elegant transition-all duration-500 animate-fade-in">
              <h2 className="text-xl font-bold mb-5 text-foreground">Send Us a Message</h2>
              <form className="space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="group">
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      First Name *
                    </label>
                    <Input 
                      placeholder="Your first name" 
                      className="focus-ring-animate transition-all duration-300 focus:scale-[1.01] focus:border-brand-mustard"
                    />
                  </div>
                  <div className="group">
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Last Name *
                    </label>
                    <Input 
                      placeholder="Your last name" 
                      className="focus-ring-animate transition-all duration-300 focus:scale-[1.01] focus:border-brand-mustard"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email *
                  </label>
                  <Input 
                    type="email" 
                    placeholder="your.email@example.com" 
                    className="focus-ring-animate transition-all duration-300 focus:scale-[1.01] focus:border-brand-mustard"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Phone Number
                  </label>
                  <Input 
                    placeholder="+254 XXX XXX XXX" 
                    className="focus-ring-animate transition-all duration-300 focus:scale-[1.01] focus:border-brand-mustard"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Project Type
                  </label>
                  <select className="w-full px-3 py-2 border border-input bg-background rounded-md text-foreground focus-ring-animate transition-all duration-300 focus:scale-[1.01] focus:border-brand-mustard">
                    <option>Select a service</option>
                    <option>Custom Software Development</option>
                    <option>Web Application</option>
                    <option>Mobile Application</option>
                    <option>API Development</option>
                    <option>AI-Powered Solutions</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Message *
                  </label>
                  <Textarea 
                    placeholder="Tell us about your project requirements..." 
                    rows={4}
                    className="focus-ring-animate transition-all duration-300 focus:scale-[1.01] focus:border-brand-mustard"
                  />
                </div>
                
                <Button variant="hero" size="lg" className="w-full group hover:shadow-glow transition-all duration-300 hover:scale-[1.02]">
                  <Send className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:translate-x-1" />
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-5">
              <div className="mb-6 animate-fade-in">
                <h2 className="text-xl font-bold mb-3 text-foreground">Contact Information</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Ready to transform your business with innovative technology solutions? 
                  We're here to help you every step of the way.
                </p>
              </div>

              {contactInfo.map((info, index) => (
                <Card 
                  key={index} 
                  className="p-5 bg-card border-0 hover:shadow-cyan transition-all duration-500 group hover:scale-[1.02] hover:-translate-y-1 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-brand-cyan to-brand-light-cyan flex items-center justify-center flex-shrink-0 group-hover:shadow-glow transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <info.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1 group-hover:text-brand-mustard transition-colors duration-300">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground text-sm">{detail}</p>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Find Us</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-brand-cyan to-brand-mustard mx-auto mb-6"></div>
            <Card className="p-6 bg-card border-0 shadow-card hover:shadow-elegant transition-all duration-500">
              <div className="bg-muted rounded-lg h-56 flex items-center justify-center mb-5 overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8193191051064!2d36.7878!3d-1.2891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTcnMjAuOCJTIDM2wrA0NycxNi4xIkU!5e0!3m2!1sen!2ske!4v1234567890"
                  width="100%"
                  height="224"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                  title="EspiraNova Location Map"
                />
              </div>
              <p className="text-sm text-muted-foreground">
                Located in the heart of Nairobi, we're easily accessible and ready to meet 
                with you to discuss your project requirements in person.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Roots Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="p-6 md:p-10 bg-gradient-hero text-center hover:shadow-intense transition-all duration-500">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                Our Commitment to <span className="text-brand-mustard">Africa</span>
              </h3>
              <p className="text-white/90 text-base leading-relaxed">
                Rooted in Kenya, EspiraNova harnesses industry knowledge and faith-inspired resilience 
                to empower communities, mentoring youth and peers toward a brighter future. We're not 
                just building software; we're building the future of African technology.
              </p>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactPage;
