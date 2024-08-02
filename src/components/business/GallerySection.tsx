import {
    Carousel,
    CarouselMainContainer,
    SliderMainItem,
} from "@/components/ui/extension-carousel";
import { useContext, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { ProfileContext } from "@/context/MyContext";
import AutoScroll from "embla-carousel-auto-scroll";
import { Skeleton } from "@/components/ui/skeleton";
import Balancer from "react-wrap-balancer";

const GallerySection = () => {
    const [selectedImage, setSelectedImage] = useState("");
    const { profile, loading } = useContext(ProfileContext);

    // const gallery = profile?.gallery || [];
    // const midpoint = Math.ceil(gallery.length / 2);
    // const firstHalf = gallery.slice(0, midpoint);
    // const secondHalf = gallery.slice(midpoint);

    return (
        <>
        <section id="gallery" className="w-full py-12 md:py-24 lg:py-32 bg-[#DBE8F1]">
            <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-6">
                <div className="space-y-4">
                    <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                        Gallery
                    </div>
                    <h2 className="text-blue-600 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Gallery</h2>
                    <Balancer className="text-muted-foreground md:text-xl/relaxed">
                    Discover our collection of images showcasing our products, services, and achievements."
                    </Balancer>
                </div>
            </div>

            <div className="container px-4 md:px-6 col-span-3 lg:col-span-4 mt-6">
                <div className="h-full py-6">
                    <Carousel
                        plugins={[
                            AutoScroll({ speed: 1, stopOnInteraction: false, stopOnMouseEnter: true },)
                        ]}
                        carouselOptions={{ loop: true, }}
                    >
                        <CarouselMainContainer className="flex space-x-4 px-4 max-w-[90vw] mr-10">
                            {loading ? (
                                Array.from({ length: 5 }).map((_, index) => (
                                    <Skeleton key={index} className="overflow-hidden rounded-md h-60 min-w-60" />
                                ))
                            ) : (
                                profile?.gallery && profile.gallery.map((image) => (
                                    <div key={image} className="overflow-hidden rounded-md h-60 min-w-60">
                                        <SliderMainItem key={image} className=" flex items-center justify-center bg-transparent h-60 max-w-full rounded-lg">
                                            <div key={image} className="">
                                                <img
                                                    src={image}
                                                    alt="img"
                                                    className="h-60 min-w-60 object-cover transition-all hover:scale-105 rounded-lg"
                                                    onClick={() => setSelectedImage(image)}
                                                />
                                            </div>
                                        </SliderMainItem>
                                    </div>
                                ))
                            )}
                        </CarouselMainContainer>
                    </Carousel>
                </div>
                <div className="h-full py-6">
                    <div className="relative">
                        <ScrollArea>
                            <div className="flex space-x-4 pb-4 max-w-[90vw]">
                                {loading ? (
                                    Array.from({ length: 5 }).map((_, index) => (
                                        <Skeleton key={index} className="overflow-hidden rounded-md h-60 min-w-60" />
                                    ))
                                ) : (
                                    profile?.gallery && profile.gallery.map((image) => (
                                        <div key={image} className="overflow-hidden rounded-md h-60 min-w-60">
                                            <img
                                                src={image}
                                                alt="img"
                                                className="h-60 min-w-60 object-cover transition-all hover:scale-105"
                                                onClick={() => setSelectedImage(image)}
                                            />
                                        </div>
                                    ))
                                )}
                            </div>
                            <ScrollBar orientation="horizontal" />
                        </ScrollArea>
                    </div>
                </div>

                {selectedImage !== "" && (
                    <Dialog open onOpenChange={() => setSelectedImage("")}>
                        <DialogContent className="bg-background p-0 overflow-auto w-[80vw] rounded-lg">
                            <img
                                src={selectedImage}
                                alt={`Gallery Image ${selectedImage + 1}`}
                                className="object-contain w-full h-full"
                            />
                        </DialogContent>
                    </Dialog>
                )}
            </div>
        </section>
        </>
    );
}

export default GallerySection;
