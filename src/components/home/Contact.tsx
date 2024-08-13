// import { useState } from "react"

const Contact = () => {

    // const [form, setForm] = useState({
    //     name: "",
    //     email: "",
    //     message: "",
    // });

    // const handleChange = (e) => {
    //     setForm({ ...form, [e.target.name]: e.target.value });
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Handle form submission
    // };

    return (
        <>
            {/* <div className="text-center">
            <Typography variant="h3" color="blue-gray" className="mb-2">
                Join us today
            </Typography>
            <Typography className="font-normal mb-12 text-blue-gray-800">
                Enter your email and password to register.
            </Typography>
            <form action="#" className="mx-auto max-w-[24rem] text-left">
                <Input className="mb-2" color="black" type="email" name="name" placeholder="Name" />
                <Input className="mb-2" color="black" type="email" name="email" placeholder="Email" />
                <PhoneInput />
                <Button color="dark" size="lg" className="mt-4 w-full">
                    get started
                </Button>
            </form>
        </div> */}

            {/* <div className="bg-white dark:bg-gray-950 py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md mx-auto text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">
                        Get in Touch
                    </h2>
                    <p className="mt-4 text-lg leading-6 text-black/80 dark:text-white">
                        We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.
                    </p>
                </div>
                <div className="mt-12 max-w-md mx-auto">
                    <form onSubmit={handleSubmit} className="grid gap-6">
                        <div>
                            <label htmlFor="name" className="sr-only">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 text-black dark:text-white border border-gray-300 dark:border-gray-700 focus:border-orange-500 focus:outline-none"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="sr-only">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 text-black dark:text-white border border-gray-300 dark:border-gray-700 focus:border-orange-500 focus:outline-none"
                                placeholder="Your Email"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="sr-only">
                                Message
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 text-black dark:text-white border border-gray-300 dark:border-gray-700 focus:border-orange-500 focus:outline-none"
                                placeholder="Your Message"
                            ></textarea>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full px-6 py-3 bg-gradient-to-r from-red-500 to-orange-400 text-white rounded-lg font-medium hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-950 transition duration-300"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div> */}
            <section id="features" className="py-14 relative">
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
                        <div className="max-w-md bg-white rounded-lg p-8  mx-auto">
                            <form className="space-y-4">
                                <div>
                                    <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="name">Name</label>
                                    <input
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Enter your name"
                                    />
                                </div>

                                <div>
                                    <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="email">Email</label>
                                    <input
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Enter your email"
                                    />
                                </div>

                                <div>
                                    <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="message">Message</label>
                                    <textarea
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                                        id="message"
                                        name="message"
                                        rows={4}
                                        placeholder="Enter your message"
                                    ></textarea>
                                </div>

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

        </>
    )
}

export default Contact