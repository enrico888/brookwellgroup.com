import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavigationProps {
  onNavigate?: (section: string) => void;
}

export default function Navigation({ onNavigate }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Agentic Operations", href: "#workflows" },
    { label: "AI Transitions", href: "#transitions" },
    { label: "Client Stories", href: "#stories" },
    { label: "About Us", href: "#about" },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    onNavigate?.(href);
  };

  return (
    <>
      <header
        data-testid="navigation-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="flex items-center justify-between h-[72px] md:h-[72px]">
            <a
              href="#"
              className="text-xl font-semibold tracking-tight text-foreground"
              data-testid="link-logo"
            >
              Brookwell
            </a>

            <nav className="hidden md:flex items-center gap-4 xl:gap-6">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-150"
                  data-testid={`link-nav-${item.label.toLowerCase().replace(/\s/g, "-")}`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <Button
                onClick={() => handleNavClick("#contact")}
                className="hidden md:inline-flex rounded-full px-4 xl:px-6 text-sm font-medium tracking-wide whitespace-nowrap"
                data-testid="button-contact-cta"
              >
                Talk to an Expert
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                data-testid="button-mobile-menu"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[64px] z-40 bg-background/95 backdrop-blur-xl border-b md:hidden"
            data-testid="mobile-menu-drawer"
          >
            <nav className="flex flex-col px-6 py-6 gap-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-left text-base text-muted-foreground hover:text-foreground transition-colors py-2"
                  data-testid={`link-mobile-${item.label.toLowerCase().replace(/\s/g, "-")}`}
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => handleNavClick("#contact")}
                className="mt-2 rounded-full"
                data-testid="button-mobile-contact"
              >
                Talk to an Expert
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
