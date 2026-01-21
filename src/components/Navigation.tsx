import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/espiranova-logo-main.jpg";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
  ];

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-brand-navy/98 backdrop-blur-xl shadow-lg shadow-brand-navy/20' 
        : 'bg-transparent backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="relative">
              <img 
                src={logo} 
                alt="EspiraNova" 
                className="h-14 md:h-16 w-auto rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              {/* Subtle glow on hover */}
              <div className="absolute -inset-2 bg-brand-cyan/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`relative text-base font-medium tracking-wide transition-all duration-300 group ${
                  isActive(item.href) 
                    ? "text-brand-cyan" 
                    : "text-white/80 hover:text-white"
                }`}
              >
                {item.label}
                {/* Animated underline */}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-brand-cyan to-brand-light-cyan transition-all duration-300 ${
                  isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}
            
            {/* CTA Button */}
            <Link to="/contact">
              <Button 
                className="relative bg-brand-cyan hover:bg-brand-light-cyan text-brand-navy font-semibold px-6 py-2.5 transition-all duration-300 overflow-hidden group"
              >
                <span className="relative z-10">Let's Talk</span>
                {/* Pulsing glow */}
                <div className="absolute -inset-1 bg-brand-cyan/40 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse-glow -z-10" />
              </Button>
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white/80 hover:text-brand-cyan hover:bg-white/10 transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className={`transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </div>
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-6 space-y-2 bg-brand-navy/98 backdrop-blur-xl border-t border-white/10">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                to={item.href}
                className={`block px-6 py-4 text-lg font-medium transition-all duration-300 ${
                  isActive(item.href) 
                    ? "text-brand-cyan bg-brand-cyan/10 border-l-2 border-brand-cyan" 
                    : "text-white/80 hover:text-brand-cyan hover:bg-white/5"
                }`}
                style={{ 
                  transitionDelay: isOpen ? `${index * 50}ms` : '0ms',
                  transform: isOpen ? 'translateX(0)' : 'translateX(-20px)',
                  opacity: isOpen ? 1 : 0
                }}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="px-6 pt-4">
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <Button 
                  className="w-full bg-brand-cyan hover:bg-brand-light-cyan text-brand-navy font-semibold py-6 text-lg"
                >
                  Let's Talk
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
