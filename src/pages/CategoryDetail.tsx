import { useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { inspirations } from "@/data/inspirations";
import { InspirationCard } from "@/components/InspirationCard";

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
        "modern-classic": { name: "Modern Classic", desc: "Timeless sophistication meets contemporary comfort." },
        "minimalist": { name: "Minimalist", desc: "Finding beauty in simplicity and intentional space." },
        "country": { name: "Country", desc: "Rustic charm and pastoral elegance for a warm, lived-in feel." }
    }
};

const CategoryDetail = ({ type }: { type: 'rooms' | 'styles' }) => {
    const { id = "" } = useParams<{ id: string }>();
    // @ts-ignore
    const data = categoryData[type][id] || { name: "Collection", desc: "Explore our curated inspirations." };

    const filteredInspirations = inspirations.filter(ins => ins.categories.includes(id));

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

                    {filteredInspirations.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                            {filteredInspirations.map((ins, index) => (
                                <InspirationCard key={ins.id} inspiration={ins} index={index} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-muted/20 rounded-3xl border border-dashed border-border">
                            <span className="block text-4xl mb-4 opacity-50">✨</span>
                            <h3 className="text-xl font-medium text-forest mb-2">More Inspirations Coming Soon</h3>
                            <p className="text-muted-foreground">We're currently curating the perfect looks for this collection.</p>
                        </div>
                    )}
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default CategoryDetail;

