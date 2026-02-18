import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { inspirations } from "@/data/inspirations";
import { ShoppingBag, ArrowLeft, ExternalLink } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";

const InspirationDetail = () => {
    const { slug } = useParams<{ slug: string }>();
    const inspiration = inspirations.find(ins => ins.slug === slug);
    const primaryProduct = inspiration?.products[0] ?? null;

    if (!inspiration) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-serif mb-4">Inspiration not found</h1>
                    <Link to="/" className="text-primary hover:underline">Return Home</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background">
            <SEO
                title={primaryProduct ? primaryProduct.name : inspiration.name}
                description={primaryProduct ? primaryProduct.description : inspiration.description}
                image={primaryProduct ? primaryProduct.image : inspiration.image}
                type={primaryProduct ? "product" : "article"}
                productId={primaryProduct?.id}
                productLink={primaryProduct?.link}
                price={primaryProduct?.price}
                pinPrice={primaryProduct?.pinPrice}
                currency={primaryProduct?.pinCurrency || "USD"}
                availability={primaryProduct?.pinAvailability || "instock"}
            />
            <Header />
            <main className="pt-24 pb-20">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="mb-8"
                    >
                        <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-medium uppercase tracking-wider">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Collection
                        </Link>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
                        {/* Main Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-border/50 group cursor-pointer"
                        >
                            <Link to={`/inspiration/${inspiration.slug}`}>
                                <img
                                    src={inspiration.image}
                                    alt={inspiration.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    onError={(e) => {
                                        e.currentTarget.src = "https://images.unsplash.com/photo-1618220179428-22790b461013?w=1200";
                                    }}
                                />
                            </Link>
                        </motion.div>

                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex flex-col justify-center"
                        >
                            <div className="flex items-center gap-2 mb-6">
                                {inspiration.categories.map(cat => (
                                    <span key={cat} className="bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                                        {cat.replace('-', ' ')}
                                    </span>
                                ))}
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-forest mb-6 leading-tight">
                                {inspiration.name}
                            </h1>
                            <p className="text-lg text-muted-foreground italic mb-8 font-light leading-relaxed">
                                {inspiration.description}
                            </p>

                            {inspiration.products.length === 1 && (
                                <div className="mb-10">
                                    <div className="flex items-center gap-4 mb-6">
                                        <p className="text-3xl font-serif text-primary font-medium">{inspiration.products[0].price || "Check Latest Price on Amazon"}</p>
                                        <span className="text-xs text-muted-foreground uppercase tracking-widest border border-border px-2 py-1 rounded">Curated Selection</span>
                                    </div>
                                    <Button
                                        asChild
                                        className="h-16 px-8 rounded-full text-lg font-medium w-full sm:w-auto shadow-lg shadow-primary/20 hover:shadow-xl hover:scale-[1.02] transition-all"
                                    >
                                        <a
                                            href={inspiration.products[0].link}
                                            target="_blank"
                                            rel="noopener noreferrer nofollow sponsored"
                                        >
                                            <ShoppingBag className="mr-2 w-5 h-5" />
                                            Check Latest Price on Amazon
                                            <ExternalLink className="ml-2 w-4 h-4 opacity-50" />
                                        </a>
                                    </Button>
                                    <p className="text-[10px] text-muted-foreground mt-4 uppercase tracking-widest italic">
                                        * As an Amazon Associate, we earn from qualifying purchases.
                                    </p>
                                </div>
                            )}

                            <div className="p-8 bg-muted/30 rounded-3xl border border-border/50">
                                <div className="flex items-center gap-3 mb-4">
                                    <ShoppingBag className="w-5 h-5 text-primary" />
                                    <h2 className="font-semibold text-forest uppercase tracking-widest text-sm">Design Components</h2>
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    This curated look uses specific pieces to achieve its aesthetic. Below you can find details for each individual product used in this space.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Product List - Only show if there are multiple products */}
                    {inspiration.products.length > 1 && (
                        <section>
                            <div className="flex items-center gap-3 mb-12">
                                <div className="h-px flex-grow bg-border" />
                                <h2 className="font-serif text-3xl font-medium text-forest px-4 italic">Shop the Look</h2>
                                <div className="h-px flex-grow bg-border" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {inspiration.products.map((product, pIndex) => (
                                    <motion.div
                                        key={product.id}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: pIndex * 0.1 }}
                                    >
                                        <Link
                                            to={`/product/${product.id}`}
                                            className="group block"
                                        >
                                            <div className="aspect-square rounded-3xl overflow-hidden border border-border/50 mb-4 shadow-sm group-hover:shadow-xl group-hover:-translate-y-2 transition-all duration-500">
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                    onError={(e) => {
                                                        e.currentTarget.src = "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400";
                                                    }}
                                                />
                                            </div>
                                            <h3 className="font-medium text-forest group-hover:text-primary transition-colors text-center line-clamp-1 px-2">
                                                {product.name}
                                            </h3>
                                            <p className="text-[10px] text-center text-muted-foreground uppercase tracking-tighter mt-1 group-hover:text-primary/70 transition-colors">
                                                View Product Details →
                                            </p>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default InspirationDetail;
