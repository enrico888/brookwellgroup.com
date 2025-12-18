import { useState } from "react";
import { Card } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, Lightbulb, TrendingUp, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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
        { value: "2", label: "Days to Onboard" },
        { value: "95%", label: "Satisfaction" },
        { value: "60%", label: "Time Saved" },
      ],
    },
  },
];

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "It is clear that Brookwell takes pride in their work and relationships; we look forward to working with them on many future projects.",
    name: "WINNAA WRIGHT",
    title: "SVP OF OPERATIONS",
    company: "KOVACK FINANCIAL NETWORK",
  },
  {
    quote: "The advisor enablement workstream changed the adoption curve. Our RIA and broker-dealer teams were ready to deliver a premium experience from the very first call.",
    name: "MARCUS LLOYD",
    title: "SVP ADVISOR EXPERIENCE",
    company: "HARBORSTONE FINANCIAL",
  },
  {
    quote: "Their readiness analytics are next-level. We course-corrected live with executive dashboards that made our RIA board confident in every step.",
    name: "PRIYA DESAI",
    title: "COO",
    company: "ALTUM FAMILY OFFICE",
  },
];

export default function ClientStories() {
  const [activeStory, setActiveStory] = useState(stories[0].id);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const currentStory = stories.find((s) => s.id === activeStory) || stories[0];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="stories" className="py-32 px-6 md:px-12 lg:px-16 bg-muted/30" data-testid="section-client-stories">
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
            Real Results for Real Firms
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
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <h3 className="font-medium">The Results</h3>
                  </div>
                  <div className="flex justify-between gap-6">
                    {currentStory.results.metrics.map((metric, i) => (
                      <div key={i} className="flex flex-col items-center text-center flex-1">
                        <p className="text-xl font-medium tracking-tight text-foreground/90 mb-1" data-testid={`text-metric-${i}`}>
                          {metric.value}
                        </p>
                        <p className="text-[11px] text-muted-foreground/70 uppercase tracking-wider">{metric.label}</p>
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

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24"
          data-testid="testimonials-section"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground text-center mb-12">
            Client Testimonials
          </p>

          <div className="relative max-w-3xl mx-auto flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevTestimonial}
              className="flex-shrink-0"
              data-testid="button-testimonial-prev"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <div className="flex-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="text-center"
                >
                  <Quote className="h-8 w-8 mx-auto mb-6 text-muted-foreground/30" />
                  <p 
                    className="text-xl md:text-2xl font-light leading-relaxed text-foreground/90 mb-8"
                    data-testid={`testimonial-quote-${activeTestimonial}`}
                  >
                    "{testimonials[activeTestimonial].quote}"
                  </p>
                  <div>
                    <p className="text-sm font-medium tracking-wide" data-testid={`testimonial-name-${activeTestimonial}`}>
                      {testimonials[activeTestimonial].name}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {testimonials[activeTestimonial].title}, {testimonials[activeTestimonial].company}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={nextTestimonial}
              className="flex-shrink-0"
              data-testid="button-testimonial-next"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
