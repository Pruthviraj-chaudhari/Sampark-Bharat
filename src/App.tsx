import { HiOutlineQrCode } from "react-icons/hi2";
import { FaFacebook, FaInstagram, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { LuDownload, LuUpload } from "react-icons/lu";
import { FiLink } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import Profile from "./components/profile";

export default function App() {
  return (
    <>
      <Profile />
    </>
  )
}


{/* <div className="bg-background text-card-foreground rounded-xl shadow-lg overflow-hidden w-full max-w-[800px] mx-auto m-4">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className=" bg-gray-600 p-8 flex flex-col items-center justify-start gap-y-10">
            <div className="flex flex-col items-center gap-4">
              <div className="rounded-full overflow-hidden w-44 h-44">
                <img
                  src="https://th.bing.com/th/id/OIP.hCfHyL8u8XAbreXuaiTMQgHaHZ?w=204&h=204&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                  alt="Profile"
                  width="128"
                  height="128"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="text-center">
                  <h2 className="text-3xl font-bold">Sampark bharat</h2>
                  <p className="text-primary-foreground">CEO and Founder</p>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <MdEmail className="w-4 h-4" />
                  <a href="#" className="text-blue-800 hover:underline">
                    john@example.com
                  </a>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <FaPhoneAlt className="w-4 h-4" />
                  <span>+1 (555) 555-5555</span>
                </div>
                <div className="flex items-center gap-4 mt-4">
                  <a href="#">
                    <FaInstagram className="w-6 h-6" />
                  </a>
                  <a href="#">
                    <FaWhatsapp className="w-6 h-6" />
                  </a>
                  <a href="#">
                    <FaFacebook className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Enter your name"
                  />
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"

                    placeholder="Enter your email"
                    type="email"
                  />
                </div>
                <textarea
                  className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"

                  placeholder="Enter your message"
                ></textarea>
                <button
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background text-primary-foreground hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-full"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Portfolio</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-muted rounded-md overflow-hidden">
                  <img
                    src="https://th.bing.com/th/id/OIP.BmksEpmwaTHzawhaIU8hRwHaFb?rs=1&pid=ImgDetMain"
                    alt="Portfolio 1"
                    width="300"
                    height="200"
                    className="object-cover w-full h-full"
                  // style="aspect-ratio: 300 / 200; object-fit: cover;"
                  />
                </div>
                <div className="bg-muted rounded-md overflow-hidden">
                  <img
                    src="https://neilpatel.com/wp-content/uploads/2017/12/portfolio.jpg"
                    alt="Portfolio 2"
                    width="300"
                    height="200"
                    className="object-cover w-full h-full"
                  // style="aspect-ratio: 300 / 200; object-fit: cover;"
                  />
                </div>
                <div className="bg-muted rounded-md overflow-hidden">
                  <img
                    src="https://th.bing.com/th/id/OIP.-OlO5kD0fjpwJNfVZ_VFgwHaE8?rs=1&pid=ImgDetMain"
                    alt="Portfolio 3"
                    width="300"
                    height="200"
                    className="object-cover w-full h-full"
                  // style="aspect-ratio: 300 / 200; object-fit: cover;"
                  />
                </div>
                
              </div>
            </div>
          </div>
          <div className="p-8 flex flex-col gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">About Me</h3>
              <p className="text-muted-foreground">
                I am a passionate software engineer with over 5 years of experience in building web applications. I
                specialize in React, Node.js, and cloud technologies.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Gallery</h3>
              <div className="grid grid-cols-3 gap-4">
                <a className="aspect-square overflow-hidden rounded-md" href="#" rel="ugc">
                  <img
                    src="https://th.bing.com/th/id/OIP.hCfHyL8u8XAbreXuaiTMQgHaHZ?w=204&h=204&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                    alt="Gallery 1"
                    width="300"
                    height="300"
                    className="object-cover w-full h-full"
                  // style="aspect-ratio: 300 / 300; object-fit: cover;"
                  />
                </a>
                <a className="aspect-square overflow-hidden rounded-md" href="#" rel="ugc">
                  <img
                    src="https://th.bing.com/th/id/OIP.hCfHyL8u8XAbreXuaiTMQgHaHZ?w=204&h=204&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                    alt="Gallery 2"
                    width="300"
                    height="300"
                    className="object-cover w-full h-full"
                  // style="aspect-ratio: 300 / 300; object-fit: cover;"
                  />
                </a>
                <a className="aspect-square overflow-hidden rounded-md" href="#" rel="ugc">
                  <img
                    src="https://th.bing.com/th/id/OIP.hCfHyL8u8XAbreXuaiTMQgHaHZ?w=204&h=204&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                    alt="Gallery 3"
                    width="300"
                    height="300"
                    className="object-cover w-full h-full"
                  // style="aspect-ratio: 300 / 300; object-fit: cover;"
                  />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Products and Services</h3>
              <ul className="space-y-2">
                <li>
                  <h4 className="font-medium">Web Development</h4>
                  <p className="text-muted-foreground">
                    Custom web applications, e-commerce solutions, and responsive web design.
                  </p>
                </li>
                <li>
                  <h4 className="font-medium">Mobile App Development</h4>
                  <p className="text-muted-foreground">
                    Native and cross-platform mobile app development for iOS and Android.
                  </p>
                </li>
                <li>
                  <h4 className="font-medium">UI/UX Design</h4>
                  <p className="text-muted-foreground">Crafting intuitive and visually appealing user experiences.</p>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Testimonials</h3>
              <div className="space-y-4">
                <div className="bg-muted rounded-md p-4">
                  <p className="text-muted-foreground">
                    "John is an exceptional web developer. He delivered a high-quality website that exceeded our
                    expectations."
                  </p>
                  <div className="flex items-center gap-2 mt-4">
                    <div className="rounded-full overflow-hidden w-8 h-8">
                      <img
                        src="https://th.bing.com/th/id/OIP.hCfHyL8u8XAbreXuaiTMQgHaHZ?w=204&h=204&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                        alt="Client 1"
                        width="32"
                        height="32"
                        className="object-cover w-full h-full"
                      // style="aspect-ratio: 32 / 32; object-fit: cover;"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium">Jane Doe</h4>
                      <p className="text-muted-foreground text-sm">CEO, Acme Inc.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-muted rounded-md p-4">
                  <p className="text-muted-foreground">
                    "I've worked with John on multiple projects, and he always delivers exceptional results. Highly
                    recommended!"
                  </p>
                  <div className="flex items-center gap-2 mt-4">
                    <div className="rounded-full overflow-hidden w-8 h-8">
                      <img
                        src="https://th.bing.com/th/id/OIP.hCfHyL8u8XAbreXuaiTMQgHaHZ?w=204&h=204&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                        alt="Client 2"
                        width="32"
                        height="32"
                        className="object-cover w-full h-full"
                      // style="aspect-ratio: 32 / 32; object-fit: cover;"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium">Michael Johnson</h4>
                      <p className="text-muted-foreground text-sm">CTO, Globex Inc.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-muted p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FiLink className="w-5 h-5" />
            <span className="text-sm">https://example.com/john-doe</span>
          </div>
          <div className="flex items-center gap-2">
            <HiOutlineQrCode className="w-5 h-5" />
            <span className="text-sm">Scan QR Code</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
              <LuDownload className="w-5 h-5" />
              <span className="sr-only">Download</span>
            </button>
            <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
              <LuUpload className="w-5 h-5" />
              <span className="sr-only">Share</span>
            </button>
          </div>
        </div>
      </div> */}