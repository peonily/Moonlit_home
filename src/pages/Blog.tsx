import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const blogPosts = [
    {
        id: 1,
        title: "The Art of Cottagecore: Creating Your Own Rural Sanctuary",
        excerpt: "Discover the magic of slow living and how to infuse your home with the nostalgic charm of the English countryside.",
        category: "Cottagecore",
        image: "/assets/blog/cottagecore-blog.png",
        content: "Cottagecore is more than just an aesthetic; it's a movement towards simplicity and a deep connection with nature. To bring this into your home, focus on natural materials like wood and linen, floral patterns, and vintage-inspired decor. Think dried flowers in ceramic vases, lace tablecloths, and an abundance of cozy textiles."
    },
    {
        id: 2,
        title: "Dark Academia: A Guide to the Scholarly Aesthetic",
        excerpt: "Transform your space into a moody, intellectual retreat inspired by classic literature and vintage university life.",
        category: "Dark Academia",
        image: "/assets/blog/dark-academia-blog.png",
        content: "Dark Academia celebrates curiosity, history, and a touch of mystery. Its color palette is rich and deep—forest greens, burgundies, and dark browns. Key elements include towering bookshelves, leather-bound volumes, brass accents, and moody task lighting. It's about creating an atmosphere that invites study and reflection."
    },
    {
        id: 3,
        title: "Mastering Modern Decor: Sleek, Functional, and Timeless",
        excerpt: "Learn how to balance clean lines with comfort for a contemporary space that feels both minimal and inviting.",
        category: "Modern",
        image: "/assets/blog/modern-blog.png",
        content: "Modern design is characterized by its emphasis on function and form. It favors open spaces, geometric shapes, and a restrained color palette often punctuated by bold accents. To achieve this look, choose furniture with clean silhouettes, utilize smooth surfaces like glass or polished stone, and keep clutter to a minimum to let the architecture of the space shine."
    }
];

const Blog = () => {
    const [expandedPosts, setExpandedPosts] = useState<number[]>([]);

    const toggleExpand = (id: number) => {
        setExpandedPosts(prev =>
            prev.includes(id) ? prev.filter(pId => pId !== id) : [...prev, id]
        );
    };

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />
            <main className="pt-24 pb-20">
                <section className="container mx-auto px-6 py-12">
                    <div className="text-center mb-16">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl md:text-5xl font-serif font-medium text-foreground mb-4"
                        >
                            The Design Journal
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-muted-foreground max-w-2xl mx-auto"
                        >
                            Explore our latest thoughts on interior design, aesthetic living, and home transformation.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post, index) => {
                            const isExpanded = expandedPosts.includes(post.id);
                            return (
                                <motion.article
                                    key={post.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-card rounded-2xl border border-border overflow-hidden shadow-soft hover:shadow-card transition-all duration-300"
                                >
                                    {/* Blog Post Cover Image */}
                                    <div className="h-56 overflow-hidden">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                        />
                                    </div>

                                    <div className="p-8">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="text-xs font-medium tracking-wider uppercase px-2 py-1 bg-primary/10 text-primary rounded-full">
                                                {post.category}
                                            </span>
                                        </div>

                                        <h2 className="text-xl font-serif font-medium mb-3 group-hover:text-primary transition-colors">
                                            {post.title}
                                        </h2>

                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {post.excerpt}
                                        </p>

                                        <AnimatePresence>
                                            {isExpanded && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="mt-6 pt-6 border-t border-border/50 text-sm text-muted-foreground leading-relaxed italic">
                                                        {post.content}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                        <button
                                            onClick={() => toggleExpand(post.id)}
                                            className="mt-6 w-full py-2 flex items-center justify-between text-sm font-medium text-primary hover:text-primary/80 transition-colors border-t border-border/30 pt-4 group"
                                        >
                                            <span>{isExpanded ? "Close Post" : "Read Full Story"}</span>
                                            <motion.span
                                                animate={{ rotate: isExpanded ? 180 : 0 }}
                                                className="text-lg"
                                            >
                                                {isExpanded ? "↑" : "→"}
                                            </motion.span>
                                        </button>
                                    </div>
                                </motion.article>
                            );
                        })}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Blog;
