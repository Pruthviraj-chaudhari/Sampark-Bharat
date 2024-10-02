import { useState, useEffect } from "react";

import { Typography } from "@material-tailwind/react";
import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = [
    {
      id: 1,
      name: "Gauresh Suryawanshi",
      position: "CEO, R3sys",
      quote: `"At Sampark Bharat, we believe in empowering individuals and organizations to tell their stories with authenticity and impact. Our mission is to amplify voices and create networks that inspire change and progress."`,
      image: "gauresh.png",
      bgColor: "bg-gradient-to-tr from-red-500  to-orange-400",
    },
    {
      id: 2,
      name: "Sunil Joshi",
      position: "CTO, R3sys",
      quote: `"Our journey is driven by innovation and passion. At Sampark Bharat, we aim to build communities that foster collaboration and growth. We believe that technology should be a bridge to progress."`,
      image: "sunil.png",
      bgColor: "bg-gradient-to-tr from-red-500  to-orange-400",
    },
  ];

  // Auto-slide logic using useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    }, 8000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [testimonials.length]);

  return (
    <section id="about" className="py-8 lg:py-20">
      <div className="container mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: activeIndex === index ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className={`${activeIndex === index ? "block" : "hidden"}`}
          >
            <Card
              // shadow={false}
              className={`overflow-hidden rounded-3xl ${testimonial.bgColor}`}
            >
              <CardContent className="flex flex-col-reverse gap-16 py-20 px-14 lg:flex-row">
                <div>
                  <img
                    src="transparent.png"
                    alt="spotify"
                    className="mb-8 w-36"
                  />
                  <Typography
                    variant="h3"
                    color="white"
                    className="mb-10 text-xl md:text-3xl font-medium leading-normal"
                  >
                    <Balancer>{testimonial.quote}</Balancer>
                  </Typography>
                  <Typography
                    variant="lead"
                    color="white"
                    className="font-medium"
                  >
                    {testimonial.name}
                  </Typography>
                  <Typography
                    color="white"
                    className="font-normal opacity-70"
                  >
                    {testimonial.position}
                  </Typography>
                </div>
                <div className="relative mx-auto grid shrink-0 place-items-center lg:ml-auto">
                  <img
                    src={testimonial.image}
                    alt="testimonial image"
                    className="md:h-80 md:w-80 rounded-full object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
