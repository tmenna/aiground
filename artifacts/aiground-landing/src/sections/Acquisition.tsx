import { Reveal } from '@/components/Reveal';
import { Lock, ArrowRight } from 'lucide-react';

export function Acquisition() {
  return (
    <section id="acquire" className="py-32 relative border-y border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsla(217,100%,60%,0.08)_0%,transparent_60%)]"></div>
      
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <Reveal>
          <div className="glass-card rounded-[2.5rem] p-8 md:p-16 text-center border-primary/20 shadow-[0_0_80px_hsla(217,100%,60%,0.15)] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            
            <h2 className="text-2xl md:text-3xl text-muted-foreground font-medium mb-4">
              Available for Acquisition
            </h2>
            
            <div className="text-5xl md:text-7xl font-mono font-bold text-white mb-8 break-words text-glow">
              AIGround.com
            </div>
            
            <div className="inline-block bg-white/5 border border-white/10 rounded-2xl px-8 py-4 mb-10">
              <div className="text-sm text-muted-foreground uppercase tracking-widest mb-1">Asking Price</div>
              <div className="text-3xl md:text-5xl font-display font-bold text-white">
                $100,000 <span className="text-xl text-muted-foreground font-normal">USD</span>
              </div>
            </div>
            
            <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
              Serious inquiries and qualified offers are welcome. Acquire this category-defining brand identity today.
            </p>
            
            <a 
              href="mailto:holly@holtekllc.com"
              className="inline-flex items-center justify-center gap-3 bg-white text-black hover:bg-white/90 text-xl font-bold px-10 py-5 rounded-full transition-all hover:scale-105"
            >
              Make an Offer
              <ArrowRight className="w-6 h-6" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-12 flex items-center justify-center gap-4 text-muted-foreground">
            <Lock className="w-5 h-5 text-green-400" />
            <p className="text-sm md:text-base">
              <strong>Secure Transaction:</strong> All transactions are completed through a mutually agreed reputable escrow service, ensuring a secure and professional acquisition process for both buyer and seller.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
