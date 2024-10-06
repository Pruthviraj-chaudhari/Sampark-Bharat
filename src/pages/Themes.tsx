import { Button } from '@/components/ui/button';
import Playground from '@/components/common/playground';
import { useState } from 'react';
import { themes } from '@/lib/data';
import { IoCall, IoMail } from "react-icons/io5";
import { MdLocationPin } from "react-icons/md";
import { LuLink } from "react-icons/lu";
import { useContext } from "react";
import { ProfileContext } from "@/context/MyContext";
import Balancer from "react-wrap-balancer";
import { Separator } from '@/components/ui/separator';
import { RiContactsLine } from "react-icons/ri"
import { GoShareAndroid } from 'react-icons/go';
import { ThemeType } from '@/@types/profile';


export default function Themes() {

    const [theme, setTheme] = useState<ThemeType>({
        background: 'bg-orange-400',
        textBackground: 'text-orange-400',
        textPrimary: 'text-gray-700',
        textSecondary: 'text-gray-600'
    });

    const resetBg = () => {
        setTheme({
            background: 'bg-orange-400',
            textBackground: 'text-orange-400',
            textPrimary: 'text-gray-700',
            textSecondary: 'text-gray-600'
        });
    };

    return (
        <>
            <header className="">
                <div className="container flex h-16 items-center justify-between px-4 md:px-6">
                    <a href="#" className="flex items-center gap-2">
                        <img className="w-40" src="/logo_main.png" alt="Sampark Bharat" />
                    </a>
                    <div className="flex gap-2">
                        <Button className={`border-2 border-${theme.background.substring(3)} hover:${theme.background} hover:text-white`} variant={"outline"}>
                            <span className="hidden md:inline">
                                Share</span>
                            <GoShareAndroid className=" ml-1 w-4 h-4" />
                        </Button>
                        <a href="https://samparkbharat.com/auth/register" target="_blank">
                            <Button
                                className={`border-2 border-${theme.background.substring(3)} hover:${theme.background} hover:text-white`}
                                variant={"outline"}>
                                <span className="hidden md:inline">Get Your vCard</span>
                                <RiContactsLine className=" ml-1 w-4 h-4" />
                            </Button>
                        </a>
                    </div>
                </div>
            </header>
            <ProfileSection theme={theme} />
            <div className=" bg-white">
                <div className=" bg-white relative mx-auto h-screen w-full max-w-7xl px-6 md:px-8 lg:px-12">
                    <div className="pt-8">
                        <div className="relative mx-auto flex max-w-2xl flex-col items-center">
                            <div className="mb-8 flex">
                              
                                    <span className="relative inline-block overflow-hidden rounded-full p-[1px]">
                                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#a9a9a9_0%,#0c0c0c_50%,#a9a9a9_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#171717_0%,#737373_50%,#171717_100%)]" />
                                        <div className="inline-flex h-full w-full cursor-pointer justify-center rounded-full bg-white px-3 py-1 text-xs font-medium leading-5 text-slate-600 backdrop-blur-xl dark:bg-black dark:text-slate-200">
                                            New Themes ⚡️
                                        </div>
                                    </span>
                                
                            </div>

                            <div className="mx-auto max-w-5xl text-center">
                                <h2 className="text-5xl z-10 h-auto pb-5 font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
                                    Customize <br /> Dynamic Digital Profile
                                </h2>
                                <p className="mt-6 text-xl leading-8 text-black/80 dark:text-white">
                                    Select and apply professionally designed themes for your digital profile on <strong>Sampark Bharat.</strong>
                                </p>
                            </div>

                            <div className="mt-10 flex gap-4">
                                <Button variant="default" className=' text-black hover:text-white' onClick={resetBg}>
                                    Reset Theme
                                </Button>
                            </div>


                        </div>
                    </div>
                    <div className="overflow-hidden px-4 pb-20 pt-52 md:px-10 bg-white">
                        <div className="grid grid-cols-1 gap-6 pb-6 md:grid-cols-2 lg:grid-cols-4">
                            {Object.entries(themes).map(([themeName, themeColors]) => {
                                return (
                                    <Playground
                                        key={themeName}
                                        setTheme={setTheme}
                                        theme={themeColors}
                                        themeName={themeName}
                                    />
                                );
                            })}
                        </div>
                    </div>
                    <footer>
                        <div className="flex items-center justify-center py-8">
                            <span className="text-sm text-neutral-800 dark:text-neutral-200">
                                Made by
                                <a
                                    href="https://akatsuki-connect.vercel.app/fullprofile/65f1932fb302b45e794539d4"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="ml-1 text-neutral-950 dark:text-neutral-100"
                                >
                                    @Pruthviraj Chaudhari
                                </a>
                            </span>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
}


type ProfileSectionProps = {
    theme: ThemeType;
};

const ProfileSection: React.FC<ProfileSectionProps> = ({ theme }) => {

    const profile = {
        profilePhoto: "https://pbs.twimg.com/profile_images/1800516892370595841/NCnKrUga_400x400.jpg",
        backgroundPhoto: "https://pbs.twimg.com/profile_banners/18839785/1718111779/1080x360",
        name: "Narendra Modi",
        slug: "narendra-modi",
        language: "English",
        position: "Prime Minister of India",
        description: "Ex-Chief minister of Gujarat from 2001 to 2014 | Member of Parliament (MP) for Varanasi | Prime Minister of India, in office since May 2014 | Member of the Bharatiya Janata Party (BJP) .",
        location: "New Delhi, India",
        address: "PMO, New Delhi, India",
        contact: "+91XXXXXXXXXX",
        email: "modi.office@gov.in",
        whatsapp: "+91XXXXXXXXXX",
        facebook: "https://www.facebook.com/narendramodi",
        instagram: "https://www.instagram.com/narendramodi",
        twitter: "https://x.com/narendramodi",
        linkedin: "https://www.linkedin.com/in/narendramodi",
        website: "https://www.narendramodi.in",
        googleMap: "",
        gallery: [
            "https://www.pmindia.gov.in/wp-content/uploads/2024/06/Know-the-PM-Thumbnail.jpg",
            "https://image.khaleejtimes.com/?uuid=bf6f84ff-03cf-5ab2-a3e0-64917c7032b7&function=cropresize&type=preview&source=false&q=75&crop_w=0.99999&crop_h=0.84334&x=0&y=0&width=1200&height=675",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT49tOD0awPdWeN-ANM_0VPe68s2bZN8N6gYGfbrFrEJK7k53e50OYGlPzBtIMWDyTvCcs&usqp=CAU",
            "https://etimg.etb2bimg.com/photo/86458999.cms",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTppvq7jlLKZoY8scO1_NNGBtBPsiu2tH9iRDRgvoc-Cvbwv5mQWwq4UyskuRV67JgyX_8&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShgZTuIVYFzufqsGboGtmuTC7NW1f1hfAPVTJk4qoIvyRL3GPNh2xmxNtKuwG3VcKWUJc&usqp=CAU",
            "https://images.theconversation.com/files/543470/original/file-20230818-17-k6mtp8.jpg?ixlib=rb-4.1.0&rect=0%2C5%2C3802%2C2297&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS-F8dM4EJ7OnqPN-tuKL_rAx4M7K0e2TD2xdBlfbTRlDljhtnQqKJcDb28KVpMc8TPWQ&usqp=CAU",
            "https://im.rediff.com/news/2023/dec/25modi.jpg?w=670&h=900",
            "https://bsmedia.business-standard.com/_media/bs/img/article/2024-06/05/full/1717554931-0542.jpg?im=FitAndFill=(826,465)",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyJ3XQzAql0hmylMtxxplG2vEYPn669yH0eCWSKSwwaWttuT6BDkbz957vYapgGqxDRPo&usqp=CAU",
            "https://static.toiimg.com/thumb/msid-83811228,width-1280,height-720,imgsize-607184,resizemode-6,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREEZ8G7wREwm0-uf6Md9vKgVlNBdXdbLkGu5-hvWX3qrvKIXYtqULRHsjA5PdGM0kz-Ns&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP75rV5Wa12q10KW0Al-NyXKBs1qGb1vHZXkFoFTLRvC6Ia8pJCmx36-lfOBoJz2qpazE&usqp=CAU",
        ],
        news: [
            {
                heading: "PM Modi meets world leaders at G7 Summit: Key interactions and bilateral commitments",
                image: "https://images.indianexpress.com/2024/06/Modi-G7.jpg?w=640",
                description: "Prime Minister Narendra Modi attended the G20 summit and discussed global issues.",
                link: "https://www.g20.org",
            },
            {
                heading: "Narendra Modi: India safeguarding its interests without fear | India News - Times of India",
                image: "https://static.toiimg.com/thumb/msid-90694000,width-400,resizemode-4/90694000.jpg",
                description: "The Prime Minister launched a new health initiative to improve public healthcare.",
                link: "https://www.healthinitiative.in",
            },
            {
                heading: "PM Modi speaks on his 'big plans', Ram Mandir and more | Top 10 quotes | Latest News India",
                image: "https://images.moneycontrol.com/static-mcnews/2024/04/modi-int.jpg?impolicy=website&width=770&height=431",
                description: "Under the leadership of Narendra Modi, India has seen significant economic growth.",
                link: "https://www.economicforum.in",
            },
            {
                heading: "What PM Modi discussed with various leaders on the sidelines of the G7 Summit:",
                image: "https://pbs.twimg.com/media/GQDhzp6bEAQ0HAR?format=jpg&name=large",
                description: "Under the leadership of Narendra Modi, India has seen significant economic growth.",
                link: "https://indianexpress.com/article/india/pm-modi-world-leaders-g7-key-interactions-and-bilateral-commitments-9395099/",
            }
        ],
        youtube: [],
        youtubeEmbedPlaylist: "https://www.youtube.com/embed/videoseries?list=PLmFdb1slS8LPqASDzg0twLTcnEuoBshH4",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Bharatiya_Janata_Party_logo.svg/1984px-Bharatiya_Janata_Party_logo.svg.png",
        facebookPage: "https://www.facebook.com/narendramodi",
        footerLinks: [
            {
                title: "भारत सरकार",
                link: "/"
            },
            {
                title: "महाराष्ट्र सरकार",
                link: "/"
            },
            {
                title: "आपले सरकार",
                link: "/"
            },
            {
                title: "शासन निर्णय",
                link: "/"
            },
            {
                title: "MahaDBT",
                link: "/"
            },
        ],
        testimonials: [],
        isExpired: false,
        visitorsCount: 22345,
        theme: "darkGradient10"
    }

    return (
        <>
            <section id="profile" className={`w-full py-4 md:pt-6 md:pb-24 lg:py-32 ${theme.background}`}>
                <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 md:px-6">
                    <div className="relative flex justify-center items-center">
                        <div className="absolute w-full h-full">
                            <img
                                src={profile?.backgroundPhoto}
                                alt="Background"
                                className="w-full h-2/3 object-cover rounded-lg"
                                loading="lazy"
                            />
                        </div>
                        <img
                            src={profile?.profilePhoto}
                            width={200}
                            height={200}
                            alt="Profile"
                            className="relative rounded-full w-56 h-56 object-scale-down border-4 border-white bg-white"
                            style={{ marginTop: '150px' }}
                            loading="lazy"
                        />
                    </div>
                    <div className="flex flex-col items-start gap-6 px-4 md:px-0">
                        <Balancer className={`text-3xl ${theme.textPrimary} font-bold tracking-tighter sm:text-4xl md:text-5xl`}>
                            {profile?.name}
                        </Balancer>
                        <Balancer className={`text-lg ${theme.textSecondary} font-bold tracking-wider`}>
                            {profile?.position}
                        </Balancer>
                        <Balancer className={`${theme.textPrimary} md:text-xl leading-relaxed`}>
                            {profile?.description}
                        </Balancer>
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                            <div className="flex items-center gap-2">
                                <MdLocationPin className={`w-5 h-5 ${theme.textPrimary}`} />
                                <Balancer className={`cursor-pointer ${theme.textPrimary} hover:${theme.textSecondary} transition-colors`}>
                                    {profile?.location}
                                </Balancer>
                            </div>
                            <div className="flex items-center gap-2">
                                <IoCall className={`w-5 h-5 ${theme.textPrimary}`} />
                                <Balancer className={`cursor-pointer ${theme.textPrimary} hover:${theme.textSecondary} transition-colors`}>
                                    {profile?.contact}
                                </Balancer>
                            </div>
                            <div className="flex items-center gap-2">
                                <IoMail className={`w-5 h-5 ${theme.textPrimary}`} />
                                <Balancer className={`cursor-pointer ${theme.textPrimary} hover:${theme.textSecondary} transition-colors`}>
                                    {profile?.email}
                                </Balancer>
                            </div>
                        </div>
                        <IconGrid />
                    </div>
                </div>
            </section>
            <Separator className={`mx-auto w-14 h-3  ${theme.background} rounded-full my-4`} />
        </>
    );
};


const IconGrid = () => {
    const { profile } = useContext(ProfileContext);
    const icons = [
        { href: `tel:${profile?.contact}`, icon: <IoCall className='text-green-400 w-8 h-8' /> },
        { href: `mailto:${profile?.email}`, icon: <img className='w-8 h-8' src="/gmail.png" alt="gmail-new" loading='lazy' /> },
        { href: `https://wa.me/${profile?.whatsapp}`, icon: <img className='w-8 h-8' src="/whatsapp.png" alt="whatsapp--v1" loading='lazy' /> },
        { href: `${profile?.facebook}`, icon: <img className='w-8 h-8' src="/facebook.png" alt="facebook-new" loading='lazy' /> },
        { href: `${profile?.instagram}`, icon: <img className='w-8 h-8' src="/instagram.png" alt="instagram-new--v1" loading='lazy' /> },
        { href: `${profile?.twitter}`, icon: <img className='w-8 h-8' src="/twitter.png" alt="twitter-circled--v1" loading='lazy' /> },
        { href: `${profile?.website}`, icon: <LuLink className='w-6 h-6 ${theme.textPrimary}' /> },
        { href: `${profile?.linkedin}`, icon: <img className='w-8 h-8' src="/linkedin.png" alt="linkedin-circled--v1" loading='lazy' /> },
    ];

    return (
        <div className="grid grid-cols-4 gap-4 my-3">
            {icons.map((item, index) => (
                <div key={index} className='flex items-center justify-center w-14 h-14 rounded-full bg-white shadow-md transform transition-all duration-200 hover:scale-110 hover:shadow-lg'>
                    <a href={item.href} className="flex items-center justify-center w-10 h-10">
                        {item.icon}
                    </a>
                </div>
            ))}
        </div>
    );
};
