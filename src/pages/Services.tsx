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
      <section className="section-padding py-10 md:py-16 bg-gradient-to-br from-background to-secondary/30">
        <div className="max-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 md:mb-6">
              Repairs, remodels, upgrades — all under one roof.
            </h1>
            <p className="text-xl text-muted-foreground mb-6 md:mb-8">
              Whether it's a leaking pipe or a full bathroom transformation, A&R Remodeling & Repair brings skill and experience to every project.
            </p>
            <p className="text-lg text-foreground">Here's what we can help with:</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding py-12 md:py-16">
        <div className="max-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="h-full transition-shadow hover:shadow-lg">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">{service.title}</h3>
                    </div>
                    <ul className="space-y-1.5">
                      {service.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-muted-foreground flex items-start">
                          <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
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

      {/* CTA Section */}
      <section className="section-padding py-10 md:py-16 bg-primary/5">
        <div className="max-container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-3 md:mb-4">Not sure if we handle your project?</h2>
            <p className="text-lg text-muted-foreground mb-6 md:mb-8">
              Call us at <a href="tel:5023707415" className="text-primary font-semibold hover:underline">(502) 370-7415</a> — if it involves tools and trust, we probably do it.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <a 
                href="tel:5023707415"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Now
              </a>
              <a 
                href="mailto:plumbguy37@gmail.com"
                className="inline-flex items-center justify-center px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors"
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