import { useState } from "react";
import { Card } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, Lightbulb, TrendingUp, Quote } from "lucide-react";

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
    id: "broker-dealer-ao",
    company: "Account Opening",
    title: "Manual process prone to errors",
    problem: {
      headline: "The Challenge",
      description: "Manual account opening relied on PDFs, handwritten forms, and fragile APIs. Each breakdown created delays, NIGOs, and a growing backlog across the organization.",
    },
    solution: {
      headline: "Our Approach",
      description: "We rebuilt the workflow end to end — extracting structured data from PDFs and handwriting, repairing broken integrations, and fully automating account creation in M&O.",
    },
    results: {
      metrics: [
        { value: "70%", label: "Faster Account Opening" },
        { value: "75%", label: "Fewer NIGOs" },
        { value: "100%", label: "SLA Compliance" },
      ],
    },
  },
  {
    id: "data-centralization",
    company: "Sync Client Data",
    title: "Client data scattered across disconnected systems",
    problem: {
      headline: "The Challenge",
      description: "Client data drifted out of sync across systems, with no single source of truth. Teams couldn't reliably tell which accounts were active, or who was enrolled in e-delivery—resulting in confusion, wasted mailings, and unnecessary costs.",
    },
    solution: {
      headline: "Our Approach",
      description: "We automated change-of-address processing, synchronized updates across systems in real time, and built dashboards that gave teams a single, authoritative view of client data.",
    },
    results: {
      metrics: [
        { value: "100%", label: "Data Synchronization" },
        { value: "Real-time", label: "Visibility" },
        { value: "40%", label: "Reduction in Mail Costs" },
      ],
    },
  },
  {
    id: "check-blotters",
    company: "Check Blotters",
    title: "Manual check blotter putting SLAs at risk",
    problem: {
      headline: "The Challenge",
      description: "Missed SLAs created ongoing compliance risk. Advisors needed to supply missing check data within tight deadlines, but manual outreach and follow-ups made it difficult to respond in time.",
    },
    solution: {
      headline: "Our Approach",
      description: "We automated advisor notifications, pre-filled systems with available check data, and orchestrated the entire process so nothing fell through the cracks.",
    },
    results: {
      metrics: [
        { value: "100%", label: "SLA Compliance" },
        { value: "80%", label: "Time Savings" },
        { value: "Zero", label: "Manual Data Entry" },
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
  const currentStory = stories.find((s) => s.id === activeStory) || stories[0];

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
            Real results for real firms
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            See how we've helped financial services firms transform their operations.
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
            <Card className="p-8 md:p-12 relative z-10" style={{ backgroundColor: '#ffffff' }}>
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
                    <h3 className="font-medium">The results</h3>
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

        {/* Testimonial Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 max-w-3xl mx-auto text-center"
          data-testid="testimonials-section"
        >
          <Quote className="h-8 w-8 mx-auto mb-6 text-muted-foreground/30" />
          <p 
            className="text-xl md:text-2xl font-light leading-relaxed text-foreground/90 mb-8"
            data-testid="testimonial-quote"
          >
            "{testimonials[0].quote}"
          </p>
          <div>
            <p className="text-sm font-medium tracking-wide" data-testid="testimonial-name">
              {testimonials[0].name}
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              {testimonials[0].title}, {testimonials[0].company}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
