import { motion } from "framer-motion";
import { Users, Eye, Database, Cpu, Link } from "lucide-react";

const steps = [
  {
    icon: Users,
    title: "Dedicated transition support",
    description: "Expert-led support from specialists who manage each step of the transition, so advisors and firms are never left guessing.",
  },
  {
    icon: Eye,
    title: "Real-time visibility",
    description: "Clear requirements, live progress tracking, and full visibility into every stage—so nothing stalls or gets overlooked.",
  },
  {
    icon: Database,
    title: "Centralized data intake",
    description: "We collect and standardize data from custodians, vendors, and aggregators into a single, reliable source of truth.",
  },
  {
    icon: Cpu,
    title: "Automated validation",
    description: "Data is normalized and validated automatically, catching issues early before they become NIGOs.",
  },
  {
    icon: Link,
    title: "Seamless system integration",
    description: "Transitions connect directly into your existing workflows—opening and transferring accounts without manual re-entry.",
  },
];

export default function ProcessTimeline() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-16" data-testid="section-process-timeline">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-xl font-semibold mb-2">A better way to transition</h3>
          <p className="text-muted-foreground">
            A proven approach that turns complexity into clarity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 items-stretch">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="h-full"
            >
              <div
                className="w-full h-full flex flex-col text-left p-6 rounded-xl border border-border/30 relative z-10"
                style={{ backgroundColor: '#f5f5f5' }}
                data-testid={`card-step-${index}`}
              >
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mb-4">
                  <step.icon className="h-5 w-5 text-foreground/70" />
                </div>

                <h4 className="font-medium mb-2">{step.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
