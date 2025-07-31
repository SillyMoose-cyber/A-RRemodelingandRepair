import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { ReviewsCarousel } from "@/components/ReviewsCarousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, DollarSign, Shield, Phone, ArrowRight, Award, Star } from "lucide-react";
const Index = () => {
  const features = [{
    icon: Shield,
    title: "We Show Up",
    description: "No delays, no excuses. When we say we'll be there, we'll be there."
  }, {
    icon: DollarSign,
    title: "No BS Pricing",
    description: "Honest estimates upfront. No hidden fees or surprise charges."
  }, {
    icon: Award,
    title: "Built to Last",
    description: "Quality work that stands the test of time. We guarantee it."
  }];
  
  const processSteps = [{
    number: "1",
    title: "Call Us",
    description: "Tell us what you need. We listen without the sales pitch."
  }, {
    number: "2",
    title: "Fair Quote",
    description: "Honest pricing with no surprises. You know exactly what you're paying."
  }, {
    number: "3",
    title: "Get It Done",
    description: "Professional work, on time, with your home treated like our own."
  }];
  return <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="section-padding py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background"></div>
        
        <div className="max-container relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="flex justify-center gap-3 mb-6">
              <Badge variant="secondary" className="text-sm font-medium">
                Georgetown, KY
              </Badge>
              <Badge variant="secondary" className="text-sm font-medium">
                15+ Years Experience
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-primary">A&R</span> Remodeling & Repair
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium">
              Quality work. Fair prices. No BS.
            </p>
            
            <p className="text-lg text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
              Central Kentucky's trusted remodeling and repair specialists. We show up when we say we will, do the work right the first time, and charge you a fair price for it.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" asChild>
                <a href="tel:5023707415">
                  <Phone className="h-5 w-5 mr-2" />
                  Call (502) 370-7415
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8" asChild>
                <a href="/services">
                  View Services
                  <ArrowRight className="h-5 w-5 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding py-16 bg-muted/50">
        <div className="max-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">15+</div>
              <p className="text-muted-foreground font-medium">Years Experience</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground font-medium">Projects Completed</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">98%</div>
              <p className="text-muted-foreground font-medium">Customer Satisfaction</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">24hr</div>
              <p className="text-muted-foreground font-medium">Response Time</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding py-16">
        <div className="max-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose A&R
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Because getting the job done shouldn't be complicated. We believe in honest work, showing up on time, and treating your home like our own.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-lg flex items-center justify-center">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <div className="bg-primary/5 rounded-lg p-6 max-w-2xl mx-auto">
              <p className="text-lg font-medium mb-2">
                When you hire A&R, you're not just checking a box.
              </p>
              <p className="text-xl font-bold text-primary">
                You're hiring a crew that actually cares.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 bg-muted/50">
        <div className="max-container">
          <ReviewsCarousel />
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding py-16">
        <div className="max-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple, transparent, and designed to get you back to enjoying your home.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => {
              const stepIcons = [Phone, DollarSign, CheckCircle];
              const StepIcon = stepIcons[index];
              return (
                <div key={index} className="text-center">
                  <div className="relative inline-block mb-6">
                    <div className="w-20 h-20 bg-primary text-white rounded-lg flex items-center justify-center text-2xl font-bold shadow-lg">
                      {step.number}
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <StepIcon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding py-16 bg-primary text-primary-foreground">
        <div className="max-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            From small repairs to complete remodels, we're here to help. Call us today for your free, honest estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
              <a href="tel:5023707415">
                <Phone className="h-5 w-5 mr-2" />
                Call (502) 370-7415
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary" asChild>
              <a href="/services">
                View All Services
                <ArrowRight className="h-5 w-5 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>;
};
export default Index;