import { Button } from "./ui/button";
import { Mail, MapPin, ArrowRight } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-foreground text-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Content */}
          <div>
            <span className="font-mono text-sm text-primary uppercase tracking-wider">
              4. Get in Touch
            </span>
            <h2 className="text-3xl md:text-5xl font-mono font-bold mt-4 mb-6 text-background">
              Let's Build Something Great Together
            </h2>
            <p className="text-lg text-background/70 mb-8">
              Have a project in mind? We'd love to hear about it. Get in touch and let's discuss 
              how we can help bring your ideas to life.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-background/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-mono text-sm text-background/60">Email</div>
                  <a href="mailto:contact@borgesoft.com" className="text-background hover:text-primary transition-colors">
                    contact@borgesoft.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-background/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-mono text-sm text-background/60">Location</div>
                  <span className="text-background">Brazil</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right - CTA Card */}
          <div className="bg-background/5 rounded-xl border border-background/10 p-8 md:p-10 backdrop-blur-sm">
            <h3 className="text-xl font-mono font-bold mb-4 text-background">
              Start a Conversation
            </h3>
            <p className="text-background/70 mb-8">
              Tell us about your project and we'll get back to you within 24 hours.
            </p>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-background/10 border border-background/20 text-background placeholder:text-background/40 focus:outline-none focus:border-primary transition-colors font-mono text-sm"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-lg bg-background/10 border border-background/20 text-background placeholder:text-background/40 focus:outline-none focus:border-primary transition-colors font-mono text-sm"
              />
              <textarea
                placeholder="Tell us about your project..."
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-background/10 border border-background/20 text-background placeholder:text-background/40 focus:outline-none focus:border-primary transition-colors font-mono text-sm resize-none"
              />
              <Button variant="hero" size="lg" className="w-full">
                Send Message
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
