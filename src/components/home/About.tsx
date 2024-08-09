import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import Balancer from "react-wrap-balancer";

const About = () => {
  return (
    <section id="about" className="py-8 lg:py-20">
      <div className="container mx-auto">
        <Card
          shadow={false}
          className="overflow-hidden rounded-3xl bg-gradient-to-tr from-red-500  to-orange-400" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}        >
          <CardBody className="flex flex-col-reverse gap-16 py-20 px-14 lg:flex-row" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
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
                <Balancer>
                  {/* &quot;We&apos;re not always in the position that we want to be
                  at. We&apos;re constantly growing. We&apos;re constantly making
                  mistakes. We&apos;re constantly trying to express ourselves and
                  actualize our dreams. &quot; */}
                  &quot;At <span className="text-orange-900 font-semibold">Sampark Bharat</span>,
                   we believe in empowering individuals and
                  organizations to tell their stories with authenticity and impact.
                  Our mission is to amplify voices and create networks
                  that inspire change and progress.&quot;
                </Balancer>
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="font-medium"
              >
                Gauresh Suryawanshi
              </Typography>
              <Typography
                color="white"
                className="font-normal opacity-70"
              >
                CEO, R3sys
              </Typography>
            </div>
            <div className="relative mx-auto grid shrink-0 place-items-center lg:ml-auto">
              <img
                src="gauresh.png"
                alt="testimonial image"
                className="md:h-80 md:w-80 rounded-full object-cover"
              />
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default About;
