import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    quote: "Brookwell transformed how we operate. Their AI workflows eliminated 80% of our manual reporting work, allowing our team to focus on what matters most—serving our clients.",
    author: "Sarah Chen",
    title: "Managing Partner",
    company: "Westfield Wealth Advisors",
  },
  {
    id: "2",
    quote: "The transition support from Brookwell was exceptional. They made moving our book of business seamless and kept our clients informed every step of the way.",
    author: "Michael Torres",
    title: "Senior Financial Advisor",
    company: "Pacific Investment Group",
  },
  {
    id: "3",
    quote: "We were skeptical about AI in financial services, but Brookwell proved us wrong. Their solutions are thoughtful, compliant, and genuinely improve our operations.",
    author: "Jennifer Walsh",
    title: "Chief Compliance Officer",
    company: "Harbor Securities",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-32 px-6 md:px-12 lg:px-16" data-testid="section-testimonials">
      <div className="max-w-[1280px] mx-auto">
        <div className="max-w-3xl mx-auto text-center relative">
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-[120px] leading-none font-serif text-foreground/5 select-none pointer-events-none">
            "
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="relative z-10"
            >
              <p
                className="text-xl md:text-2xl leading-relaxed mb-8"
                data-testid="text-testimonial-quote"
              >
                "{currentTestimonial.quote}"
              </p>
              <div>
                <p className="font-medium" data-testid="text-testimonial-author">
                  {currentTestimonial.author}
                </p>
                <p className="text-sm text-muted-foreground">
                  {currentTestimonial.title}, {currentTestimonial.company}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-10">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevious}
              className="rounded-full"
              data-testid="button-testimonial-prev"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-foreground" : "bg-foreground/20"
                  }`}
                  data-testid={`button-testimonial-dot-${index}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="rounded-full"
              data-testid="button-testimonial-next"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
