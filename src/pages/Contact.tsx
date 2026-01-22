import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Mail, MessageSquare, MapPin, Instagram } from "lucide-react";

const Contact = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="pt-24 pb-20">
                <section className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-16 pt-10"
                        >
                            <h1 className="text-4xl md:text-5xl font-serif font-medium text-forest mb-4">
                                Let's Stay in Touch
                            </h1>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                Have a question about a design style or a collaboration proposal?
                                We'd love to hear from you. Reach out and let the moonlight guide our conversation.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                            {/* Contact Information */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="space-y-8"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center shrink-0">
                                        <Mail className="w-6 h-6 text-forest" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-serif font-medium mb-1">Email Us</h3>
                                        <p className="text-muted-foreground mb-1">moonlithome27@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center shrink-0">
                                        <Instagram className="w-6 h-6 text-forest" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-serif font-medium mb-1">Follow Our Journey</h3>
                                        <p className="text-muted-foreground">@moonlithome27</p>
                                        <p className="text-sm text-forest mt-1">Daily inspirations & community stories</p>
                                    </div>
                                </div>


                            </motion.div>

                            {/* Contact Form */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="bg-card p-8 rounded-2xl border border-border shadow-soft"
                            >
                                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                                            <input
                                                id="name"
                                                type="text"
                                                placeholder="Your name"
                                                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-forest/20 focus:border-forest outline-none transition-all duration-200"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                                            <input
                                                id="email"
                                                type="email"
                                                placeholder="your@email.com"
                                                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-forest/20 focus:border-forest outline-none transition-all duration-200"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="subject" className="text-sm font-medium text-foreground">Subject</label>
                                        <input
                                            id="subject"
                                            type="text"
                                            placeholder="What can we help with?"
                                            className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-forest/20 focus:border-forest outline-none transition-all duration-200"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                                        <textarea
                                            id="message"
                                            rows={5}
                                            placeholder="Tell us your story..."
                                            className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-forest/20 focus:border-forest outline-none transition-all duration-200 resize-none"
                                            required
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-forest text-forest-foreground py-4 rounded-lg font-medium hover:bg-forest/90 transition-all duration-300 transform active:scale-[0.98]"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Contact;
