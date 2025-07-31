import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { ReviewsCarousel } from "@/components/ReviewsCarousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Clock, DollarSign, Shield, Users, Home, Phone, ArrowRight, Award, Hammer, Zap, Droplets, Paintbrush, Star, Calendar, TrendingUp, Calculator, Wrench, PaintBucket, HardHat, Ruler, Drill } from "lucide-react";
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
        {/* Kentucky-Inspired Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/90 via-slate-900/80 to-blue-900/70"></div>
        
        {/* Kentucky State Outline Background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-8">
          <svg width="1000" height="500" viewBox="0 0 1000 500" className="max-w-full max-h-full">
            <path d="M80 250 L150 230 L250 200 L350 175 L450 163 L550 168 L650 175 L750 188 L850 200 L920 213 L920 313 L890 350 L850 375 L770 400 L690 413 L610 418 L530 423 L450 428 L370 425 L290 413 L210 400 L130 375 L80 350 Z" fill="url(#kentuckyGradient)" stroke="currentColor" strokeWidth="3" className="text-primary/30" />
            <defs>
              <linearGradient id="kentuckyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.15" />
                <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.08" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        {/* Blueprint Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full" style={{
          backgroundImage: `
                   linear-gradient(rgba(34, 197, 94, 0.3) 1px, transparent 1px),
                   linear-gradient(90deg, rgba(34, 197, 94, 0.3) 1px, transparent 1px),
                   linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
                   linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
                 `,
          backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px'
        }}>
          </div>
        </div>
        
        {/* Enhanced Floating Construction Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-16 left-[8%] w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl flex items-center justify-center backdrop-blur-sm border border-primary/10 animate-float" style={{
          animationDelay: '0s'
        }}>
            <Hammer className="h-10 w-10 text-primary/80" />
          </div>
          <div className="absolute top-20 right-[12%] w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-accent/10 animate-float" style={{
          animationDelay: '1.5s'
        }}>
            <Home className="h-8 w-8 text-accent/80" />
          </div>
          <div className="absolute bottom-32 right-[18%] w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/5 rounded-lg flex items-center justify-center backdrop-blur-sm border border-secondary/10 animate-float" style={{
          animationDelay: '2s'
        }}>
            <Paintbrush className="h-6 w-6 text-primary/70" />
          </div>
          <div className="absolute bottom-40 left-[25%] w-14 h-14 bg-gradient-to-br from-accent/20 to-accent/5 rounded-lg flex items-center justify-center backdrop-blur-sm border border-accent/10 animate-float" style={{
          animationDelay: '3s'
        }}>
            <Zap className="h-7 w-7 text-accent/70" />
          </div>
        </div>
        
        {/* Spotlights */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-primary/10 via-primary/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-radial from-accent/8 via-accent/3 to-transparent rounded-full blur-3xl"></div>
        
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
            <h1 className="font-bold mb-4 md:mb-6 text-center text-white drop-shadow-xl">
            <span className="block md:inline text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-x">A&R</span>
            <span className="block md:inline whitespace-nowrap text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl"> Remodeling & Repair</span>
          </h1>
            <div className="callout-box mb-4 md:mb-8">
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold">
                Quality Work. <span className="accent-text">No Nonsense.</span>
              </h2>
            </div>
            <p className="text-lg md:text-xl text-blue-100 mb-4 md:mb-10 leading-relaxed max-w-3xl mx-auto drop-shadow-lg">
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

      {/* Diagonal Divider */}
      <div className="relative h-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"></div>
        <svg className="absolute bottom-0 w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,120 L1200,0 L1200,120 Z" fill="hsl(var(--background))" />
        </svg>
        <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center animate-float" style={{
        animationDelay: '1s'
      }}>
          <Home className="h-3 w-3 text-accent" />
        </div>
      </div>

      {/* Stats Section */}
      <section className="section-padding py-8 md:py-16 bg-gradient-to-br from-accent/10 to-secondary/10 relative overflow-hidden">
        {/* Kentucky County Outlines Background */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" viewBox="0 0 400 300">
            <g stroke="hsl(var(--primary))" strokeWidth="1" fill="none" opacity="0.3">
              <rect x="20" y="50" width="60" height="40" rx="5" />
              <rect x="90" y="70" width="45" height="35" rx="3" />
              <rect x="150" y="60" width="55" height="45" rx="4" />
              <rect x="220" y="80" width="50" height="30" rx="3" />
              <rect x="290" y="65" width="70" height="50" rx="5" />
              <rect x="40" y="110" width="65" height="35" rx="4" />
              <rect x="120" y="130" width="40" height="40" rx="3" />
              <rect x="180" y="120" width="60" height="35" rx="4" />
              <rect x="260" y="140" width="55" height="45" rx="3" />
            </g>
          </svg>
        </div>
        <TrendingUp className="floating-icon w-6 h-6 top-8 right-20 animate-float" style={{
        animationDelay: '1.5s'
      }} />
        <Star className="floating-icon w-5 h-5 bottom-12 left-24 animate-float" style={{
        animationDelay: '3s'
      }} />
        
        <div className="max-container relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="group">
                <div className="card-elevated rounded-xl p-4 md:p-6 hover:shadow-lg hover-scale transition-all duration-300">
                  <div className="stats-counter mb-2 text-primary">15+</div>
                  <p className="text-foreground font-medium">Years Experience</p>
                </div>
              </div>
              <div className="group">
                <div className="card-elevated rounded-xl p-4 md:p-6 hover:shadow-lg hover-scale transition-all duration-300">
                  <div className="stats-counter mb-2 text-primary">500+</div>
                  <p className="text-foreground font-medium">Projects Completed</p>
                </div>
              </div>
              <div className="group">
                <div className="card-elevated rounded-xl p-4 md:p-6 hover:shadow-lg hover-scale transition-all duration-300">
                  <div className="stats-counter mb-2 text-primary">98%</div>
                  <p className="text-foreground font-medium">Customer Satisfaction</p>
                </div>
              </div>
              <div className="group">
                <div className="card-elevated rounded-xl p-4 md:p-6 hover:shadow-lg hover-scale transition-all duration-300">
                  <div className="stats-counter mb-2 text-primary">24hr</div>
                  <p className="text-foreground font-medium">Response Time</p>
                </div>
              </div>
          </div>
        </div>
      </section>

      {/* Construction Wave Divider */}
      <div className="relative h-20 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,60 Q300,0 600,60 T1200,60 L1200,120 L0,120 Z" fill="hsl(var(--primary) / 0.05)" />
          <path d="M0,80 Q300,20 600,80 T1200,80 L1200,120 L0,120 Z" fill="hsl(var(--background))" />
        </svg>
        <div className="absolute top-1/2 left-1/5 w-10 h-10 bg-gradient-to-br from-primary/15 to-accent/10 rounded-full flex items-center justify-center animate-float">
          <Hammer className="h-5 w-5 text-primary" />
        </div>
        <div className="absolute top-1/4 right-1/4 w-8 h-8 bg-gradient-to-br from-accent/15 to-primary/10 rounded-lg flex items-center justify-center animate-float" style={{
        animationDelay: '2s'
      }}>
          <Home className="h-4 w-4 text-accent" />
        </div>
      </div>

      {/* Value Proposition */}
      <section className="section-padding py-8 md:py-20 bg-gradient-to-br from-muted/30 to-accent/15 relative overflow-hidden">
        {/* Kentucky Landscape Silhouette */}
        <div className="absolute bottom-0 left-0 right-0 h-32 opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 1200 128" preserveAspectRatio="none">
            <path d="M0,128 L0,80 Q150,60 300,80 Q450,50 600,70 Q750,40 900,60 Q1050,80 1200,65 L1200,128 Z" fill="hsl(var(--primary))" />
            <path d="M0,128 L0,95 Q200,75 400,90 Q600,65 800,85 Q1000,70 1200,80 L1200,128 Z" fill="hsl(var(--accent))" />
          </svg>
        </div>
        <Shield className="floating-icon w-7 h-7 top-16 left-12 animate-float" style={{
        animationDelay: '2s'
      }} />
        <Award className="floating-icon w-6 h-6 bottom-20 right-16 animate-float" style={{
        animationDelay: '4s'
      }} />
        <CheckCircle className="floating-icon w-5 h-5 top-40 right-40 animate-float" style={{
        animationDelay: '1s'
      }} />
        
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
            return <Card key={index} className="text-center h-full card-elevated hover:shadow-lg hover-scale transition-all duration-300 group fade-in" style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  <CardContent className="p-4 sm:p-6">
                    <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center icon-bounce">
                      <IconComponent className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">{feature.description}</p>
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

      {/* Blueprint Zigzag Divider */}
      <div className="relative h-24 overflow-hidden bg-gradient-to-b from-background to-accent/5">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 L100,60 L200,0 L300,60 L400,0 L500,60 L600,0 L700,60 L800,0 L900,60 L1000,0 L1100,60 L1200,0 L1200,120 L0,120 Z" fill="none" stroke="hsl(var(--primary) / 0.3)" strokeWidth="2" strokeDasharray="5,5" />
          <path d="M0,120 L100,60 L200,120 L300,60 L400,120 L500,60 L600,120 L700,60 L800,120 L900,60 L1000,120 L1100,60 L1200,120 Z" fill="hsl(var(--background))" />
        </svg>
        <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-primary/30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-accent/30 rounded-full animate-pulse" style={{
        animationDelay: '1s'
      }}></div>
      </div>

      {/* Customer Reviews */}
      <section className="py-8 md:py-16 relative overflow-hidden bg-gradient-to-br from-background via-muted/5 to-accent/10">
        {/* Kentucky Craftsmanship Theme Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}>
          </div>
        </div>
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

      {/* Kentucky Pride Divider */}
      <div className="relative h-16 bg-gradient-to-r from-primary/5 via-accent/10 to-primary/5">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-center gap-4 text-primary/20">
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
            <span className="text-xs font-semibold tracking-widest">KENTUCKY CRAFTSMANSHIP</span>
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <section className="section-padding py-8 md:py-20 bg-gradient-to-br from-muted/40 to-primary/5 relative overflow-hidden">
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
                  
                  {/* Interactive Step Card */}
                  <div className="card-elevated hover-scale hover-glow magnetic-btn p-6 rounded-xl bg-card/70 backdrop-blur-sm border border-border/50 transition-all duration-300 group">
                    <div className="relative inline-block mb-6">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <span className="relative z-10">{step.number}</span>
                      </div>
                      
                      {/* Construction Icon */}
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center shadow-md group-hover:animate-bounce">
                        <StepIcon className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3 gradient-text group-hover:scale-105 transition-transform duration-300">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
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

      {/* Final Diagonal Transition */}
      <div className="relative h-20 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 L1200,80 L1200,120 L0,120 Z" fill="hsl(var(--accent) / 0.08)" />
          <path d="M0,40 L1200,120 L0,120 Z" fill="hsl(var(--background))" />
        </svg>
        <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-gradient-to-br from-primary/15 to-accent/10 rounded-full flex items-center justify-center animate-float">
          <Wrench className="h-4 w-4 text-primary" />
        </div>
      </div>

      {/* Service Highlights */}
      <section className="section-padding py-8 md:py-16 bg-gradient-to-br from-accent/10 to-secondary/15 relative overflow-hidden">
        {/* Georgetown Pride Background */}
        <div className="absolute inset-0 opacity-8">
          <svg width="100%" height="100%" viewBox="0 0 800 400">
            <defs>
              <pattern id="kentuckyPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="2" fill="hsl(var(--primary))" opacity="0.1"/>
                <rect x="45" y="20" width="10" height="5" fill="hsl(var(--accent))" opacity="0.05"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#kentuckyPattern)"/>
          </svg>
        </div>
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
        
        {/* Kentucky State Pride Accent */}
        <div className="absolute -bottom-20 -right-20 w-96 h-96 opacity-5">
          <svg viewBox="0 0 400 200" className="w-full h-full">
            <path d="M20 100 L60 90 L120 80 L180 70 L240 65 L300 68 L360 75 L380 100 L360 125 L300 135 L240 140 L180 135 L120 130 L60 125 L20 115 Z" fill="hsl(var(--primary))" opacity="0.3"/>
            <text x="200" y="105" textAnchor="middle" className="text-xs fill-primary" opacity="0.4">KENTUCKY</text>
          </svg>
        </div>
        
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