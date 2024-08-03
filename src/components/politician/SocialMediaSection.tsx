import { useContext } from 'react';
import { ProfileContext } from '@/context/MyContext';
import Balancer from 'react-wrap-balancer';
import { Separator } from "../ui/separator";
import SocialHandles from "../common/SocialHandles";

const SocialMediaSection = () => {
    const { profile } = useContext(ProfileContext);

    return (
        (profile && (profile?.facebookPage != '' || profile?.twitter != '' || profile?.instagram != '' || profile?.youtubeEmbedPlaylist != '')) && (
            <>
                <Separator className={`mx-auto w-14 h-3  bg-orange-400 rounded-full my-4`} />
                <section id="socialmedia" className="w-full py-12 md:py-24 lg:py-32 bg-white">
                    <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-6">
                        <div className="space-y-4">
                            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">Social Media</div>
                            <h2 className="text-orange-400 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">सोशल मीडिया</h2>
                            <Balancer className="text-muted-foreground md:text-xl/relaxed">
                                Stay informed with our latest updates, announcements, and achievements.
                            </Balancer>
                        </div>
                    </div>
                    <SocialHandles />
                </section >
                <Separator className={`mx-auto w-14 h-3  bg-orange-400 rounded-full my-4`} />
            </>
        )
    );
}

export default SocialMediaSection;

