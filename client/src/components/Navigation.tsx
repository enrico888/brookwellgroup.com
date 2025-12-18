import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "wouter";
import logoImage from "@assets/logo-icon_(1)_1765582535278.png";

interface NavigationProps {
  onNavigate?: (section: string) => void;
}

export default function Navigation({ onNavigate }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Agentic Operations", href: "#workflows", isRoute: false },
    { label: "AI Transitions", href: "#transitions", isRoute: false },
    { label: "About Us", href: "/about", isRoute: true },
  ];

  const handleNavClick = (href: string, isRoute: boolean) => {
    setMobileMenuOpen(false);
    if (isRoute) {
      return;
    }
    
    // First try to scroll to element on current page
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      onNavigate?.(href);
      return;
    }
    
    // If element not found and not on home page, redirect to home with hash
    if (location !== "/") {
      window.location.href = "/" + href;
      return;
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
          <div className="flex items-center justify-between h-[72px]">
            <a
              href="/"
              className="flex items-center flex-shrink-0"
              data-testid="link-logo"
            >
              <img src={logoImage} alt="Brookwell" className="h-[22px] md:h-[28px]" />
            </a>

            <nav className="hidden md:flex items-center gap-8 lg:gap-10">
              {navItems.map((item) => (
                item.isRoute ? (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-150"
                    data-testid={`link-nav-${item.label.toLowerCase().replace(/\s/g, "-")}`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href, item.isRoute)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-150"
                    data-testid={`link-nav-${item.label.toLowerCase().replace(/\s/g, "-")}`}
                  >
                    {item.label}
                  </button>
                )
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                onClick={() => handleNavClick("#contact", false)}
                className="hidden md:inline-flex rounded-full px-6 text-sm font-normal whitespace-nowrap text-muted-foreground hover:text-foreground transition-colors duration-150 gradient-border-btn no-default-hover-elevate no-default-active-elevate"
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
                item.isRoute ? (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-left text-base text-muted-foreground hover:text-foreground transition-colors py-2"
                    data-testid={`link-mobile-${item.label.toLowerCase().replace(/\s/g, "-")}`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href, item.isRoute)}
                    className="text-left text-base text-muted-foreground hover:text-foreground transition-colors py-2"
                    data-testid={`link-mobile-${item.label.toLowerCase().replace(/\s/g, "-")}`}
                  >
                    {item.label}
                  </button>
                )
              ))}
              <Button
                variant="outline"
                onClick={() => handleNavClick("#contact", false)}
                className="mt-2 rounded-full font-normal text-muted-foreground hover:text-foreground transition-colors duration-150 gradient-border-btn no-default-hover-elevate no-default-active-elevate"
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
