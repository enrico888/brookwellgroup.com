import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Card } from "@/components/ui/card";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

function AnimatedCounter({ end, suffix = "", duration = 2 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function TransitionResults() {
  const metrics = [
    { value: 75, suffix: "%", label: "Faster Transitions" },
    { value: 99, suffix: "%", label: "Data Accuracy" },
    { value: 95, suffix: "%", label: "Client Retention" },
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-16" data-testid="section-transition-results">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
            The Result: Transitions That Work
          </h3>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Our AI-powered approach delivers measurable improvements across every aspect of the transition process.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-8 text-center" data-testid={`card-result-${index}`}>
                <p className="text-4xl md:text-5xl font-semibold tracking-tight mb-2">
                  <AnimatedCounter end={metric.value} suffix={metric.suffix} />
                </p>
                <p className="text-sm text-muted-foreground">{metric.label}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
