import { useEffect } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Contact from "@/components/sections/Contact";
import { Linkedin } from "lucide-react";
import sarahPhoto from "@assets/p1_linkedin__..,__1766320618582.jpg";
import jenPhoto from "@assets/emily_rodriguez.png";
import michaelPhoto from "@assets/1694480036866_1766320851717.jpeg";

const teamMembers = [
  {
    name: "Sarah Chen",
    title: "CEO & Founder",
    bio: "Former Goldman Sachs VP with 15 years in financial technology. Passionate about bringing AI innovation to wealth management.",
    linkedin: "#",
    image: sarahPhoto,
  },
  {
    name: "Alex Thibault",
    title: "Co-Founder",
    bio: "Previously led engineering at a top fintech unicorn. Expert in AI/ML systems and enterprise architecture.",
    linkedin: "#",
    image: michaelPhoto,
  },
  {
    name: "Jen Menard",
    title: "Head of Transitions",
    bio: "10+ years helping financial advisors navigate technology transitions. Dedicated to seamless client experiences.",
    linkedin: "#",
    image: jenPhoto,
  },
  {
    name: "David Kim",
    title: "VP of Product",
    bio: "Former product leader at major custodians. Deep expertise in advisor workflows and operational efficiency.",
    linkedin: "#",
  },
];

const values = [
  "Client outcomes drive every decision we make",
  "Technology should simplify, not complicate",
  "Transparency builds lasting partnerships",
  "Innovation with purpose, not for its own sake",
  "Excellence in execution, always",
];

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-[72px]">
        <section className="py-24 md:py-32 px-6 md:px-12 lg:px-16" data-testid="section-about-hero">
          <div className="max-w-[1280px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto text-center"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                About Us
              </p>
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
                Transforming Financial Services Through Intelligent Automation
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Brookwell was founded on a simple belief: financial advisors should spend their time 
                serving clients, not wrestling with operational complexity. We combine deep industry 
                expertise with cutting-edge AI to make that vision a reality for firms of all sizes.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 px-6 md:px-12 lg:px-16 bg-muted/30" data-testid="section-about-team">
          <div className="max-w-[1280px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
                Our Team
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Industry veterans and technologists united by a shared mission to modernize 
                financial services operations.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex flex-col items-center text-center" data-testid={`card-team-${index}`}>
                    <div className="w-full aspect-[3/4] rounded-xl bg-muted flex items-center justify-center mb-5 overflow-hidden">
                      {member.image ? (
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-4xl md:text-5xl font-medium text-muted-foreground">
                          {member.name.split(" ").map(n => n[0]).join("")}
                        </span>
                      )}
                    </div>
                    <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                    <p className="text-sm text-muted-foreground/70 mb-3">{member.title}</p>
                    <a
                      href={member.linkedin}
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      data-testid={`link-linkedin-${index}`}
                    >
                      <Linkedin className="h-4 w-4" />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 md:px-12 lg:px-16" data-testid="section-about-values">
          <div className="max-w-[1280px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
                  What We Believe
                </h2>
                <p className="text-muted-foreground">
                  Our values guide every product decision, client interaction, and team collaboration.
                </p>
              </div>
              <ul className="space-y-4">
                {values.map((value, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-foreground/40 mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{value}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        <Contact showTicker={false} />
      </main>

      <Footer />
    </div>
  );
}
