import { SEO } from '@/components/SEO';
import { Navbar } from '@/sections/Navbar';
import { Hero } from '@/sections/Hero';
import { WhyAIGround } from '@/sections/WhyAIGround';
import { IdealUses } from '@/sections/IdealUses';
import { BrandConcepts } from '@/sections/BrandConcepts';
import { PremiumDomains } from '@/sections/PremiumDomains';
import { Acquisition } from '@/sections/Acquisition';
import { Contact } from '@/sections/Contact';
import { Footer } from '@/sections/Footer';

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-white">
      <SEO />
      <Navbar />
      
      <main>
        <Hero />
        <WhyAIGround />
        <IdealUses />
        <BrandConcepts />
        <PremiumDomains />
        <Acquisition />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

function App() {
  return <LandingPage />;
}

export default App;
