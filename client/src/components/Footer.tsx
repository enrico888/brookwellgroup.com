import logoIcon from "@assets/logo-icon_(1)_1765582535278.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    services: [
      { label: "Agentic Operations", href: "#workflows" },
      { label: "AI Transitions", href: "#transitions" },
      { label: "Client Stories", href: "#stories" },
    ],
    company: [
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  };

  const handleClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="py-16 px-6 md:px-12 lg:px-16 border-t" data-testid="footer">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <a
              href="#"
              className="block"
              data-testid="link-footer-logo"
            >
              <img 
                src={logoIcon} 
                alt="Brookwell" 
                className="h-[22px] md:h-[26px]"
              />
            </a>
            <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
              AI-powered solutions for financial services firms.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4 text-sm">Services</h4>
            <ul className="space-y-3">
              {links.services.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleClick(link.href)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`link-footer-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4 text-sm">Company</h4>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleClick(link.href)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`link-footer-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4 text-sm">Legal</h4>
            <ul className="space-y-3">
              {links.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`link-footer-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground">
            {currentYear} Brookwell. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
