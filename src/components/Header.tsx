import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Heart } from "lucide-react";

const roomCategories = [
  { name: "Living Room", href: "/rooms/living-room" },
  { name: "Bedroom", href: "/rooms/bedroom" },
  { name: "Kitchen", href: "/rooms/kitchen" },
  { name: "Garden", href: "/rooms/garden" },
  { name: "Small Spaces", href: "/rooms/small-spaces" },
  { name: "Bathroom", href: "/rooms/bathroom" },
];

const styleCategories = [
  { name: "Cottagecore", href: "/styles/cottagecore" },
  { name: "Modern", href: "/styles/modern" },
  { name: "Country", href: "/styles/country" },
  { name: "Bohemian", href: "/styles/bohemian" },
  { name: "Dark Academia", href: "/styles/dark-academia" },
  { name: "Industrial", href: "/styles/industrial" },
  { name: "Classic", href: "/styles/classic" },
  { name: "Minimalist", href: "/styles/minimalist" },
  { name: "Vintage", href: "/styles/vintage" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="font-serif text-2xl md:text-3xl font-medium tracking-tight text-foreground">
              Moonlit Home Decor
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link to="/" className="nav-link text-sm font-medium tracking-wide uppercase">
              Home
            </Link>

            {/* Categories Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCategoriesOpen(true)}
              onMouseLeave={() => setCategoriesOpen(false)}
            >
              <button className="nav-link text-sm font-medium tracking-wide uppercase flex items-center gap-1">
                Categories
                <ChevronDown className="w-4 h-4" />
              </button>

              <AnimatePresence>
                {categoriesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-card rounded-lg shadow-lg border border-border overflow-hidden"
                  >
                    <div className="p-4">
                      <p className="text-xs font-medium tracking-wide uppercase text-muted-foreground mb-3">By Room</p>
                      <div className="space-y-2 mb-4">
                        {roomCategories.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="block text-sm text-foreground/80 hover:text-foreground transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                      <div className="border-t border-border pt-4">
                        <p className="text-xs font-medium tracking-wide uppercase text-muted-foreground mb-3">By Style</p>
                        <div className="space-y-2">
                          {styleCategories.slice(0, 5).map((item) => (
                            <Link
                              key={item.name}
                              to={item.href}
                              className="block text-sm text-foreground/80 hover:text-foreground transition-colors"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/blog" className="nav-link text-sm font-medium tracking-wide uppercase">
              Blog
            </Link>
            <Link to="/about" className="nav-link text-sm font-medium tracking-wide uppercase">
              About
            </Link>
            <Link to="/wishlist" className="p-2 text-foreground hover:text-primary transition-colors" aria-label="Wishlist">
              <Heart className="w-5 h-5" />
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <Link to="/wishlist" className="lg:hidden p-2 text-foreground" aria-label="Wishlist">
              <Heart className="w-5 h-5" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 pb-4"
            >
              <div className="flex flex-col gap-4">
                <Link to="/" className="text-sm font-medium tracking-wide uppercase">
                  Home
                </Link>
                <Link to="/blog" className="text-sm font-medium tracking-wide uppercase">
                  Blog
                </Link>
                <Link to="/about" className="text-sm font-medium tracking-wide uppercase">
                  About
                </Link>
                <div className="border-t border-border pt-4">
                  <p className="text-xs font-medium tracking-wide uppercase text-muted-foreground mb-2">By Room</p>
                  {roomCategories.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block py-1 text-sm text-foreground/80"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
