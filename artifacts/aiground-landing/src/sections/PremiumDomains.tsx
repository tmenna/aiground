import { Reveal } from '@/components/Reveal';
import { CheckCircle2 } from 'lucide-react';

const benefits = [
  "Builds immediate credibility and authority",
  "Increases trust with enterprise clients and partners",
  "Improves memorability for direct traffic",
  "Strengthens overall brand positioning",
  "Improves marketing effectiveness and conversion rates",
  "Helps organizations establish a strong online identity",
  "Becomes a valuable long-term brand asset"
];

export function PremiumDomains() {
  return (
    <section id="premium" className="py-24 relative bg-card/50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Reveal>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
                The Power of a <span className="text-primary">Premium .COM</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                In the hyper-competitive AI sector, trust is your most valuable currency. A premium .com domain immediately signals to customers, investors, and partners that you are an established, serious player in the industry.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <Reveal key={index} delay={index * 0.1} direction="left">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/85 text-lg">{benefit}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Reveal>
          </div>
          
          <div className="relative">
            <Reveal direction="right">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
              <div className="relative glass-card p-8 md:p-12 rounded-3xl overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative z-10">
                  <div className="text-6xl font-serif text-foreground/20 mb-6">"</div>
                  <h3 className="text-2xl md:text-3xl font-display font-medium text-foreground leading-snug mb-8">
                    Your domain name is the single most important digital asset your company owns. It is the address of your business in the modern economy.
                  </h3>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                    </div>
                    <div>
                      <div className="text-foreground font-semibold font-display">Premium Digital Asset</div>
                      <div className="text-sm text-muted-foreground">Strategic Brand Foundation</div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
