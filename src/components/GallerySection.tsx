import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { cn } from "@/lib/utils";

const GallerySection = () => {

    const [selectedImage, setSelectedImage] = useState("");
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
            </div>

            <div className="col-span-3 lg:col-span-4 lg:border-l mt-6">
                <div className="h-full px-4 py-6 lg:px-8">
                    <div className="relative">
                        <ScrollArea>
                            <div className="flex space-x-4 pb-4 max-w-[90vw]">
                                {[1, 2].map((element) => (
                                    <>
                                        <div key={element} className="overflow-hidden rounded-md  h-60 min-w-60">
                                            <img
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8IzpgYG-3SFAI4N5-FCeLlUGRLZsSgrfK9g&s"
                                                alt="img"
                                                className={cn("h-60 min-w-60 object-cover transition-all hover:scale-105")}
                                                onClick={() => setSelectedImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8IzpgYG-3SFAI4N5-FCeLlUGRLZsSgrfK9g&s")}
                                            />
                                        </div>
                                        <div key={element} className="overflow-hidden rounded-md  h-60 min-w-60">
                                            <img
                                                src="https://samparkbharat.com/assets/uploads/product-image/1711695228-Screenshot_2024-03-29-12-20-18-30_6012fa4d4ddec268fc5c7112cbb265e7.jpg"
                                                alt="img"
                                                className={cn("h-60 min-w-60 object-cover transition-all hover:scale-105")}
                                                onClick={() => setSelectedImage("https://samparkbharat.com/assets/uploads/product-image/1711695228-Screenshot_2024-03-29-12-20-18-30_6012fa4d4ddec268fc5c7112cbb265e7.jpg")}
                                            />
                                        </div>
                                        <div key={element} className="overflow-hidden rounded-md  h-60 min-w-60">
                                            <img
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO1NB1yvd3bCr3QSltXnWjOB08skGgui3keWiEWFaGGg2TsRZ9F9X-BA_93Xn2HS3DdKk&usqp=CAU"
                                                alt="img"
                                                className={cn("h-60 min-w-60 object-cover transition-all hover:scale-105")}
                                                onClick={() => setSelectedImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO1NB1yvd3bCr3QSltXnWjOB08skGgui3keWiEWFaGGg2TsRZ9F9X-BA_93Xn2HS3DdKk&usqp=CAU")}
                                            />
                                        </div>
                                        <div key={element} className="overflow-hidden rounded-md  h-60 min-w-60">
                                            <img
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwPUaVscFGXy_Adtd-CL2YkDr3Ydwz50290b1tdF4qF3jPUbryJ45opNCdT-O1KmKm6Io&usqp=CAU"
                                                alt="img"
                                                className={cn("h-60 min-w-60 object-cover transition-all hover:scale-105")}
                                                onClick={() => setSelectedImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwPUaVscFGXy_Adtd-CL2YkDr3Ydwz50290b1tdF4qF3jPUbryJ45opNCdT-O1KmKm6Io&usqp=CAU")}
                                            />
                                        </div>
                                        <div key={element} className="overflow-hidden rounded-md  h-60 min-w-60">
                                            <img
                                                src="https://samparkbharat.com/assets/uploads/product-image/1711695247-Screenshot_2024-03-29-12-20-06-75_6012fa4d4ddec268fc5c7112cbb265e7.jpg"
                                                alt="img"
                                                className={cn("h-60 min-w-60 object-cover transition-all hover:scale-105")}
                                                onClick={() => setSelectedImage("https://samparkbharat.com/assets/uploads/product-image/1711695247-Screenshot_2024-03-29-12-20-06-75_6012fa4d4ddec268fc5c7112cbb265e7.jpg")}
                                            />
                                        </div>
                                    </>
                                ))}
                            </div>
                            <ScrollBar orientation="horizontal" />
                        </ScrollArea>
                    </div>
                </div>
                <div className="h-full px-4 py-6 lg:px-8">
                    <div className="relative">
                        <ScrollArea>
                            <div className="flex space-x-4 pb-4 max-w-[90vw]">
                                {[1, 2].map((element) => (
                                    <>
                                        <div key={element} className="overflow-hidden rounded-md  h-60 min-w-60">
                                            <img
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO1NB1yvd3bCr3QSltXnWjOB08skGgui3keWiEWFaGGg2TsRZ9F9X-BA_93Xn2HS3DdKk&usqp=CAU"
                                                alt="img"
                                                className={cn("h-60 min-w-60 object-cover transition-all hover:scale-105")}
                                                onClick={() => setSelectedImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO1NB1yvd3bCr3QSltXnWjOB08skGgui3keWiEWFaGGg2TsRZ9F9X-BA_93Xn2HS3DdKk&usqp=CAU")}
                                            />
                                        </div>
                                        <div key={element} className="overflow-hidden rounded-md  h-60 min-w-60">
                                            <img
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwPUaVscFGXy_Adtd-CL2YkDr3Ydwz50290b1tdF4qF3jPUbryJ45opNCdT-O1KmKm6Io&usqp=CAU"
                                                alt="img"
                                                className={cn("h-60 min-w-60 object-cover transition-all hover:scale-105")}
                                                onClick={() => setSelectedImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwPUaVscFGXy_Adtd-CL2YkDr3Ydwz50290b1tdF4qF3jPUbryJ45opNCdT-O1KmKm6Io&usqp=CAU")}
                                            />
                                        </div>
                                        <div key={element} className="overflow-hidden rounded-md  h-60 min-w-60">
                                            <img
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8IzpgYG-3SFAI4N5-FCeLlUGRLZsSgrfK9g&s"
                                                alt="img"
                                                className={cn("h-60 min-w-60 object-cover transition-all hover:scale-105")}
                                                onClick={() => setSelectedImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8IzpgYG-3SFAI4N5-FCeLlUGRLZsSgrfK9g&s")}
                                            />
                                        </div>
                                        <div key={element} className="overflow-hidden rounded-md  h-60 min-w-60">
                                            <img
                                                src="https://samparkbharat.com/assets/uploads/product-image/1711695247-Screenshot_2024-03-29-12-20-06-75_6012fa4d4ddec268fc5c7112cbb265e7.jpg"
                                                alt="img"
                                                className={cn("h-60 min-w-60 object-cover transition-all hover:scale-105")}
                                                onClick={() => setSelectedImage("https://samparkbharat.com/assets/uploads/product-image/1711695247-Screenshot_2024-03-29-12-20-06-75_6012fa4d4ddec268fc5c7112cbb265e7.jpg")}
                                            />
                                        </div>
                                        <div key={element} className="overflow-hidden rounded-md  h-60 min-w-60">
                                            <img
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6uQXoMDlcPUksBFWiFi9E0Na77jeRsWCoq4m5E3kgfDmxpc0SgubnU6O7FsxexOEeBE8&usqp=CAU"
                                                alt="img"
                                                className={cn("h-60 min-w-60 object-cover transition-all hover:scale-105")}
                                                onClick={() => setSelectedImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6uQXoMDlcPUksBFWiFi9E0Na77jeRsWCoq4m5E3kgfDmxpc0SgubnU6O7FsxexOEeBE8&usqp=CAU")}
                                            />
                                        </div>
                                    </>
                                ))}
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
    )
}

export default GallerySection;