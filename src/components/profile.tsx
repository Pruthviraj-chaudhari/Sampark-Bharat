import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { IoLocationOutline } from "react-icons/io5"
import { ArrowRightIcon } from "@radix-ui/react-icons"
import { Separator } from "./ui/separator"
import { SVGProps } from "react"
import { JSX } from "react/jsx-runtime"

export default function Profile() {
  return (
    <div className="flex flex-col min-h-dvh">
      <header className="">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <a href="#" className="flex items-center gap-2">
            <img className="w-40" src="/logo_main.png" alt="Sampark Bharat" />
          </a>
        </div>
      </header>
      <main className="flex-1">
        <section id="profile" className="w-full py-4 md:py-24 lg:py-32 bg-orange-400">
          <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-6">
            <div className="relative flex justify-center items-center">
              <div className="absolute w-full h-full">
                <img
                  src="https://deshdoot.com/wp-content/uploads/2024/04/Rajabhau-Waje-Images.jpg"  // background image
                  alt="Background"
                  className="w-full h-2/3 object-cover rounded-lg"
                />
              </div>
              <img
                src="https://samparkbharat.com/assets/uploads/card-profile/1711693440-319360516_508734387893505_7594720919268335687_n.jpg"
                width={200}
                height={200}
                alt="John Doe"
                className="relative rounded-full w-56 h-56 object-cover border-4 border-white"
                style={{ marginTop: '100px' }}
              />
            </div>
            <div className="flex flex-col items-start gap-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">श्री.राजाभाऊ वाजे</h2>
              <span className="text-lg text-gray-100 font-bold tracking-wider"> (नाशिक लोकसभा खासदार)</span>
              <p className="text-gray-600 md:text-xl/relaxed">
                खासदार,नाशिक लोकसभा । Member Of Parliament,Nashik मा.आमदार,सिन्नर विधानसभा । EX.Member Of Legislative Assembly.
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <div className="flex w-full items-center gap-2">
                  <IoLocationOutline className="w-4 h-4" />
                  <span className="cursor-pointer">Nashik, Maharashtra</span>
                </div>
                <div className="flex w-full items-center gap-2">
                  <PhoneIcon className="w-4 h-4" />
                  <span className="cursor-pointer">+91 8080674512</span>
                </div>
                <div className="flex w-full items-center gap-2">
                  <MailIcon className="w-4 h-4" />
                  <span className="cursor-pointer">john@example.com</span>
                </div>
              </div>
              <div className="flex items-center gap-4 my-3">
                <a href="#" className="text-primary hover:underline">
                  <TwitterIcon className="w-6 h-6" />
                </a>
                <a href="#" className="text-primary hover:underline">
                  <FacebookIcon className="w-6 h-6" />
                </a>
                <a href="#" className="text-primary hover:underline">
                  <InstagramIcon className="w-6 h-6" />
                </a>
                <a href="#" className="text-primary hover:underline">
                  <AedinIcon className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <Separator className=" mx-auto w-14 h-3 bg-orange-400 rounded-full my-4" />

        <section id="news" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-6">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">News</div>
              <h2 className=" text-orange-400/90 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">चालू घडामोडी</h2>
              <p className="text-muted-foreground md:text-xl/relaxed">
                Stay up-to-date with the latest news, speeches, and events featuring Rajabhau Waje.
              </p>
            </div>
            <Card className="overflow-hidden rounded-lg shadow-lg">
              <CardContent>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLWe1QTd8No4AhtyX8jnZpHyZNFTMgMJEc_Q&s"
                  width={600}
                  height={400}
                  alt="News article"
                  className="aspect-video w-full object-cover"
                />
                <div className="mt-4 space-y-2">
                  <h3 className="text-xl font-bold">Rajabhau Waje News | सिन्नरमध्ये जल्लोष; राजाभाऊ वाजे यांना उबाठा गटाकडून उमेदवारी जाहीर |</h3>
                  <p className="text-muted-foreground">
                    #rajabhauwaje #nashik #abpmajha #abpमाझा #marathinews #maharashtrapolitics ...
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-primary hover:underline"
                  >
                    Read more
                    <ArrowRightIcon className="h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden rounded-lg shadow-lg">
              <CardContent>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdCaJM6fDrivhKcYeE53DbgeF1Z9nb6TddzQ&s"
                  width={600}
                  height={400}
                  alt="News article"
                  className="aspect-video w-full object-cover"
                />
                <div className="mt-4 space-y-2">
                  <h3 className="text-xl font-bold">Rajabhau Waje | सर्वसामान्य जनतेसाठी काम करणं हेच माझं धोरण : राजाभाऊ वाजे | tv9 marathi</h3>
                  <p className="text-muted-foreground">
                    #rajabhauwaje #nashik #abpmajha #abpमाझा #marathinews #maharashtrapolitics ...
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-primary hover:underline"
                  >
                    Read more
                    <ArrowRightIcon className="h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden rounded-lg shadow-lg">
              <CardContent>
                <img
                  src="https://i.ytimg.com/vi/L-JLTtNiwo8/maxresdefault.jpg"
                  width={600}
                  height={400}
                  alt="News article"
                  className="aspect-video w-full object-cover"
                />
                <div className="mt-4 space-y-2">
                  <h3 className="text-xl font-bold">Rajabhau Vaje Sabha Live । राजाभाऊ वाजे यांची विजयी संकल्प सभा लाईव्ह | Marathi News</h3>
                  <p className="text-muted-foreground">
                    #rajabhauwaje #nashik #abpmajha #abpमाझा #marathinews #maharashtrapolitics ...
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-primary hover:underline"
                  >
                    Read more
                    <ArrowRightIcon className="h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden rounded-lg shadow-lg">
              <CardContent>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7k9vT_t8ml6o_8EYGiFlGBBdrTqwylU2Y1qg_2m-JQ4d1dWk2uE4tuF32LutPHFfZoNA&usqp=CAU"
                  width={600}
                  height={400}
                  alt="News article"
                  className="aspect-video w-full object-cover"
                />
                <div className="mt-4 space-y-2">
                  <h3 className="text-xl font-bold">Rajabhau Waje Nashik : महायुतीचा उमेदवार ठरेना, मविआचे राजाभाऊ वाजे मैदानात</h3>
                  <p className="text-muted-foreground">
                    #rajabhauwaje #nashik #abpmajha #abpमाझा #marathinews #maharashtrapolitics ...
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-primary hover:underline"
                  >
                    Read more
                    <ArrowRightIcon className="h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className=" mx-auto w-14 h-3 bg-orange-400 rounded-full my-4" />

        <section id="gallery" className="w-full py-12 md:py-24 lg:py-32 bg-orange-400">
          <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-6">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Gallery
              </div>
              <h2 className=" text-white text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">फोटो गॅलरी</h2>
              <p className="text-white md:text-xl/relaxed">
                Explore a collection of photos showcasing Rajabhau's commitment to his community and his work as a
                public servant.
              </p>
            </div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO1NB1yvd3bCr3QSltXnWjOB08skGgui3keWiEWFaGGg2TsRZ9F9X-BA_93Xn2HS3DdKk&usqp=CAU"
              width={400}
              height={400}
              alt="John Doe"
              className="rounded-lg object-cover aspect-square"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8IzpgYG-3SFAI4N5-FCeLlUGRLZsSgrfK9g&s"
              width={400}
              height={400}
              alt="John Doe"
              className="rounded-lg object-cover aspect-square"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgutd4MD18a3KpLlLYlxjLuwV_5-YHK8YPRg&s"
              width={400}
              height={400}
              alt="John Doe"
              className="rounded-lg object-cover aspect-square"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwPUaVscFGXy_Adtd-CL2YkDr3Ydwz50290b1tdF4qF3jPUbryJ45opNCdT-O1KmKm6Io&usqp=CAU"
              width={400}
              height={400}
              alt="John Doe"
              className="rounded-lg object-cover aspect-square"
            />

            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6uQXoMDlcPUksBFWiFi9E0Na77jeRsWCoq4m5E3kgfDmxpc0SgubnU6O7FsxexOEeBE8&usqp=CAU"
              width={400}
              height={400}
              alt="John Doe"
              className="rounded-lg object-cover aspect-square"
            />
          </div>
        </section>

        <Separator className=" mx-auto w-14 h-3 bg-orange-400 rounded-full my-4" />

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-6">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Contact
              </div>
              <h2 className="text-3xl text-orange-400 font-bold tracking-tighter sm:text-4xl md:text-5xl">कार्यालय संपर्क</h2>
              <p className="text-muted-foreground md:text-xl/relaxed">
                Have a question or want to get involved? Fill out the form below and a member of our team will be in
                touch.
              </p>
            </div>
            <Card className="border-0 shadow-none">
              <CardContent>
                <form className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">नाव/Name.</Label>
                    <Input id="name" placeholder="Enter name" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">मोबाईल क्र./Mobile No.</Label>
                    <Input id="mobile" type="text" placeholder="Enter mobile" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">पत्ता/Address</Label>
                    <Input id="address" type="text" placeholder="Enter address" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="message">समस्या/तक्रार/सूचना/Message</Label>
                    <Textarea id="message" rows={5} placeholder="Enter message" />
                  </div>
                  <Button type="submit" className="w-full bg-orange-400 hover:bg-orange-500">
                    Submit
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <footer className="bg-orange-400 text-primary-foreground p-6 md:py-12 w-full">
        <div className="container max-w-7xl  gap-8 text-sm">
          <h2 className=" max-w-7xl font-semibold text-base my-2">महत्वाच्या शासकीय लिंक्स</h2>
        </div>
        <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div className="grid gap-1">
            <a href="#">
            महाराष्ट्र सरकार
            </a>
            <a href="#">
            पुणे महानगरपालिका
            </a>
            <a href="#">
            सोलापूर महानगरपालिका
            </a>
          </div>
          <div className="grid gap-1">
            <a href="#">
            नोंदणी व मुद्रांक विभाग
            </a>
            <a href="#">
            प्रॉव्हिडंट फंड
            </a>
            <a href="#">
            स्मार्ट आधारकार्ड
            </a>
          </div>
          <div className="grid gap-1">
            <a href="#">
            वाहन चालविण्याचा परवाना
            </a>
            <a href="#">
            आयुष्यमान भारत
            </a>
            <a href="#">
            कौशल्य विकास योजना
            </a>
          </div>
          <div className="grid gap-1">
            <a href="#">
            जवळचे पोलीस स्टेशन
            </a>
            <a href="#">
            जवळील रुग्णवाहिका
            </a>
            <a href="#">
            पोस्ट ऑफिस
            </a>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Legal</h3>
            <a href="#">
              Privacy Policy
            </a>
            <a href="#">
              Terms of Service
            </a>
            <a href="#">
              Disclaimer
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FacebookIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function InstagramIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function AedinIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function MailIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function PhoneIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function TwitterIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}