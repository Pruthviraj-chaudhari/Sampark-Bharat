import { SVGProps } from 'react'
import { IoLocationOutline } from "react-icons/io5"

const ProfileSection = () => {
  return (
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

  )
}

export default ProfileSection;


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