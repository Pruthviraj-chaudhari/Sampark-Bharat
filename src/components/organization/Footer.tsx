const Footer = () => {
    return (
        <footer className="bg-slate-900 text-primary-foreground p-6 md:py-12 w-full">
            <div className="container max-w-7xl  gap-8 text-sm">
                <h2 className=" max-w-7xl font-semibold text-base my-2">Important links</h2>
            </div>
            <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
                <div className="grid gap-1">
                    <a href="#">
                        DTE
                    </a>
                    <a href="#">
                        DBATU
                    </a>
                    <a href="#">
                        MahaDBT
                    </a>
                </div>
                <div className="grid gap-1">
                    <a href="#">
                        Govt of India
                    </a>
                    <a href="#">
                        Govt of Maharashtra
                    </a>
                    <a href="#">
                        National Scholarship Portal
                    </a>
                </div>
                <div className="grid gap-1">
                    <a href="#">
                        NPTEL
                    </a>
                    <a href="#">
                        AICTE Feedback
                    </a>
                    <a href="#">
                        Mandatory Disclosure
                    </a>
                </div>
                <div className="grid gap-1">
                    <a href="#">
                        About us
                    </a>
                    <a href="#">
                        Contact Team
                    </a>
                    <a href="#">
                        Help
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