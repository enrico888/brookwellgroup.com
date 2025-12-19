import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { FileWarning, Clock, Users } from "lucide-react";

const painPoints = [
  {
    icon: FileWarning,
    title: "Data Fragmentation",
    description: "Client data scattered across multiple systems, custodians, and platforms makes transitions chaotic and error-prone.",
  },
  {
    icon: Users,
    title: "Restricted Interaction",
    description: "Compliance rules prevent firms from working directly with advisors post-break, leading to delays and operational blind spots.",
  },
  {
    icon: Clock,
    title: "Time-Consuming Processes",
    description: "Manual data mapping, paperwork, and coordination consume weeks of valuable time and resources.",
  },
];

export default function PainPoints() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-16" data-testid="section-pain-points">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-xl font-semibold mb-2">The Pain Points</h3>
          <p className="text-muted-foreground">
            Transitions are difficult. Here's what firms typically struggle with.
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
              <Card className="p-6 h-full flex flex-col" data-testid={`card-pain-${index}`}>
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
