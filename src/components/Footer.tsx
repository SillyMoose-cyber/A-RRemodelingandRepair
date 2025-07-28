import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted border-t">
      <div className="max-container section-padding py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Company Info */}
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/014db96e-63d3-495c-9c6e-6cad27f31762.png" 
              alt="A&R Remodeling & Repair" 
              className="h-12 w-auto"
            />
            <p className="text-sm text-muted-foreground max-w-xs">
              Quality remodeling and repair services serving Central Kentucky with honest work and dependable results.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact Us</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>Serving Georgetown & Central KY</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <a 
                  href="tel:5023707415" 
                  className="hover:text-primary transition-colors"
                >
                  (502) 370-7415
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <a 
                  href="mailto:plumbguy37@gmail.com" 
                  className="hover:text-primary transition-colors"
                >
                  plumbguy37@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Pro Tip */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Pro Tip</h4>
            <p className="text-sm text-muted-foreground">
              The fastest way to get a quote? Just call us. We'll listen, give it to you straight, and get moving.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 A&R Remodeling & Repair. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;