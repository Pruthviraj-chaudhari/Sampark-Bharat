import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show button when page is scrolled down
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <div className="fixed bottom-4 right-4">
        <Button
          variant="outline"
          size="icon"
          onClick={scrollToTop}
          className="bg-white text-black shadow-md transition-all"
        >
          <MdKeyboardDoubleArrowUp className="h-6 w-6 text-muted-foreground" />
        </Button>
      </div>
    )
  );
}
