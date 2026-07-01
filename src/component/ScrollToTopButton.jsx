import { useEffect, useState } from "react";
import "./ScrollToTopButton.css";

function ScrollToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 350);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
  className={`scroll-top-btn ${show ? "show" : ""}`}
  onClick={scrollTop}
  aria-label="Scroll to Top"
>
  <span></span>
  <i className="fas fa-chevron-up"></i>
</button>
  );
}

export default ScrollToTopButton;