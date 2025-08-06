import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { Card, CardContent } from "@/components/ui/card";

const Gallery = () => {
const projects = [
    { 
      title: "Modern Subway Tile Shower", 
      category: "Custom Installation",
      image: "/lovable-uploads/bathroom-renovation-1.png",
      description: "Classic subway tile installation with premium fixtures and modern design"
    },
    { 
      title: "Luxury Master Bathroom Renovation", 
      category: "Complete Renovation",
      image: "/lovable-uploads/bathroom-renovation-2.png",
      description: "Complete transformation with marble countertops and elegant finishes"
    },
    { 
      title: "Walk-In Shower Design", 
      category: "Shower Renovation",
      image: "/lovable-uploads/bathroom-renovation-3.png",
      description: "Spacious walk-in shower with detailed tile work and glass enclosure"
    },
    { 
      title: "Custom Vanity Installation", 
      category: "Vanity Installation",
      image: "/lovable-uploads/bathroom-renovation-4.png",
      description: "High-end vanity with marble countertop and modern hardware"
    },
    { 
      title: "Tile & Stonework Project", 
      category: "Tile & Stonework",
      image: "/lovable-uploads/bathroom-renovation-5.png",
      description: "Precision tile installation with natural stone accents"
    },
    { 
      title: "Contemporary Guest Bathroom", 
      category: "Complete Renovation",
      image: "/lovable-uploads/bathroom-renovation-6.png",
      description: "Full guest bathroom renovation with modern fixtures and quality materials"
    },
    { 
      title: "Premium Shower & Niche Work", 
      category: "Custom Installation",
      image: "/lovable-uploads/bathroom-renovation-7.png",
      description: "Custom shower installation with built-in niche and premium tile work"
    },
    { 
      title: "Elegant Bathroom Transformation", 
      category: "Complete Renovation",
      image: "/lovable-uploads/bathroom-renovation-8.png",
      description: "Full bathroom transformation featuring elegant design and quality craftsmanship"
    },
    { 
      title: "Custom Tile Pattern Work", 
      category: "Tile & Stonework",
      image: "/lovable-uploads/bathroom-renovation-9.png",
      description: "Intricate tile pattern installation with attention to detail and precision"
    },
    { 
      title: "Luxury Bathroom Renovation", 
      category: "Complete Renovation",
      image: "/lovable-uploads/bathroom-renovation-10.png",
      description: "High-end bathroom renovation with premium materials and expert installation"
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