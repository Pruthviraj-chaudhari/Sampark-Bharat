import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Skeleton } from '@/components/ui/skeleton';
import { ProfileContext } from "@/context/MyContext";
import { useContext } from "react";

const YoutubeSection = () => {
    const { profile, loading } = useContext(ProfileContext);
    return (
        <div className="container px-4 md:px-10 mt-10">
            <Carousel>
                <CarouselContent className=''>
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
                        profile?.youtube && profile.youtube.map((videoLink, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 mx-auto">
                                <Card className="flex items-center justify-center overflow-hidden rounded-lg shadow-lg">
                                    <YouTubeEmbed videoLink={videoLink} />
                                </Card>
                            </CarouselItem>
                        ))
                    )}
                </CarouselContent>
            </Carousel>
        </div>
    )
}

export default YoutubeSection


const YouTubeEmbed = ({ videoLink }: { videoLink: string }) => {
    // Function to extract the video ID from the link
    const extractVideoId = (link: string) => {
        const url = new URL(link);
        if (url.hostname === 'youtu.be') {
            return url.pathname.substring(1);
        }
        if (url.hostname.includes('youtube.com')) {
            return url.searchParams.get('v');
        }
        return null;
    };

    const videoId = extractVideoId(videoLink);

    if (!videoId) {
        return <p>Invalid YouTube link</p>;
    }

    const embedUrl = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="relative w-full pb-[56.25%]"> {/* 16:9 Aspect Ratio */}
            <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={embedUrl}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
            ></iframe>
        </div>
    );
};