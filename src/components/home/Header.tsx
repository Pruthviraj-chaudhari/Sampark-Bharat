import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { NavigationMenu, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu"
import { AlignJustify } from "lucide-react"

const Header = () => {

    return (
        <header className="flex z-10 h-20 w-full shrink-0 items-center px-4 md:px-6 scroll-smooth">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon" className="lg:hidden">
                        <AlignJustify className="h-6 w-6" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className=" bg-white">
                    <a href="#">
                        {/* <MountainIcon className="h-6 w-6" /> */}
                        <img className="w-40" src="/logo_main.png" alt="Sampark Bharat" />
                        <span className="sr-only">Sampark Bharat</span>
                    </a>
                    <div className="grid gap-2 py-6">
                        <a href="#home" className="flex w-full items-center py-2 text-lg font-semibold">
                            Home
                        </a>
                        <a href="#features" className="flex w-full items-center py-2 text-lg font-semibold">
                            Features
                        </a>
                        <a href="#pricing" className="flex w-full items-center py-2 text-lg font-semibold">
                            Pricing
                        </a>
                        <a href="#about" className="flex w-full items-center py-2 text-lg font-semibold">
                            About
                        </a>
                        <a href="#contact" className="flex w-full items-center py-2 text-lg font-semibold">
                            Contact Us
                        </a>
                    </div>
                </SheetContent>
            </Sheet>
            <a href="#" className="ml-auto mr-0 lg:hidden">
                <img className="w-28" src="/transparent.png" alt="Sampark Bharat" />
                <span className="sr-only">Sampark Bharat</span>
            </a>
            <a href="#" className="mr-6 hidden lg:flex">
                <img className="w-28 mx-4" src="/transparent.png" alt="Sampark Bharat" />
                <span className="sr-only">Sampark Bharat</span>
            </a>
            <NavigationMenu className="hidden lg:flex">
                <NavigationMenuList>
                    <NavigationMenuLink asChild>
                        <a
                            href="#home"
                            className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-lg font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                        >
                            Home
                        </a>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                        <a
                            href="#features"
                            className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-lg font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"

                        >
                            Features
                        </a>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                        <a
                            href="#pricing"
                            className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-lg font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"

                        >
                            Pricing
                        </a>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                        <a
                            href="#about"
                            className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-lg font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"

                        >
                            About
                        </a>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                        <button className="p-[1px] sm:p-[2px] md:p-[3px] relative flex-shrink-0">
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-purple-500 rounded-lg" />
                            <a  href="#contact">
                                <div className=" rounded-md h-7 px-3 text-lg font-medium  bg-white relative group transition duration-200 text-black hover:text-white hover:bg-transparent">
                                    Contact
                                </div>
                            </a>
                        </button>
                    </NavigationMenuLink>
                </NavigationMenuList>
            </NavigationMenu>
        </header>
    )
}

export default Header;