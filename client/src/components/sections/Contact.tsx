import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, CheckCircle2 } from "lucide-react";

import fidelityLogo from "@assets/Fidelity-Logo_1766096201283.png";
import broadridgeLogo from "@assets/Broadridge_Financial_Solutions_Logo.svg_1766006489944.png";
import schwabLogo from "@assets/charles-schwab-2-logo-png-transparent_1766096201283.webp";
import pershingLogo from "@assets/BNY_pershing_1766096298607.png";
import envestnetLogo from "@assets/Envestnet-logo_1766096201283.png";
import rightbridgeLogo from "@assets/6d0948863d66a53d716a8555d0668cb2_1766096201283.png";
import redtailLogo from "@assets/redtail_PNG_1766006783005.png";
import salesforceLogo from "@assets/Salesforce.com_logo.svg_1766006489944.png";
import wealthboxLogo from "@assets/wealthbox-logo-padded_1766006489944.webp";

const integrations = [
  { name: "Fidelity", logo: fidelityLogo, size: "xlarge" },
  { name: "Broadridge", logo: broadridgeLogo, size: "default" },
  { name: "Charles Schwab", logo: schwabLogo, size: "xxlarge" },
  { name: "BNY Pershing", logo: pershingLogo, size: "default" },
  { name: "Envestnet", logo: envestnetLogo, size: "default" },
  { name: "RightBridge", logo: rightbridgeLogo, size: "default" },
  { name: "Redtail", logo: redtailLogo, size: "xlarge" },
  { name: "Salesforce", logo: salesforceLogo, size: "large" },
  { name: "Wealthbox", logo: wealthboxLogo, size: "default" },
];

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

interface ContactProps {
  showTicker?: boolean;
}

export default function Contact({ showTicker = true }: ContactProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    console.log("Form submitted:", formData);
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <section id="contact" className="py-32 px-6 md:px-12 lg:px-16 bg-muted/30" data-testid="section-contact">
      <div className="max-w-[1280px] mx-auto">
        {/* Integration Ticker */}
        {showTicker && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24"
            data-testid="integration-ticker"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground text-center mb-8">
              Technologies We Work With
            </p>
            <div className="ticker-container relative overflow-hidden">
              <div className="ticker-track">
                {[...integrations, ...integrations, ...integrations, ...integrations].map((integration, index) => (
                  <div
                    key={`${integration.name}-${index}`}
                    className="ticker-item flex items-center justify-center px-8 md:px-12"
                    data-testid={`ticker-logo-${integration.name.toLowerCase().replace(/\s/g, "-")}-${index}`}
                  >
                    <img
                      src={integration.logo}
                      alt={integration.name}
                      className="object-contain grayscale opacity-50 hover:opacity-80 transition-all h-8 md:h-10 max-w-[160px] md:max-w-[180px]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Contact
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
              Talk to an Expert
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Ready to transform your operations with AI? Get in touch to discuss 
              how we can help your firm work smarter.
            </p>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Mail className="h-5 w-5" />
              <a href="mailto:contact@brookwellgroup.com" className="hover:text-foreground transition-colors">
                contact@brookwellgroup.com
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="h-6 w-6 text-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Thank you!</h3>
                    <p className="text-muted-foreground">
                      We'll be in touch within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        placeholder="Your name"
                        className={errors.name ? "border-destructive" : ""}
                        data-testid="input-name"
                      />
                      {errors.name && (
                        <p className="text-xs text-destructive">{errors.name}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        placeholder="you@company.com"
                        className={errors.email ? "border-destructive" : ""}
                        data-testid="input-email"
                      />
                      {errors.email && (
                        <p className="text-xs text-destructive">{errors.email}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Company (optional)</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleChange("company", e.target.value)}
                        placeholder="Your company"
                        data-testid="input-company"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        placeholder="Tell us about your needs..."
                        rows={4}
                        className={errors.message ? "border-destructive" : ""}
                        data-testid="input-message"
                      />
                      {errors.message && (
                        <p className="text-xs text-destructive">{errors.message}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      className="w-full rounded-full"
                      disabled={isSubmitting}
                      data-testid="button-submit-contact"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
