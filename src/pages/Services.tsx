import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Wrench, 
  Droplets, 
  Bath, 
  ChefHat, 
  Home, 
  Thermometer, 
  TreePine,
  Phone,
  ArrowRight
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
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="section-padding py-12 md:py-20 bg-gradient-to-br from-background to-secondary/30 relative overflow-hidden pattern-dots">
        <div className="max-container relative z-10">
          <div className="text-center max-w-4xl mx-auto fade-in">
            <div className="flex flex-wrap justify-center gap-2 mb-4 md:mb-6">
              <Badge className="trust-badge">
                ⭐ Georgetown, KY Based
              </Badge>
              <Badge className="trust-badge">
                🏆 15+ Years Experience
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 gradient-text">
              Repairs, remodels, upgrades — all under one roof.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 md:mb-12 leading-relaxed">
              Whether it's a leaking pipe or a full bathroom transformation, A&R Remodeling & Repair brings skill and experience to every project.
            </p>
          </div>
        </div>
      </section>

      {/* Decorative Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

      {/* Services Grid */}
      <section className="section-padding py-12 md:py-20 relative pattern-grid">
        {/* Geometric Accent */}
        <div className="geometric-accent w-32 h-32 top-10 right-10 rotate-45"></div>
        <div className="geometric-accent w-24 h-24 bottom-20 left-10 -rotate-12"></div>
        
        <div className="max-container relative z-10">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From quick repairs to complete renovations, we handle it all with the same level of care and expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="text-center h-full hover-scale transition-all duration-300 group relative overflow-hidden shadow-lg hover:shadow-blue border-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <CardContent className="p-4 sm:p-6 relative z-10">
                    <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 icon-bounce">
                      <IconComponent className="h-7 w-7 text-primary group-hover:text-primary transition-colors duration-300" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                    <ul className="space-y-2 text-left">
                      {service.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-sm sm:text-base text-muted-foreground flex items-start">
                          <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Decorative Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

      {/* CTA Section */}
      <section className="section-padding py-12 md:py-16 bg-gradient-to-br from-accent/5 to-secondary/10">
        <div className="max-container">
          <div className="text-center mb-8 md:mb-12">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 gradient-text">
                Ready to get started?
              </h3>
              <p className="text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 leading-relaxed">
                Call us today for a free estimate. We'll walk you through your options and help you find the right solution for your home and budget.
              </p>
              
              <div className="bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-sm rounded-lg p-6 md:p-8 shadow-elevated border border-primary/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                <div className="flex flex-col items-center gap-4 relative z-10">
                  <p className="text-xl md:text-2xl font-bold relative">
                    📞 Call <a href="tel:5023707415" className="accent-text hover:underline transition-colors magnetic-btn">(502) 370-7415</a>
                  </p>
                  <div className="trust-badge">
                    ⚡ Fast, reliable help guaranteed
                  </div>
                </div>
              </div>
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