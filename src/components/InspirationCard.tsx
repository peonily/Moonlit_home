import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShoppingBag, ArrowRight } from "lucide-react";
import { Inspiration } from "@/data/inspirations";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface InspirationCardProps {
    inspiration: Inspiration;
    index: number;
}

export function InspirationCard({ inspiration, index }: InspirationCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="group"
        >
            <Link to={`/inspiration/${inspiration.slug}`} className="block space-y-5">
                <div className="relative overflow-hidden rounded-[2.5rem] border border-border/50 shadow-sm transition-all duration-700 group-hover:shadow-2xl group-hover:border-primary/20">
                    <AspectRatio ratio={4 / 5}>
                        <img
                            src={inspiration.image}
                            alt={inspiration.name}
                            className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-105"
                            onError={(e) => {
                                e.currentTarget.src = "https://images.unsplash.com/photo-1618220179428-22790b461013?w=800";
                            }}
                        />
                    </AspectRatio>

                    {/* Subtle Hover Overlay */}
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Floating Action Hint */}
                    <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                        <div className="bg-white/90 backdrop-blur-md p-3 rounded-full shadow-lg border border-white/20">
                            <ShoppingBag className="w-5 h-5 text-primary" />
                        </div>
                    </div>
                </div>

                <div className="px-4 text-center">
                    <h3 className="font-serif text-2xl font-medium text-forest group-hover:text-primary transition-colors duration-300 mb-2 leading-tight">
                        {inspiration.name}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 italic font-light mb-4 flex items-center justify-center gap-1">
                        Explore the Components <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </p>

                    <div className="flex justify-center gap-2">
                        {inspiration.categories.map(cat => (
                            <span key={cat} className="text-[9px] font-bold uppercase tracking-widest text-primary/60 bg-primary/5 px-2 py-0.5 rounded-full border border-primary/10">
                                {cat.replace('-', ' ')}
                            </span>
                        ))}
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
