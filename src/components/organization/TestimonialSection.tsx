import Balancer from 'react-wrap-balancer';
import { InfiniteMovingCards } from '../ui/infinite-moving-cards';
import { useContext } from 'react';
import { ProfileContext } from '@/context/MyContext';

const TestimonialSection = () => {

    const { profile, loading } = useContext(ProfileContext);

    return (
        <section id="news" className="w-full pt-12 md:pt-24 lg:pt-32 bg-white">
            <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-6">
                <div className="space-y-4">
                    <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">Testimonials</div>
                    <h2 className="text-slate-900 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Testimonials</h2>
                    <Balancer className="text-muted-foreground md:text-xl/relaxed">
                        Read what our members and supporters have to say about their experiences with us.
                    </Balancer>
                </div>
            </div>
            <div className="h-[30rem] rounded-md flex flex-col antialiased bg-white items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                    items={profile?.testimonials|| []}
                    loading={loading}
                    direction="right"
                    speed="slow"
                />
            </div>
        </section>
    )
}

export default TestimonialSection