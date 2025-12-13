import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ClipboardList, Play, CheckCircle2, ChevronDown } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Analysis",
    description: "We analyze your current systems, data structures, and client portfolio to create a comprehensive transition plan.",
    expandedContent: [
      "Deep dive into existing technology stack and data sources",
      "Client segmentation and priority assessment",
      "Risk identification and mitigation planning",
      "Timeline and resource requirement estimation",
    ],
  },
  {
    icon: ClipboardList,
    title: "Planning",
    description: "AI generates detailed migration scripts, client communication templates, and timeline milestones.",
    expandedContent: [
      "Automated migration script generation",
      "Custom client communication workflows",
      "Milestone tracking and approval gates",
      "Contingency planning for edge cases",
    ],
  },
  {
    icon: Play,
    title: "Execution",
    description: "Automated data migration with real-time monitoring, exception handling, and progress tracking.",
    expandedContent: [
      "Parallel processing for faster migrations",
      "Real-time validation and error detection",
      "Automated exception handling and escalation",
      "Live dashboard for stakeholder visibility",
    ],
  },
  {
    icon: CheckCircle2,
    title: "Validation",
    description: "Comprehensive quality assurance checks ensure data integrity and account accuracy post-transition.",
    expandedContent: [
      "Automated reconciliation across all accounts",
      "Data integrity verification reports",
      "Client-facing confirmation workflows",
      "Post-transition support and monitoring",
    ],
  },
];

function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return prefersReducedMotion;
}

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const toggleStep = (index: number) => {
    setActiveStep(activeStep === index ? null : index);
  };

  return (
    <section className="py-20 px-6 md:px-12 lg:px-16 bg-muted/30" data-testid="section-process-timeline">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-xl font-semibold mb-2">How We Make It Better</h3>
          <p className="text-muted-foreground">
            Our proven four-step process transforms complex transitions into smooth operations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, index) => {
            const isExpanded = activeStep === index;
            
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <button
                  onClick={() => toggleStep(index)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggleStep(index);
                    }
                  }}
                  aria-expanded={isExpanded}
                  aria-controls={`step-content-${index}`}
                  className={`w-full text-left p-6 rounded-xl transition-all duration-200 border ${
                    isExpanded
                      ? "bg-background border-border shadow-sm"
                      : "bg-background/50 border-transparent hover:bg-background hover:border-border/50"
                  }`}
                  data-testid={`button-step-${index}`}
                >
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                      <step.icon className="h-5 w-5 text-foreground/70" />
                    </div>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
                      className="mt-2"
                    >
                      <ChevronDown className="h-4 w-4 text-muted-foreground" />
                    </motion.div>
                  </div>

                  <h4 className="font-medium mb-2">{step.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        id={`step-content-${index}`}
                        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, height: 0 }}
                        animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, height: "auto" }}
                        exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 pt-4 border-t border-border/50">
                          <ul className="space-y-2">
                            {step.expandedContent.map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <span className="w-1 h-1 rounded-full bg-foreground/30 mt-2 flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
