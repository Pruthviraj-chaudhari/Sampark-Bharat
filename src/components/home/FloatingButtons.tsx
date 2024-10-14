import { Button } from "@/components/ui/button";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const FloatingButtons = () => {
    return (
        <div className="fixed right-4 bottom-20 md:bottom-28 flex flex-col items-center gap-4 z-50">
            {/* WhatsApp Button */}
            <a href="https://wa.me/918530089393"
                target="_blank"
                rel="noopener noreferrer">
                <Button
                    className="bg-green-500 text-white hover:bg-green-600 rounded-full p-3 shadow-md"
                >
                    <FaWhatsapp className="w-6 h-6" />
                </Button>
            </a>

            {/* Call Button */}
            <a href="tel:+918530089393">
                <Button
                    className="bg-blue-500 text-white hover:bg-blue-600 rounded-full p-3 shadow-md"
                >
                    <FaPhoneAlt className="w-5 h-5" />
                </Button>
            </a>

        </div>
    );
};

export default FloatingButtons;
