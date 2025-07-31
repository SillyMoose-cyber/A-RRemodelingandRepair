import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wrench, Droplets, Bath, ChefHat, Home, Thermometer, TreePine, Phone, ArrowRight } from "lucide-react";
const Services = () => {
  const services = [{
    icon: Droplets,
    title: "Plumbing Repairs",
    items: ["Faucet, toilet, and sink replacements", "Leak detection and drain line repair", "Water heater installation and upgrades"]
  }, {
    icon: Bath,
    title: "Bathroom Remodels",
    items: ["Tub and shower replacements", "Vanity and tile updates", "Full redesign and layout changes"]
  }, {
    icon: ChefHat,
    title: "Kitchen Renovations",
    items: ["Cabinet replacement and countertop upgrades", "New plumbing and fixture installation", "Backsplash, flooring, and lighting updates"]
  }, {
    icon: Home,
    title: "Home Renovation Projects",
    items: ["Laundry rooms, breakfast nooks, basement updates", "Whole-home remodels and new construction", "Custom additions and layout changes"]
  }, {
    icon: Thermometer,
    title: "Energy-Efficient Upgrades",
    items: ["Radiant floor heating systems", "Whole-house fans and HVAC improvements", "Smart utility and comfort enhancements"]
  }, {
    icon: TreePine,
    title: "Outdoor & Specialty Spaces",
    items: ["Porches, decks, and patios", "Outdoor living areas and ADU builds", "Entryway, garage, or utility room remodels"]
  }];
  return <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="section-padding py-16 md:py-24 relative overflow-hidden">
        {/* Kentucky-Inspired Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/90 via-slate-900/80 to-blue-900/70"></div>
        
        {/* Kentucky State Outline Background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <svg width="800" height="400" viewBox="0 0 800 400" className="max-w-full max-h-full">
            <path d="M50 200 L120 180 L200 160 L280 140 L360 130 L440 135 L520 140 L600 150 L680 160 L750 170 L750 250 L720 280 L680 300 L620 320 L560 330 L500 335 L440 340 L380 345 L320 350 L260 340 L200 330 L140 320 L80 300 L50 280 Z" fill="url(#kentuckyGradient)" stroke="currentColor" strokeWidth="2" className="text-primary/30" />
            <defs>
              <linearGradient id="kentuckyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
                <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.05" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        {/* Dynamic Blueprint Grid Pattern */}
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
        
        {/* Animated Construction Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large floating tools */}
          <div className="absolute top-16 left-[8%] w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl flex items-center justify-center backdrop-blur-sm border border-primary/10 animate-float" style={{
          animationDelay: '0s'
        }}>
            <Wrench className="h-10 w-10 text-primary/80" />
          </div>
          <div className="absolute top-20 right-[12%] w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-accent/10 animate-float" style={{
          animationDelay: '1.5s'
        }}>
            <Home className="h-8 w-8 text-accent/80" />
          </div>
          <div className="absolute top-40 left-[15%] w-14 h-14 bg-gradient-to-br from-primary/20 to-secondary/5 rounded-xl flex items-center justify-center backdrop-blur-sm border border-primary/10 animate-float" style={{
          animationDelay: '3s'
        }}>
            <ChefHat className="h-7 w-7 text-primary/70" />
          </div>
          <div className="absolute bottom-32 right-[18%] w-12 h-12 bg-gradient-to-br from-secondary/20 to-secondary/5 rounded-lg flex items-center justify-center backdrop-blur-sm border border-secondary/10 animate-float" style={{
          animationDelay: '2s'
        }}>
            <Bath className="h-6 w-6 text-primary/70" />
          </div>
          <div className="absolute bottom-40 left-[25%] w-10 h-10 bg-gradient-to-br from-accent/20 to-accent/5 rounded-lg flex items-center justify-center backdrop-blur-sm border border-accent/10 animate-float" style={{
          animationDelay: '4s'
        }}>
            <Thermometer className="h-5 w-5 text-accent/70" />
          </div>
          
          {/* Subtle construction particles */}
          <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-primary/40 rounded-full animate-pulse" style={{
          animationDelay: '1s'
        }}></div>
          <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-accent/30 rounded-full animate-pulse" style={{
          animationDelay: '2.5s'
        }}></div>
          <div className="absolute top-1/2 left-1/5 w-1.5 h-1.5 bg-primary/50 rounded-full animate-pulse" style={{
          animationDelay: '3.5s'
        }}></div>
          <div className="absolute bottom-1/3 right-1/3 w-2.5 h-2.5 bg-secondary/40 rounded-full animate-pulse" style={{
          animationDelay: '0.5s'
        }}></div>
        </div>
        
        {/* Spotlights */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-primary/10 via-primary/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-radial from-accent/8 via-accent/3 to-transparent rounded-full blur-3xl"></div>
        
        <div className="max-container relative z-10">
          {/* Kentucky Outline Text Container */}
          <div className="relative">
            {/* Subtle Kentucky outline behind text */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
              <svg width="600" height="300" viewBox="0 0 600 300" className="max-w-full">
                <path d="M40 150 L90 135 L150 120 L210 105 L270 98 L330 101 L390 105 L450 113 L510 120 L563 128 L563 188 L540 210 L510 225 L465 240 L420 248 L375 251 L330 255 L285 259 L240 255 L195 248 L150 240 L105 225 L60 210 L40 188 Z" fill="none" stroke="hsl(var(--primary))" strokeWidth="3" strokeOpacity="0.4" className="drop-shadow-lg" />
              </svg>
            </div>
            
            <div className="text-center max-w-4xl mx-auto fade-in relative z-10">
              {/* Enhanced Trust Badges */}
              
              
              {/* Hero headline with enhanced styling */}
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 md:mb-10 leading-tight text-white drop-shadow-xl">
                Transform Your Home with
                <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-x shadow-2xl" style={{
                  textShadow: '0 0 20px hsl(var(--primary) / 0.4), 0 4px 8px rgba(0,0,0,0.3)',
                  WebkitTextStroke: '1px hsl(var(--primary) / 0.1)',
                  background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary)))',
                  backgroundClip: 'text',
                  padding: '0.2rem 0.5rem',
                  backdropFilter: 'blur(2px)',
                  borderRadius: '0.5rem',
                  position: 'relative'
                }}>
                  Expert Care
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-blue-100 mb-10 md:mb-14 leading-relaxed max-w-3xl mx-auto drop-shadow-lg">
                Quality repairs, stunning remodels, and smart upgrades for Georgetown homeowners. Every project completed with precision, on time, and within budget.
              </p>
              
              {/* Enhanced Contact Section */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20 shadow-2xl max-w-lg mx-auto">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a href="tel:5023707415" className="inline-flex items-center gap-3 text-xl md:text-2xl font-bold text-white hover:text-primary/90 transition-all duration-300 group">
                    <Phone className="h-6 w-6 group-hover:animate-pulse" />
                    (502) 370-7415
                  </a>
                </div>
                <p className="text-blue-100 mt-3 text-sm">Call today for your free estimate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

      {/* Services Overview */}
      <section className="section-padding py-16 md:py-20 bg-gradient-to-br from-accent/10 to-secondary/10 relative">
        <div className="max-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              What We Do Best
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Every project is unique, but our approach remains consistent: quality workmanship, clear communication, and results that exceed expectations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                <Wrench className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Repairs</h3>
              <p className="text-muted-foreground">Quick fixes and complex repairs handled with precision and care.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                <Home className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Full Remodels</h3>
              <p className="text-muted-foreground">Transform your space with comprehensive renovation solutions.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                <ArrowRight className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Upgrades</h3>
              <p className="text-muted-foreground">Modern improvements that add value and functionality to your home.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding py-16 md:py-20 relative pattern-grid">
        {/* Enhanced Geometric Accents */}
        <div className="geometric-accent w-32 h-32 top-10 right-10 rotate-45 opacity-20"></div>
        <div className="geometric-accent w-24 h-24 bottom-20 left-10 -rotate-12 opacity-20"></div>
        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-primary/30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-accent/30 rounded-full animate-pulse" style={{
        animationDelay: '1s'
      }}></div>
        
        <div className="max-container relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Our Complete Service List
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From quick repairs to complete renovations, we handle it all with the same level of care and expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => {
            const IconComponent = service.icon;
            const isEven = index % 2 === 0;
            return <Card key={index} className={`h-full hover-scale transition-all duration-300 group relative overflow-hidden shadow-lg hover:shadow-blue border-0 ${isEven ? 'md:transform md:translate-y-4' : ''}`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/5 to-transparent rounded-full -translate-y-10 translate-x-10"></div>
                  <CardContent className="p-6 relative z-10">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 icon-bounce flex-shrink-0">
                        <IconComponent className="h-7 w-7 text-primary group-hover:text-primary transition-colors duration-300" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {service.items.map((item, itemIndex) => <li key={itemIndex} className="text-sm sm:text-base text-muted-foreground flex items-start group/item">
                          <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2.5 mr-3 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-200"></span>
                          <span className="group-hover/item:text-foreground transition-colors duration-200">{item}</span>
                        </li>)}
                    </ul>
                  </CardContent>
                </Card>;
          })}
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="section-padding py-12 bg-gradient-to-r from-secondary/10 to-accent/10 border-y border-border/50">
        <div className="max-container">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 gradient-text">Serving Georgetown & Surrounding Areas</h3>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {['Georgetown', 'Lexington', 'Frankfort', 'Versailles', 'Midway'].map((area, index) => <Badge key={index} variant="secondary" className="text-sm px-3 py-1 hover:bg-primary/10 transition-colors duration-200">
                  {area}
                </Badge>)}
              <Badge variant="outline" className="text-sm px-3 py-1 bg-gradient-to-r from-primary/20 to-accent/20 border-primary/30 text-primary font-medium hover:bg-primary/10 transition-all duration-200">
                And More...
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

      {/* CTA Section */}
      <section className="section-padding py-16 md:py-20 bg-gradient-to-br from-accent/5 to-secondary/10 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 pattern-dots opacity-30"></div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-primary/5 to-transparent rounded-full -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-accent/5 to-transparent rounded-full translate-x-32 translate-y-32"></div>
        
        <div className="max-container relative z-10">
          <div className="text-center mb-8 md:mb-12">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                Let's Build Something Great Together
              </h3>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 md:mb-10 leading-relaxed">
                Ready to transform your space? Call us for a free consultation and estimate. We'll discuss your vision, timeline, and budget to create the perfect solution for your home.
              </p>
              
              <div className="bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-elevated border border-primary/20 relative overflow-hidden max-w-2xl mx-auto">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-accent/10 to-transparent rounded-full translate-y-12 -translate-x-12"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <Phone className="h-8 w-8 text-primary animate-pulse" />
                    <p className="text-2xl md:text-3xl font-bold">
                      <a href="tel:5023707415" className="accent-text hover:underline transition-colors magnetic-btn">(502) 370-7415</a>
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap justify-center gap-3">
                    <div className="trust-badge">
                      ⚡ Free Estimates
                    </div>
                    
                    <div className="trust-badge">
                      ⭐ 5-Star Service
                    </div>
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
export default Services;