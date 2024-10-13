import ReCAPTCHA from "react-google-recaptcha";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaFacebook, FaInstagram, FaWhatsapp, FaCheckCircle } from "react-icons/fa";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "../ui/textarea";
import { useState, ReactNode } from "react";

interface ContactFormModalProps {
  triggerButton: ReactNode;
}

const ContactFormModal = ({ triggerButton }: ContactFormModalProps) => {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    message: "",
  });

  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // handleCaptchaChange with correct type for ReCAPTCHA (string or null)
  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
  };

  // handleSubmit with type for form event
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!captchaValue) {
      setError("Please verify that you're not a robot.");
      return;
    }

    setError(null);

    setTimeout(() => {
      console.log("Form submitted:", form, captchaValue);
      setSubmitted(true);
      setTimeout(() => {
        setIsModalOpen(false);
      }, 2000);
    }, 500);
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      {/* Use the triggerButton prop to render the button */}
      <DialogTrigger asChild>{triggerButton}</DialogTrigger>

      <DialogContent className="max-w-sm md:max-w-lg bg-white px-4 py-6 sm:px-1 sm:py-8">
        <div className="flex flex-col items-center justify-center gap-6">
          <a href="#" className="flex items-center gap-2">
            <img className="w-32 md:w-40" src="/logo_main.png" alt="Sampark Bharat" />
          </a>
          <div className="flex flex-col items-center gap-2 w-full sm:w-4/5 lg:w-3/4">
            {submitted ? (
              <div className="text-center text-green-500">
                <FaCheckCircle className="w-12 h-12 mx-auto animate-pulse" />
                <p>Form successfully submitted!</p>
              </div>
            ) : (
              <form className="grid gap-4 w-full" onSubmit={handleSubmit}>
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="mobile">Mobile No.</Label>
                  <Input
                    type="text"
                    id="mobile"
                    name="mobile"
                    value={form.mobile}
                    onChange={handleChange}
                    placeholder="Enter your mobile"
                    required
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Enter your message"
                    required
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
                <div className="flex justify-center">
                  <ReCAPTCHA
                    sitekey="6LcFRlUqAAAAALA9JlE1_rPmvgF7jo94txGzJfXr"
                    onChange={handleCaptchaChange}
                    className="mt-4"
                  />
                </div>

                {error && <p className="text-red-500">{error}</p>}

                <Button
                  variant="outline"
                  type="submit"
                  className="w-full bg-black text-white hover:bg-gray-700 py-2 rounded-md transition-colors duration-200">
                  Submit
                </Button>
              </form>
            )}
          </div>
          <div className="flex w-full justify-center gap-4 mt-4">
            <a href="https://wa.me/918600180045" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-500 transition-colors">
              <FaWhatsapp className="h-6 w-6" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61566115388120" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-500 transition-colors">
              <FaFacebook className="h-6 w-6" />
            </a>
            <a href="https://www.instagram.com/sampark.bharat/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-500 transition-colors">
              <FaInstagram className="h-6 w-6" />
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactFormModal;
