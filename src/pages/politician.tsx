import Header from "../components/Header"
import Footer from "../components/Footer"
import ProfileSection from "../components/ProfileSection"
import NewsSection from "../components/NewsSection"
import GallerySection from "../components/GallerySection"
import ContactSection from "../components/ContactSection"
import { Separator } from "../components/ui/separator"
import { useContext, useEffect } from "react"
import { ProfileContext } from "@/context/MyContext"
import { useParams } from "react-router-dom"
import axios from "axios"
import { toast } from "sonner"


export default function Politician() {

  const { slug } = useParams<{ slug: string }>();
  const { setProfile } = useContext(ProfileContext);

  const fetchData = async (slug: string) => {
    try {
      const environment = String(import.meta.env.VITE_API_ENVIRONMENT);
      const backendAPI = String(import.meta.env.VITE_API_BACKEND);
      const API = (environment == "local") ? "http://localhost:3000/" : backendAPI;
      const response = await axios.post(API, { slug });
      const profileData = response.data;
      localStorage.setItem("profile", JSON.stringify(profileData)); // Ensure the data is stored as a string
      setProfile(profileData);
    } catch (error) {
      console.log("Error fetching profile: ", error);
      toast.error("Internal Server Error");
    }
  };

  useEffect(() => {
    if (slug) {
      fetchData(slug);
    }
  }, [slug]);

  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <main className="flex-1">
        <ProfileSection />
        <Separator className={`mx-auto w-14 h-3  bg-orange-400 rounded-full my-4`} />
        <NewsSection />
        <Separator className={`mx-auto w-14 h-3  bg-orange-400 rounded-full my-4`} />
        <GallerySection />
        <Separator className={`mx-auto w-14 h-3  bg-orange-400 rounded-full my-4`} />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

