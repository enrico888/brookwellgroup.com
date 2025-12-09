import { motion } from "framer-motion";

const logos = [
  "Albridge",
  "RightBridge",
  "Broadridge",
  "Docupace",
  "Pershing",
  "NFS",
];

export default function LogoCarousel() {
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="py-16 overflow-hidden" data-testid="section-logo-carousel">
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <motion.div
          className="flex items-center gap-20"
          animate={{ x: [0, -1920] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 60,
              ease: "linear",
            },
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo}-${index}`}
              className="flex-shrink-0 text-xl font-medium text-foreground/40 hover:text-foreground/100 transition-all duration-300 cursor-default select-none grayscale hover:grayscale-0"
              data-testid={`logo-${logo.toLowerCase()}-${index}`}
            >
              {logo}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
