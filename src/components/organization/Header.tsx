import { Button } from "@/components/ui/button"
import { RiContactsLine } from "react-icons/ri"
import ShareProfile from "../ShareProfile"

const Header = () => {
    return (
        <header className="">
            <div className="container flex h-16 items-center justify-between px-4 md:px-6">
                <a href="#" className="flex items-center gap-2">
                    <img className="w-40" src="/logo_main.png" alt="Sampark Bharat" />
                </a>
                <div className="flex gap-2">
                    <ShareProfile color="slate-900" />
                    <a href="/create-vcard">
                        <Button className="border-2 border-slate-900 hover:bg-slate-900 hover:text-white" variant={"outline"}> <span className="hidden md:inline">Get Your vCard</span> <RiContactsLine className=" ml-1 w-4 h-4" /></Button>
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header;