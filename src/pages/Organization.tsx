import ContactSection from "@/components/organization/ContactSection"
import Footer from "@/components/organization/Footer"
import GallerySection from "@/components/organization/GallerySection"
import Header from "@/components/organization/Header"
import NewsSection from "@/components/organization/NewsSection"
import ProfileSection from "@/components/organization/ProfileSection"
import SocialMediaSection from "@/components/organization/SocialMediaSection"
import ScrollToTopButton from "@/components/common/ScrollToTop"
import { Separator } from "@/components/ui/separator"
import useFetchProfile from "@/hooks/useFetchProfile"
import TestimonialSection from "@/components/organization/TestimonialSection"

const Organization = () => {

  useFetchProfile();

  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <main className="flex-1">
        <ProfileSection />
        <Separator className={`mx-auto w-14 h-3  bg-slate-900 rounded-full my-4`} />
        <NewsSection />
        <SocialMediaSection />
        <GallerySection />
        <Separator className={`mx-auto w-14 h-3  bg-slate-900 rounded-full my-4`} />
        <TestimonialSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  )
}

export default Organization