import { Typography } from "@material-tailwind/react";
import { MoveRightIcon } from "lucide-react";
import { ContainerScroll } from "../ui/container-scroll-animation";
import { AnimatedTabs } from "./AnimatedTabs";

export function Hero() {
  return (
    <>
      <div className="relative h-full px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 h-full w-full grid gap-2"></div>
          <div className="absolute bottom-auto left-auto right-0 top-0 h-[200px] w-[200px] -translate-x-[30%] translate-y-[20%] rounded-full bg-orange-400 opacity-50 blur-[60px] sm:h-[300px] sm:w-[300px] lg:h-[500px] lg:w-[500px]"></div>
        </div>
        <div className="container mx-auto grid items-center gap-8 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <div className="mb-8 inline-flex items-center rounded-lg border border-dark/30 bg-gradient-to-r from-orange-500 to-purple-500 py-1 pl-1 pr-3">
              <Typography
                variant="small"
                className="mr-3 rounded-md bg-dark py-0.5 px-3 font-medium bg-white text-black"
              >
                New
              </Typography>
              <Typography
                className="flex text-xs md:text-lg items-center font-semibold text-white"
              >
                Get Personalized Digital Card
                <MoveRightIcon
                  className="ml-1.5 h-4 w-4"
                  strokeWidth={3}
                />
              </Typography>
            </div>
            <Typography
              variant="h1"
              className="mb-8 pb-2 leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent"
            >
              The Ultimate Dynamic Digital Profile
            </Typography>
            <Typography
              variant="lead"
              className="text-blue-gray-800 text-base sm:text-lg md:text-xl lg:pr-20 z-0"
            >
              Elevate Your Professional Impressions in the Digital
              Era. Design and Personalize Your Own Digital
              Business Cards: Effortlessly Share Your Contact
              Information with Anyone, Anywhere.
            </Typography>
            <div className="mt-12 flex flex-wrap justify-center gap-3 lg:justify-start">
              <button className="p-[1px] sm:p-[2px] md:p-[3px] relative flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-purple-500 rounded-lg" />
                <div className="px-4 sm:px-6 md:px-8 py-1 sm:py-2 font-medium bg-white rounded-[8px] md:rounded-[6px] relative group transition duration-200 text-sm sm:text-base md:text-lg text-black hover:text-white hover:bg-transparent">
                  View Demo
                </div>
              </button>
              <button className="p-[1px] sm:p-[2px] md:p-[3px] relative flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-purple-500 rounded-lg" />
                <div className="px-4 sm:px-6 md:px-8 py-1 sm:py-2 font-medium rounded-[8px] md:rounded-[6px] relative group transition duration-200 text-sm sm:text-base md:text-lg text-white bg-transparent">
                  Get Started
                </div>
              </button>
            </div>

          </div>
          <div className="flex justify-center lg:justify-end lg:mr-20 z-10 [mask-image:linear-gradient(to_bottom,transparent,white_0%,white_80%,transparent)]">
            <img
              src="samsung3.png"
              alt="phone"
              className="max-w-[90%] sm:max-w-sm md:max-w-md lg:max-w-lg w-[14rem] md:w-[20rem] rounded-3xl"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <h1 className="text-2xl md:text-4xl md:mb-20 font-semibold text-black dark:text-white">
              Experience<br />
              <span className="text-4xl md:text-[6rem] font-bold bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent mt-1 leading-none">
                Multiple Themes
              </span>
            </h1>
          }
        >
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet="business3.png"
            />
            <source
              media="(max-width: 1023px)"
              srcSet="ipad.png"
            />
            <img
              src="ipad.png"
              alt="hero"
              height={720}
              width={1400}
              className="mx-auto rounded-2xl object-cover h-full object-left-top"
              draggable={false}
            />
          </picture>
        </ContainerScroll>
      </div>

      <section id="features" className="py-14 relative">
        <div className="mx-auto flex max-w-screen-xl flex-col gap-8 px-4 md:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <h4 className="text-xl font-bold tracking-tight text-black dark:text-white">
            Design
            </h4>
            <h2 className="text-5xl z-10 h-auto pb-5 font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
            The Ultimate Profile<br /> Design
            </h2>
            <p className="mt-6 text-xl leading-8 text-black/80 dark:text-white">
              Enhance your connectivity with a <strong>digital presence </strong> to showcase your identity and grow your network.
            </p>
          </div>

          <AnimatedTabs />
        </div>
      </section>
    </>
  );
}

export default Hero;