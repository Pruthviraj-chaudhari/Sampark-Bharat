

const Footer = () => {
    return (
        <footer className="bg-[#DBE8F1] text-muted-foreground font-semibold p-6 md:py-12 w-full">
            <div className="container max-w-7xl  gap-8 text-sm">
                <h2 className=" max-w-7xl font-semibold text-base my-2">About</h2>
            </div>
            <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
                <div className="grid gap-1">
                    <a href="#">
                        Biography
                    </a>
                    <a href="#">
                        Accomplishments
                    </a>
                    <a href="#">
                        Awards
                    </a>
                </div>
                <div className="grid gap-1">
                    <a href="#">
                        Press Releases
                    </a>
                    <a href="#">
                        Speeches
                    </a>
                    <a href="#">
                        Events
                    </a>
                </div>
                <div className="grid gap-1">
                    <a href="#">
                        Blog
                    </a>
                    <a href="#">
                        Authors
                    </a>
                    <a href="#">
                        Education
                    </a>
                </div>
                <div className="grid gap-1">
                    <a href="#">
                        Donate
                    </a>
                    <a href="#">
                        Cookie Policy
                    </a>
                    <a href="#">
                        Join the Team
                    </a>
                </div>
                <div className="grid gap-1">
                    <h3 className="">Legal</h3>
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