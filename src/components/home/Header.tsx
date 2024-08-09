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
                <SheetContent side="left">
                    <a href="#">
                        {/* <MountainIcon className="h-6 w-6" /> */}
                        <img className="w-40" src="/logo_main.png" alt="Sampark Bharat" />
                        <span className="sr-only">Acme Inc</span>
                    </a>
                    <div className="grid gap-2 py-6">
                        <a href="#" className="flex w-full items-center py-2 text-lg font-semibold">
                            Home
                        </a>
                        <a href="#" className="flex w-full items-center py-2 text-lg font-semibold">
                            About
                        </a>
                        <a href="#" className="flex w-full items-center py-2 text-lg font-semibold">
                            Services
                        </a>
                        <a href="#" className="flex w-full items-center py-2 text-lg font-semibold">
                            Portfolio
                        </a>
                        <a href="#" className="flex w-full items-center py-2 text-lg font-semibold">
                            Contact
                        </a>
                    </div>
                </SheetContent>
            </Sheet>
            <a href="#" className="ml-auto mr-0 lg:hidden">
                <img className="w-36" src="/logo_main.png" alt="Sampark Bharat" />
                <span className="sr-only">Sampark Bharat</span>
            </a>
            <a href="#" className="mr-6 hidden lg:flex">
                <img className="w-40" src="/logo_main.png" alt="Sampark Bharat" />
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
                        <a
                            href="#footer"
                            className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-lg font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"

                        >
                            Contact
                        </a>
                    </NavigationMenuLink>
                </NavigationMenuList>
            </NavigationMenu>
        </header>
    )
}

export default Header;