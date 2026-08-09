import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

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

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-muted/30 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <FadeInView>
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Contact Holtek Solutions LLC
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-8">
                Serious acquisition inquiries and qualified offers are welcome.
              </p>
            </div>
          </FadeInView>

          <FadeInView delay={0.1}>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-sm text-muted-foreground font-medium mb-1">Address</div>
                  <address className="text-base text-foreground not-italic">
                    2108 N ST STE N<br />
                    Sacramento, CA 95816<br />
                    USA
                  </address>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-sm text-muted-foreground font-medium mb-1">Phone</div>
                  <a 
                    href="tel:+19515514528" 
                    className="text-base text-foreground hover:text-primary transition-colors"
                    aria-label="Call +1 (951) 551-4528"
                  >
                    +1 (951) 551-4528
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-sm text-muted-foreground font-medium mb-1">Email</div>
                  <a 
                    href="mailto:holly@holtekllc.com" 
                    className="block text-base text-foreground hover:text-primary transition-colors"
                    aria-label="Email holly@holtekllc.com"
                  >
                    holly@holtekllc.com
                  </a>
                  <a 
                    href="mailto:holly@holteksolutions.com" 
                    className="block text-base text-foreground hover:text-primary transition-colors mt-1"
                    aria-label="Email holly@holteksolutions.com"
                  >
                    holly@holteksolutions.com
                  </a>
                </div>
              </div>
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
