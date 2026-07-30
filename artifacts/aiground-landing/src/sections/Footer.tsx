export function Footer() {
  const currentYear = new Date().getFullYear();
  // Fixed year to match the brief requirement if needed, but dynamic is better.
  // The brief states "© 2026 Holtek Solutions LLC" - let's stick to the brief strictly.
  
  return (
    <footer className="border-t border-white/10 bg-background pt-16 pb-8">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <div className="font-display font-bold text-2xl tracking-tighter text-white mb-4">
              AI<span className="text-primary">Ground</span>.com
            </div>
            <p className="text-muted-foreground max-w-md">
              A premium .com domain built for the next generation of artificial intelligence.
            </p>
          </div>
          
          <div className="md:text-right text-muted-foreground">
            <div className="font-semibold text-white mb-2">Holtek Solutions LLC | Premium Digital Assets</div>
            <div>2108 N ST STE N, Sacramento, CA 95816, USA</div>
            <div className="mt-2">
              Phone: <a href="tel:+19515514528" className="hover:text-white transition-colors">+1 (951) 551-4528</a> | 
              Email: <a href="mailto:holly@holtekllc.com" className="hover:text-white transition-colors ml-1">holly@holtekllc.com</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div>
            &copy; 2026 Holtek Solutions LLC. All Rights Reserved.
          </div>
          <div className="flex gap-6">
            <a href="#why" className="hover:text-white transition-colors">Why AI Ground</a>
            <a href="#uses" className="hover:text-white transition-colors">Ideal Uses</a>
            <a href="#acquire" className="hover:text-white transition-colors">Acquire</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
