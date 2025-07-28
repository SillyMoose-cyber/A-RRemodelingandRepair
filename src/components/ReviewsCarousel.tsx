import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

interface Review {
  id: number;
  name: string;
  location: string;
  text: string;
  rating: number;
  date: Date;
  source: string;
  verified: boolean;
}

const reviewsData: Review[] = [
  {
    id: 1,
    name: "Sarah M.",
    location: "Georgetown, KY",
    text: "A&R Remodeling exceeded our expectations! They transformed our outdated kitchen into a beautiful, modern space. Professional, punctual, and incredible attention to detail.",
    rating: 5,
    date: new Date(2024, 6, 15), // 2 weeks ago
    source: "Google",
    verified: true
  },
  {
    id: 2,
    name: "Mike D.",
    location: "Lexington, KY", 
    text: "Outstanding plumbing service! They fixed our emergency leak quickly and efficiently. Fair pricing and excellent communication throughout the entire process.",
    rating: 5,
    date: new Date(2024, 6, 8), // 3 weeks ago
    source: "Google",
    verified: true
  },
  {
    id: 3,
    name: "Jennifer L.",
    location: "Frankfort, KY",
    text: "Best home improvement company in Central Kentucky! They remodeled our master bathroom and the results are stunning. Highly recommend their services.",
    rating: 5,
    date: new Date(2024, 5, 22), // 1 month ago
    source: "Google",
    verified: true
  },
  {
    id: 4,
    name: "Robert K.",
    location: "Versailles, KY",
    text: "Professional team that delivered exceptional results. They handled our complete home renovation with expertise and care. Worth every penny!",
    rating: 5,
    date: new Date(2024, 5, 10), // 1.5 months ago
    source: "Google",
    verified: true
  },
  {
    id: 5,
    name: "Amanda R.",
    location: "Paris, KY",
    text: "A&R Remodeling saved the day when our water heater failed. Same-day service, fair pricing, and they cleaned up perfectly. True professionals!",
    rating: 5,
    date: new Date(2024, 4, 28), // 2 months ago
    source: "Google",
    verified: true
  },
  {
    id: 6,
    name: "David W.",
    location: "Georgetown, KY",
    text: "Incredible craftsmanship on our deck renovation. The team was courteous, efficient, and the final result exceeded our expectations. Highly recommended!",
    rating: 5,
    date: new Date(2024, 4, 15), // 2.5 months ago
    source: "Google",
    verified: true
  }
];

// Sort reviews by date (most recent first)
const reviews = reviewsData.sort((a, b) => b.date.getTime() - a.date.getTime());

export const ReviewsCarousel = () => {
  return (
    <section className="section-padding py-12 bg-secondary/10">
      <div className="max-container">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="ml-2 text-sm text-muted-foreground">
              5.0 • Google Reviews
            </span>
          </div>
        </div>

        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {reviews.map((review) => (
                <CarouselItem key={review.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full bg-background/80 backdrop-blur-sm border-border/50 hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {review.source}
                        </Badge>
                      </div>
                      <blockquote className="text-sm text-muted-foreground mb-4 leading-relaxed">
                        "{review.text}"
                      </blockquote>
                      <footer className="space-y-2">
                        <div className="flex items-center justify-between">
                          <cite className="text-sm font-medium text-foreground not-italic">
                            {review.name}
                          </cite>
                          <span className="text-xs text-muted-foreground">
                            {review.location}
                          </span>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {formatDistanceToNow(review.date, { addSuffix: true })}
                        </div>
                      </footer>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 border-border hover:bg-primary hover:text-primary-foreground" />
            <CarouselNext className="right-0 border-border hover:bg-primary hover:text-primary-foreground" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};