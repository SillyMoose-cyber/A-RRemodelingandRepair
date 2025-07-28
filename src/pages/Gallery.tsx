import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { Card, CardContent } from "@/components/ui/card";

const Gallery = () => {
  // Placeholder data - will be replaced with actual photos later
  const placeholderProjects = [
    { title: "Kitchen Remodel", category: "Kitchen" },
    { title: "Bathroom Renovation", category: "Bathroom" },
    { title: "Deck Construction", category: "Outdoor" },
    { title: "Tile Installation", category: "Flooring" },
    { title: "Plumbing Upgrade", category: "Plumbing" },
    { title: "Basement Remodel", category: "Interior" },
    { title: "Patio Build", category: "Outdoor" },
    { title: "Vanity Installation", category: "Bathroom" },
    { title: "Cabinet Installation", category: "Kitchen" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="section-padding py-16 bg-gradient-to-br from-background to-secondary/30">
        <div className="max-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              See Our Work in Action
            </h1>
            <p className="text-xl text-muted-foreground">
              Real projects from real customers across Central Kentucky. From quick fixes to complete transformations, here's what quality craftsmanship looks like.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding py-16">
        <div className="max-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {placeholderProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-gradient-to-br from-muted to-muted/60 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-2xl">📸</span>
                    </div>
                    <p className="text-sm">Photo Coming Soon</p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-1">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.category}</p>
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
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss your vision and create something amazing together.
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