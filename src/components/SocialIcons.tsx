import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import "./styles/SocialIcons.css";
import { TbNotes } from "react-icons/tb";
import HoverLinks from "./HoverLinks";

const SocialIcons = () => {
  return (
    <div className="icons-section">
      <div className="social-icons" id="social">
        <span>
          <a
            href="https://github.com/Hassaan2835"
            target="_blank"
            rel="noreferrer"
            data-cursor="icons"
            aria-label="GitHub Profile"
          >
            <FaGithub />
          </a>
        </span>
        <span>
          <a
            href="https://www.linkedin.com/in/iamhassaankhan/"
            target="_blank"
            rel="noreferrer"
            data-cursor="icons"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedinIn />
          </a>
        </span>
        <span>
          <a
            href="https://x.com"
            target="_blank"
            rel="noreferrer"
            data-cursor="icons"
            aria-label="Twitter Profile"
          >
            <FaXTwitter />
          </a>
        </span>
        <span>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            data-cursor="icons"
            aria-label="Instagram Profile"
          >
            <FaInstagram />
          </a>
        </span>
      </div>
      <a
        className="resume-button"
        href="#contact"
        data-cursor="disable"
        aria-label="Contact or View Resume"
      >
        <HoverLinks text="RESUME" />
        <span>
          <TbNotes />
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;
