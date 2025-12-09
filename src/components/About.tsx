import { HexagonPattern } from "./HexagonPattern";

export const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-card relative overflow-hidden">
      <HexagonPattern className="opacity-50" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="font-mono text-sm text-teal uppercase tracking-wider">
              3. Who We Are
            </span>
            <h2 className="text-3xl md:text-5xl font-mono font-bold mt-4 mb-6">
              About Borgesoft
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              We are Borgesoft, a software company based in Brazil that delivers state-of-the-art 
              technology solutions to our clients, always striving for the highest quality and full 
              satisfaction with our projects.
            </p>
            <p className="text-muted-foreground mb-8">
              Our expertise spans across web applications, data visualization, GIS systems, and 
              AI-powered solutions. We've made significant impact in fields such as ESG, healthcare, 
              and environmental monitoring, especially during challenging times like the pandemic.
            </p>

            {/* Skills */}
            <div className="grid grid-cols-2 gap-4">
              {[
                "Web Development",
                "Data Visualization",
                "GIS Systems",
                "LLM Applications",
                "Healthcare Tech",
                "ESG Solutions",
              ].map((skill) => (
                <div key={skill} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="font-mono text-sm">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Founder Card */}
          <div className="bg-background rounded-xl border border-border p-8 md:p-10 shadow-card">
            <div className="w-20 h-20 rounded-full bg-gradient-lime flex items-center justify-center mb-6">
              <span className="font-mono text-2xl font-bold text-primary-foreground">IB</span>
            </div>
            
            <span className="font-mono text-xs text-teal uppercase tracking-wider">
              Lead Software Engineer
            </span>
            <h3 className="text-2xl font-mono font-bold mt-2 mb-4">
              Isaque Borges
            </h3>
            
            <p className="text-muted-foreground mb-6">
              Lead Software Engineer with over 6 years of experience. Took part in diverse 
              areas including LLM powered applications, web app development, digital process 
              transformation and Geographic Information Systems (GIS).
            </p>
            
            <p className="text-muted-foreground">
              Making an impact in fields such as ESG and healthcare, especially during the 
              pandemic, with a focus on delivering meaningful solutions that matter.
            </p>

            {/* Experience highlights */}
            <div className="mt-8 pt-6 border-t border-border grid grid-cols-2 gap-4">
              <div>
                <div className="text-2xl font-mono font-bold text-foreground">6+</div>
                <div className="text-xs font-mono text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-mono font-bold text-foreground">4+</div>
                <div className="text-xs font-mono text-muted-foreground">Specializations</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
