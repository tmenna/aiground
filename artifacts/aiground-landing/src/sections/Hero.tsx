import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center px-6 pt-16">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="font-mono text-5xl md:text-7xl font-bold text-foreground mb-8 tracking-tight">
            AIGround.com
          </h1>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-5xl font-semibold text-foreground mb-6 leading-tight"
        >
          Own One of the Internet's Premier AI Brands
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          AIGround.com is a premium .com domain built for the next generation of artificial intelligence. Short, memorable, and highly brandable, it provides an exceptional foundation for companies building innovative AI products and services.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a 
            href="mailto:holly@holtekllc.com,holly@holteksolutions.com"
            className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground text-base font-semibold px-8 py-3 rounded-md transition-colors"
            aria-label="Make an offer via email"
          >
            Make an Offer
          </a>
          <a 
            href="#contact"
            className="w-full sm:w-auto bg-secondary hover:bg-muted text-secondary-foreground text-base font-semibold px-8 py-3 rounded-md transition-colors"
            aria-label="Contact us"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
