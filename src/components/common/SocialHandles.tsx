import { Card } from "@/components/ui/card";
import { useContext } from "react";
import { ProfileContext } from "@/context/MyContext";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { Skeleton } from "../ui/skeleton";
import { IGEmbed } from "./IGEmbed";
// import { FacebookProvider, Page } from "react-facebook";

const SocialHandles = () => {
    const { profile, loading } = useContext(ProfileContext);
    // const appId = String(import.meta.env.VITE_API_APPID);

    return (
        <div className="container px-4 md:px-10 mt-8">
            <div className="container mx-auto px-4 py-8">
                <div className="services-padding grid grid-cols-1 md:grid-cols-2 gap-8">
                    {loading ? (
                        <Card className="overflow-hidden">
                            <Skeleton className="w-full h-600" />
                        </Card>
                    ) : (
                        profile?.twitter && (
                            <Card className="overflow-hidden w-full min-h-[600px]">
                                <TwitterProfile url={profile.twitter} />
                            </Card>
                        )
                    )}
                    {loading ? (
                        <Card className="overflow-hidden">
                            <Skeleton className="w-328 h-328" />
                        </Card>
                    ) : (
                        profile?.instagram && (
                            <Card className="overflow-hidden">
                                <div className="flex justify-center items-center">
                                    <IGEmbed
                                        url={profile.instagram}
                                        retryDisabled={true}
                                    />
                                </div>
                            </Card>
                        )
                    )}
                    {loading ? (
                        <Card className="overflow-hidden min-h-[200px]">
                            <Skeleton className="w-full h-full" />
                        </Card>
                    ) : (
                        profile?.youtubeEmbedPlaylist && (
                            <Card className="overflow-hidden min-h-[200px]">
                                <div className="flex items-center justify-center w-full h-full">
                                    <iframe
                                        className="w-full h-full"
                                        src={profile.youtubeEmbedPlaylist}
                                        title="YouTube video player"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        loading="lazy"
                                    ></iframe>
                                </div>
                            </Card>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default SocialHandles;

const TwitterProfile = ({ url }: { url: string }) => {
    const parsedUrl = new URL(url);
    const pathnameParts = parsedUrl.pathname.split("/");
    const screenName = pathnameParts[1];

    return (
        <TwitterTimelineEmbed
            sourceType="profile"
            screenName={screenName}
            options={{ height: "700px" }}
            autoHeight={true}
        />
    );
};



// {loading ? (
//     <Card className="overflow-hidden">
//         <Skeleton className="w-full h-500" />
//     </Card>
// ) : (
//     profile?.facebookPage && (
//         <Card className="overflow-hidden w-full min-h-[600px]">
//             <div className="flex justify-center">
//                 <iframe
//                         src={`https://www.facebook.com/plugins/page.php?href=${profile.facebookPage}&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=${appId}`}
//                         width="500"
//                         height="500"
//                         style={{ border: "none", overflow: "hidden" }}
//                         allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"> 
//                     </iframe>
//                 {/* <FacebookProvider appId={appId}>
//                     <Page href={profile.facebookPage} width="380" height="600" showFacepile tabs="timeline" />
//                 </FacebookProvider> */}
//             </div>
//         </Card>
//     )
// )}