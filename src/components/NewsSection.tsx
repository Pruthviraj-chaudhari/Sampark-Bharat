import { ArrowRightIcon } from '@radix-ui/react-icons'
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel'
import Autoplay from "embla-carousel-autoplay"

const NewsSection = () => {
    return (
        <section id="news" className="w-full py-12 md:py-24 lg:py-32 bg-white">
            <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-6">
                <div className="space-y-4">
                    <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">News</div>
                    <h2 className=" text-orange-400/90 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">चालू घडामोडी</h2>
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
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <Card className="overflow-hidden rounded-lg shadow-lg">
                                <CardContent>
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLWe1QTd8No4AhtyX8jnZpHyZNFTMgMJEc_Q&s"
                                        width={600}
                                        height={400}
                                        alt="News article"
                                        className="aspect-video w-full object-cover"
                                    />
                                    <div className="mt-4 space-y-2">
                                        <h3 className="text-xl font-bold">Rajabhau Waje News | सिन्नरमध्ये जल्लोष; राजाभाऊ वाजे यांना उबाठा गटाकडून उमेदवारी जाहीर |</h3>
                                        <p className="text-muted-foreground">
                                            #rajabhauwaje #nashik #abpmajha #abpमाझा #marathinews #maharashtrapolitics ...
                                        </p>
                                        <a
                                            href="#"
                                            className="inline-flex items-center gap-2 text-primary hover:underline"
                                        >
                                            Read more
                                            <ArrowRightIcon className="h-4 w-4" />
                                        </a>
                                    </div>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <Card className="overflow-hidden rounded-lg shadow-lg">
                                <CardContent>
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdCaJM6fDrivhKcYeE53DbgeF1Z9nb6TddzQ&s"
                                        width={600}
                                        height={400}
                                        alt="News article"
                                        className="aspect-video w-full object-cover"
                                    />
                                    <div className="mt-4 space-y-2">
                                        <h3 className="text-xl font-bold">Rajabhau Waje | सर्वसामान्य जनतेसाठी काम करणं हेच माझं धोरण : राजाभाऊ वाजे | tv9 marathi</h3>
                                        <p className="text-muted-foreground">
                                            #rajabhauwaje #nashik #abpmajha #abpमाझा #marathinews #maharashtrapolitics ...
                                        </p>
                                        <a
                                            href="#"
                                            className="inline-flex items-center gap-2 text-primary hover:underline"
                                        >
                                            Read more
                                            <ArrowRightIcon className="h-4 w-4" />
                                        </a>
                                    </div>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <Card className="overflow-hidden rounded-lg shadow-lg">
                                <CardContent>
                                    <img
                                        src="https://i.ytimg.com/vi/L-JLTtNiwo8/maxresdefault.jpg"
                                        width={600}
                                        height={400}
                                        alt="News article"
                                        className="aspect-video w-full object-cover"
                                    />
                                    <div className="mt-4 space-y-2">
                                        <h3 className="text-xl font-bold">Rajabhau Vaje Sabha Live । राजाभाऊ वाजे यांची विजयी संकल्प सभा लाईव्ह | Marathi News</h3>
                                        <p className="text-muted-foreground">
                                            #rajabhauwaje #nashik #abpmajha #abpमाझा #marathinews #maharashtrapolitics ...
                                        </p>
                                        <a
                                            href="#"
                                            className="inline-flex items-center gap-2 text-primary hover:underline"
                                        >
                                            Read more
                                            <ArrowRightIcon className="h-4 w-4" />
                                        </a>
                                    </div>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <Card className="overflow-hidden rounded-lg shadow-lg">
                                <CardContent>
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7k9vT_t8ml6o_8EYGiFlGBBdrTqwylU2Y1qg_2m-JQ4d1dWk2uE4tuF32LutPHFfZoNA&usqp=CAU"
                                        width={600}
                                        height={400}
                                        alt="News article"
                                        className="aspect-video w-full object-cover"
                                    />
                                    <div className="mt-4 space-y-2">
                                        <h3 className="text-xl font-bold">Rajabhau Waje Nashik : महायुतीचा उमेदवार ठरेना, मविआचे राजाभाऊ वाजे मैदानात</h3>
                                        <p className="text-muted-foreground">
                                            #rajabhauwaje #nashik #abpmajha #abpमाझा #marathinews #maharashtrapolitics ...
                                        </p>
                                        <a
                                            href="#"
                                            className="inline-flex items-center gap-2 text-primary hover:underline"
                                        >
                                            Read more
                                            <ArrowRightIcon className="h-4 w-4" />
                                        </a>
                                    </div>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <Card className="overflow-hidden rounded-lg shadow-lg">
                                <CardContent>
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLWe1QTd8No4AhtyX8jnZpHyZNFTMgMJEc_Q&s"
                                        width={600}
                                        height={400}
                                        alt="News article"
                                        className="aspect-video w-full object-cover"
                                    />
                                    <div className="mt-4 space-y-2">
                                        <h3 className="text-xl font-bold">Rajabhau Waje News | सिन्नरमध्ये जल्लोष; राजाभाऊ वाजे यांना उबाठा गटाकडून उमेदवारी जाहीर |</h3>
                                        <p className="text-muted-foreground">
                                            #rajabhauwaje #nashik #abpmajha #abpमाझा #marathinews #maharashtrapolitics ...
                                        </p>
                                        <a
                                            href="#"
                                            className="inline-flex items-center gap-2 text-primary hover:underline"
                                        >
                                            Read more
                                            <ArrowRightIcon className="h-4 w-4" />
                                        </a>
                                    </div>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <Card className="overflow-hidden rounded-lg shadow-lg">
                                <CardContent>
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdCaJM6fDrivhKcYeE53DbgeF1Z9nb6TddzQ&s"
                                        width={600}
                                        height={400}
                                        alt="News article"
                                        className="aspect-video w-full object-cover"
                                    />
                                    <div className="mt-4 space-y-2">
                                        <h3 className="text-xl font-bold">Rajabhau Waje | सर्वसामान्य जनतेसाठी काम करणं हेच माझं धोरण : राजाभाऊ वाजे | tv9 marathi</h3>
                                        <p className="text-muted-foreground">
                                            #rajabhauwaje #nashik #abpmajha #abpमाझा #marathinews #maharashtrapolitics ...
                                        </p>
                                        <a
                                            href="#"
                                            className="inline-flex items-center gap-2 text-primary hover:underline"
                                        >
                                            Read more
                                            <ArrowRightIcon className="h-4 w-4" />
                                        </a>
                                    </div>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    </CarouselContent>
                </Carousel>
            </div>
        </section>
    )
}

export default NewsSection