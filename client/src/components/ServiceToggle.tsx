import { Card } from "@/components/ui/card";
import { ArrowRight, Workflow, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceToggleProps {
  onSelectService?: (service: "workflows" | "transitions") => void;
}

export default function ServiceToggle({ onSelectService }: ServiceToggleProps) {
  const services = [
    {
      id: "workflows" as const,
      icon: Workflow,
      title: "AI Workflows",
      description: "Automate complex processes and amplify your team's capabilities with intelligent automation.",
      href: "#workflows",
    },
    {
      id: "transitions" as const,
      icon: RefreshCw,
      title: "AI Transitions",
      description: "Navigate advisor transitions seamlessly with AI-powered planning and execution.",
      href: "#transitions",
    },
  ];

  const handleClick = (service: typeof services[0]) => {
    onSelectService?.(service.id);
    const element = document.querySelector(service.href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 px-6 md:px-12 lg:px-16" data-testid="section-service-toggle">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className="group p-8 cursor-pointer hover-elevate active-elevate-2 transition-all duration-300"
                onClick={() => handleClick(service)}
                data-testid={`card-service-${service.id}`}
              >
                <div className="flex flex-col h-full">
                  <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-6">
                    <service.icon className="h-6 w-6 text-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3" data-testid={`text-service-title-${service.id}`}>
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>
                  <div className="flex items-center text-sm font-medium text-foreground">
                    <span>Learn more</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
