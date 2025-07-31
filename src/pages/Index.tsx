import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { ReviewsCarousel } from "@/components/ReviewsCarousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Clock, DollarSign, Shield, Users, Home, Phone, ArrowRight, Award, Hammer, Zap, Droplets, Paintbrush, Star, Calendar, TrendingUp, Calculator, Wrench, PaintBucket, HardHat, Ruler, Drill, Settings, Cog, RotateCcw, Bolt, Nut, Gauge, Compass, Square } from "lucide-react";
const Index = () => {
  const features = [{
    icon: Clock,
    title: "Fast Response Times",
    description: "We show up when we say we will — and get to work."
  }, {
    icon: DollarSign,
    title: "Fair, Upfront Pricing",
    description: "You'll know the full cost before we begin."
  }, {
    icon: Shield,
    title: "Quality Over Corners",
    description: "We take pride in doing things the right way."
  }, {
    icon: Home,
    title: "Respect for Your Space",
    description: "Clean, professional, and mess-free."
  }, {
    icon: Users,
    title: "Local + Loyal",
    description: "Most of our work comes from referrals."
  }, {
    icon: Award,
    title: "We Stand Behind Our Work",
    description: "If it's not right, we'll make it right — no questions asked."
  }];
  const processSteps = [{
    number: "1",
    title: "Get in Touch",
    description: "Call or text us at (502) 370-7415. Tell us what you need — we'll listen."
  }, {
    number: "2",
    title: "Get a Quote",
    description: "We'll give you honest pricing and explain what the job involves."
  }, {
    number: "3",
    title: "Get to Work",
    description: "We show up on time, do it right the first time, and treat your home with care."
  }, {
    number: "4",
    title: "Get It Done",
    description: "No loose ends. No mess left behind. Just results you can count on."
  }];
  return <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="section-padding py-8 md:py-20 relative overflow-hidden">
        {/* Industrial layered background */}
        <div className="absolute inset-0" style={{
        background: 'var(--gradient-hero)'
      }}></div>
        <div className="absolute inset-0 pattern-concrete"></div>
        <div className="absolute inset-0 pattern-blueprint opacity-30"></div>
        
        {/* Massive floating construction icon array */}
        <Hammer className="floating-icon w-12 h-12 top-8 left-8 text-construction-orange/15" style={{animationDelay: '0s'}} />
        <Paintbrush className="floating-icon w-8 h-8 top-24 right-16 text-primary/12" style={{animationDelay: '2s'}} />
        <Zap className="floating-icon w-10 h-10 bottom-32 left-12 text-safety-yellow/18" style={{animationDelay: '4s'}} />
        <Droplets className="floating-icon w-7 h-7 top-40 right-24 text-primary/15" style={{animationDelay: '1s'}} />
        <Wrench className="floating-icon w-9 h-9 top-16 left-32 text-steel-gray/20" style={{animationDelay: '3s'}} />
        <Settings className="floating-icon w-6 h-6 bottom-48 right-8 text-construction-orange/12" style={{animationDelay: '5s'}} />
        <Wrench className="floating-icon w-11 h-11 top-52 left-20 text-steel-gray/15" style={{animationDelay: '1.5s'}} />
        <Settings className="floating-icon w-8 h-8 bottom-20 right-40 text-primary/14" style={{animationDelay: '2.5s'}} />
        <HardHat className="floating-icon w-10 h-10 top-32 right-8 text-safety-yellow/16" style={{animationDelay: '3.5s'}} />
        <Ruler className="floating-icon w-7 h-7 bottom-40 left-40 text-steel-gray/18" style={{animationDelay: '4.5s'}} />
        <Drill className="floating-icon w-9 h-9 top-60 right-32 text-construction-orange/14" style={{animationDelay: '0.8s'}} />
        <Cog className="floating-icon w-6 h-6 bottom-12 left-48 text-primary/12" style={{animationDelay: '1.8s'}} />
        <Settings className="floating-icon w-8 h-8 top-20 left-56 text-steel-gray/16" style={{animationDelay: '2.8s'}} />
        <Wrench className="floating-icon w-7 h-7 bottom-28 right-20 text-construction-orange/13" style={{animationDelay: '3.8s'}} />
        <PaintBucket className="floating-icon w-10 h-10 top-44 left-4 text-primary/15" style={{animationDelay: '4.8s'}} />
        <Bolt className="floating-icon w-5 h-5 bottom-52 right-12 text-steel-gray/14" style={{animationDelay: '5.8s'}} />
        <Nut className="floating-icon w-6 h-6 top-12 right-52 text-safety-yellow/12" style={{animationDelay: '6s'}} />
        <Gauge className="floating-icon w-8 h-8 bottom-16 left-24 text-construction-orange/16" style={{animationDelay: '0.3s'}} />
        <Compass className="floating-icon w-7 h-7 top-36 right-44 text-primary/13" style={{animationDelay: '1.3s'}} />
        <Square className="floating-icon w-9 h-9 bottom-44 left-16 text-steel-gray/17" style={{animationDelay: '2.3s'}} />
        
        {/* Large construction equipment silhouettes */}
        <div className="equipment-silhouette w-40 h-32 -top-16 -right-20 transform rotate-12 rounded-lg"></div>
        <div className="equipment-silhouette w-48 h-24 -bottom-12 -left-24 transform -rotate-6 rounded-lg"></div>
        <div className="equipment-silhouette w-32 h-20 top-1/2 -left-16 transform rotate-45 rounded-lg"></div>
        
        {/* Tool shadow overlays */}
        <div className="tool-shadow w-64 h-64 top-20 right-20 transform rotate-45">
          <div className="w-full h-full bg-gradient-to-br from-steel-gray/8 to-transparent rounded-lg"></div>
        </div>
        <div className="tool-shadow w-48 h-48 bottom-32 left-32 transform -rotate-30">
          <div className="w-full h-full bg-gradient-to-tl from-construction-orange/6 to-transparent rounded-lg"></div>
        </div>
        
        <div className="max-container relative z-10">
          <div className="text-center max-w-4xl mx-auto">
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
            <div className="callout-box mb-4 md:mb-8">
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold">
                Quality Work. <span className="accent-text">No Nonsense.</span>
              </h2>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground mb-4 md:mb-10 leading-relaxed max-w-3xl mx-auto">
              At A&R Remodeling & Repair, we specialize in turning houses into homes — whether you need a quick plumbing fix or a full kitchen remodel. Based in Georgetown, Kentucky, we proudly serve homeowners across Central KY with dependable service, honest pricing, and craftsmanship that speaks for itself.
            </p>
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
                <Button size="lg" className="text-lg px-8 magnetic-btn hover-glow" asChild>
                  <a href="tel:5023707415">
                    <Phone className="h-5 w-5 mr-2" />
                    Call (502) 370-7415
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 magnetic-btn" asChild>
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
      <section className="section-padding py-8 md:py-16 bg-muted/30 relative overflow-hidden">
        {/* Industrial dashboard background */}
        <div className="absolute inset-0 pattern-metal"></div>
        <div className="absolute inset-0 pattern-grid opacity-8"></div>
        
        {/* Floating gauges and measurement tools */}
        <TrendingUp className="floating-icon w-8 h-8 top-8 right-20 text-construction-orange/15" style={{animationDelay: '1.5s'}} />
        <Star className="floating-icon w-6 h-6 bottom-12 left-24 text-safety-yellow/18" style={{animationDelay: '3s'}} />
        <Gauge className="floating-icon w-10 h-10 top-20 left-16 text-steel-gray/16" style={{animationDelay: '0.5s'}} />
        <Calculator className="floating-icon w-7 h-7 bottom-20 right-32 text-primary/14" style={{animationDelay: '2.5s'}} />
        <Ruler className="floating-icon w-9 h-9 top-32 right-8 text-construction-orange/12" style={{animationDelay: '4s'}} />
        <Compass className="floating-icon w-6 h-6 bottom-32 left-40 text-steel-gray/15" style={{animationDelay: '1.8s'}} />
        <Square className="floating-icon w-8 h-8 top-12 left-48 text-safety-yellow/13" style={{animationDelay: '3.2s'}} />
        
        <div className="max-container relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="group">
                <div className="card-industrial rounded-sm p-4 md:p-6 hover:shadow-lg hover-scale transition-all duration-300">
                  <div className="stats-counter mb-2 text-primary">15+</div>
                  <p className="text-foreground font-bold">Years Experience</p>
                </div>
              </div>
              <div className="group">
                <div className="card-industrial rounded-sm p-4 md:p-6 hover:shadow-lg hover-scale transition-all duration-300">
                  <div className="stats-counter mb-2 text-primary">500+</div>
                  <p className="text-foreground font-bold">Projects Completed</p>
                </div>
              </div>
              <div className="group">
                <div className="card-industrial rounded-sm p-4 md:p-6 hover:shadow-lg hover-scale transition-all duration-300">
                  <div className="stats-counter mb-2 text-primary">98%</div>
                  <p className="text-foreground font-bold">Customer Satisfaction</p>
                </div>
              </div>
              <div className="group">
                <div className="card-industrial rounded-sm p-4 md:p-6 hover:shadow-lg hover-scale transition-all duration-300">
                  <div className="stats-counter mb-2 text-primary">24hr</div>
                  <p className="text-foreground font-bold">Response Time</p>
                </div>
              </div>
          </div>
        </div>
      </section>

      <Separator className="my-4 md:my-8" />

      {/* Value Proposition */}
      <section className="section-padding py-8 md:py-20 bg-muted/20 relative overflow-hidden">
        {/* Toolbox/workshop background */}
        <div className="absolute inset-0 pattern-concrete"></div>
        <div className="absolute inset-0 pattern-dots opacity-40"></div>
        
        {/* Dense floating tool arrangement */}
        <Shield className="floating-icon w-9 h-9 top-16 left-12 text-construction-orange/18" style={{animationDelay: '2s'}} />
        <Award className="floating-icon w-8 h-8 bottom-20 right-16 text-safety-yellow/16" style={{animationDelay: '4s'}} />
        <CheckCircle className="floating-icon w-7 h-7 top-40 right-40 text-primary/15" style={{animationDelay: '1s'}} />
        <Hammer className="floating-icon w-10 h-10 top-8 right-8 text-steel-gray/14" style={{animationDelay: '0.5s'}} />
        <Wrench className="floating-icon w-6 h-6 bottom-32 left-20 text-construction-orange/13" style={{animationDelay: '1.5s'}} />
        <Settings className="floating-icon w-8 h-8 top-24 left-48 text-primary/16" style={{animationDelay: '2.5s'}} />
        <Drill className="floating-icon w-7 h-7 bottom-12 right-32 text-steel-gray/15" style={{animationDelay: '3.5s'}} />
        <Wrench className="floating-icon w-9 h-9 top-52 right-20 text-safety-yellow/14" style={{animationDelay: '4.5s'}} />
        <PaintBucket className="floating-icon w-6 h-6 bottom-48 left-40 text-construction-orange/12" style={{animationDelay: '5.5s'}} />
        <Ruler className="floating-icon w-8 h-8 top-32 left-8 text-primary/17" style={{animationDelay: '6s'}} />
        <HardHat className="floating-icon w-10 h-10 bottom-8 right-48 text-steel-gray/16" style={{animationDelay: '0.8s'}} />
        <Settings className="floating-icon w-7 h-7 top-48 left-32 text-safety-yellow/13" style={{animationDelay: '1.8s'}} />
        
        {/* Tool storage/workshop geometric overlays */}
        <div className="geometric-accent w-96 h-48 -top-24 -left-48 transform rotate-6"></div>
        <div className="equipment-silhouette w-64 h-32 -bottom-16 -right-32 transform -rotate-12 rounded-lg"></div>
        
        <div className="max-container relative z-10">
          <div className="text-center mb-6 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Why Choose A&R
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Because getting the job done shouldn't be complicated. We believe in doing <span className="accent-text font-semibold">honest work</span>, showing up on time, and treating your home like it's our own. That's it. No gimmicks. No runaround.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return <Card key={index} className="text-center h-full card-clipboard hover:shadow-lg hover-scale transition-all duration-300 group fade-in" style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  <CardContent className="p-4 sm:p-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-construction-orange/20 to-safety-yellow/20 rounded-sm flex items-center justify-center icon-bounce border-2 border-steel-gray/20">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-3 text-steel-gray">{feature.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground font-medium">{feature.description}</p>
                  </CardContent>
                </Card>;
          })}
          </div>

          <div className="text-center mt-4 md:mt-12">
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

      <Separator className="my-4 md:my-8" />

      {/* Customer Reviews */}
      <section className="py-8 md:py-16 relative overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-muted/10 to-background"></div>
        <Users className="floating-icon w-6 h-6 top-12 left-20 animate-float" style={{
        animationDelay: '3s'
      }} />
        <Star className="floating-icon w-5 h-5 bottom-16 right-24 animate-float" style={{
        animationDelay: '1.5s'
      }} />
        
        <div className="max-container relative z-10">
          <ReviewsCarousel />
        </div>
      </section>

      <Separator className="my-4 md:my-8" />

      {/* Process Section */}
      <section className="section-padding py-8 md:py-20 bg-muted/30 relative overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 pattern-grid opacity-5"></div>
        <div className="absolute inset-0 pattern-dots opacity-10"></div>
        
        {/* Floating Construction Icons */}
        <div className="absolute top-10 left-10 floating-icon">
          <Hammer className="w-6 h-6 text-primary/20" />
        </div>
        <div className="absolute bottom-20 right-20 floating-icon" style={{
        animationDelay: '1s'
      }}>
          <Wrench className="w-8 h-8 text-accent/20" />
        </div>
        <div className="absolute top-32 right-32 floating-icon" style={{
        animationDelay: '2s'
      }}>
          <PaintBucket className="w-5 h-5 text-secondary/20" />
        </div>
        <div className="absolute bottom-32 left-32 floating-icon" style={{
        animationDelay: '3s'
      }}>
          <HardHat className="w-7 h-7 text-primary/15" />
        </div>
        <div className="absolute top-1/2 left-16 floating-icon" style={{
        animationDelay: '4s'
      }}>
          <Ruler className="w-6 h-6 text-accent/15" />
        </div>
        <div className="absolute top-20 right-16 floating-icon" style={{
        animationDelay: '5s'
      }}>
          <Drill className="w-5 h-5 text-secondary/15" />
        </div>
        
        {/* Geometric Accent Shapes */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-br from-accent/5 to-secondary/5 rounded-full blur-xl"></div>
        
        <div className="max-container">
          <div className="text-center mb-20 fade-in">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple, transparent, and designed to deliver <span className="accent-text">exceptional results</span> every time
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {processSteps.map((step, index) => {
            const stepIcons = [Phone, Calculator, Hammer, CheckCircle];
            const StepIcon = stepIcons[index];
            return <div key={index} className="text-center relative fade-in" style={{
              animationDelay: `${index * 0.2}s`
            }}>
                  {/* Enhanced Connection Line with Arrow */}
                  {index < processSteps.length - 1 && <div className="hidden lg:block absolute top-12 left-full w-12 h-0.5 transform translate-x-6">
                      <div className="w-full h-full bg-gradient-to-r from-primary via-accent to-primary opacity-40 animate-pulse"></div>
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1">
                        <div className="w-2 h-2 bg-primary rotate-45 opacity-60"></div>
                      </div>
                    </div>}
                  
                  {/* Industrial Process Card */}
                  <div className="card-clipboard hover-scale hover-glow magnetic-btn p-6 rounded-sm bg-card/90 backdrop-blur-sm border-2 border-steel-gray/30 transition-all duration-300 group relative">
                    <div className="relative inline-block mb-6">
                      <div className="w-24 h-24 rounded-sm bg-gradient-to-br from-construction-orange to-safety-yellow flex items-center justify-center text-white font-black text-2xl shadow-xl group-hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden border-2 border-steel-gray/30">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <span className="relative z-10 text-shadow">{step.number}</span>
                      </div>
                      
                      {/* Construction Tool Badge */}
                      <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-gradient-to-br from-steel-gray to-concrete-gray rounded-sm flex items-center justify-center shadow-lg group-hover:animate-bounce border border-steel-gray/50">
                        <StepIcon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-steel-gray group-hover:scale-105 transition-transform duration-300">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed font-medium">{step.description}</p>
                  </div>
                </div>;
          })}
          </div>
          
          <div className="mt-20 text-center fade-in" style={{
          animationDelay: '1s'
        }}>
            
          </div>
        </div>
      </section>

      <Separator className="my-4 md:my-8" />

      {/* Service Highlights */}
      <section className="section-padding py-8 md:py-16 bg-muted/20 relative overflow-hidden">
        {/* Final section enhancements */}
        <div className="absolute inset-0 pattern-dots opacity-20"></div>
        <Home className="floating-icon w-8 h-8 top-12 left-24 animate-float" style={{
        animationDelay: '0.5s'
      }} />
        <Paintbrush className="floating-icon w-6 h-6 bottom-20 left-16 animate-float" style={{
        animationDelay: '2.5s'
      }} />
        <Droplets className="floating-icon w-7 h-7 top-32 right-28 animate-float" style={{
        animationDelay: '1.8s'
      }} />
        <Zap className="floating-icon w-5 h-5 bottom-32 right-40 animate-float" style={{
        animationDelay: '3.2s'
      }} />
        
        {/* Large geometric background */}
        <div className="geometric-accent w-[120%] h-64 -bottom-32 -left-20 transform rotate-3"></div>
        
        <div className="max-container relative z-10">
          <div className="text-center mb-4 md:mb-12">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 leading-relaxed">
                From leaky faucets to radiant floor systems, no job is too big or too small. We show up when we say we will, do the work right the first time, and leave your space cleaner than we found it. That's why so many of our customers call us back — and send their friends our way.
              </p>
              
              <div className="card-elevated rounded-2xl p-4 md:p-8 text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 gradient-text">
                  Ready to upgrade your space or fix what's broken?
                </h3>
                <div className="flex flex-col items-center gap-4">
                  <p className="text-xl md:text-2xl font-bold">
                    📞 Call <a href="tel:5023707415" className="accent-text hover:underline transition-colors">(502) 370-7415</a>
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
    </div>;
};
export default Index;