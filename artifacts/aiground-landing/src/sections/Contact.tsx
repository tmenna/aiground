import { Reveal } from '@/components/Reveal';
import { Mail, Phone, MapPin, Building2 } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <Reveal>
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
                Contact <span className="text-primary">Holtek Solutions LLC</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                If you are interested in acquiring AIGround.com or would like additional information, please contact us directly. 
              </p>
              
              <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20 text-foreground/80 text-sm leading-relaxed mb-10">
                Serious acquisition inquiries, partnership discussions, and qualified offers are welcome. All inquiries are handled professionally and confidentially. Additional information can be provided to qualified buyers upon request.
              </div>
            </div>
          </Reveal>

          <Reveal direction="left">
            <div className="glass-card p-8 md:p-12 rounded-3xl space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center shrink-0">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm text-muted-foreground font-medium mb-1 uppercase tracking-wider">Company</h4>
                  <div className="text-xl font-semibold text-foreground">Holtek Solutions LLC</div>
                  <div className="text-muted-foreground">Premium Digital Assets</div>
                </div>
              </div>

              <div className="w-full h-px bg-border"></div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm text-muted-foreground font-medium mb-1 uppercase tracking-wider">Address</h4>
                  <address className="text-lg text-foreground not-italic">
                    2108 N ST STE N<br />
                    Sacramento, CA 95816<br />
                    United States
                  </address>
                </div>
              </div>

              <div className="w-full h-px bg-border"></div>

              <div className="flex flex-col sm:flex-row gap-8">
                <a href="tel:+19515514528" className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm text-muted-foreground font-medium mb-1 uppercase tracking-wider">Phone</h4>
                    <div className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                      +1 (951) 551-4528
                    </div>
                  </div>
                </a>

                <a href="mailto:holly@holtekllc.com" className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm text-muted-foreground font-medium mb-1 uppercase tracking-wider">Email</h4>
                    <div className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                      holly@holtekllc.com
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
