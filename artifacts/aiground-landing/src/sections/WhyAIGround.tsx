import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const reasons = [
  {
    title: "Premium .COM",
    description: "The world's most trusted and recognized domain extension."
  },
  {
    title: "Short & Memorable",
    description: "Easy to pronounce, spell, and type from memory."
  },
  {
    title: "Highly Brandable",
    description: "Flexible identity that works across the entire AI industry."
  },
  {
    title: "Built for the AI Era",
    description: "A name designed for companies shaping the future of intelligence."
  },
  {
    title: "Globally Recognizable",
    description: "Suitable for international organizations and global brands."
  },
  {
    title: "Versatile Across AI Industries",
    description: "Works for startups, enterprises, research labs, and everything in between."
  }
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

export function WhyAIGround() {
  return (
    <section id="why" className="py-24 px-6 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <FadeInView>
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Why Choose AIGround.com
            </h2>
          </div>
        </FadeInView>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {reasons.map((reason, index) => (
            <FadeInView key={index} delay={index * 0.05}>
              <div className="border-l-2 border-primary pl-5">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
