
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/services", label: "What We Do" },
    { to: "/gallery", label: "Gallery" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-container section-padding">
        <div className="flex h-24 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-all duration-300 hover:scale-105">
            <img 
              src="/lovable-uploads/ec188d80-7ea4-48ec-9b98-df53123b7f29.png" 
              alt="A&R Remodeling & Repair"
              className="h-16 md:h-20 w-auto drop-shadow-md"
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
            <Link
              to="tel:5023707415"
              className="text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md transition-colors"
            >
              Call Now
            </Link>
          </nav>

          {/* Mobile menu */}
          <div className="md:hidden relative">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
            
            {mobileMenuOpen && (
              <div className="absolute right-0 top-full mt-2 w-64 bg-background border border-border rounded-lg shadow-lg z-50">
                <nav className="flex flex-col py-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "px-4 py-3 text-lg font-medium transition-colors hover:bg-muted",
                        location.pathname === item.to
                          ? "text-primary bg-muted"
                          : "text-muted-foreground"
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Link
                    to="tel:5023707415"
                    onClick={() => setMobileMenuOpen(false)}
                    className="mx-4 mt-2 text-lg font-medium bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-3 rounded-md transition-colors text-center"
                  >
                    Call Now
                  </Link>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
