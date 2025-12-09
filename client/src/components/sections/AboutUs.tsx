import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export default function AboutUs() {
  return (
    <section id="about" className="py-32 px-6 md:px-12 lg:px-16" data-testid="section-about">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              About Us
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
              Built by practitioners
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Brookwell was founded by a team of financial services veterans and 
                AI experts who saw an opportunity to bridge the gap between cutting-edge 
                technology and the practical needs of RIAs and broker-dealers.
              </p>
              <p>
                With decades of combined experience in wealth management, compliance, 
                and enterprise software, we understand the challenges you face. We've 
                lived them ourselves.
              </p>
              <p>
                Our mission is simple: to help financial services firms work smarter 
                by leveraging AI in ways that are practical, compliant, and genuinely 
                transformative.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-muted/50">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-3xl font-semibold tracking-tight mb-1">25+</p>
                  <p className="text-sm text-muted-foreground">Years Combined Experience</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold tracking-tight mb-1">150+</p>
                  <p className="text-sm text-muted-foreground">Firms Served</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold tracking-tight mb-1">$50B+</p>
                  <p className="text-sm text-muted-foreground">AUM Impacted</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold tracking-tight mb-1">99%</p>
                  <p className="text-sm text-muted-foreground">Client Satisfaction</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
