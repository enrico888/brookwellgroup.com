import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { FileWarning, Clock, Users } from "lucide-react";

const painPoints = [
  {
    icon: FileWarning,
    title: "Fragmented data",
    description: "Client information lives across systems, custodians, and platforms—creating inconsistencies, errors, and unnecessary rework during transitions.",
  },
  {
    icon: Users,
    title: "Limited advisor visibility",
    description: "Post-break compliance restrictions limit direct interaction with advisors, creating delays and blind spots at the most critical stage of the transition.",
  },
  {
    icon: Clock,
    title: "Manual, time-intensive work",
    description: "Data mapping, paperwork, and coordination are handled manually—stretching transitions from days into weeks.",
  },
];

export default function PainPoints() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-16 bg-muted/30" data-testid="section-pain-points">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-xl font-semibold mb-2">The pain points</h3>
          <p className="text-muted-foreground">
            The most common sources of friction for firms.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {painPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="p-6 h-full flex flex-col relative z-10" style={{ backgroundColor: '#ffffff' }} data-testid={`card-pain-${index}`}>
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center mb-5 flex-shrink-0">
                  <point.icon className="h-5 w-5 text-muted-foreground" />
                </div>
                <h4 className="font-medium mb-3 min-h-[48px] flex items-start">{point.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                  {point.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
