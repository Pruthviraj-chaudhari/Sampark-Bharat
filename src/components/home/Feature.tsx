import { LayoutDashboard, Clapperboard, PackageSearch, MessagesSquare, Heart, Mail, Share2, Link, QrCode } from 'lucide-react';

const Features = () => {

  return (
    <section id="features" className="py-14 relative">
      <div className="mx-auto flex max-w-screen-xl flex-col gap-8 px-4 py-14 md:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h4 className="text-xl font-bold tracking-tight text-black dark:text-white">
            Features
          </h4>
          <h2 className="text-5xl z-10 h-auto pb-5 font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
            Discover the Power of Sampark Bharat.
          </h2>
          <p className="mt-6 text-xl leading-8 text-black/80 dark:text-white">
            Enhance your connectivity with a <strong>digital presence </strong> to showcase your identity and grow your network.
          </p>
        </div>
        <hr className="bg-white/30 h-px w-1/2 mx-auto mt-5" />
        <div className="relative mt-12">
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item, idx) => (
              <li
                key={idx}
                className="bg-transparent transition-all hover:scale-105 duration-300 transform-gpu border border-gray-300 rounded-xl space-y-3 p-4 dark:[box-shadow:0_-20px_80px_-20px_rgba(255,159,67,0.1)_inset]"
              >
                <div className="bg-gradient-to-r from-red-500 to-orange-400 text-white rounded-full p-4 w-fit transition-all hover:scale-105">
                  {item.icon}
                </div>
                <h4 className="text-lg text-black font-bold font-geist tracking-tighter">
                  {item.title}
                </h4>
                <p className="text-gray-700">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Features;

const features = [
  {
    icon: <LayoutDashboard className="w-6 h-6" />,
    title: "Multiple Themes",
    desc: "Four inbuilt templates for your Card.",
  },
  {
    icon: <Clapperboard className="w-6 h-6" />,
    title: "Photo & Video Gallery",
    desc: "Image, YouTube, and Vimeo Gallery.",
  },
  {
    icon: <PackageSearch className="w-6 h-6" />,
    title: "Product and Service Listing",
    desc: "List unlimited products and services on your vCard.",
  },
  {
    icon: <MessagesSquare className="w-6 h-6" />,
    title: "Testimonials",
    desc: "Add your happy client's testimonials.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Custom Fields",
    desc: "Add unlimited social media and other platforms links.",
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Inquiry Form",
    desc: "Inbuilt inquiry form on your vCard.",
  },
  {
    icon: <Share2 className="w-6 h-6" />,
    title: "Save & Share vCard",
    desc: "Easy save and share your Card options.",
  },
  {
    icon: <Link className="w-6 h-6" />,
    title: "Unique Link",
    desc: "Get your personal Unique Link for all your Card.",
  },
  {
    icon: <QrCode className="w-6 h-6" />,
    title: "QR Code",
    desc: "Get your unique personal QR code for all your Card.",
  },
];

