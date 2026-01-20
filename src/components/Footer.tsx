import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import logo from "@/assets/espiranova-logo-main.jpg";

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src={logo} 
              alt="EspiraNova - Innovation with Impact" 
              className="h-20 w-auto object-contain rounded-lg"
            />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Innovation with Impact. We deliver cutting-edge technology solutions 
              that transform businesses across Africa.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://web.facebook.com/profile.php?id=61581733860315" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="EspiraNova on Facebook"
                className="group"
              >
                <Facebook className="w-5 h-5 text-muted-foreground group-hover:text-primary cursor-pointer transition-all duration-300 group-hover:scale-110" />
              </a>
              <a 
                href="https://twitter.com/espiranova" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="EspiraNova on Twitter"
                className="group"
              >
                <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-primary cursor-pointer transition-all duration-300 group-hover:scale-110" />
              </a>
              <a 
                href="https://www.linkedin.com/company/espiranova/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="EspiraNova on LinkedIn"
                className="group"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary cursor-pointer transition-all duration-300 group-hover:scale-110" />
              </a>
              <a 
                href="#" 
                aria-label="EspiraNova on Instagram"
                className="group"
              >
                <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-primary cursor-pointer transition-all duration-300 group-hover:scale-110" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-all duration-300 text-sm hover:translate-x-1 inline-block">Home</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-all duration-300 text-sm hover:translate-x-1 inline-block">About Us</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-all duration-300 text-sm hover:translate-x-1 inline-block">Services</Link></li>
              <li><Link to="/portfolio" className="text-muted-foreground hover:text-primary transition-all duration-300 text-sm hover:translate-x-1 inline-block">Portfolio</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-all duration-300 text-sm hover:translate-x-1 inline-block">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 group">
                <Mail className="w-4 h-4 text-primary flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <a href="mailto:espiranova2@gmail.com" className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300">espiranova2@gmail.com</a>
              </div>
              <div className="flex items-center gap-3 group">
                <Phone className="w-4 h-4 text-primary flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <span className="text-muted-foreground text-sm">+254 783238429</span>
              </div>
              <div className="flex items-center gap-3 group">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <span className="text-muted-foreground text-sm">Nairobi, Kenya</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2025 EspiraNova. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">
                Privacy Policy
              </Link>
              <Link to="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
