import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Why', href: '#why' },
    { label: 'Ideal For', href: '#uses' },
    { label: 'Acquire', href: '#acquire' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          isScrolled ? 'nav-blur border-b border-border' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex items-center justify-between h-16">
            <a 
              href="#" 
              className="font-semibold text-lg text-foreground hover:text-primary transition-colors"
              aria-label="AIGround.com home"
            >
              AIGround.com
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a 
                  key={link.label}
                  href={link.href} 
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a 
                href="mailto:holly@holtekllc.com"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-semibold px-5 py-2 rounded-md transition-colors"
                aria-label="Make an offer via email"
              >
                Make an Offer
              </a>
            </nav>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-foreground p-2 -mr-2"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={20} />
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
            className="fixed inset-0 z-[60] bg-background md:hidden"
          >
            <div className="flex flex-col h-full p-6">
              <div className="flex justify-between items-center mb-12">
                <span className="font-semibold text-lg text-foreground">
                  AIGround.com
                </span>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-foreground p-2 -mr-2"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a 
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-3"
                  >
                    {link.label}
                  </a>
                ))}
                <a 
                  href="mailto:holly@holtekllc.com"
                  className="mt-6 bg-primary text-primary-foreground text-base font-semibold px-5 py-3 rounded-md text-center"
                  aria-label="Make an offer via email"
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
