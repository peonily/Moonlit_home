import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, Home, ShoppingBag } from "lucide-react";

const collections = [
  {
    icon: Sparkles,
    title: "Pieces",
    description: "Individual decor items to elevate any space. From vintage finds to artisan creations.",
    href: "/collections/pieces",
    accent: "bg-blush",
  },
  {
    icon: Home,
    title: "Build Your Room",
    description: "Complete room transformation concepts. Get inspired with full-room makeover ideas.",
    href: "/collections/build-your-room",
    accent: "bg-primary",
  },
  {
    icon: ShoppingBag,
    title: "Amazon Finds",
    description: "Curated products from Amazon. Affordable pieces to achieve your dream aesthetic.",
    href: "/collections/amazon-finds",
    accent: "bg-highlight",
  },
];

export function CollectionsSection() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium tracking-[0.3em] uppercase text-primary mb-4">
            Shop the Look
          </p>
          <h2 className="section-title mb-4">Specialized Collections</h2>
          <p className="section-subtitle mx-auto">
            Turn inspiration into reality with our curated shopping collections.
          </p>
        </motion.div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Link
                to={collection.href}
                className="group block p-8 md:p-10 bg-card rounded-2xl border border-border hover:border-primary/30 transition-all duration-500 h-full"
                style={{ boxShadow: "var(--shadow-soft)" }}
              >
                <div className={`w-14 h-14 ${collection.accent} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <collection.icon className="w-7 h-7 text-foreground/80" />
                </div>
                <h3 className="text-2xl font-serif font-medium text-foreground mb-3">
                  {collection.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {collection.description}
                </p>
                <div className="mt-6 flex items-center gap-2 text-primary font-medium text-sm">
                  <span>Explore Collection</span>
                  <motion.span
                    className="inline-block"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                  >
                    →
                  </motion.span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
