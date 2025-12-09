import { Code, BarChart3, Globe, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Code,
    title: "Applications",
    description: "Custom software solutions tailored to your business needs. From mobile apps to enterprise systems.",
    color: "text-teal",
  },
  {
    icon: Globe,
    title: "Websites",
    description: "Modern, responsive web experiences that captivate users and drive results.",
    color: "text-primary",
  },
  {
    icon: BarChart3,
    title: "Data Visualization",
    description: "Transform complex data into clear, actionable insights through interactive dashboards and reports.",
    color: "text-teal",
  },
  {
    icon: Cpu,
    title: "LLM Solutions",
    description: "AI-powered applications leveraging large language models for intelligent automation.",
    color: "text-primary",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="font-mono text-sm text-teal uppercase tracking-wider">
            1. What We Do
          </span>
          <h2 className="text-3xl md:text-5xl font-mono font-bold mt-4 mb-6">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground">
            We deliver comprehensive technology solutions that help businesses thrive in the digital age.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-8 rounded-lg bg-background border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={cn(
                "w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-6 transition-transform group-hover:scale-110",
                service.color
              )}>
                <service.icon className="w-6 h-6" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-mono font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground">
                {service.description}
              </p>

              {/* Hover accent */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-lime scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-b-lg" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
