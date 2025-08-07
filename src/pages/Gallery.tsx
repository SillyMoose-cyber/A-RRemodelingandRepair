import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { Card, CardContent } from "@/components/ui/card";

const Gallery = () => {
const projects = [
    { 
      title: "Contemporary Guest Bathroom", 
      category: "Complete Renovation",
      image: "/lovable-uploads/998d145d-9c71-4869-bb02-6bd3e0fb45fa.png",
      description: "Full guest bathroom with glass shower door, white cabinetry, and quality fixtures"
    },
    { 
      title: "Modern Subway Tile Installation", 
      category: "Tile & Stonework",
      image: "/lovable-uploads/1a06ec64-ad8f-45bb-a135-eb62900e7462.png",
      description: "Classic subway tile work in progress with premium materials and precise installation"
    },
    { 
      title: "Custom Vanity with Granite Top", 
      category: "Vanity Installation",
      image: "/lovable-uploads/896a4458-dada-4136-aeeb-b02c394fb2e9.png",
      description: "White vanity with beautiful granite countertop, modern fixtures, and luxury vinyl flooring"
    },
    { 
      title: "Complete Bathroom Transformation", 
      category: "Complete Renovation",
      image: "/lovable-uploads/4f423b3a-38bb-4e6a-9d40-e9e0edf9cb3f.png",
      description: "Before and after showcase of complete bathroom renovation with subway tile and custom features"
    },
    { 
      title: "Walk-In Shower with Built-In Niche", 
      category: "Shower Renovation",
      image: "/lovable-uploads/3595e3e9-86e2-4e9b-a983-c801e6a4a44d.png",
      description: "Spacious walk-in shower featuring glass enclosure, built-in storage niche, and modern fixtures"
    },
    { 
      title: "Detailed Shower Tile Work", 
      category: "Custom Installation",
      image: "/lovable-uploads/03500558-780a-4ed0-a6be-78c674e822a8.png",
      description: "Precision tile installation with mosaic accent strip and professional craftsmanship"
    },
    { 
      title: "Luxury Marble Shower Installation", 
      category: "Custom Installation",
      image: "/lovable-uploads/258ff2f5-2dff-45ce-9482-eb613116c011.png",
      description: "High-end marble tile shower with mosaic floor and professional installation"
    },
    { 
      title: "White Subway Tile with Storage Niches", 
      category: "Shower Renovation",
      image: "/lovable-uploads/702348a6-f200-48e6-a65f-f085d93445c5.png",
      description: "Clean white subway tile installation with multiple built-in storage niches"
    },
    { 
      title: "Custom Glass Shower Enclosure", 
      category: "Complete Renovation",
      image: "/lovable-uploads/08042d26-02c6-4685-b3e0-f6878b817247.png",
      description: "Modern bathroom with custom glass shower enclosure and quality materials throughout"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="section-padding py-16 bg-gradient-to-br from-background to-secondary/30">
        <div className="max-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Work Gallery
            </h1>
            <p className="text-xl text-muted-foreground">
              Real transformations from across Central Kentucky. From custom installations to complete renovations, see the quality craftsmanship and attention to detail that sets A&R apart.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding py-16">
        <div className="max-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="mb-2">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding py-16 bg-primary/5">
        <div className="max-container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Space?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              From custom installations to complete renovations, let's bring your vision to life with the same attention to detail and quality craftsmanship you see here.
            </p>
            <a 
              href="tel:5023707415"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Get Your Free Quote
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Gallery;