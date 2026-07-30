import { Reveal } from '@/components/Reveal';

const useCases = [
  { title: "AI SaaS Platforms", desc: "A compelling brand for cloud-based AI software tools." },
  { title: "AI Developer Tools", desc: "The definitive platform for developers building AI apps." },
  { title: "AI Infrastructure", desc: "A strong identity for companies providing AI compute or hosting." },
  { title: "AI Cloud Services", desc: "Perfect for enterprise AI cloud service providers." },
  { title: "AI Data Platforms", desc: "A reliable name for training data and vector database companies." },
  { title: "AI Marketplaces", desc: "The central hub for buying and selling AI models and prompts." },
  { title: "AI Education", desc: "A foundational learning platform for AI skills and training." },
  { title: "AI Research", desc: "An authoritative name for an AI lab or research institute." },
  { title: "Enterprise AI Solutions", desc: "A robust brand for B2B AI integration and software." },
  { title: "AI Consulting", desc: "A trustworthy identity for AI transformation consultants." },
  { title: "AI Communities", desc: "The meeting ground for AI enthusiasts and professionals." },
  { title: "AI News & Media", desc: "A premier destination for AI industry news and journalism." },
  { title: "AI Startup Accelerators", desc: "The launching pad for the next generation of AI founders." },
  { title: "Robotics & Automation", desc: "A solid name connecting physical robotics with AI brains." },
  { title: "Defense & Aerospace AI", desc: "A commanding presence for national security AI contractors." },
  { title: "Healthcare AI", desc: "A stable foundation for medical AI and diagnostic tools." },
  { title: "Financial AI", desc: "A secure brand for fintech, algorithmic trading, and risk AI." },
  { title: "Manufacturing AI", desc: "The industrial ground truth for factory automation AI." },
  { title: "Transportation & Mobility AI", desc: "A strong identity for autonomous vehicle and logistics tech." },
  { title: "Cybersecurity AI", desc: "A formidable brand for AI-driven threat detection systems." },
  { title: "Agriculture AI", desc: "Connecting the physical ground with precision farming AI." },
  { title: "Government AI", desc: "An authoritative domain for public sector AI initiatives." },
  { title: "Environmental AI", desc: "A perfect match for AI climate modeling and sustainability tech." }
];

export function IdealUses() {
  return (
    <section id="uses" className="py-24 relative bg-card border-y border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <Reveal>
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                Limitless <span className="text-primary">Potential</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                AIGround.com is remarkably versatile. It serves as an ideal brand foundation for nearly any vertical within the artificial intelligence ecosystem.
              </p>
            </div>
            <div className="hidden md:block">
              <div className="text-6xl font-display font-bold text-white/5">
                23+
              </div>
            </div>
          </div>
        </Reveal>

        {/* Masonry-like grid using columns */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {useCases.map((useCase, index) => (
            <Reveal key={index} delay={Math.random() * 0.3} className="break-inside-avoid">
              <div className="p-6 rounded-2xl bg-background border border-white/5 hover:border-primary/30 transition-colors group">
                <h3 className="text-lg font-semibold text-white mb-2 font-display group-hover:text-primary transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {useCase.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
