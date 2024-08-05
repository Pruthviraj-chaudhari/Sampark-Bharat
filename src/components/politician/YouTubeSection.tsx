import { useContext } from 'react'
import { Separator } from '../ui/separator'
import Balancer from 'react-wrap-balancer'
import YoutubeSection from '../common/YoutubeSection'
import { ProfileContext } from '@/context/MyContext'

const YouTubeSection = () => {
    const { profile } = useContext(ProfileContext);
    return (
        (profile?.youtube && profile?.youtube.length > 0) && (
            <>
                <Separator className={`mx-auto w-14 h-3  bg-orange-400 rounded-full my-4`} />
                <section id="youtube" className="w-full py-12 pb-24 md:py-24 lg:py-32 bg-orange-400">
                    <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-6">
                        <div className="space-y-4">
                            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">YouTube</div>
                            <h2 className="text-white text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                {
                                    (profile?.language === "Marathi") ? "यूट्यूब" : "YouTube"
                                }
                            </h2>
                            <Balancer className="text-white md:text-xl/relaxed">
                                Watch insightful videos, speeches, and highlights showcasing our work for society.
                            </Balancer>
                        </div>
                    </div>
                    <YoutubeSection />
                </section>
            </>
        )
    )
}

export default YouTubeSection