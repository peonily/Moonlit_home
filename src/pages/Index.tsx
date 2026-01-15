import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { RoomSection } from "@/components/RoomSection";
import { StyleSection } from "@/components/StyleSection";
import { CollectionsSection } from "@/components/CollectionsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
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
