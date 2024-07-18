import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CheckIcon, DownloadIcon, InstagramLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons"
import { useRef, useState } from "react"
import { GoShareAndroid } from "react-icons/go";
import { RiContactsLine } from "react-icons/ri"
import { CopyIcon } from "@radix-ui/react-icons"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogTrigger,
} from "@/components/ui/dialog"
import { FaFacebook } from "react-icons/fa"

const Header = () => {

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

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = 'https://cdn.britannica.com/17/155017-050-9AC96FC8/Example-QR-code.jpg';
        link.download = 'qr-code.jpg';
        link.click();
    };

    return (
        <header className="">
            <div className="container flex h-16 items-center justify-between px-4 md:px-6">
                <a href="#" className="flex items-center gap-2">
                    <img className="w-40" src="/logo_main.png" alt="Sampark Bharat" />
                </a>
                <div className="flex gap-2">
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button className="border-2 border-orange-400 hover:bg-orange-400" variant={"outline"}><span className="hidden md:inline">Share</span> <GoShareAndroid className=" ml-1 w-4 h-4" /></Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <div className="flex flex-col items-center justify-center gap-6 py-8">
                                <a href="#" className="flex items-center gap-2">
                                    <img className="w-40" src="/logo_main.png" alt="Sampark Bharat" />
                                </a>
                                <div className="flex flex-col items-center gap-2">
                                    <div className="rounded-lg bg-background p-4 shadow">
                                        <img src="https://cdn.britannica.com/17/155017-050-9AC96FC8/Example-QR-code.jpg" width={160} height={160} alt="QR Code" />
                                    </div>
                                    <Button onClick={handleDownload} variant="outline">
                                        <DownloadIcon className="mr-2 h-4 w-4" />
                                        Download QR Code
                                    </Button>
                                </div>
                                <div className="flex w-full justify-center gap-4">
                                    <a href="#" className=" hover:text-gray-500">
                                        <TwitterLogoIcon className="h-6 w-6" />
                                    </a>
                                    <a href="#" className=" hover:text-gray-500">
                                        <FaFacebook className="h-6 w-6" />
                                    </a>
                                    <a href="#" className="hover:text-gray-500">
                                        <InstagramLogoIcon className="h-6 w-6" />
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
                                                defaultValue="https://samparkbharat.com/rajabhauwaje"
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

                    <a href="/create-vcard">
                        <Button className="border-2 border-orange-400 hover:bg-orange-400" variant={"outline"}> <span className="hidden md:inline">Get Your vCard</span> <RiContactsLine className=" ml-1 w-4 h-4" /></Button>
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header;