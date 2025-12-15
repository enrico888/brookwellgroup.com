import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Building2, Briefcase, Users, TrendingUp } from "lucide-react";

const riaFeatures = [
  "Automated portfolio rebalancing and trade execution",
  "Intelligent client reporting and performance analytics",
  "Streamlined client onboarding and document management",
  "Proactive compliance monitoring and risk assessment",
];

const bdFeatures = [
  "AI-powered trade surveillance and compliance automation",
  "Intelligent supervision workflows and exception handling",
  "Automated regulatory reporting and filing preparation",
  "Rep transition support and book movement tracking",
];

interface AudienceCardProps {
  icon: typeof Building2;
  title: string;
  features: string[];
  testId: string;
  delay: number;
}

function AudienceCard({ icon: Icon, title, features, testId, delay }: AudienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="h-full"
    >
      <Card className="h-full p-8 flex flex-col" data-testid={testId}>
        <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-6 flex-shrink-0">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-semibold mb-6 flex-shrink-0 min-h-[56px] flex items-start">
          {title}
        </h3>
        <ul className="space-y-5 text-sm text-muted-foreground flex-grow">
          {features.map((feature, index) => (
            <li key={index} className="flex gap-3 leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-foreground/40 mt-[7px] flex-shrink-0" />
              <span className="flex-1">{feature}</span>
            </li>
          ))}
        </ul>
      </Card>
    </motion.div>
  );
}

export default function WhoWeServe() {
  return (
    <section id="who-we-serve" className="py-32 px-6 md:px-12 lg:px-16 bg-muted/30" data-testid="section-who-we-serve">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Who We Serve
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            Built for Financial Services
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We specialize in serving RIAs and Broker-Dealers with tailored AI solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-6 items-stretch">
          <AudienceCard
            icon={Building2}
            title="Registered Investment Advisors"
            features={riaFeatures}
            testId="card-ria"
            delay={0}
          />
          <AudienceCard
            icon={Briefcase}
            title="Broker-Dealers"
            features={bdFeatures}
            testId="card-broker-dealer"
            delay={0.1}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-8" data-testid="card-stat-clients">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-3xl font-semibold tracking-tight">150+</p>
                  <p className="text-sm text-muted-foreground">Firms Served</p>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Card className="p-8" data-testid="card-stat-aum">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-3xl font-semibold tracking-tight">$50B+</p>
                  <p className="text-sm text-muted-foreground">AUM Impacted</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
