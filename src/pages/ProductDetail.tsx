import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { inspirations } from "@/data/inspirations";
import { ArrowLeft, ExternalLink, ShoppingCart, ShieldCheck, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";

const ProductDetail = () => {
    const { id } = useParams<{ id: string }>();

    // Find the product and its parent inspiration
    let parentInspiration = null;
    let product = null;

    for (const ins of inspirations) {
        const found = ins.products.find(p => p.id === id);
        if (found) {
            product = found;
            parentInspiration = ins;
            break;
        }
    }

    if (!product || !parentInspiration) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-serif mb-4">Product not found</h1>
                    <Link to="/" className="text-primary hover:underline">Return Home</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background">
            <SEO
                title={product.name}
                description={product.description}
                image={product.image}
                type="product"
                productId={product.id}
                sku={product.sku}
                brand={product.brand}
                productLink={product.link}
                price={product.price}
                pinPrice={product.pinPrice}
                currency={product.pinCurrency || "USD"}
                availability={product.pinAvailability || "instock"}
            />
            <Header />
            <main className="pt-24 pb-20">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="mb-8"
                    >
                        <Link
                            to={`/inspiration/${parentInspiration.slug}`}
                            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-medium uppercase tracking-wider"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to {parentInspiration.name}
                        </Link>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:items-start">
                        {/* Product Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="rounded-[2.5rem] overflow-hidden shadow-xl border border-border/50 sticky top-32"
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover aspect-square"
                                onError={(e) => {
                                    e.currentTarget.src = "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200";
                                }}
                            />
                        </motion.div>

                        {/* Product Details */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="mb-2">
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Moonlit Curated Select</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-forest mb-6 leading-tight">
                                {product.name}
                            </h1>

                            <div className="flex items-center gap-2 mb-8">
                                <div className="flex text-amber-400">
                                    {[1, 2, 3, 4, 5].map(i => (
                                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <span className="text-sm text-muted-foreground">(Featured in {parentInspiration.name})</span>
                            </div>

                            <div className="flex items-center gap-4 mb-8">
                                <p className="text-3xl font-serif text-primary font-medium">{product.price || "Check Latest Price on Amazon"}</p>
                                <span className="text-xs text-muted-foreground uppercase tracking-widest border border-border px-2 py-1 rounded">In Stock</span>
                            </div>

                            <p className="text-lg text-muted-foreground leading-relaxed mb-10 font-light">
                                {product.description}
                            </p>

                            <div className="space-y-6 mb-10">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                        <Truck className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-sm text-forest uppercase tracking-wider">Fast Fulfillment</h4>
                                        <p className="text-xs text-muted-foreground">Order via Amazon for reliable and quick shipping options.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                        <ShieldCheck className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-sm text-forest uppercase tracking-wider">Trusted Quality</h4>
                                        <p className="text-xs text-muted-foreground">Selected based on durability, style, and real user reviews.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                    asChild
                                    className="h-16 px-8 rounded-full text-lg font-medium flex-grow shadow-lg shadow-primary/20 hover:shadow-xl hover:scale-[1.02] transition-all"
                                >
                                    <a
                                        href={product.link}
                                        target="_blank"
                                        rel="noopener noreferrer nofollow sponsored"
                                    >
                                        <ShoppingCart className="mr-2 w-5 h-5" />
                                        Check Latest Price on Amazon
                                        <ExternalLink className="ml-2 w-4 h-4 opacity-50" />
                                    </a>
                                </Button>
                            </div>

                            <p className="text-[10px] text-center text-muted-foreground mt-6 uppercase tracking-widest italic">
                                * As an Amazon Associate, we earn from qualifying purchases.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ProductDetail;
