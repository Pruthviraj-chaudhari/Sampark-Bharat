import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
    const [form, setForm] = useState({
        name: "",
        mobile: "",
        message: "",
    });

    const [captchaValue, setCaptchaValue] = useState(null);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleCaptchaChange = (value:any) => {
        setCaptchaValue(value); // this value is the token returned by reCAPTCHA
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Check if captcha is solved
        if (!captchaValue) {
            setError("Please verify that you're not a robot.");
            return;
        }
        
        // Proceed with form submission
        // Send form data and captcha token (captchaValue) to the backend for validation
        setError(null);
        console.log("Form submitted:", form, captchaValue);
    };

    return (
        <section id="contact" className="py-14 relative">
            <div className="mx-auto flex max-w-screen-xl flex-col gap-8 px-4 py-14 md:px-8">
                <div className="mx-auto max-w-5xl text-center">
                    <h4 className="text-xl font-bold tracking-tight text-black dark:text-white">
                        Contact
                    </h4>
                    <h2 className="text-5xl z-10 h-auto pb-5 font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
                        Get in Touch
                    </h2>
                    <p className="mt-6 text-xl leading-8 text-black/80 dark:text-white">
                        We would love to hear from you! Discuss how Sampark Bharat can help your business. <br />
                        Our team is here to assist you.
                    </p>
                </div>
                <div className="relative mt-12">
                    <div className="max-w-md bg-white rounded-lg p-8 mx-auto">
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div>
                                <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="name">Name</label>
                                <input
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="mobile">Mobile</label>
                                <input
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                                    type="text"
                                    id="mobile"
                                    name="mobile"
                                    value={form.mobile}
                                    onChange={handleChange}
                                    placeholder="Enter your mobile"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="message">Message</label>
                                <textarea
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                                    id="message"
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    rows={4}
                                    placeholder="Enter your message"
                                    required
                                ></textarea>
                            </div>

                            {/* reCAPTCHA */}
                            <ReCAPTCHA
                                sitekey="6LcFRlUqAAAAALA9JlE1_rPmvgF7jo94txGzJfXr" // Replace with your actual site key
                                onChange={handleCaptchaChange}
                                className=" flex items-center justify-center"
                            />

                            {error && <p className="text-red-500">{error}</p>}

                            <button
                                type="submit"
                                className="w-full py-3 px-6 font-medium text-white bg-gradient-to-r from-orange-500 to-red-500 rounded-full shadow-md hover:from-red-500 hover:to-orange-500 transition duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
