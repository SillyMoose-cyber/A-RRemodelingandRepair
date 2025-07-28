import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Header = () => {
  const location = useLocation();

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/services", label: "What We Do" },
    { to: "/gallery", label: "Gallery" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-container section-padding">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/014db96e-63d3-495c-9c6e-6cad27f31762.png" 
              alt="A&R Remodeling & Repair"
              className="h-12 md:h-16 w-auto"
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location.pathname === item.to
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Link
              to="tel:5023707415"
              className="text-sm font-medium text-primary hover:text-primary/80"
            >
              Call Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;