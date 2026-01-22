import { Link } from "react-router-dom";
import { Instagram, Heart, Mail } from "lucide-react";

const footerLinks = {
  rooms: [
    { name: "Living Room", href: "/rooms/living-room" },
    { name: "Bedroom", href: "/rooms/bedroom" },
    { name: "Kitchen", href: "/rooms/kitchen" },
    { name: "Garden", href: "/rooms/garden" },
    { name: "Bathroom", href: "/rooms/bathroom" },
  ],
  styles: [
    { name: "Cottagecore", href: "/styles/cottagecore" },
    { name: "Modern", href: "/styles/modern" },
    { name: "Bohemian", href: "/styles/bohemian" },
    { name: "Dark Academia", href: "/styles/dark-academia" },
    { name: "Minimalist", href: "/styles/minimalist" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-forest text-forest-foreground py-16 md:py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <span className="font-serif text-2xl font-medium">
                Moonlit Home Decor
              </span>
            </Link>
            <p className="text-forest-foreground/70 max-w-sm leading-relaxed mb-6">
              Curating dreamy interior inspirations to help you create the home of your dreams.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-forest-foreground/10 flex items-center justify-center hover:bg-forest-foreground/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-forest-foreground/10 flex items-center justify-center hover:bg-forest-foreground/20 transition-colors"
                aria-label="Favorites"
              >
                <Heart className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-forest-foreground/10 flex items-center justify-center hover:bg-forest-foreground/20 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Rooms */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-4">By Room</h4>
            <ul className="space-y-3">
              {footerLinks.rooms.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-forest-foreground/70 hover:text-forest-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Styles */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-4">By Style</h4>
            <ul className="space-y-3">
              {footerLinks.styles.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-forest-foreground/70 hover:text-forest-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-forest-foreground/70 hover:text-forest-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-forest-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-forest-foreground/60 text-sm">
              © Moonlit Home Decor. All rights reserved.
            </p>
            <p className="text-forest-foreground/60 text-sm">
              Made with love for beautiful homes ✨
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
