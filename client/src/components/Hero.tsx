import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";

const rotatingWords = [
  "Account Opening",
  "Advisor Transitions",
  "Cashiering Indexing",
  "Check Blotters",
  "Data Aggregation",
];

interface HeroProps {
  onGetStarted?: () => void;
  onLearnMore?: () => void;
}

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

function RotatingWord() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) {
    return <span>workflows</span>;
  }

  return (
    <span className="inline-block relative">
      <span className="invisible">Cashiering Indexing</span>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center whitespace-nowrap"
          style={{
            background: "linear-gradient(90deg, #2A34E5 0%, #8B5CF6 25%, #EC4899 50%, #F43F5E 75%, #F97316 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
          data-testid="text-rotating-word"
        >
          {rotatingWords[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function Hero({ onGetStarted, onLearnMore }: HeroProps) {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-12 lg:px-16 overflow-hidden"
      data-testid="section-hero"
    >
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0 }}
          className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6"
          data-testid="text-hero-eyebrow"
        >
          AI-Powered Financial Consulting
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.15] mb-6 flex flex-col items-center justify-center gap-1"
          data-testid="text-hero-headline"
        >
          <span>Agentic</span>
          <RotatingWord />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg text-muted-foreground max-w-md mx-auto mb-10 leading-relaxed"
          data-testid="text-hero-subheadline"
        >
          We help financial services firms harness AI to automate complex
          processes and navigate advisor transitions with confidence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            variant="ghost"
            onClick={onLearnMore}
            className="text-muted-foreground hover:text-foreground"
            data-testid="button-hero-learn-more"
          >
            Learn More
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-6 w-6 text-muted-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
