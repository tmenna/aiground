import { Reveal } from '@/components/Reveal';
import { ShieldCheck, Zap, Diamond, Rocket, Globe2, Layers } from 'lucide-react';

const reasons = [
  {
    icon: <Globe2 className="w-8 h-8 text-primary" />,
    title: "Premium .COM Domain",
    description: "The world's most recognized and trusted domain extension. A .com signals instant authority."
  },
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: "Short & Memorable",
    description: "Easy to pronounce, spell, and remember. Reduces friction for direct type-in traffic."
  },
  {
    icon: <Diamond className="w-8 h-8 text-primary" />,
    title: "Highly Brandable",
    description: "A professional identity that works across many AI industries, from enterprise software to research."
  },
  {
    icon: <Rocket className="w-8 h-8 text-primary" />,
    title: "Built for the AI Era",
    description: "A timeless name designed explicitly for the companies shaping the future of artificial intelligence."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: "Trusted Worldwide",
    description: "A globally recognizable brand suitable for international organizations and global markets."
  },
  {
    icon: <Layers className="w-8 h-8 text-primary" />,
    title: "Scalable",
    description: "Appropriate for startups, enterprise organizations, research institutions, and technology giants."
  }
];

export function WhyAIGround() {
  return (
    <section id="why" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
              Why <span className="text-primary">AIGround</span>.com?
            </h2>
            <p className="text-muted-foreground text-lg">
              A domain name is your first impression. AIGround.com commands immediate respect and provides a foundation built for long-term category dominance.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="glass-card p-8 rounded-3xl h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_hsla(217,100%,60%,0.2)]">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 font-display tracking-tight">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
