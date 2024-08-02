import Balancer from "react-wrap-balancer";
import { LinkedInLogoIcon } from "@radix-ui/react-icons"
import { FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa"

export default function Footer() {

  const currentUrl = window.location.href;

  return (
    <footer className="bg-orange-400 text-white">
      <section className="py-10 px-5 md:px-20">
        <div className="container grid gap-12 md:grid-cols-3">
          <div className="flex flex-col gap-6">
            <a href="#">
              <h3 className="sr-only">Sampark Bharat</h3>
              <img
                src="logo_main.png"
                alt="Logo"
                className="h-12 transition-all hover:opacity-75"
              />
            </a>
            <p className="text-gray-100">
              <Balancer>
              The Ultimate Digital Business Card: Elevate Your Professional Impressions in the Digital Era.
              </Balancer>
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h5 className="font-semibold">Website</h5>
            <a href="/" className="text-gray-100 hover:text-white">Blog</a>
            <a href="/" className="text-gray-100 hover:text-white">Authors</a>
            <a href="/" className="text-gray-100 hover:text-white">Categories</a>
          </div>
          <div className="flex flex-col gap-2">
            <h5 className="font-semibold">Legal</h5>
            <a href="/privacy-policy" className="text-gray-100 hover:text-white">Privacy Policy</a>
            <a href="/terms-of-service" className="text-gray-100 hover:text-white">Terms of Service</a>
            <a href="/cookie-policy" className="text-gray-100 hover:text-white">Cookie Policy</a>
          </div>
        </div>
        <div className="container mt-8 flex flex-col justify-between gap-6 border-t border-gray-200 pt-6 md:flex-row md:items-center md:gap-2">
          <div className="flex gap-2">
            <a href={`https://wa.me/?text=${currentUrl}`} target="_blank" className=" hover:text-gray-500">
              <FaWhatsapp className="h-6 w-6" />
            </a>
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`} target="_blank" className=" hover:text-gray-500">
              <FaFacebook className="h-6 w-6" />
            </a>
            <a href={`https://twitter.com/intent/tweet?text=${currentUrl}`} target="_blank" className="hover:text-gray-500">
              <FaTwitter className="h-6 w-6" />
            </a>
            <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`} target="_blank" className="hover:text-gray-500">
              <LinkedInLogoIcon className="h-6 w-6" />
            </a>
          </div>
          <p className="text-gray-100">
            ©{" "}
            <a href="#" className="hover:text-white">Sampark Bharat 2024</a>.
            All rights reserved.
          </p>
        </div>
      </section>
    </footer>
  );
}





// const Footer = () => {
//     return (
//         <footer className="bg-orange-400 text-primary-foreground p-6 md:py-12 w-full">
//             <div className="container max-w-7xl  gap-8 text-sm">
//                 <h2 className=" max-w-7xl font-semibold text-base my-2">महत्वाच्या शासकीय लिंक्स</h2>
//             </div>
//             <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
//                 <div className="grid gap-1">
//                     <a href="#">
//                         महाराष्ट्र सरकार
//                     </a>
//                     <a href="#">
//                         पुणे महानगरपालिका
//                     </a>
//                     <a href="#">
//                         सोलापूर महानगरपालिका
//                     </a>
//                 </div>
//                 <div className="grid gap-1">
//                     <a href="#">
//                         नोंदणी व मुद्रांक विभाग
//                     </a>
//                     <a href="#">
//                         प्रॉव्हिडंट फंड
//                     </a>
//                     <a href="#">
//                         स्मार्ट आधारकार्ड
//                     </a>
//                 </div>
//                 <div className="grid gap-1">
//                     <a href="#">
//                         वाहन चालविण्याचा परवाना
//                     </a>
//                     <a href="#">
//                         आयुष्यमान भारत
//                     </a>
//                     <a href="#">
//                         कौशल्य विकास योजना
//                     </a>
//                 </div>
//                 <div className="grid gap-1">
//                     <a href="#">
//                         जवळचे पोलीस स्टेशन
//                     </a>
//                     <a href="#">
//                         जवळील रुग्णवाहिका
//                     </a>
//                     <a href="#">
//                         पोस्ट ऑफिस
//                     </a>
//                 </div>
//                 <div className="grid gap-1">
//                     <h3 className="font-semibold">Legal</h3>
//                     <a href="#">
//                         Privacy Policy
//                     </a>
//                     <a href="#">
//                         Terms of Service
//                     </a>
//                     <a href="#">
//                         Disclaimer
//                     </a>
//                 </div>
//             </div>
//         </footer>
//     )
// }

// export default Footer