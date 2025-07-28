import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { ReviewsCarousel } from "@/components/ReviewsCarousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  CheckCircle, 
  Clock, 
  DollarSign, 
  Shield, 
  Users, 
  Home,
  Phone,
  ArrowRight,
  Award
} from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: Clock,
      title: "Fast Response Times",
      description: "We show up when we say we will — and get to work."
    },
    {
      icon: DollarSign,
      title: "Fair, Upfront Pricing",
      description: "You'll know the full cost before we begin."
    },
    {
      icon: Shield,
      title: "Quality Over Corners",
      description: "We take pride in doing things the right way."
    },
    {
      icon: Home,
      title: "Respect for Your Space",
      description: "Clean, professional, and mess-free."
    },
    {
      icon: Users,
      title: "Local + Loyal",
      description: "Most of our work comes from referrals."
    },
    {
      icon: Award,
      title: "We Stand Behind Our Work",
      description: "If it's not right, we'll make it right — no questions asked."
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "Get in Touch",
      description: "Call or text us at (502) 370-7415. Tell us what you need — we'll listen."
    },
    {
      number: "2", 
      title: "Get a Quote",
      description: "We'll give you honest pricing and explain what the job involves."
    },
    {
      number: "3",
      title: "Get to Work", 
      description: "We show up on time, do it right the first time, and treat your home with care."
    },
    {
      number: "4",
      title: "Get It Done",
      description: "No loose ends. No mess left behind. Just results you can count on."
    }
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="section-padding py-12 md:py-20 bg-gradient-to-br from-background to-secondary/30">
        <div className="max-container">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 md:mb-6 bg-primary text-primary-foreground hover:bg-primary/90">
              Serving Central Kentucky
            </Badge>
          <h1 className="font-bold mb-4 md:mb-6 text-center">
            <span className="block md:inline text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">A&R</span>
            <span className="block md:inline whitespace-nowrap text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl"> Remodeling & Repair</span>
          </h1>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold mb-6 md:mb-8">
              Quality Work. <span className="text-primary">No Nonsense.</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 md:mb-10 leading-relaxed max-w-3xl mx-auto">
              At A&R Remodeling & Repair, we specialize in turning houses into homes — whether you need a quick plumbing fix or a full kitchen remodel. Based in Georgetown, Kentucky, we proudly serve homeowners across Central KY with dependable service, honest pricing, and craftsmanship that speaks for itself.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
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

      {/* Decorative Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

      {/* Customer Reviews */}
      <section className="py-16 bg-muted/20">
        <div className="max-container">
          <ReviewsCarousel />
        </div>
      </section>

      {/* Decorative Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

      {/* Value Proposition */}
      <section className="section-padding py-12 md:py-20">
        <div className="max-container">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose A&R
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Because getting the job done shouldn't be complicated. We believe in doing honest work, showing up on time, and treating your home like it's our own. That's it. No gimmicks. No runaround.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="text-center h-full">
                  <CardContent className="p-4 sm:p-6">
                    <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-8 md:mt-12">
            <p className="text-lg font-medium text-foreground">
              When you hire A&R, you're not just checking a box.
            </p>
            <p className="text-lg font-medium text-primary">
              You're hiring a crew that actually cares.
            </p>
          </div>
        </div>
      </section>

      {/* Decorative Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

      {/* Process Section */}
      <section className="section-padding py-10 md:py-16 bg-muted/30">
        <div className="max-container">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-muted-foreground">
              We keep it simple — so you can get back to normal faster.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-2xl font-bold">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 md:mt-12">
            <p className="text-lg text-blue-collar font-bold">
              That's it. No overcomplicated steps. Just solid work from start to finish.
            </p>
          </div>
        </div>
      </section>

      {/* Decorative Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

      {/* Service Highlights */}
      <section className="section-padding py-12 md:py-16 bg-gradient-to-br from-accent/5 to-secondary/10">
        <div className="max-container">
          <div className="text-center mb-8 md:mb-12">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 leading-relaxed">
                From leaky faucets to radiant floor systems, no job is too big or too small. We show up when we say we will, do the work right the first time, and leave your space cleaner than we found it. That's why so many of our customers call us back — and send their friends our way.
              </p>
              
              <div className="bg-background/60 backdrop-blur-sm rounded-lg p-6 md:p-8 shadow-sm border border-border/50">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
                  Ready to upgrade your space or fix what's broken?
                </h3>
                <div className="flex flex-col items-center gap-4">
                  <p className="text-xl md:text-2xl text-primary font-semibold">
                    📞 Call <a href="tel:5023707415" className="hover:underline transition-colors">(502) 370-7415</a>
                  </p>
                  <p className="text-base md:text-lg text-muted-foreground">
                    for fast, reliable help.
                  </p>
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

export default Index;
