
const GallerySection = () => {
    return (
        <section id="gallery" className="w-full py-12 md:py-24 lg:py-32 bg-orange-400">
            <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-6">
                <div className="space-y-4">
                    <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                        Gallery
                    </div>
                    <h2 className=" text-white text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">फोटो गॅलरी</h2>
                    <p className="text-white md:text-xl/relaxed">
                        Explore a collection of photos showcasing Rajabhau's commitment to his community and his work as a
                        public servant.
                    </p>
                </div>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO1NB1yvd3bCr3QSltXnWjOB08skGgui3keWiEWFaGGg2TsRZ9F9X-BA_93Xn2HS3DdKk&usqp=CAU"
                    width={400}
                    height={400}
                    alt="John Doe"
                    className="rounded-lg object-cover aspect-square"
                />
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8IzpgYG-3SFAI4N5-FCeLlUGRLZsSgrfK9g&s"
                    width={400}
                    height={400}
                    alt="John Doe"
                    className="rounded-lg object-cover aspect-square"
                />
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgutd4MD18a3KpLlLYlxjLuwV_5-YHK8YPRg&s"
                    width={400}
                    height={400}
                    alt="John Doe"
                    className="rounded-lg object-cover aspect-square"
                />
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwPUaVscFGXy_Adtd-CL2YkDr3Ydwz50290b1tdF4qF3jPUbryJ45opNCdT-O1KmKm6Io&usqp=CAU"
                    width={400}
                    height={400}
                    alt="John Doe"
                    className="rounded-lg object-cover aspect-square"
                />

                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6uQXoMDlcPUksBFWiFi9E0Na77jeRsWCoq4m5E3kgfDmxpc0SgubnU6O7FsxexOEeBE8&usqp=CAU"
                    width={400}
                    height={400}
                    alt="John Doe"
                    className="rounded-lg object-cover aspect-square"
                />
            </div>
        </section>
    )
}

export default GallerySection