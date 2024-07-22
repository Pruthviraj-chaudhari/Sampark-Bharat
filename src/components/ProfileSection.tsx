import { IoCall, IoMail } from "react-icons/io5"
import { MdLocationPin } from "react-icons/md";
import { LuLink } from "react-icons/lu";
import { useContext } from "react";
import { ProfileContext } from "@/context/MyContext";

const ProfileSection = () => {
  const { profile } = useContext(ProfileContext);
  return (
    <section id="profile" className="w-full py-4 md:py-24 lg:py-32 bg-orange-400">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-6">
        <div className="relative flex justify-center items-center">
          <div className="absolute w-full h-full">
            <img
              src={profile?.backgroundPhoto}  // background image
              alt="Background"
              className="w-full h-2/3 object-cover rounded-lg"
              loading="lazy"
            />
          </div>
          <img
            src={profile?.profilePhoto}
            width={200}
            height={200}
            alt="John Doe"
            className="relative rounded-full w-56 h-56 object-cover border-4 border-white"
            style={{ marginTop: '100px' }}
          />
        </div>
        <div className="flex flex-col items-start gap-6 px-4 md:px-0">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{profile?.name}</h2>
          <span className="text-lg text-gray-600 font-bold tracking-wider">{profile?.position}</span>
          <p className="text-gray-600 md:text-xl leading-relaxed">
            {profile?.description}
          </p>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="flex items-center gap-2">
              <MdLocationPin className="w-5 h-5 text-gray-700" />
              <span className="cursor-pointer hover:text-primary transition-colors">{profile?.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <IoCall className="w-5 h-5 text-gray-700" />
              <span className="cursor-pointer hover:text-primary transition-colors">{profile?.contact}</span>
            </div>
            <div className="flex items-center gap-2">
              <IoMail className="w-5 h-5 text-gray-700" />
              <span className="cursor-pointer hover:text-primary transition-colors">{profile?.email}</span>
            </div>
          </div>
          <IconGrid />
        </div>
      </div>
    </section>
  )
}

export default ProfileSection;


const IconGrid = () => {
  const { profile } = useContext(ProfileContext);
  return (
    <div className="grid grid-cols-4 gap-4 my-3">
      <div className='flex items-center justify-center w-14 h-14 rounded-full bg-white shadow-md transform transition-all duration-200 hover:scale-110 hover:shadow-lg'>
        <a href={`tel:${profile?.contact}`} className="flex items-center justify-center w-10 h-10">
          <IoCall className='text-green-400 w-8 h-8' />
        </a>
      </div>
      <div className='flex items-center justify-center w-14 h-14 rounded-full bg-white shadow-md transform transition-all duration-200 hover:scale-110 hover:shadow-lg'>
        <a href={`mailto:${profile?.email}`} className="flex items-center justify-center w-10 h-10">
          <img className='w-8 h-8' src="https://img.icons8.com/color/144/gmail-new.png" alt="gmail-new" loading='lazy' />
        </a>
      </div>
      <div className='flex items-center justify-center w-14 h-14 rounded-full bg-white shadow-md transform transition-all duration-200 hover:scale-110 hover:shadow-lg'>
        <a href={`https://wa.me/${profile?.whatsapp}`} className="flex items-center justify-center w-10 h-10">
          <img className='w-8 h-8' src="https://img.icons8.com/color/144/whatsapp--v1.png" alt="whatsapp--v1" loading='lazy' />
        </a>
      </div>
      <div className='flex items-center justify-center w-14 h-14 rounded-full bg-white shadow-md transform transition-all duration-200 hover:scale-110 hover:shadow-lg'>
        <a href={`${profile?.facebook}`} className="flex items-center justify-center w-10 h-10">
          <img className='w-8 h-8' src="https://img.icons8.com/color/144/facebook-new.png" alt="facebook-new" loading='lazy' />
        </a>
      </div>
      <div className='flex items-center justify-center w-14 h-14 rounded-full bg-white shadow-md transform transition-all duration-200 hover:scale-110 hover:shadow-lg'>
        <a href={`${profile?.instagram}`} className="flex items-center justify-center w-10 h-10">
          <img className='w-8 h-8' src="https://img.icons8.com/color/144/instagram-new--v1.png" alt="instagram-new--v1" loading='lazy' />
        </a>
      </div>
      <div className='flex items-center justify-center w-14 h-14 rounded-full bg-white shadow-md transform transition-all duration-200 hover:scale-110 hover:shadow-lg'>
        <a href={`${profile?.twitter}`} className="flex items-center justify-center w-10 h-10">
          <img className='w-8 h-8' src="https://img.icons8.com/color/144/twitter-circled--v1.png" alt="twitter-circled--v1" loading='lazy' />
        </a>
      </div>
      <div className='flex items-center justify-center w-14 h-14 rounded-full bg-white shadow-md transform transition-all duration-200 hover:scale-110 hover:shadow-lg'>
        <a href={`${profile?.website}`} className="flex items-center justify-center w-10 h-10">
          <LuLink className='w-6 h-6 text-gray-600' />
        </a>
      </div>
      <div className='flex items-center justify-center w-14 h-14 rounded-full bg-white shadow-md transform transition-all duration-200 hover:scale-110 hover:shadow-lg'>
        <a href={`${profile?.linkedin}`} className="flex items-center justify-center w-10 h-10">
          <img className='w-8 h-8' src="https://img.icons8.com/color/144/linkedin-circled--v1.png" alt="linkedin-circled--v1" loading='lazy' />
        </a>
      </div>
    </div>
  );
}