import ReCAPTCHA from "react-google-recaptcha";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaFacebook, FaInstagram, FaWhatsapp, FaCheckCircle } from "react-icons/fa";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "../ui/textarea";
import { useState } from "react";

const ContactFormModal = () => {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    message: "",
  });

  const [captchaValue, setCaptchaValue] = useState(null);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false); 
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCaptchaChange = (value: any) => {
    setCaptchaValue(value); 
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Check if captcha is solved
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
      <DialogTrigger asChild>
        <button className="p-[1px] sm:p-[2px] md:p-[3px] relative flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-purple-500 rounded-lg" />
          <div className="px-4 sm:px-6 md:px-8 py-1 sm:py-2 font-medium rounded-[8px] md:rounded-[6px] relative group transition duration-200 text-sm sm:text-base md:text-lg text-white bg-transparent">
            Get Started
          </div>
        </button>
      </DialogTrigger>
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
                {/* reCAPTCHA */}
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
