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
  Award,
  Hammer,
  Zap,
  Droplets,
  Paintbrush,
  Star,
  Calendar,
  TrendingUp
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
      <section className="section-padding py-12 md:py-20 bg-gradient-to-br from-background to-secondary/30 relative overflow-hidden pattern-dots">
        {/* Floating Icons */}
        <Hammer className="floating-icon w-12 h-12 top-20 left-10" style={{ animationDelay: '0s' }} />
        <Zap className="floating-icon w-10 h-10 top-32 right-20" style={{ animationDelay: '2s' }} />
        <Droplets className="floating-icon w-8 h-8 bottom-40 left-20" style={{ animationDelay: '4s' }} />
        <Paintbrush className="floating-icon w-10 h-10 bottom-20 right-10" style={{ animationDelay: '1s' }} />
        
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
          <h1 className="font-bold mb-4 md:mb-6 text-center">
            <span className="block md:inline text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl gradient-text">A&R</span>
            <span className="block md:inline whitespace-nowrap text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl"> Remodeling & Repair</span>
          </h1>
            <div className="callout-box mb-6 md:mb-8">
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold">
                Quality Work. <span className="accent-text">No Nonsense.</span>
              </h2>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 md:mb-10 leading-relaxed max-w-3xl mx-auto">
              At A&R Remodeling & Repair, we specialize in turning houses into homes — whether you need a quick plumbing fix or a full kitchen remodel. Based in Georgetown, Kentucky, we proudly serve homeowners across Central KY with dependable service, honest pricing, and craftsmanship that speaks for itself.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="text-lg px-8 magnetic-btn" asChild>
                <a href="tel:5023707415">
                  <Phone className="h-5 w-5 mr-2 icon-bounce" />
                  Call (502) 370-7415
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 magnetic-btn" asChild>
                <a href="/services">
                  View Services
                  <ArrowRight className="h-5 w-5 ml-2 icon-bounce" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding py-12 md:py-16 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5">
        <div className="max-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="fade-in">
              <div className="stats-counter mb-2">15+</div>
              <p className="text-muted-foreground font-medium">Years Experience</p>
            </div>
            <div className="fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="stats-counter mb-2">500+</div>
              <p className="text-muted-foreground font-medium">Projects Completed</p>
            </div>
            <div className="fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="stats-counter mb-2">98%</div>
              <p className="text-muted-foreground font-medium">Customer Satisfaction</p>
            </div>
            <div className="fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="stats-counter mb-2">24hr</div>
              <p className="text-muted-foreground font-medium">Response Time</p>
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
      <section className="section-padding py-12 md:py-20 relative pattern-grid">
        {/* Geometric Accent */}
        <div className="geometric-accent w-32 h-32 top-10 right-10 rotate-45"></div>
        <div className="geometric-accent w-24 h-24 bottom-20 left-10 -rotate-12"></div>
        
        <div className="max-container relative z-10">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Why Choose A&R
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Because getting the job done shouldn't be complicated. We believe in doing <span className="accent-text font-semibold">honest work</span>, showing up on time, and treating your home like it's our own. That's it. No gimmicks. No runaround.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                 <Card key={index} className="text-center h-full hover-scale transition-all duration-300 group relative overflow-hidden shadow-lg hover:shadow-blue border-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <CardContent className="p-4 sm:p-6 relative z-10">
                    <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 icon-bounce">
                      <IconComponent className="h-7 w-7 text-primary group-hover:text-primary transition-colors duration-300" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-8 md:mt-12">
            <div className="callout-box max-w-2xl mx-auto">
              <p className="text-lg font-medium text-foreground mb-2">
                When you hire A&R, you're not just checking a box.
              </p>
              <p className="text-xl font-bold accent-text">
                You're hiring a crew that actually cares.
              </p>
            </div>
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
              <div key={index} className="text-center relative group">
                {/* Connection Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-6 h-0.5 bg-gradient-to-r from-primary to-primary/20 transform translate-x-4"></div>
                )}
                
                <div className="relative">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-white text-2xl font-bold hover-scale transition-all duration-300 relative overflow-hidden shadow-blue icon-bounce" style={{ animationDelay: `${index * 0.2}s` }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
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
              
              <div className="bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-sm rounded-lg p-6 md:p-8 shadow-elevated border border-primary/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 gradient-text relative z-10">
                  Ready to upgrade your space or fix what's broken?
                </h3>
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

export default Index;
