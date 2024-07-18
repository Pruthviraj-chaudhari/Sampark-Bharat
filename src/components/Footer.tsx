

const Footer = () => {
    return (
        <footer className="bg-orange-400 text-primary-foreground p-6 md:py-12 w-full">
            <div className="container max-w-7xl  gap-8 text-sm">
                <h2 className=" max-w-7xl font-semibold text-base my-2">महत्वाच्या शासकीय लिंक्स</h2>
            </div>
            <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
                <div className="grid gap-1">
                    <a href="#">
                        महाराष्ट्र सरकार
                    </a>
                    <a href="#">
                        पुणे महानगरपालिका
                    </a>
                    <a href="#">
                        सोलापूर महानगरपालिका
                    </a>
                </div>
                <div className="grid gap-1">
                    <a href="#">
                        नोंदणी व मुद्रांक विभाग
                    </a>
                    <a href="#">
                        प्रॉव्हिडंट फंड
                    </a>
                    <a href="#">
                        स्मार्ट आधारकार्ड
                    </a>
                </div>
                <div className="grid gap-1">
                    <a href="#">
                        वाहन चालविण्याचा परवाना
                    </a>
                    <a href="#">
                        आयुष्यमान भारत
                    </a>
                    <a href="#">
                        कौशल्य विकास योजना
                    </a>
                </div>
                <div className="grid gap-1">
                    <a href="#">
                        जवळचे पोलीस स्टेशन
                    </a>
                    <a href="#">
                        जवळील रुग्णवाहिका
                    </a>
                    <a href="#">
                        पोस्ट ऑफिस
                    </a>
                </div>
                <div className="grid gap-1">
                    <h3 className="font-semibold">Legal</h3>
                    <a href="#">
                        Privacy Policy
                    </a>
                    <a href="#">
                        Terms of Service
                    </a>
                    <a href="#">
                        Disclaimer
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer