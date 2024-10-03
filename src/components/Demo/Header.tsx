import { Button } from "@/components/ui/button"
import { RiContactsLine } from "react-icons/ri"
import ShareProfile from "../common/ShareProfile"
import { ProfileContext } from '@/context/MyContext'
import useTheme from '@/hooks/useTheme'
import { useContext } from "react"

const Header = () => {
    const { profile } = useContext(ProfileContext);
    const themeClasses = useTheme(profile);
    console.log(themeClasses.background.substring(3))
    return (
        <header className="">
            <div className="container flex h-16 items-center justify-between px-4 md:px-6">
                <a href="#" className="flex items-center gap-2">
                    <img className="w-40" src="/logo_main.png" alt="Sampark Bharat" />
                </a>
                <div className="flex gap-2">
                    <ShareProfile />
                    <a href="https://samparkbharat.com/auth/register" target="_blank">
                        <Button
                            className={`border-2 border-${themeClasses.background.substring(3)} hover:${themeClasses.background} hover:text-white`}
                            variant={"outline"}>
                            <span className="hidden md:inline">Get Your vCard</span>
                            <RiContactsLine className=" ml-1 w-4 h-4" />
                        </Button>
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header;