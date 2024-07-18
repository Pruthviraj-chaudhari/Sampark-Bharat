import Header from "../components/Header"
import Footer from "../components/Footer"
import ProfileSection from "../components/ProfileSection"
import NewsSection from "../components/NewsSection"
import GallerySection from "../components/GallerySection"
import ContactSection from "../components/ContactSection"
import { Separator } from "../components/ui/separator"

export default function Profile() {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <main className="flex-1">
        <ProfileSection />
        <Separator className=" mx-auto w-14 h-3 bg-orange-400 rounded-full my-4" />
        <NewsSection />
        <Separator className=" mx-auto w-14 h-3 bg-orange-400 rounded-full my-4" />
        <GallerySection />
        <Separator className=" mx-auto w-14 h-3 bg-orange-400 rounded-full my-4" />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

