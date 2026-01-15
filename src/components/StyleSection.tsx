import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import styleCottagecore from "@/assets/style-cottagecore.jpg";
import styleModern from "@/assets/style-modern.jpg";
import styleCountry from "@/assets/style-country.jpg";
import styleBohemian from "@/assets/style-bohemian.jpg";
import styleDarkAcademia from "@/assets/style-darkacademia.jpg";
import styleIndustrial from "@/assets/style-industrial.jpg";
import styleClassic from "@/assets/style-classic.jpg";
import styleMinimalist from "@/assets/style-minimalist.jpg";
import styleVintage from "@/assets/style-vintage.jpg";

const styles = [
  { name: "Cottagecore", image: styleCottagecore, href: "/styles/cottagecore" },
  { name: "Modern", image: styleModern, href: "/styles/modern" },
  { name: "Country", image: styleCountry, href: "/styles/country" },
  { name: "Bohemian", image: styleBohemian, href: "/styles/bohemian" },
  { name: "Dark Academia", image: styleDarkAcademia, href: "/styles/dark-academia" },
  { name: "Industrial", image: styleIndustrial, href: "/styles/industrial" },
  { name: "Classic", image: styleClassic, href: "/styles/classic" },
  { name: "Minimalist", image: styleMinimalist, href: "/styles/minimalist" },
  { name: "Vintage", image: styleVintage, href: "/styles/vintage" },
];

export function StyleSection() {
  return (
    <section id="styles" className="py-24 md:py-32 bg-muted/50">
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
            Find Your Aesthetic
          </p>
          <h2 className="section-title mb-4">Design by Style</h2>
          <p className="section-subtitle mx-auto">
            Whether you prefer cozy cottagecore or sleek minimalism, discover your perfect aesthetic.
          </p>
        </motion.div>

        {/* Styles Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
          {styles.map((style, index) => (
            <motion.div
              key={style.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={style.href}
                className="category-card group block aspect-[3/4] md:aspect-square"
              >
                <img
                  src={style.image}
                  alt={style.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-end p-4 md:p-6 z-10">
                  <h3 className="text-card text-lg md:text-2xl font-serif font-medium">
                    {style.name}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
