import ContactSection from "@/components/business/ContactSection"
import Footer from "@/components/business/Footer"
import GallerySection from "@/components/business/GallerySection"
import Header from "@/components/business/Header"
import NewsSection from "@/components/business/NewsSection"
import ProfileSection from "@/components/business/ProfileSection"
import SocialMediaSection from "@/components/business/SocialMediaSection"
import ScrollToTopButton from "@/components/common/ScrollToTop"
import { Separator } from "@/components/ui/separator"
import useFetchProfile from "@/hooks/useFetchProfile"

const Business = () => {

  useFetchProfile();

  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <main className="flex-1">
        <ProfileSection />
        <Separator className={`mx-auto w-14 h-3  bg-blue-600 rounded-full my-4`} />
        <NewsSection />
        <SocialMediaSection />
        <GallerySection />
        <Separator className={`mx-auto w-14 h-3  bg-blue-600 rounded-full my-4`} />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  )
}

export default Business