import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Lock } from 'lucide-react';

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

export function Acquisition() {
  return (
    <section id="acquire" className="py-24 px-6 border-t border-border">
      <div className="container mx-auto max-w-4xl">
        <FadeInView>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-12">
              Available for Acquisition
            </h2>
            
            <div className="mb-8">
              <div className="font-mono text-4xl md:text-6xl font-bold text-foreground mb-8">
                AIGround.com
              </div>
              
              <div className="inline-block mb-6">
                <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider mb-2">
                  Asking Price
                </div>
                <div className="text-4xl md:text-5xl font-bold text-primary">
                  $100,000 <span className="text-xl text-muted-foreground font-normal">USD</span>
                </div>
              </div>
            </div>
            
            <p className="text-base text-muted-foreground mb-8 max-w-2xl mx-auto">
              Serious inquiries and qualified offers are welcome.
            </p>
            
            <a 
              href="mailto:holly@holtekllc.com"
              className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground text-base font-semibold px-8 py-3 rounded-md transition-colors mb-12"
              aria-label="Make an offer via email"
            >
              Make an Offer
            </a>

            <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground pt-8 border-t border-border max-w-2xl mx-auto">
              <Lock className="w-4 h-4 flex-shrink-0" />
              <p className="text-left">
                <strong className="text-foreground">Secure Transaction:</strong> Acquisition completed through a mutually agreed reputable escrow service to ensure a secure transaction for both buyer and seller.
              </p>
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
