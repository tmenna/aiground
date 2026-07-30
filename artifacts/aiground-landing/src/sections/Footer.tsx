export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
          <div className="text-sm text-muted-foreground">
            <strong className="text-foreground">AIGround.com</strong> — Holtek Solutions LLC | Premium Digital Assets
          </div>
          
          <div className="flex gap-6 text-sm">
            <a href="#why" className="text-muted-foreground hover:text-foreground transition-colors">
              Why
            </a>
            <a href="#uses" className="text-muted-foreground hover:text-foreground transition-colors">
              Ideal For
            </a>
            <a href="#acquire" className="text-muted-foreground hover:text-foreground transition-colors">
              Acquire
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
        </div>
        
        <div className="text-sm text-muted-foreground">
          &copy; 2026 Holtek Solutions LLC. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
