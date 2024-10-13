import { CheckIcon, Cross2Icon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { Loader } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { demoPrices } from "@/lib/data";
import ContactFormModal from "../common/ContactModal";


const Pricing = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [id, setId] = useState<string | null>(null);

    const onSubscribeClick = async (priceId: string) => {
        setIsLoading(true);
        setId(priceId);
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a delay
        setIsLoading(false);
    };

    return (
        <section id="pricing">
            <div className="mx-auto flex max-w-screen-xl flex-col gap-8 px-4 py-14 md:px-8">
                <div className="mx-auto max-w-5xl text-center mb-5">
                    <h4 className="text-xl font-bold tracking-tight text-black dark:text-white">
                        Pricing
                    </h4>

                    <h2 className="text-5xl z-10 h-auto pb-5 font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
                        Simple pricing for everyone.
                    </h2>

                    <p className="mt-6 text-xl leading-8 text-black/80 dark:text-white">
                        Choose an <strong>affordable plan</strong> that&apos;s
                        packed with the best features for engaging your
                        audience, creating customer loyalty, and driving sales.
                    </p>
                </div>

                <div className="mx-auto grid w-full flex-col justify-center gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {demoPrices.map((price, idx) => (
                        <div
                            key={price.id}
                            className={cn(
                                "relative flex max-w-[400px] flex-col gap-8 overflow-hidden rounded-2xl border p-4 text-black dark:text-white",
                                {
                                    "border-2 border-[var(--color-one)]":
                                        price.isMostPopular,
                                }
                            )}
                        >
                            <div className="flex items-center">
                                <div className="ml-4">
                                    <h2 className="text-base font-semibold leading-7">
                                        {price.name}
                                    </h2>
                                    <p className="h-12 text-sm leading-5 text-black/70 dark:text-white">
                                        {price.description}
                                    </p>
                                </div>
                            </div>

                            <motion.div
                                key={`${price.id}-year`}
                                initial="initial"
                                animate="animate"
                                variants={{
                                    initial: {
                                        opacity: 0,
                                        y: 12,
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0,
                                    },
                                }}
                                transition={{
                                    duration: 0.4,
                                    delay: 0.1 + idx * 0.05,
                                    ease: [0.21, 0.47, 0.32, 0.98],
                                }}
                                className="flex flex-row gap-1"
                            >
                                {price.showPrices ?
                                    <span className="text-4xl font-bold text-black dark:text-white">
                                        ₹
                                        {price.yearlyPrice}
                                        <span className="text-xs">
                                            {" "}
                                            /{"year"}
                                        </span>
                                    </span>
                                    :
                                    <span className=" w-full text-center whitespace-nowrap rounded-full bg-gradient-to-r from-red-500 to-orange-400 text-white px-2.5 py-2.5 text-[15px] font-semibold uppercase leading-5 tracking-wide">
                                        Politicians Special ✨
                                    </span>
                                }
                            </motion.div>

                            <ContactFormModal
                                triggerButton={
                                    <Button
                                        className={cn(
                                            "group relative w-full gap-2 overflow-hidden text-lg font-semibold tracking-tighter bg-black",
                                            "hover:ring-primary transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-offset-2"
                                        )}
                                        disabled={isLoading}
                                        onClick={() => void onSubscribeClick(price.id)}
                                    >
                                        <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform-gpu bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-96 dark:bg-black" />
                                        {(!isLoading ||
                                            (isLoading && id !== price.id)) && (
                                                <p>Contact Us</p>
                                            )}

                                        {isLoading && id === price.id && (
                                            <p>Subscribing</p>
                                        )}
                                        {isLoading && id === price.id && (
                                            <Loader className="mr-2 size-4 animate-spin" />
                                        )}
                                    </Button>
                                }
                            />

                            <hr className="m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-neutral-500/30 to-neutral-200/0" />
                            {price.features && price.features.length > 0 && (


                                <ul className="flex flex-col gap-2 font-normal">
                                    {price.features.map((feature, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-center gap-3 text-xs font-medium text-black dark:text-white"
                                        >
                                            <CheckIcon className="size-5 shrink-0 rounded-full bg-green-400 p-[2px] text-black dark:text-white" />
                                            <span className="flex">{feature}</span>
                                        </li>
                                    ))}
                                    {price.notFeature.map((notFeature, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-center gap-3 text-xs font-medium text-black dark:text-white"
                                        >
                                            <Cross2Icon className="size-5 shrink-0 rounded-full bg-red-400 p-[2px] text-black dark:text-white" />
                                            <span className="flex ">
                                                {notFeature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
};

export default Pricing;
