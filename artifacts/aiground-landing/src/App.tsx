import { SEO } from '@/components/SEO';
import { Navbar } from '@/sections/Navbar';
import { Hero } from '@/sections/Hero';
import { WhyAIGround } from '@/sections/WhyAIGround';
import { IdealUses } from '@/sections/IdealUses';
import { Acquisition } from '@/sections/Acquisition';
import { Contact } from '@/sections/Contact';
import { Footer } from '@/sections/Footer';

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO />
      <Navbar />
      
      <main>
        <Hero />
        <WhyAIGround />
        <IdealUses />
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
