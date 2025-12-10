import { Button } from "./ui/button";
import { HexagonPattern } from "./HexagonPattern";
import { ArrowRight } from "lucide-react";
export const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-20">
      <HexagonPattern />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-mono text-sm text-muted-foreground">Sustainable Software from <span className="text-xl">🇧🇷</span></span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-mono font-bold leading-tight mb-6 animate-fade-in" style={{
          animationDelay: "0.1s"
        }}>
            We build{" "}
            <span className="text-gradient-lime">state-of-the-art</span>{" "}
            technology solutions
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 animate-fade-in" style={{
          animationDelay: "0.2s"
        }}>
            Applications, websites, and data visualization solutions crafted with precision. 
            Always striving for the highest quality and full satisfaction.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{
          animationDelay: "0.3s"
        }}>
            <Button variant="hero" size="xl" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View Our Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="hero-outline" size="xl" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Get in Touch
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-border animate-fade-in" style={{
          animationDelay: "0.4s"
        }}>
            {[{
            value: "6+",
            label: "Years Experience"
          }, {
            value: "4",
            label: "Major Projects"
          }, {
            value: "100%",
            label: "Client Satisfaction"
          }, {
            value: "∞",
            label: "Possibilities"
          }].map(stat => <div key={stat.label} className="text-center md:text-left">
                <div className="text-3xl md:text-4xl font-mono font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-mono">
                  {stat.label}
                </div>
              </div>)}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-muted-foreground" />
        </div>
      </div>
    </section>;
};