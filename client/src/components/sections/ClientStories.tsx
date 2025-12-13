import { useState } from "react";
import { Card } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, Lightbulb, TrendingUp } from "lucide-react";

interface Story {
  id: string;
  company: string;
  title: string;
  problem: {
    headline: string;
    description: string;
  };
  solution: {
    headline: string;
    description: string;
  };
  results: {
    metrics: { value: string; label: string }[];
    quote?: string;
  };
}

const stories: Story[] = [
  {
    id: "ria-firm",
    company: "Regional RIA",
    title: "Manual client reporting consumed 40+ hours weekly",
    problem: {
      headline: "The Challenge",
      description: "A growing RIA firm was spending 40+ hours weekly on manual client reporting, leading to delays and errors that frustrated both advisors and clients.",
    },
    solution: {
      headline: "Our Approach",
      description: "We implemented an AI-powered reporting workflow that automatically aggregated data from multiple custodians and generated personalized client reports.",
    },
    results: {
      metrics: [
        { value: "85%", label: "Time Saved" },
        { value: "99.9%", label: "Accuracy Rate" },
        { value: "3x", label: "Client Growth" },
      ],
      quote: "Brookwell transformed our operations. What took days now takes minutes.",
    },
  },
  {
    id: "broker-dealer",
    company: "Mid-Size Broker-Dealer",
    title: "Compliance reviews creating bottlenecks",
    problem: {
      headline: "The Challenge",
      description: "Compliance reviews were creating significant bottlenecks, with each trade requiring manual oversight and documentation.",
    },
    solution: {
      headline: "Our Approach",
      description: "We deployed intelligent compliance workflows that pre-screened trades against regulations and automatically flagged only high-risk transactions for human review.",
    },
    results: {
      metrics: [
        { value: "70%", label: "Faster Reviews" },
        { value: "50%", label: "Cost Reduction" },
        { value: "Zero", label: "Violations" },
      ],
    },
  },
  {
    id: "wealth-manager",
    company: "Private Wealth Manager",
    title: "Client onboarding taking weeks",
    problem: {
      headline: "The Challenge",
      description: "Client onboarding was taking 2-3 weeks due to scattered paperwork and manual data entry across multiple systems.",
    },
    solution: {
      headline: "Our Approach",
      description: "We created a unified AI-driven onboarding workflow that automated document collection, verification, and system population.",
    },
    results: {
      metrics: [
        { value: "2 Days", label: "Onboarding" },
        { value: "95%", label: "Satisfaction" },
        { value: "60%", label: "Time Saved" },
      ],
    },
  },
];

export default function ClientStories() {
  const [activeStory, setActiveStory] = useState(stories[0].id);
  const currentStory = stories.find((s) => s.id === activeStory) || stories[0];

  return (
    <section id="stories" className="py-32 px-6 md:px-12 lg:px-16" data-testid="section-client-stories">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Client Stories
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            Real results for real firms
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            See how we've helped financial services firms transform their operations with AI-powered workflows.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-4 mb-8">
          {stories.map((story) => (
            <button
              key={story.id}
              onClick={() => setActiveStory(story.id)}
              className={`text-left p-6 rounded-xl transition-all duration-200 ${
                activeStory === story.id
                  ? "bg-foreground text-background"
                  : "bg-muted hover-elevate"
              }`}
              data-testid={`button-story-${story.id}`}
            >
              <p className="text-xs uppercase tracking-wide opacity-70 mb-2">
                {story.company}
              </p>
              <p className="text-sm font-medium leading-snug">{story.title}</p>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentStory.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-10">
                <div className="flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <h3 className="font-medium">{currentStory.problem.headline}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                    {currentStory.problem.description}
                  </p>
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                      <Lightbulb className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <h3 className="font-medium">{currentStory.solution.headline}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                    {currentStory.solution.description}
                  </p>
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <h3 className="font-medium">The Results</h3>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {currentStory.results.metrics.map((metric, i) => (
                      <div key={i} className="text-center">
                        <p className="text-2xl font-semibold tracking-tight" data-testid={`text-metric-${i}`}>
                          {metric.value}
                        </p>
                        <p className="text-xs text-muted-foreground">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {currentStory.results.quote && (
                <div className="mt-8 pt-8 border-t">
                  <p className="text-lg italic text-muted-foreground">
                    "{currentStory.results.quote}"
                  </p>
                </div>
              )}
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
