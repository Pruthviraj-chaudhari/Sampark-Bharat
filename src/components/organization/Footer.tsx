import Balancer from "react-wrap-balancer";
import { LinkedInLogoIcon } from "@radix-ui/react-icons"
import { FaEye, FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa"
import NumberTicker from "../common/number-ticker";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { useContext } from "react";
import { ProfileContext } from "@/context/MyContext";

export default function Footer() {

    const { profile } = useContext(ProfileContext);

    return (
        <footer className="bg-slate-900 text-primary-foreground">
            <section className="py-10 px-5 md:px-20">
                <div className="container my-10 mb-16 flex flex-wrap justify-between items-center gap-10">
                    <div className="gap-5 md:w-1/3">
                        <img
                            src={profile?.logo}
                            alt="Profile"
                            className="rounded-full w-20 h-20 object-scale-down border-4 border-white bg-white items-center"
                            loading="lazy"
                        />
                        <div className="text-lg text-gray-100 mt-5">
                            {
                                (profile?.address != '') && (
                                    <>
                                        <h2 className="font-medium">Address: </h2>
                                        <Balancer>
                                            {profile?.address}
                                        </Balancer>
                                    </>
                                )
                            }
                        </div>
                    </div>
                    {
                        (profile && profile.googleMap != "") && (
                            <div className="flex flex-col md:w-1/2 ">
                                <iframe
                                    className="w-full rounded-xl"
                                    src={profile?.googleMap}
                                    height="240"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        )
                    }
                </div>
                <div className="container grid gap-12 md:grid-cols-3">
                    <div className="flex flex-col gap-2 ">
                        <Card className="bg-white text-center">
                            <CardHeader className="pb-2">
                                <CardDescription className="flex font-semibold text-slate-900 justify-center items-center gap-2">
                                    Visitors Count <FaEye />
                                </CardDescription>
                                <CardTitle className="text-4xl">
                                    <NumberTicker className="text-slate-900" value={profile?.visitorsCount || 12488} />
                                </CardTitle>
                            </CardHeader>
                        </Card>
                    </div>
                    <div className="flex flex-col md:items-center">
                        <div className="flex flex-col gap-2">
                            <h5 className="font-semibold text-white">Important links</h5>
                            {
                                (profile?.footerLinks && profile.footerLinks.length > 0) && (
                                    profile.footerLinks.map((item) => (
                                        <a key={item.title} href={item.link} className="text-gray-100 hover:text-white">{item.title}</a>
                                    ))
                                )
                            }
                        </div>
                    </div>
                    <div className="flex flex-col md:items-center">
                        <div className="flex flex-col gap-2">
                            <h5 className="font-semibold text-white">Legal</h5>
                            <a href="/cookie-policy" className="text-gray-100 hover:text-white">About Us</a>
                            <a href="/privacy-policy" className="text-gray-100 hover:text-white">Privacy Policy</a>
                            <a href="/terms-of-service" className="text-gray-100 hover:text-white">Terms of Service</a>
                            <a href="/cookie-policy" className="text-gray-100 hover:text-white">Cookie Policy</a>
                            <a href="/cookie-policy" className="text-gray-100 hover:text-white">Help</a>
                        </div>
                    </div>
                </div>
                <div className="container mt-8 flex flex-col justify-between gap-6 border-t border-gray-200 pt-6 md:flex-row md:items-center md:gap-2">
                    <div className="flex gap-4">
                        <a href={`https://wa.me/${profile?.whatsapp}`} target="_blank" className="hover:text-white">
                            <FaWhatsapp className="h-6 w-6" />
                        </a>
                        <a href={profile?.facebook} target="_blank" className="hover:text-white">
                            <FaFacebook className="h-6 w-6" />
                        </a>
                        <a href={profile?.twitter} target="_blank" className="hover:text-white">
                            <FaTwitter className="h-6 w-6" />
                        </a>
                        <a href={profile?.linkedin} target="_blank" className="hover:text-white">
                            <LinkedInLogoIcon className="h-6 w-6" />
                        </a>
                    </div>
                    <p className="text-gray-100">
                        ©{" "}
                        <a href="#" className="hover:text-white">Sampark Bharat 2024</a>.
                        All rights reserved.
                    </p>
                </div>
            </section>
        </footer>
    );
}