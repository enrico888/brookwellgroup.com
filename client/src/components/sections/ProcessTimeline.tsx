import { motion } from "framer-motion";
import { Search, ClipboardList, Play, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Analysis",
    description: "We analyze your current systems, data structures, and client portfolio to create a comprehensive transition plan.",
  },
  {
    icon: ClipboardList,
    title: "Planning",
    description: "AI generates detailed migration scripts, client communication templates, and timeline milestones.",
  },
  {
    icon: Play,
    title: "Execution",
    description: "Automated data migration with real-time monitoring, exception handling, and progress tracking.",
  },
  {
    icon: CheckCircle2,
    title: "Validation",
    description: "Comprehensive quality assurance checks ensure data integrity and account accuracy post-transition.",
  },
];

export default function ProcessTimeline() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-16 bg-muted/30" data-testid="section-process-timeline">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-xl font-semibold mb-2">How we make it better</h3>
          <p className="text-muted-foreground">
            Our proven four-step process transforms complex transitions into smooth operations.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute top-16 left-[calc(12.5%+20px)] right-[calc(12.5%+20px)] h-px bg-border" />

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative text-center"
              >
                <div className="relative z-10 w-12 h-12 rounded-full bg-background border flex items-center justify-center mx-auto mb-6">
                  <step.icon className="h-5 w-5" />
                </div>

                <h4 className="font-medium mb-2">{step.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
