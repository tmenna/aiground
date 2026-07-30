import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Why AI Ground', href: '#why' },
    { label: 'Ideal Uses', href: '#uses' },
    { label: 'Brand Concepts', href: '#concepts' },
    { label: 'Why Premium Domains', href: '#premium' },
    { label: 'Acquire', href: '#acquire' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glass-nav py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center gap-2 group">
              <span className="font-display font-bold text-2xl tracking-tighter text-foreground group-hover:text-primary transition-colors">
                AI<span className="text-primary">Ground</span>.com
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              <ul className="flex items-center gap-8">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href} 
                      className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <a 
                href="mailto:holly@holtekllc.com"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-semibold px-6 py-2.5 rounded-full transition-all shadow-[0_0_20px_hsla(217,100%,60%,0.3)] hover:shadow-[0_0_30px_hsla(217,100%,60%,0.5)]"
              >
                Make an Offer
              </a>
            </nav>

            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden text-foreground p-2"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col h-full p-6">
              <div className="flex justify-between items-center mb-12">
                <span className="font-display font-bold text-2xl tracking-tighter text-foreground">
                  AI<span className="text-primary">Ground</span>.com
                </span>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-foreground p-2"
                  aria-label="Close Menu"
                >
                  <X size={24} />
                </button>
              </div>
              <nav className="flex flex-col gap-6 text-center">
                {navLinks.map((link) => (
                  <a 
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-xl font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <a 
                  href="mailto:holly@holtekllc.com"
                  className="mt-8 bg-primary text-primary-foreground text-lg font-semibold px-8 py-4 rounded-full"
                >
                  Make an Offer
                </a>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
