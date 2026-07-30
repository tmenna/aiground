import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const industries = [
  "AI SaaS Platforms",
  "AI Developer Tools",
  "AI Infrastructure",
  "AI Cloud Services",
  "AI Data Platforms",
  "AI Marketplaces",
  "Enterprise AI Solutions",
  "AI Research",
  "AI Education",
  "AI Consulting",
  "AI Communities",
  "AI News & Media",
  "AI Startup Accelerators",
  "Robotics & Automation",
  "Defense & Aerospace AI",
  "Healthcare AI",
  "Financial AI",
  "Cybersecurity AI",
  "Manufacturing AI",
  "Transportation & Mobility AI",
  "Agriculture AI",
  "Government AI",
  "Environmental AI"
];

function FadeInView({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}

export function IdealUses() {
  return (
    <section id="uses" className="py-24 px-6 bg-muted/30 border-y border-border">
      <div className="container mx-auto max-w-6xl">
        <FadeInView>
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Ideal For
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              AIGround.com is versatile enough to support organizations across nearly every sector of the artificial intelligence ecosystem.
            </p>
          </div>
        </FadeInView>

        <div className="flex flex-wrap gap-3">
          {industries.map((industry, index) => (
            <FadeInView key={index} delay={index * 0.02}>
              <span className="inline-block px-4 py-2 bg-card border border-border rounded-md text-sm font-medium text-foreground hover:border-primary/40 transition-colors">
                {industry}
              </span>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
