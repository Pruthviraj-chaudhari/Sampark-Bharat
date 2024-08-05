import { IoMdTime } from "react-icons/io";

const SubscribePage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
            <div className="max-w-md px-8 py-12 bg-white dark:bg-gray-800 shadow-lg rounded-lg text-center">
                <a href="#" className="flex justify-center py-2">
                    <img className="w-40" src="/logo_main.png" alt="Sampark Bharat" />
                </a>
                <div className="flex justify-center items-center mb-4">
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Subscription Expired</h1>
                    <IoMdTime className="ml-1 w-6 h-6" />
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Your profile subscription has ended. Please contact the Sampark Bharat Team to renew your subscription.
                </p>
                <div className="border-t border-gray-300 dark:border-gray-700 mt-4 pt-4">
                    <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Contact Us</h2>
                    <ul className="mt-2 space-y-2 text-gray-600 dark:text-gray-300">
                        <li>Email: <a href="mailto:support@samparkbharat.com" className="text-primary hover:underline">support@samparkbharat.com</a></li>
                        <li>Phone: <a href="tel:+911234567890" className="text-primary hover:underline">+91 12345 67890</a></li>
                        <li>Website: <a href="https://www.samparkbharat.com" className="text-primary hover:underline">www.samparkbharat.com</a></li>
                    </ul>
                </div>
                <a href="https://samparkbharat.com/auth/register" target="_blank">
                    <button className="mt-6 px-6 py-3 rounded-full text-sm font-medium text-primary-foreground relative bg-primary z-0 overflow-hidden transition-all duration-150 after:absolute after:inset-0 after:-z-10 after:translate-x-[-150%] after:translate-y-[150%] after:scale-[2.5] after:rounded-[100%] after:bg-gradient-to-l from-zinc-400 after:transition-transform after:duration-1000  hover:after:translate-x-[0%] hover:after:translate-y-[0%] ">
                        Renew Subscription
                    </button>
                </a>
            </div>
        </div>
    );
};

export default SubscribePage;