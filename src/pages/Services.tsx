import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Wrench, 
  Droplets, 
  Bath, 
  ChefHat, 
  Home, 
  Thermometer, 
  TreePine,
  Phone
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Droplets,
      title: "Plumbing Repairs",
      items: [
        "Faucet, toilet, and sink replacements",
        "Leak detection and drain line repair",
        "Water heater installation and upgrades"
      ]
    },
    {
      icon: Bath,
      title: "Bathroom Remodels",
      items: [
        "Tub and shower replacements",
        "Vanity and tile updates",
        "Full redesign and layout changes"
      ]
    },
    {
      icon: ChefHat,
      title: "Kitchen Renovations",
      items: [
        "Cabinet replacement and countertop upgrades",
        "New plumbing and fixture installation",
        "Backsplash, flooring, and lighting updates"
      ]
    },
    {
      icon: Home,
      title: "Home Renovation Projects",
      items: [
        "Laundry rooms, breakfast nooks, basement updates",
        "Whole-home remodels and new construction",
        "Custom additions and layout changes"
      ]
    },
    {
      icon: Thermometer,
      title: "Energy-Efficient Upgrades",
      items: [
        "Radiant floor heating systems",
        "Whole-house fans and HVAC improvements",
        "Smart utility and comfort enhancements"
      ]
    },
    {
      icon: TreePine,
      title: "Outdoor & Specialty Spaces",
      items: [
        "Porches, decks, and patios",
        "Outdoor living areas and ADU builds",
        "Entryway, garage, or utility room remodels"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="section-padding py-16 md:py-24 bg-gradient-to-br from-background via-primary/5 to-secondary/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-5"></div>
        <div className="max-container relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 mb-6 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary">
              <Wrench className="h-4 w-4 mr-2" />
              Professional • Licensed • Insured
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 md:mb-8 gradient-text">
              Repairs, remodels, upgrades — all under one roof.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 md:mb-12 leading-relaxed">
              Whether it's a leaking pipe or a full bathroom transformation, A&R Remodeling & Repair brings skill and experience to every project.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="trust-badge">
                <span className="font-semibold">Emergency Service</span>
              </div>
              <div className="trust-badge">
                <span className="font-semibold">Georgetown, KY</span>
              </div>
              <div className="trust-badge">
                <span className="font-semibold">15+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Indoor Services */}
      <section className="section-padding py-16 md:py-20">
        <div className="max-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Indoor Services</h2>
            <p className="text-lg text-muted-foreground">Transform your interior spaces with professional craftsmanship</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="group h-full hover-scale transition-all duration-300 shadow-elegant hover:shadow-glow border-0 bg-gradient-to-br from-card to-card/80">
                  <CardContent className="p-8">
                    <div className="relative mb-6">
                      <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      {index === 0 && <div className="absolute -top-2 -right-2 px-2 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">Popular</div>}
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-center">{service.title}</h3>
                    <ul className="space-y-3">
                      {service.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-muted-foreground flex items-start">
                          <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 pt-4 border-t border-border/50">
                      <button className="w-full bg-primary/10 hover:bg-primary/20 text-primary font-semibold py-3 px-4 rounded-lg transition-colors">
                        Get Quote
                      </button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Outdoor & Specialty Services */}
      <section className="section-padding py-16 md:py-20 bg-secondary/30 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-3"></div>
        <div className="max-container relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Outdoor & Specialty Services</h2>
            <p className="text-lg text-muted-foreground">Enhance your property's exterior and specialty areas</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(3, 6).map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="group h-full hover-scale transition-all duration-300 shadow-elegant hover:shadow-glow border-0 bg-gradient-to-br from-card to-card/80">
                  <CardContent className="p-8">
                    <div className="relative mb-6">
                      <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      {index === 0 && <div className="absolute -top-2 -right-2 px-2 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">Eco-Friendly</div>}
                      {index === 2 && <div className="absolute -top-2 -right-2 px-2 py-1 bg-orange-500 text-white text-xs font-semibold rounded-full">Seasonal</div>}
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-center">{service.title}</h3>
                    <ul className="space-y-3">
                      {service.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-muted-foreground flex items-start">
                          <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 pt-4 border-t border-border/50">
                      <button className="w-full bg-primary/10 hover:bg-primary/20 text-primary font-semibold py-3 px-4 rounded-lg transition-colors">
                        Get Quote
                      </button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Emergency Services Callout */}
      <section className="section-padding py-12">
        <div className="max-container">
          <div className="callout-box bg-gradient-to-r from-red-500/10 to-orange-500/10 border-red-500/20">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                <Phone className="h-6 w-6 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-center mb-2">Emergency Repairs Available</h3>
            <p className="text-center text-muted-foreground mb-6">Burst pipes, electrical issues, or urgent repairs? We're here to help.</p>
            <div className="text-center">
              <a 
                href="tel:5023707415"
                className="inline-flex items-center px-6 py-3 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-colors shadow-lg"
              >
                <Phone className="h-5 w-5 mr-2" />
                Emergency Hotline: (502) 370-7415
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding py-16 md:py-20 bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-10"></div>
        <div className="max-container relative">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Not sure if we handle your project?</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Call us at <a href="tel:5023707415" className="text-primary font-bold hover:underline story-link">(502) 370-7415</a> — if it involves tools and trust, we probably do it.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-3">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold mb-1">Quick Response</h4>
                <p className="text-sm text-muted-foreground">Usually within 2 hours</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-3">
                  <Wrench className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold mb-1">Free Estimates</h4>
                <p className="text-sm text-muted-foreground">No hidden fees</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-3">
                  <Home className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold mb-1">Local Experts</h4>
                <p className="text-sm text-muted-foreground">Georgetown, KY based</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:5023707415"
                className="magnetic-button inline-flex items-center justify-center px-10 py-4 bg-primary text-primary-foreground rounded-xl font-bold text-lg hover:bg-primary/90 transition-all shadow-elegant hover:shadow-glow"
              >
                <Phone className="h-6 w-6 mr-3" />
                Call Now
              </a>
              <a 
                href="mailto:plumbguy37@gmail.com"
                className="inline-flex items-center justify-center px-10 py-4 bg-card border-2 border-primary/20 text-foreground rounded-xl font-bold text-lg hover:bg-primary/10 transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Services;