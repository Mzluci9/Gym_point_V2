/* COMPONENT: Footer
 * Site footer with contact info, hours, social links, and newsletter
 * PLACEHOLDER: All content editable in src/data/site-config.json
 */

import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import siteConfig from "@/data/site-config.json";

const Footer = () => {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // PLACEHOLDER: Hook to /api/newsletter endpoint
    console.log("Newsletter signup submitted");
  };

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand & Tagline */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">{siteConfig.siteName}</h3>
            <p className="text-muted-foreground mb-6">{siteConfig.tagline}</p>
            <div className="flex gap-4">
              <a href={siteConfig.social.instagram} className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={24} />
              </a>
              <a href={siteConfig.social.facebook} className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={24} />
              </a>
              <a href={siteConfig.social.twitter} className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter size={24} />
              </a>
              <a href={siteConfig.social.youtube} className="text-muted-foreground hover:text-primary transition-colors" aria-label="YouTube">
                <Youtube size={24} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-primary mb-4">Contact Us</h4>
            <div className="space-y-3 text-muted-foreground">
              <a href={`tel:${siteConfig.contact.phone}`} className="flex items-start gap-3 hover:text-primary transition-colors">
                <Phone size={20} className="mt-0.5 flex-shrink-0" />
                <span>{siteConfig.contact.phone}</span>
              </a>
              <a href={`mailto:${siteConfig.contact.email}`} className="flex items-start gap-3 hover:text-primary transition-colors">
                <Mail size={20} className="mt-0.5 flex-shrink-0" />
                <span>{siteConfig.contact.email}</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={20} className="mt-0.5 flex-shrink-0" />
                <span>{siteConfig.contact.address}</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-bold text-primary mb-4">Hours</h4>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-start gap-3">
                <Clock size={20} className="mt-0.5 flex-shrink-0" />
                <div>
                  <p>{siteConfig.hours.weekdays}</p>
                  <p>{siteConfig.hours.saturday}</p>
                  <p>{siteConfig.hours.sunday}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold text-primary mb-4">Stay Updated</h4>
            <p className="text-muted-foreground mb-4">Get fitness tips, class updates and exclusive offers.</p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-2">
              <Input
                type="email"
                placeholder="Your email"
                required
                className="bg-background/10 border-primary/20 text-secondary-foreground"
              />
              <Button type="submit" variant="default" className="bg-primary text-secondary hover:bg-primary/90">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12 rounded-lg overflow-hidden h-64">
          {/* PLACEHOLDER: Update embedUrl in site-config.json */}
          <iframe
            src={siteConfig.map.embedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Gym Point Location"
          />
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-primary/20 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {siteConfig.siteName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
