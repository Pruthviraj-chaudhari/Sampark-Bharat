import { Typography } from "@material-tailwind/react";
import Balancer from "react-wrap-balancer";
import { COMPANY, HELP, TECHS } from "@/lib/data";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const YEAR = new Date().getFullYear();

export function Footer() {
    return (
        <footer
            id="footer"
            className="relative bg-gradient-to-r from-gray-200 to-transparent px-8 pt-12 mt-10 pb-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-4/12">
                        <img
                            className="h-20 mb-2"
                            src="transparent.png"
                            alt="sampark bharat"
                        />
                        <Typography className="text-md mt-0 mb-2 font-normal !text-gray-600">
                            <Balancer>
                                The Ultimate Digital Business Card: Elevate Your
                                Professional Impressions in the Digital Era.
                            </Balancer>
                        </Typography>
                    </div>
                    <div className="ml-auto w-full px-4 md:w-7/12">
                        <div className="items-top mb-6 flex flex-col md:flex-row">
                            <div className="w-6/12 pt-6 md:ml-auto md:px-4 md:pt-0 xl:w-3/12">
                                <span className="text-md mb-4 block font-medium text-primary">
                                    Quick Links
                                </span>
                                <ul className="list-unstyled">
                                    {COMPANY.map(({ name, link }, key) => (
                                        <li key={key}>
                                            <a
                                                href={link}
                                                className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
                                            >
                                                {name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="md:ml-auto w-6/12 pt-6 md:px-4 md:pt-0 xl:w-3/12">
                                <span className="text-md mb-4 block font-medium text-primary">
                                    Privacy
                                </span>
                                <ul className="list-unstyled">
                                    {HELP.map(({ name, link }, key) => (
                                        <li key={key}>
                                            <a
                                                href={link}
                                                rel="noreferrer"
                                                target="_blank"
                                                className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
                                            >
                                                {name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="md:ml-auto w-6/12 pt-6 md:px-4 md:pt-0 xl:w-3/12">
                                <span className="text-md mb-4 block font-medium text-primary">
                                    Blogs
                                </span>
                                <ul className="list-unstyled">
                                    {TECHS.map(({ name, link }, key) => (
                                        <li key={key}>
                                            <a
                                                href={link}
                                                rel="noreferrer"
                                                target="_blank"
                                                className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
                                            >
                                                {name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-blue-gray-50" />
                <div className="flex flex-wrap items-center justify-center gap-2 md:justify-between">
                    <div className="mr-auto w-full px-4 text-center md:w-4/12 md:px-0 md:text-left">

                    <div className="">
                            <div className="flex gap-4">
                                <a href={`https://wa.me/918530089393`} target="_blank" className="hover:text-muted-foreground">
                                    <FaWhatsapp className="h-6 w-6" />
                                </a>
                                <a href="https://www.facebook.com/profile.php?id=61566115388120" target="_blank" className="hover:text-muted-foreground">
                                    <FaFacebook className="h-6 w-6" />
                                </a>
                                <a href="https://www.instagram.com/sampark.bharat/" target="_blank" className="hover:text-muted-foreground">
                                    <FaInstagram className="h-6 w-6" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="text-center lg:text-left">
                        <div className="text-md mt-2 py-1 font-normal text-gray-600">
                            Copyright &copy; {YEAR}{" "}
                            <a href="/" className="text-inherit transition-all">
                                Sampark Bharat
                            </a>{" "}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;