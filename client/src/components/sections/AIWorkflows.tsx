import { motion } from "framer-motion";

export default function AIWorkflows() {
  return (
    <section id="workflows" className="py-32 px-6 md:px-12 lg:px-16" data-testid="section-ai-workflows">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Agentic Operations
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
            Turn complexity into clarity.
            <br />
            Automatically.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Our AI-powered solutions transform manual, time-consuming processes into integrated,
            automated systems that scale with your business. From client reporting to compliance
            monitoring, we help you work smarter, not harder.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
