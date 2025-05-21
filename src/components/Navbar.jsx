import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Project", href: "#project" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState(window.location.hash);

  // Debounce function
  const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  };

  useEffect(() => {
    // Handle scroll
    const handleScroll = debounce(() => {
      setIsScrolled(window.scrollY > 10);
    }, 100);
    window.addEventListener("scroll", handleScroll);

    // Handle hash change
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 border-bottom",
        isScrolled
          ? "py-3 bg-background/80 backdrop-blur-md shadow-sm"
          : "py-5 bg-background/50"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a
          className={cn(
            "text-2xl font-bold flex items-center transition-all duration-300 hover:scale-105 hover:text-glow",
            "gradient-border px-2 py-1"
          )}
          href="#hero"
        >
          <span className="relative z-10 flex items-center space-x-1">
            <span className={cn("logo-gradient text-glow animate-[var(--animate-float)] font-extrabold")}>
              Sᴋ
            </span>
            <span className="text-foreground/90 font-semibold">Portfolio</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "text-foreground/80 transition-all duration-300 nav-link-underline text-base font-medium",
                activeHash === item.href
                  ? "text-primary font-semibold bg-primary/10 rounded px-2"
                  : "hover:text-primary-secondary hover:text-glow"
              )}
              aria-current={activeHash === item.href ? "page" : undefined}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-3 text-foreground z-50"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
        >
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "text-2xl text-foreground/80 transition-all duration-300 nav-link-underline font-medium py-4",
                "animate-[var(--animate-fade-in-delay-1)]",
                activeHash === item.href
                  ? "text-primary font-semibold bg-primary/10 rounded px-4"
                  : "hover:text-primary-secondary hover:text-glow"
              )}
              onClick={() => setIsMenuOpen(false)}
              aria-current={activeHash === item.href ? "page" : undefined}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;