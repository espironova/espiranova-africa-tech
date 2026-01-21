import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/espiranova-logo-main.jpg";

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Pre-Footer CTA */}
      <section className="relative py-24 bg-brand-navy overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `
            linear-gradient(hsl(185 75% 50%) 1px, transparent 1px),
            linear-gradient(90deg, hsl(185 75% 50%) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }} />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight">
            READY TO <span className="text-brand-cyan">TRANSFORM?</span>
          </h2>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10">
            Let's build something great together. Get a free consultation and discover 
            how we can eliminate manual work from your business.
          </p>
          <Link to="/contact">
            <Button 
              size="lg"
              className="bg-brand-cyan hover:bg-brand-light-cyan text-brand-navy px-10 py-7 text-lg font-bold transition-all duration-300 hover:scale-105 group"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Main Footer */}
      <div className="bg-background border-t border-border">
        {/* Gradient Border Top */}
        <div className="h-1 bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-blue" />
        
        <div className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="md:col-span-2 space-y-6">
              <Link to="/" className="inline-block group">
                <div className="relative">
                  <img 
                    src={logo} 
                    alt="EspiraNova - Innovation with Impact" 
                    className="h-20 w-auto object-contain rounded-lg transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute -inset-2 bg-brand-cyan/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </div>
              </Link>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Innovation with Impact. We design modern websites and build simple systems 
                that eliminate manual work for growing African businesses.
              </p>
              <div className="flex gap-4">
                {[
                  { icon: Facebook, href: "https://web.facebook.com/profile.php?id=61581733860315", label: "Facebook" },
                  { icon: Twitter, href: "https://twitter.com/espiranova", label: "Twitter" },
                  { icon: Linkedin, href: "https://www.linkedin.com/company/espiranova/", label: "LinkedIn" },
                  { icon: Instagram, href: "#", label: "Instagram" },
                ].map((social, index) => (
                  <a 
                    key={index}
                    href={social.href}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label={`EspiraNova on ${social.label}`}
                    className="group/icon"
                  >
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center transition-all duration-300 group-hover/icon:bg-brand-cyan group-hover/icon:shadow-glow">
                      <social.icon className="w-5 h-5 text-muted-foreground transition-colors duration-300 group-hover/icon:text-brand-navy" />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-bold text-foreground">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { href: "/", label: "Home" },
                  { href: "/about", label: "About Us" },
                  { href: "/services", label: "Services" },
                  { href: "/portfolio", label: "Portfolio" },
                  { href: "/contact", label: "Contact" },
                ].map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.href} 
                      className="text-muted-foreground hover:text-brand-cyan transition-all duration-300 inline-flex items-center gap-2 group"
                    >
                      <span className="w-0 h-0.5 bg-brand-cyan transition-all duration-300 group-hover:w-4" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-lg font-bold text-foreground">Contact</h4>
              <div className="space-y-4">
                <a 
                  href="mailto:espiranova2@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-brand-cyan transition-colors duration-300 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-brand-cyan/10 flex items-center justify-center transition-colors duration-300 group-hover:bg-brand-cyan/20">
                    <Mail className="w-4 h-4 text-brand-cyan" />
                  </div>
                  <span className="text-sm">espiranova2@gmail.com</span>
                </a>
                <div className="flex items-center gap-3 text-muted-foreground group">
                  <div className="w-8 h-8 rounded-lg bg-brand-cyan/10 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-brand-cyan" />
                  </div>
                  <span className="text-sm">+254 783238429</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground group">
                  <div className="w-8 h-8 rounded-lg bg-brand-cyan/10 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-brand-cyan" />
                  </div>
                  <span className="text-sm">Nairobi, Kenya</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-muted-foreground text-sm">
                © {new Date().getFullYear()} EspiraNova. All rights reserved.
              </p>
              <div className="flex gap-6">
                <Link to="#" className="text-muted-foreground hover:text-brand-cyan transition-colors duration-300 text-sm">
                  Privacy Policy
                </Link>
                <Link to="#" className="text-muted-foreground hover:text-brand-cyan transition-colors duration-300 text-sm">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
