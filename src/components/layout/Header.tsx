/* COMPONENT: Header Navigation
 * Responsive header with logo, navigation links, and mobile menu
 * PLACEHOLDER: Update navigation links in navItems array
 */

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import siteConfig from "@/data/site-config.json";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // PLACEHOLDER: Modify navigation items here
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Programs", href: "#programs" },
    { label: "Trainers", href: "#trainers" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-sm border-b border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <img 
              src={new URL('@/assets/gym-point-logo.png', import.meta.url).href} 
              alt="Gym Point Logo" 
              className="w-12 h-12 transition-transform group-hover:scale-110"
            />
            <span className="text-2xl font-bold text-primary">{siteConfig.siteName}</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-primary-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
            <Button variant="default" size="lg" className="bg-primary text-secondary hover:bg-primary/90">
              Join Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-primary-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-6 border-t border-primary/20 animate-fade-in">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 text-primary-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
            <Button variant="default" size="lg" className="w-full mt-4 bg-primary text-secondary">
              Join Now
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
