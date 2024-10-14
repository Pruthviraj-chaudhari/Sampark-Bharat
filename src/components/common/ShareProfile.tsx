import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CheckIcon, DownloadIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"
import { FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa"
import { useContext, useRef, useState } from "react"
import { GoShareAndroid } from "react-icons/go";
import { CopyIcon } from "@radix-ui/react-icons"
import { QRCode } from 'react-qrcode-logo';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogTrigger,
} from "@/components/ui/dialog"
import { toast } from "sonner"
import { ProfileContext } from "@/context/MyContext"
import useTheme from "@/hooks/useTheme"

const ShareProfile = () => {

    const { profile } = useContext(ProfileContext);
    const themeClasses = useTheme(profile);

    const currentUrl = window.location.href;
    const [copied, setCopied] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleCopy = () => {
        if (inputRef.current) {
            inputRef.current.select();
            navigator.clipboard.writeText(inputRef.current.value).then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
            }).catch(err => {
                console.error('Failed to copy: ', err);
            });
        }
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const qrCodeRef = useRef<any>(null);

    const handleDownload = () => {
        if (qrCodeRef.current) {
            qrCodeRef.current.download("png", "Sampark-Bharat.png");
        }
    };

    const handleShareProfile = async () => {
        try {
            if (navigator.share) {
                await navigator.share({
                    title: "Share Sampark Bharat Digital VCard",
                    text: "Check out my Sampark Bharat Digital VCard and start creating your own today! Join the future of networking and effortlessly share your professional details with anyone, anywhere",
                    url: currentUrl,
                });
            } else {
                toast.error("Error sharing profile");
            }
        } catch (error) {
            console.error("Error sharing profile:", error);
        }
    };


    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className={`border-2 border-${themeClasses.background.substring(3)} hover:${themeClasses.background}`} variant={"outline"}><span className="hidden md:inline">Share</span> <GoShareAndroid className=" ml-1 w-4 h-4" /></Button>
            </DialogTrigger>
            <DialogContent className=" max-w-[90vw] md:max-w-[425px] bg-white">
                <div className="flex flex-col items-center justify-center gap-6 py-8">
                    <a href="#" className="flex items-center gap-2">
                        <img className="w-40" src="/logo_main.png" alt="Sampark Bharat" />
                    </a>
                    <div className="flex flex-col items-center gap-2">
                        <div className="rounded-lg bg-background p-4 shadow">
                            <QRCode
                                ref={qrCodeRef}
                                value={currentUrl}
                                logoImage="/logo.png"
                                size={200} // Adjust the size as needed
                                logoWidth={40} // Customize logo width
                                logoHeight={40} // Customize logo height
                                logoOpacity={0.8} // Customize logo opacity
                                removeQrCodeBehindLogo={true} // Removes the QR code points behind the logo
                                qrStyle="dots" // Style can be squares or dots
                                bgColor="#FFFFFF" // Background color of the QR code
                                fgColor="#000000" // Foreground color of the QR code
                            />
                        </div>
                        <Button onClick={handleDownload} variant="outline">
                            <DownloadIcon className="mr-2 h-4 w-4" />
                            Download QR Code
                        </Button>
                    </div>
                    <div className="flex w-full justify-center gap-4">
                        <a href={`https://wa.me/?text=${currentUrl}`} target="_blank" className=" hover:text-gray-500">
                            <FaWhatsapp className="h-6 w-6" />
                        </a>
                        <a href={`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`} target="_blank" className=" hover:text-gray-500">
                            <FaFacebook className="h-6 w-6" />
                        </a>
                        <a href={`https://twitter.com/intent/tweet?text=${currentUrl}`} target="_blank" className="hover:text-gray-500">
                            <FaTwitter className="h-6 w-6" />
                        </a>
                        <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`} target="_blank" className="hover:text-gray-500">
                            <LinkedInLogoIcon className="h-6 w-6" />
                        </a>
                        <a onClick={handleShareProfile} className="hover:text-gray-500">
                            <GoShareAndroid className="h-6 w-6" />
                        </a>
                    </div>
                    <div className="flex w-full items-center justify-center gap-4">
                        <div className="flex items-center space-x-2">
                            <div className="grid flex-1 gap-2">
                                <Label htmlFor="link" className="sr-only">
                                    Link
                                </Label>
                                <Input
                                    id="link"
                                    defaultValue={`${currentUrl}`}
                                    readOnly
                                    ref={inputRef}
                                />
                            </div>
                            <Button
                                variant="secondary"
                                type="button"
                                size="sm"
                                className="px-3"
                                onClick={handleCopy}
                            >
                                <span className="sr-only">Copy</span>
                                {copied ? <CheckIcon className="h-4 w-4 text-green-500" /> : <CopyIcon className="h-4 w-4" />}
                            </Button>
                        </div>
                    </div>
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button className="w-full" variant="outline">Close</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default ShareProfile