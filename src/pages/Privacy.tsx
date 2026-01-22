import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="pt-24 pb-20">
                <section className="container mx-auto px-6 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-serif font-medium text-forest mb-8 text-center pt-10">
                            Privacy Policy
                        </h1>

                        <div className="prose prose-forest max-w-none text-muted-foreground leading-relaxed space-y-8">
                            <section>
                                <h2 className="text-2xl font-serif text-foreground mb-4">Introduction</h2>
                                <p>
                                    At Moonlit Home Decor, we value your privacy and are committed to protecting your personal data.
                                    This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-serif text-foreground mb-4">Information We Collect</h2>
                                <p>
                                    We may collect personal information such as your name and email address when you voluntarily subscribe to our newsletter
                                    or contact us through our website. Additionally, we automatically collect certain information about your device and
                                    how you interact with our site through cookies and similar technologies.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-serif text-foreground mb-4">How We Use Your Information</h2>
                                <p>
                                    Your information is used to:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Provide and maintain our service</li>
                                    <li>Improve our website content and user experience</li>
                                    <li>Send periodic newsletters or promotional materials (if you've opted in)</li>
                                    <li>Respond to your inquiries and support requests</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-serif text-foreground mb-4">Affiliate Disclosure & Cookies</h2>
                                <p>
                                    Moonlit Home Decor is a participant in affiliate marketing programs. When you click on links to various merchants
                                    on this site and make a purchase, this can result in this site earning a commission. Affiliate programs and
                                    advertising networks use cookies to track these clicks for the purpose of assigning commission.
                                </p>
                                <p>
                                    You can choose to disable cookies through your individual browser options. However, this may affect your
                                    experience with certain features of our website.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-serif text-foreground mb-4">Third-Party Services</h2>
                                <p>
                                    We may use third-party service providers to monitor and analyze the use of our service, such as Google Analytics.
                                    These third parties have their own privacy policies addressing how they use such information.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-serif text-foreground mb-4">Security</h2>
                                <p>
                                    The security of your data is important to us, but remember that no method of transmission over the Internet
                                    is 100% secure. While we strive to use commercially acceptable means to protect your personal information,
                                    we cannot guarantee its absolute security.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-serif text-foreground mb-4">Contact Us</h2>
                                <p>
                                    If you have any questions about this Privacy Policy, please contact us at:
                                    <br />
                                    <span className="text-forest font-medium">moonlithome27@gmail.com</span>
                                </p>
                            </section>

                            <p className="text-sm italic pt-8 border-t border-border">
                                Last updated: January 2026
                            </p>
                        </div>
                    </motion.div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
