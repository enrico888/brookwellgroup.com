import { motion } from "framer-motion";

export default function AITransitions() {
  return (
    <section id="transitions" className="py-32 px-6 md:px-12 lg:px-16" data-testid="section-ai-transitions">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            AI-Powered Transitions
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
            Move Books.
            <br />
            Not Mountains.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Advisor transitions are notoriously complex and stressful. Our transitions team provides white-glove service to streamline the entire process, from break planning to client signature.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
