import { Reveal } from '@/components/Reveal';
import { Briefcase, Database, LayoutGrid, Shield, Cpu, Lightbulb, TrendingUp, GraduationCap, Cloud, Users } from 'lucide-react';

const concepts = [
  { icon: Briefcase, title: "Enterprise AI Platform" },
  { icon: Database, title: "AI Infrastructure Company" },
  { icon: LayoutGrid, title: "Global AI Marketplace" },
  { icon: Shield, title: "Defense & Aerospace AI" },
  { icon: Cpu, title: "Robotics Company" },
  { icon: Lightbulb, title: "AI Research Institute" },
  { icon: TrendingUp, title: "AI Venture Studio" },
  { icon: GraduationCap, title: "AI Learning Platform" },
  { icon: Cloud, title: "AI Cloud Services" },
  { icon: Users, title: "AI Community & Developer Network" }
];

export function BrandConcepts() {
  return (
    <section id="concepts" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
              Potential Brand Concepts
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              The strength of AIGround.com is its flexibility to support many different AI-focused businesses while remaining memorable, authoritative, and globally recognizable. Here is what you could build.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {concepts.map((concept, index) => {
            const Icon = concept.icon;
            return (
              <Reveal key={index} delay={index * 0.05}>
                <div className="glass-card p-6 rounded-2xl flex flex-col items-center text-center h-full hover:shadow-md transition-all group">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                    <Icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="text-xs font-mono text-muted-foreground mb-2">AI Ground</div>
                  <h3 className="text-sm font-semibold text-foreground font-display">
                    {concept.title}
                  </h3>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
