import { useEffect, useState } from "react";
import HoverLinks from "./HoverLinks";
import "./styles/Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Smooth scrolling link listener
    const links = document.querySelectorAll(".header ul a, .nav-btn-sayhi");
    links.forEach((elem) => {
      const element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        setMobileMenuOpen(false);
        const targetId = element.getAttribute("data-href") || element.getAttribute("href");
        if (targetId && targetId.startsWith("#")) {
          e.preventDefault();
          const targetElem = document.querySelector(targetId);
          if (targetElem) {
            targetElem.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }
      });
    });

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${scrolled ? "header-scrolled" : ""}`}>
      <div className="header-inner">
        {/* Logo */}
        <a href="/#" className="navbar-logo" data-cursor="disable">
          <div className="logo-symbol">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 22H22L12 2Z" fill="#7ee7c8" fillOpacity="0.9" />
              <path d="M12 7L6 19H18L12 7Z" fill="#07221b" />
            </svg>
          </div>
          <span className="logo-text">Hassaan Khan</span>
        </a>

        {/* Navigation Links */}
        <nav className={`navbar-nav ${mobileMenuOpen ? "nav-open" : ""}`}>
          <ul>
            <li>
              <a data-href="#home" href="#home">
                <HoverLinks text="Home" />
              </a>
            </li>
            <li>
              <a data-href="#services" href="#services">
                <HoverLinks text="Services" />
              </a>
            </li>
            <li>
              <a data-href="#about" href="#about">
                <HoverLinks text="About" />
              </a>
            </li>
            <li>
              <a data-href="#showcase" href="#showcase">
                <HoverLinks text="Showcase" />
              </a>
            </li>
            <li>
              <a data-href="#projects" href="#projects">
                <HoverLinks text="Projects" />
              </a>
            </li>
            <li>
              <a data-href="#tech" href="#tech">
                <HoverLinks text="Tech Stack" />
              </a>
            </li>
            <li>
              <a data-href="#contact" href="#contact">
                <HoverLinks text="Contact" />
              </a>
            </li>
          </ul>
        </nav>

        {/* CTA Button */}
        <div className="header-actions">
          <a
            href="#contact"
            data-href="#contact"
            className="btn-outline-pill nav-btn-sayhi"
            data-cursor="disable"
          >
            Say hi
          </a>

          {/* Mobile Hamburger */}
          <button
            className={`mobile-toggle ${mobileMenuOpen ? "toggle-active" : ""}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            data-cursor="disable"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
