import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/espiranova-logo-new.png";

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-navy/90 backdrop-blur-md transition-all duration-300 border-b border-brand-cyan/10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center hover:opacity-90 transition-opacity">
            <img 
              src={logo} 
              alt="EspiraNova" 
              className="h-8 md:h-9 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-medium transition-all duration-300 nav-link hover:scale-105 ${
                  isActive(item.href) 
                    ? "text-brand-cyan" 
                    : "text-white/80 hover:text-brand-cyan"
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
            className="md:hidden text-white/80 hover:text-brand-cyan hover:bg-brand-cyan/10"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2 bg-brand-navy/95 backdrop-blur-md border-t border-brand-cyan/10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`block px-4 py-3 text-sm font-medium transition-colors rounded-lg mx-2 ${
                  isActive(item.href) 
                    ? "text-brand-cyan bg-brand-cyan/10" 
                    : "text-white/80 hover:text-brand-cyan hover:bg-brand-cyan/5"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};