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
import { businessInfo } from "@/config/businessInfo";


interface Review {
  id: number;
  name: string;
  text: string;
  rating: number;
  source: string;
  verified: boolean;
}

const reviewsData: Review[] = [
  {
    id: 1,
    name: "Rick Maynard",
    text: "Ashlee and Ryan did a great job with our project. They were so quick to respond, and then were in and out of the house before we even had time to speculate on how long the work was going to take. Very friendly and the rate was reasonable. I recommend them highly.",
    rating: 5,
    source: "Google",
    verified: true
  },
  {
    id: 2,
    name: "Sheila Donovan",
    text: "We have used them many times for different crises. They are super responsive, fair and helpful. Very nice people too. Today they helped with damage in the basement.",
    rating: 5,
    source: "Google",
    verified: true
  },
  {
    id: 3,
    name: "Aeron Finke",
    text: "Called this morning cause the flange on my toilet broke. They were able to come out within 3 hours, replace the flange and install a new toilet I bought all in about 25 minutes. The pricing was very reasonable. Will use again.",
    rating: 5,
    source: "Google",
    verified: true
  },
  {
    id: 4,
    name: "Bobbi Poston",
    text: "A & R were fantastic with our bathroom remodel. They turned our terrible 90's bathroom into a beautiful space with large shower and freestanding tub. Great communication, attention to detail, quality work with very reasonable pricing.",
    rating: 5,
    source: "Google",
    verified: true
  },
  {
    id: 5,
    name: "Shaun Lendrum",
    text: "Ashlee and Ryan were outstanding in their response to our call and the plumbing work they did for us. Their diagnosis of our problems and subsequent repairs carried out were of the highest caliber and at a more than reasonable cost.",
    rating: 5,
    source: "Google",
    verified: true
  },
  {
    id: 6,
    name: "Ben Lovell",
    text: "Ashlee and Ryan did high-quality work for a very reasonable price. We had a slow, periodic leak that occurred when we ran our shower. They were able to diagnose the issue, repair the leak, replace the hardware, and repair the tile/grout.",
    rating: 5,
    source: "Google",
    verified: true
  },
  {
    id: 7,
    name: "Lynn Mayo",
    text: "I realized that my hot water heater had probably died (it was old). I Googled plumbers in Georgetown. A&R had great reviews, so, at 2, I called them. Ryan returned my call within 10 minutes and they arrived at my house within 20 minutes.",
    rating: 5,
    source: "Google",
    verified: true
  },
  {
    id: 8,
    name: "Jason Wells",
    text: "Ashlee and Ryan did an amazing job on our basement remodel! They understood exactly what we were wanting to do and absolutely nailed it! The job was done on time and their communication was excellent every step along the way.",
    rating: 5,
    source: "Google",
    verified: true
  },
  {
    id: 9,
    name: "Steve Carter",
    text: "A & R did a fantastic job replacing my drain lines inside and outside. They were very professional and did a great job for a very fair price. Showed up really quickly and also did everything they could to save me money on the job.",
    rating: 5,
    source: "Google",
    verified: true
  },
  {
    id: 10,
    name: "Randy Case",
    text: "I just can't say enough about Ashlee and Ryan. I had them install a new faucet and re-do the drain pipes during a kitchen remodel. I wish all contractors were such a pleasure to deal with. Aside from great pricing, they completely exceeded expectations.",
    rating: 5,
    source: "Google",
    verified: true
  },
  {
    id: 11,
    name: "NovaCore",
    text: "Took them awhile to get out, but being the weekend was very understanding when I found out they are moving shortly. Diagnosed the problem and ended up replacing both the tub spout and bathroom sink faucet and now I don't have any more leaks.",
    rating: 5,
    source: "Google",
    verified: true
  },
  {
    id: 12,
    name: "Brent Pierce",
    text: "Had a slab leak. After our original plumber told us it would be at least two weeks we found these two from the great reviews. They came out within 3 minutes of my call to assess the situation. Got a quote that was well below the other estimates.",
    rating: 5,
    source: "Google",
    verified: true
  },
  {
    id: 13,
    name: "Judy Lynn",
    text: "Ryan is really one of the best I have had out here. He comes as soon as he says he will and finds and fixes the problem fast. My kitchen sink pipes had frozen and burst. He fixed it in about 15 minutes—even while sick. The price was very reasonable.",
    rating: 5,
    source: "Google",
    verified: true
  },
  {
    id: 14,
    name: "Amber Livingood",
    text: "I googled local plumbers in the Georgetown area and found A&R Remodeling & Repair. They had good reviews, so I called to explain our downstairs toilet overflowed when we ran the bath water upstairs. They were super friendly and immediately responded.",
    rating: 5,
    source: "Google",
    verified: true
  },
  {
    id: 15,
    name: "Taber Lewis",
    text: "I cannot recommend Ashlee & Ryan enough. Our toilets and shower on one side of our house weren't draining over Memorial Day weekend and they came out to help with no hesitation. The situation ended up way worse than expected, but they handled it all.",
    rating: 5,
    source: "Google",
    verified: true
  },
  {
    id: 16,
    name: "John Akin",
    text: "Contacted A&R about a plumbing issue at my home that I had unsuccessfully tried to repair. They made an appointment for the next business day and arrived on time. The repair was done well and quickly. The price was very reasonable.",
    rating: 5,
    source: "Google",
    verified: true
  },
  {
    id: 17,
    name: "Mary Bland",
    text: "Ryan and Ashley did a great job. Cleaned up after work was finished. I really appreciated their prompt and courteous work.",
    rating: 5,
    source: "Google",
    verified: true
  },
  {
    id: 18,
    name: "Alicia Campbell",
    text: "Ashlee and Ryan are a God send. I've been without hot water for a week because of a leak in my slab. Losing my mind over being in debt thousands of dollars, having to cancel plans, and bathe at the gym. They fixed it quickly and affordably.",
    rating: 5,
    source: "Google",
    verified: true
  },
  {
    id: 19,
    name: "Jesse Kelsey",
    text: "We had a pump problem in our basement. I called A&R and they were able to stop in, assess the problem and fix the issue the same day. They are knowledgeable, personable and professional. It was raining and they even took their shoes off.",
    rating: 5,
    source: "Google",
    verified: true
  },
  {
    id: 20,
    name: "Andrew Barrett",
    text: "Had a leak from my shower. They got to it within 2 hours of me calling. Came, double-checked what they needed, got the parts and fixed it. Still done within 2 hours after arriving. Very friendly, quality work, and very reasonable prices.",
    rating: 5,
    source: "Google",
    verified: true
  },
  {
    id: 21,
    name: "Josh Tackett",
    text: "Had to have new water lines run and garbage disposal installed after getting a new sink. A&R did an amazing job. Very knowledgeable and quick work. Very nice people. Will definitely use again and recommend to anyone.",
    rating: 5,
    source: "Google",
    verified: true
  },
  {
    id: 22,
    name: "Erin Tipton",
    text: "Ryan and Ashlee did our kitchen remodel for less than half of what we were quoted from other companies. They were super fast and very nice. They paid attention to detail and made sure everything was done how we wanted and done right! We will definitely be calling them again for our next project!",
    rating: 5,
    source: "Google",
    verified: true
  }
];

// Use reviews as-is since we don't have dates
const reviews = reviewsData;

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
              {businessInfo.googleReviews.rating} • Based on {businessInfo.googleReviews.displayText} Google reviews
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
                      <footer>
                        <cite className="text-sm font-medium text-foreground not-italic">
                          {review.name}
                        </cite>
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