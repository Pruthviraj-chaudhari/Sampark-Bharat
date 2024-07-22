import { ArrowRightIcon } from '@radix-ui/react-icons';
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';
import Autoplay from "embla-carousel-autoplay";
import { useContext } from 'react';
import { ProfileContext } from '@/context/MyContext';
import { Skeleton } from './ui/skeleton';

const NewsSection = () => {
  const { profile, loading } = useContext(ProfileContext);

  return (
    <section id="news" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-6">
        <div className="space-y-4">
          <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">News</div>
          <h2 className="text-orange-400/90 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">चालू घडामोडी</h2>
          <p className="text-muted-foreground md:text-xl/relaxed">
            Stay up-to-date with the latest news, speeches, and events featuring Rajabhau Waje.
          </p>
        </div>
      </div>
      <div className="container px-4 md:px-10 mt-8">
        <Carousel plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}>
          <CarouselContent>
            {loading ? (
              Array.from({ length: 3 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden rounded-lg shadow-lg">
                    <CardContent>
                      <Skeleton className="aspect-video w-full object-cover h-56" />
                      <div className="mt-4 space-y-2">
                        <Skeleton className="h-6 w-3/4 rounded" />
                        <Skeleton className="h-4 w-full rounded" />
                        <Skeleton className="h-4 w-1/2 rounded" />
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))
            ) : (
              profile?.news && profile.news.map((item, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden rounded-lg shadow-lg">
                    <CardContent>
                      <img
                        src={item.image}
                        width={600}
                        height={400}
                        alt="News article"
                        className="aspect-video w-full object-cover"
                        loading="lazy"
                      />
                      <div className="mt-4 space-y-2">
                        <h3 className="text-xl font-bold">{item.heading}</h3>
                        <p className="text-muted-foreground">
                          {item.heading} ...
                        </p>
                        <a
                          href={item.link}
                          className="inline-flex items-center gap-2 text-primary hover:underline"
                        >
                          Read more
                          <ArrowRightIcon className="h-4 w-4" />
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))
            )}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}

export default NewsSection;
