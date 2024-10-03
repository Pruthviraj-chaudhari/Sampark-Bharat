import ScrollToTopButton from '@/components/common/ScrollToTop'
import ContactSection from '@/components/Demo/ContactSection'
import Footer from '@/components/Demo/Footer'
import GallerySection from '@/components/Demo/GallerySection'
import Header from '@/components/Demo/Header'
import NewsSection from '@/components/Demo/NewsSection'
import ProfileSection from '@/components/Demo/ProfileSection'
import SocialMediaSection from '@/components/Demo/SocialMediaSection'
import YouTubeSection from '@/components/Demo/YouTubeSection'
import ThemeWrapper from '@/context/ThemeWrapper'
import useFetchProfile from '@/hooks/useFetchProfile'

const Demo = () => {

    useFetchProfile();

    return (
        <ThemeWrapper>
            <div className="flex flex-col min-h-dvh">
                <Header />
                <main className="flex-1">
                    <ProfileSection />
                    <NewsSection />
                    <YouTubeSection />
                    <SocialMediaSection />
                    <GallerySection />
                    <ContactSection />
                </main>
                <Footer />
                <ScrollToTopButton />
            </div>
        </ThemeWrapper>
    )
}

export default Demo