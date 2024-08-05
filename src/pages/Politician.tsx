import Header from "@/components/politician/Header"
import Footer from "../components/politician/Footer"
import ProfileSection from "../components/politician/ProfileSection"
import NewsSection from "../components/politician/NewsSection"
import GallerySection from "../components/politician/GallerySection"
import ContactSection from "../components/politician/ContactSection"
import { Separator } from "../components/ui/separator"
import useFetchProfile from "@/hooks/useFetchProfile"
import ScrollToTopButton from "@/components/common/ScrollToTop"
import SocialMediaSection from "@/components/politician/SocialMediaSection"
import YouTubeSection from "@/components/politician/YouTubeSection"

export default function Politician() {

  useFetchProfile();

  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <main className="flex-1">
        <ProfileSection />
        <Separator className={`mx-auto w-14 h-3  bg-orange-400 rounded-full my-4`} />
        <NewsSection />
        <YouTubeSection />
        <SocialMediaSection />
        <GallerySection />
        <Separator className={`mx-auto w-14 h-3  bg-orange-400 rounded-full my-4`} />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  )
}

