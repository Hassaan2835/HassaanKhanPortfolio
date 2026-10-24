import "./styles/Footer.css";

const Footer = () => {
  return (
    <footer className="opti-footer" id="contact">
      <div className="footer-container">
        {/* Top Footer Grid */}
        <div className="footer-grid">
          {/* Col 1: Brand & Bio */}
          <div className="footer-brand-col">
            <a href="/#" className="footer-logo">
              <div className="logo-symbol">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 22H22L12 2Z" fill="#7ee7c8" fillOpacity="0.9" />
                  <path d="M12 7L6 19H18L12 7Z" fill="#07221b" />
                </svg>
              </div>
              <span className="logo-text">Hassaan Khan</span>
            </a>
            <p className="footer-tagline">
              Computer Science Graduate (NUML Islamabad) & Web Developer specializing
              in React, Next.js, and clean CSS architecture. Building practical, accessible
              web applications backed by reliable technical execution.
            </p>
            <div className="footer-status-pill">
              <span className="status-indicator"></span>
              <span>Rawalpindi, Pakistan • Available Remotely</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About & Education</a></li>
              <li><a href="#projects">Selected Work</a></li>
              <li><a href="#tech">Technical Toolkit</a></li>
              <li><a href="#career">Experience</a></li>
            </ul>
          </div>

          {/* Col 3: Direct Connect */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Verified Channels</h4>
            <ul className="footer-links-list">
              <li>
                <a
                  href="https://github.com/Hassaan2835"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub (Hassaan2835)
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/hassaan-khanofficial"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn (hassaan-khanofficial)
                </a>
              </li>
              <li>
                <a href="mailto:hassaankhan.dev@gmail.com">
                  hassaankhan.dev@gmail.com
                </a>
              </li>
              <li>
                <a href="mailto:hassaan19620@gmail.com">
                  hassaan19620@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © 2026 Hassaan Khan. Built with Next.js, React, and Tailwind CSS.
          </p>
          <div className="footer-legal-links">
            <a href="#about">NUML BSCS (2022–2025)</a>
            <a href="#contact">Direct Developer Outreach</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
