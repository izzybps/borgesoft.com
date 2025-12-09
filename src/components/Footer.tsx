import { Logo } from "./Logo";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-foreground border-t border-background/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Logo className="text-background" size="sm" />
          
          <div className="flex items-center gap-6">
            <a href="#services" className="font-mono text-xs text-background/60 hover:text-background transition-colors">
              Services
            </a>
            <a href="#projects" className="font-mono text-xs text-background/60 hover:text-background transition-colors">
              Projects
            </a>
            <a href="#about" className="font-mono text-xs text-background/60 hover:text-background transition-colors">
              About
            </a>
            <a href="#contact" className="font-mono text-xs text-background/60 hover:text-background transition-colors">
              Contact
            </a>
          </div>

          <p className="font-mono text-xs text-background/40">
            © {currentYear} Borgesoft. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
