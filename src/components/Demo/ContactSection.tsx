import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Balancer from "react-wrap-balancer"
import { useContext } from "react"
import { ProfileContext } from "@/context/MyContext"
import useTheme from "@/hooks/useTheme"

const ContactSection = () => {
  const { profile } = useContext(ProfileContext);
  const themeClasses = useTheme(profile);

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-6">
        <div className="space-y-4">
          <div className="inline-block rounded-lg bg-black px-3 py-1 text-sm text-primary-foreground">
            Contact
          </div>
          <h2 className={`text-3xl ${themeClasses.textBackground} font-bold tracking-tighter sm:text-4xl md:text-5xl`}>
            {
              (profile?.language === "Marathi") ? "कार्यालय संपर्क" : "Office Contact"
            }
          </h2>
          <Balancer className="text-muted-foreground md:text-xl/relaxed">
            Reach out with your questions, concerns, or suggestions. We believe peoples voice matters.
          </Balancer>
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
              <Button type="submit" className={`w-full ${themeClasses.background} hover:${themeClasses.background}/80`}>
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default ContactSection