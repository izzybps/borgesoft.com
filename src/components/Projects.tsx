import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    name: "IPS Amazônia",
    category: "Environmental Data Platform",
    description: "Data visualization platform for environmental and social indicators in the Amazon region.",
    tags: ["DataViz", "GIS", "ESG"],
    color: "from-teal/20 to-primary/20",
  },
  {
    name: "IPS Brazil",
    category: "Social Progress Index",
    description: "Interactive dashboard tracking social progress metrics across Brazilian municipalities.",
    tags: ["Dashboard", "Analytics", "React"],
    color: "from-primary/20 to-teal/20",
  },
  {
    name: "SteelMol",
    category: "Industrial Application",
    description: "Specialized software solution for the steel industry, optimizing processes and data management.",
    tags: ["Enterprise", "Industry", "Automation"],
    color: "from-teal/20 to-primary/20",
  },
  {
    name: "Silvable",
    category: "Sustainability Platform",
    description: "Platform connecting forestry data with sustainability metrics for better environmental decisions.",
    tags: ["Sustainability", "Platform", "Web App"],
    color: "from-primary/20 to-teal/20",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="font-mono text-sm text-teal uppercase tracking-wider">
            2. Our Work
          </span>
          <h2 className="text-3xl md:text-5xl font-mono font-bold mt-4 mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground">
            A selection of our recent work delivering impactful solutions across various industries.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className="group relative overflow-hidden rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-500"
            >
              {/* Gradient Background */}
              <div className={cn(
                "h-48 md:h-56 bg-gradient-to-br",
                project.color,
                "flex items-center justify-center relative overflow-hidden"
              )}>
                {/* Decorative hexagon */}
                <svg
                  className="absolute opacity-30 w-32 h-32 text-foreground group-hover:scale-110 transition-transform duration-500"
                  viewBox="0 0 200 230"
                  fill="none"
                >
                  <path
                    d="M100 10L185 55V145L100 190L15 145V55L100 10Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
                <span className="font-mono text-4xl font-bold text-foreground/20 group-hover:text-foreground/30 transition-colors">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="font-mono text-xs text-teal uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-xl md:text-2xl font-mono font-bold mt-1">
                      {project.name}
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
                    <ArrowUpRight className="w-4 h-4 group-hover:text-primary-foreground transition-colors" />
                  </div>
                </div>

                <p className="text-muted-foreground mb-6">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-muted text-xs font-mono text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
