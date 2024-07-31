import { IoCall, IoMail } from "react-icons/io5";
import { MdLocationPin } from "react-icons/md";
import { LuLink } from "react-icons/lu";
import { useContext } from "react";
import { ProfileContext } from "@/context/MyContext";
import { Skeleton } from "@/components/ui/skeleton";

const ProfileSection = () => {
  const { profile, loading } = useContext(ProfileContext);

  return (
    <section id="profile" className="w-full py-4 md:pt-6 md:pb-24 lg:py-32 bg-[#DBE8F1]">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 md:px-6">
        <div className="relative flex justify-center items-center">
          <div className="absolute w-full h-full">
            {loading ? (
              <Skeleton className="w-full h-2/3 object-cover rounded-lg" />
            ) : (
              <img
                src={profile?.backgroundPhoto}
                alt="Background"
                className="w-full h-2/3 object-cover rounded-lg"
                loading="lazy"
              />
            )}
          </div>
          {loading ? (
            <Skeleton className="relative rounded-full w-56 h-56 object-cover border-4 border-white" style={{ marginTop: '100px' }} />
          ) : (
            <img
              src={profile?.profilePhoto}
              width={200}
              height={200}
              alt="Profile"
              className="relative rounded-full w-56 h-56 object-scale-down border-4 border-white bg-white"
              style={{ marginTop: '150px' }}
              loading="lazy"
            />
          )}
        </div>
        <div className="flex flex-col items-start gap-6 px-4 md:px-0">
          {loading ? (
            <Skeleton className="w-3/4 h-8 rounded" />
          ) : (
            <h2 className="text-3xl text-black font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {profile?.name}
            </h2>
          )}
          {loading ? (
            <Skeleton className="w-1/2 h-6 rounded" />
          ) : (
            <span className="text-lg text-blue-600 font-bold tracking-wider">
              {profile?.position}
            </span>
          )}
          {loading ? (
            <Skeleton className="w-full h-24 rounded" />
          ) : (
            <p className="text-muted-foreground md:text-xl leading-relaxed">
              {profile?.description}
            </p>
          )}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="flex items-center gap-2">
              <MdLocationPin className="w-5 h-5 text-blue-600" />
              {loading ? (
                <Skeleton className="w-24 h-4 rounded" />
              ) : (
                <span className="cursor-pointer hover:text-primary transition-colors">
                  {profile?.location}
                </span>
              )}
            </div>
            <div className="flex items-center gap-2">
              <IoCall className="w-5 h-5 text-blue-600" />
              {loading ? (
                <Skeleton className="w-24 h-4 rounded" />
              ) : (
                <span className="cursor-pointer hover:text-primary transition-colors">
                  {profile?.contact}
                </span>
              )}
            </div>
            <div className="flex items-center gap-2">
              <IoMail className="w-5 h-5 text-blue-600" />
              {loading ? (
                <Skeleton className="w-24 h-4 rounded" />
              ) : (
                <span className="cursor-pointer hover:text-primary transition-colors">
                  {profile?.email}
                </span>
              )}
            </div>
          </div>
          <IconGrid loading={loading} />
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;

type Loading = {
  loading: boolean;
}
const IconGrid = ({ loading }: Loading) => {
  const { profile } = useContext(ProfileContext);
  const icons = [
    { href: `tel:${profile?.contact}`, icon: <IoCall className='text-green-400 w-8 h-8' /> },
    { href: `mailto:${profile?.email}`, icon: <img className='w-8 h-8' src="https://img.icons8.com/color/144/gmail-new.png" alt="gmail-new" loading='lazy' /> },
    { href: `https://wa.me/${profile?.whatsapp}`, icon: <img className='w-8 h-8' src="https://img.icons8.com/color/144/whatsapp--v1.png" alt="whatsapp--v1" loading='lazy' /> },
    { href: `${profile?.facebook}`, icon: <img className='w-8 h-8' src="https://img.icons8.com/color/144/facebook-new.png" alt="facebook-new" loading='lazy' /> },
    { href: `${profile?.instagram}`, icon: <img className='w-8 h-8' src="https://img.icons8.com/color/144/instagram-new--v1.png" alt="instagram-new--v1" loading='lazy' /> },
    { href: `${profile?.twitter}`, icon: <img className='w-8 h-8' src="https://img.icons8.com/color/144/twitter-circled--v1.png" alt="twitter-circled--v1" loading='lazy' /> },
    { href: `${profile?.website}`, icon: <LuLink className='w-6 h-6 text-gray-600' /> },
    { href: `${profile?.linkedin}`, icon: <img className='w-8 h-8' src="https://img.icons8.com/color/144/linkedin-circled--v1.png" alt="linkedin-circled--v1" loading='lazy' /> },
  ];

  return (
    <div className="grid grid-cols-4 gap-4 my-3">
      {icons.map((item, index) => (
        <div key={index} className='flex items-center justify-center w-14 h-14 rounded-full bg-white shadow-md transform transition-all duration-200 hover:scale-110 hover:shadow-lg'>
          {loading ? (
            <Skeleton className="w-10 h-10 rounded-full" />
          ) : (
            <a href={item.href} className="flex items-center justify-center w-10 h-10">
              {item.icon}
            </a>
          )}
        </div>
      ))}
    </div>
  );
};
