import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const About = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="pt-24">
                {/* Hero Section */}
                <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/assets/about-hero.png"
                            alt="Cozy Cottage Interior"
                            className="w-full h-full object-cover opacity-80"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90" />
                    </div>

                    <div className="container relative z-10 text-center px-6">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="section-title mb-4 text-forest"
                        >
                            Our Moonlit Story
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="section-subtitle mx-auto text-forest/80"
                        >
                            Curating the dreamy, the nostalgic, and the cozy for your sanctuary.
                        </motion.p>
                    </div>
                </section>

                {/* Story Section */}
                <section className="py-20 container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl font-serif font-medium text-foreground mb-6">Where Magic Meets Home</h2>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                Moonlit Home Decor was born from a simple belief: that your home should feel like a storybook.
                                Inspired by the whisper of wind through the trees, the soft glow of a lantern at dusk,
                                and the timeless charm of Cottagecore aesthetics, we set out to find pieces that bring
                                that magic into everyday living.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                We aren't just a store; we are a curated collection of inspirations. Our mission is to help
                                you transform your space into a peaceful retreat—a place where you can escape the hustle
                                and bustle and rediscover the joy of slow living.
                            </p>
                        </motion.div>
                        <motion.div
                            className="rounded-2xl overflow-hidden shadow-card"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800"
                                alt="Slow living decor"
                                className="w-full h-auto"
                            />
                        </motion.div>
                    </div>
                </section>

                {/* What We Do */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-serif font-medium text-foreground mb-4">What We Share</h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto font-light">
                                From finding the perfect vintage-style vase to guidebooks on creating a moonlit garden.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Curated Collections",
                                    desc: "We spend hours scouring the web for the finest home decor pieces so you don't have to.",
                                    icon: "✨"
                                },
                                {
                                    title: "Affiliate Treasures",
                                    desc: "When you shop through our recommendations, we may earn a small commission at no extra cost to you, helping us keep the moonlight burning.",
                                    icon: "🌲"
                                },
                                {
                                    title: "Design Blogs",
                                    desc: "In-depth guides on aesthetics like Cottagecore, Dark Academia, and Vintage Minimalist living.",
                                    icon: "📚"
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-card p-8 rounded-xl border border-border text-center shadow-soft"
                                >
                                    <div className="text-4xl mb-4">{item.icon}</div>
                                    <h3 className="text-xl font-serif font-medium mb-3">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Disclosure */}
                <section className="py-20 container mx-auto px-6 text-center">
                    <div className="max-w-3xl mx-auto p-8 rounded-2xl border border-dashed border-primary/30 bg-primary/5">
                        <h2 className="text-2xl font-serif mb-4">A Note to Our Readers</h2>
                        <p className="text-sm text-muted-foreground leading-relaxed italic">
                            Moonlit Home Decor is a participant in the Amazon Services LLC Associates Program,
                            an affiliate advertising program designed to provide a means for sites to earn
                            advertising fees by advertising and linking to Amazon.com. We only recommend products
                            we truly love and believe will bring beauty to your home.
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default About;
