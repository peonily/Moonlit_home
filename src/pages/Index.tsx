import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { RoomSection } from "@/components/RoomSection";
import { StyleSection } from "@/components/StyleSection";
import { CollectionsSection } from "@/components/CollectionsSection";
import { Footer } from "@/components/Footer";

import { SEO } from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        description="Discover curated interior design inspiration with Moonlit Home Decor. Explore cottagecore, modern, bohemian and more aesthetics for your dream home."
      />
      <Header />
      <main>
        <HeroSection />
        <RoomSection />
        <StyleSection />
        <CollectionsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
