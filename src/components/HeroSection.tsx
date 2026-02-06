import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Now Clickable */}
      <Link to="/inspiration/bohemian-serenity-living-room" className="absolute inset-0 group cursor-pointer z-0">
        <img
          src="/assets/products/IMG_20260204_170437.jpg"
          alt="Bohemian Serenity Living Room Inspiration"
          className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1618220179428-22790b461013?w=1920";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/10 to-background group-hover:bg-black/5 transition-colors duration-500" />

        {/* Click Indicator Tooltip */}
        <div className="absolute bottom-32 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
          <div className="bg-white/90 backdrop-blur-md text-forest px-6 py-3 rounded-full font-medium shadow-xl flex items-center gap-2 border border-white/50">
            <ShoppingBag className="w-5 h-5 text-primary" />
            Click to Shop This Space
          </div>
        </div>
      </Link>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm md:text-base font-medium tracking-[0.3em] uppercase text-foreground mb-6 drop-shadow-sm"
          >
            Welcome to
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-foreground mb-6 leading-tight drop-shadow-md"
          >
            Moonlit Home Decor
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl text-foreground font-light max-w-2xl mx-auto mb-10 drop-shadow-sm"
          >
            Discover curated interior inspirations that transform your space into a dreamy sanctuary.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pointer-events-auto"
          >
            <Link to="/rooms/living-room" className="btn-primary">
              Explore Rooms
            </Link>
            <Link to="/styles/bohemian" className="btn-outline bg-white/20 backdrop-blur-sm">
              Browse Styles
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-white/70 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}

