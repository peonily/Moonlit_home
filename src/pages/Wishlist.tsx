import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Heart, ShoppingBag, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const wishlistItems = [
    {
        id: 1,
        name: "Vintage Brass Candlestick",
        price: "$24.00",
        image: "https://images.unsplash.com/photo-1602052577122-f73b9710adba?auto=format&fit=crop&q=80&w=400",
        category: "Decor"
    },
    {
        id: 2,
        name: "Linen Floral Throw Pillow",
        price: "$38.00",
        image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e6?auto=format&fit=crop&q=80&w=400",
        category: "Textiles"
    }
];

const Wishlist = () => {
    const isEmpty = false; // Toggle this to see empty state

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
                        <h1 className="text-4xl md:text-5xl font-serif font-medium text-forest mb-4">
                            My Wishlist
                        </h1>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            A curated collection of pieces that have captured your heart.
                            Bring the magic of Moonlit Home into your sanctuary.
                        </p>
                    </motion.div>

                    {isEmpty ? (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-20 bg-muted/20 rounded-3xl border border-dashed border-border"
                        >
                            <div className="w-20 h-20 rounded-full bg-forest/5 flex items-center justify-center mx-auto mb-6">
                                <Heart className="w-10 h-10 text-forest/30" />
                            </div>
                            <h2 className="text-2xl font-serif mb-2">Your wishlist is empty</h2>
                            <p className="text-muted-foreground mb-8">Start exploring and save your favorite pieces.</p>
                            <Link
                                to="/"
                                className="inline-flex items-center gap-2 bg-forest text-forest-foreground px-8 py-3 rounded-full hover:bg-forest/90 transition-all font-medium"
                            >
                                Explore Collections
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </motion.div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {wishlistItems.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-card rounded-2xl border border-border overflow-hidden shadow-soft hover:shadow-card transition-all group"
                                >
                                    <div className="aspect-[4/5] overflow-hidden relative">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-red-500 shadow-sm hover:scale-110 transition-transform">
                                            <Heart className="w-5 h-5 fill-current" />
                                        </button>
                                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                            <button className="bg-white text-forest px-6 py-2 rounded-full font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                                                <ShoppingBag className="w-4 h-4" />
                                                Shop Now
                                            </button>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <p className="text-xs font-medium tracking-wider uppercase text-forest/60 mb-1">{item.category}</p>
                                        <h3 className="text-xl font-serif font-medium mb-2">{item.name}</h3>
                                        <p className="text-forest font-medium">{item.price}</p>
                                    </div>
                                </motion.div>
                            ))}

                            {/* Add more space for future items placeholder */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="rounded-2xl border border-dashed border-border flex flex-col items-center justify-center p-8 bg-muted/5 group hover:bg-muted/10 transition-colors"
                            >
                                <div className="w-12 h-12 rounded-full border border-dashed border-border flex items-center justify-center mb-4 text-muted-foreground">
                                    +
                                </div>
                                <p className="text-sm text-muted-foreground font-light italic">More treasures yet to be found...</p>
                                <Link to="/" className="text-forest text-xs font-medium mt-4 underline underline-offset-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                    Discover more
                                </Link>
                            </motion.div>
                        </div>
                    )}
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Wishlist;
