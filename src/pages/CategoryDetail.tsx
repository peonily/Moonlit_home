import { useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const categoryData = {
    rooms: {
        "living-room": { name: "Living Room", desc: "Cozy spaces for gathering and relaxation." },
        "bedroom": { name: "Bedroom", desc: "Your personal sanctuary for rest and dreams." },
        "kitchen": { name: "Kitchen", desc: "The warm, bustling heart of every home." },
        "garden": { name: "Garden", desc: "Outdoor retreats where nature meets design." },
        "bathroom": { name: "Bathroom", desc: "Transform your daily routine into a spa-like escape." },
        "small-spaces": { name: "Small Spaces", desc: "Big style ideas for modest footprints." }
    },
    styles: {
        "cottagecore": { name: "Cottagecore", desc: "Nostalgic, rural-inspired aesthetics emphasizing simple living." },
        "modern": { name: "Modern", desc: "Clean lines, functional forms, and minimalist elegance." },
        "bohemian": { name: "Bohemian", desc: "Free-spirited, global-inspired decor with rich textures." },
        "dark-academia": { name: "Dark Academia", desc: "Intellectual, moody vibes inspired by classic literature and libraries." },
        "minimalist": { name: "Minimalist", desc: "Finding beauty in simplicity and intentional space." }
    }
};

const CategoryDetail = ({ type }: { type: 'rooms' | 'styles' }) => {
    const { id } = useParams<{ id: string }>();
    // @ts-ignore
    const data = categoryData[type][id || ""] || { name: "Collection", desc: "Explore our curated inspirations." };

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="pt-24 pb-20">
                <section className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16 pt-10"
                    >
                        <p className="text-sm font-medium tracking-[0.3em] uppercase text-primary mb-4">
                            {type === 'rooms' ? 'Design by Room' : 'Design by Style'}
                        </p>
                        <h1 className="text-4xl md:text-5xl font-serif font-medium text-forest mb-4">
                            {data.name}
                        </h1>
                        <p className="text-muted-foreground max-w-2xl mx-auto italic">
                            {data.desc}
                        </p>
                    </motion.div>

                    {/* Placeholder for actual gallery/products */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="aspect-square bg-muted/30 rounded-2xl border border-dashed border-border flex items-center justify-center text-muted-foreground group hover:bg-muted/50 transition-colors"
                            >
                                <div className="text-center">
                                    <span className="block text-2xl mb-2 opacity-50">✨</span>
                                    <span className="text-sm font-light">Inspiration {i} Coming Soon</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default CategoryDetail;
