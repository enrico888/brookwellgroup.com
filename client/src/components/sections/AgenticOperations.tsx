import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Bot, Zap, RefreshCw, Shield, FileCheck, Clock } from "lucide-react";

const operations = [
  {
    icon: Bot,
    title: "Account Opening",
    description: "Automated new account processing with intelligent document verification and compliance checks.",
  },
  {
    icon: Zap,
    title: "Advisor Transitions",
    description: "Seamless book transfers with AI-powered data migration and client communication workflows.",
  },
  {
    icon: RefreshCw,
    title: "Cashiering",
    description: "Intelligent cash movement automation with real-time reconciliation and exception handling.",
  },
  {
    icon: FileCheck,
    title: "Cheque Blotters",
    description: "Automated cheque processing with AI-driven fraud detection and regulatory compliance.",
  },
  {
    icon: Clock,
    title: "Client Onboarding",
    description: "Streamlined onboarding workflows with intelligent document collection and verification.",
  },
  {
    icon: Shield,
    title: "Compliance Monitoring",
    description: "Proactive compliance surveillance with AI-powered risk assessment and alerting.",
  },
];

export default function AgenticOperations() {
  return (
    <section id="agentic-operations" className="py-32 px-6 md:px-12 lg:px-16" data-testid="section-agentic-operations">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Agentic Operations
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            AI-Powered Workflows
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Our intelligent agents automate complex operational tasks, reducing manual effort and eliminating errors.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {operations.map((operation, index) => (
            <motion.div
              key={operation.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full" data-testid={`card-operation-${operation.title.toLowerCase().replace(/\s+/g, '-')}`}>
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center mb-4">
                  <operation.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{operation.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {operation.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
