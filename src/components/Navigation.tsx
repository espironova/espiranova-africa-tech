import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/espiranova-logo-main.jpg";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-navy/95 backdrop-blur-md transition-all duration-300 border-b border-brand-cyan/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-24 py-7">
          <Link to="/" className="flex items-center hover:opacity-90 transition-all duration-300 hover:scale-105">
            <img 
              src={logo} 
              alt="EspiraNova" 
              className="h-14 md:h-16 w-auto rounded-lg"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`nav-link text-lg font-semibold tracking-wide transition-all duration-300 hover:scale-105 ${
                  isActive(item.href) 
                    ? "text-brand-cyan" 
                    : "text-white/90 hover:text-brand-cyan"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white/80 hover:text-brand-cyan hover:bg-brand-cyan/10 transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className={`transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </div>
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2 bg-brand-navy/95 backdrop-blur-md border-t border-brand-cyan/10">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                to={item.href}
                className={`block px-4 py-3 text-sm font-medium transition-all duration-300 rounded-lg mx-2 ${
                  isActive(item.href) 
                    ? "text-brand-cyan bg-brand-cyan/10" 
                    : "text-white/80 hover:text-brand-cyan hover:bg-brand-cyan/5"
                }`}
                style={{ 
                  transitionDelay: isOpen ? `${index * 50}ms` : '0ms',
                  transform: isOpen ? 'translateX(0)' : 'translateX(-10px)',
                  opacity: isOpen ? 1 : 0
                }}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
