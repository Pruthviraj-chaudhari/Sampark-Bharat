import { AnimatedTooltip } from "../ui/animated-tooltip";

export function FooterTooltip() {
    return (
        <div>
            <div className="flex items-center justify-center mt-10 mb-5 w-full">
                <AnimatedTooltip items={people} />
            </div>
            <div className=" ml-4">
                ⭐⭐⭐⭐⭐
                <p className="font-normal text-white">Join 500+ delighted users on Sampark Bharat</p>
            </div>
        </div>
    );
}

const people = [
    {
        id: 1,
        name: "Rajabhau Waje",
        designation: "Politician",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Rajabhau_Waje.jpg/640px-Rajabhau_Waje.jpg",
    },
    {
        id: 2,
        name: "Narendra Modi",
        designation: "Politician",
        image: "https://pbs.twimg.com/profile_images/1800516892370595841/NCnKrUga_400x400.jpg",
    },
    {
        id: 3,
        name: "RCPIT",
        designation: "Institute",
        image: "https://r3sys.com/assets/img/testimonial-5.jpg",
    },
    {
        id: 4,
        name: "Milkesh Jain",
        designation: "T&P Officer",
        image: "https://pbs.twimg.com/profile_images/1338127055171424256/zUYNz36a_400x400.jpg",
    },
    {
        id: 5,
        name: "Mahesh Chaudhari",
        designation: "Soap Developer",
        image: "https://r3sys.com/assets/img/testimonial-2.jpg",
    },
    {
        id: 6,
        name: "Nishant Verma",
        designation: "Chatered Accountant",
        image: "https://r3sys.com/assets/img/testimonial-4.jpg"
    },
];