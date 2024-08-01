import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Balancer from "react-wrap-balancer"

const ContactSection = () => {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-6">
        <div className="space-y-4">
          <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
            Contact
          </div>
          <h2 className="text-3xl text-blue-600 font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h2>
          <Balancer className="text-muted-foreground md:text-xl/relaxed">
            Get in touch with us to learn more about our services and how we can assist you.
          </Balancer>
        </div>
        <Card className="border-0 shadow-none">
          <CardContent>
            <form className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name.</Label>
                <Input id="name" placeholder="Enter name" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Mobile No.</Label>
                <Input id="mobile" type="text" placeholder="Enter mobile" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Address</Label>
                <Input id="address" type="text" placeholder="Enter address" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" rows={5} placeholder="Enter message" />
              </div>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-500">
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