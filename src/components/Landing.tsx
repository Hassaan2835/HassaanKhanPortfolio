import { PropsWithChildren } from "react";
import { FiCheck, FiCode, FiUserCheck } from "react-icons/fi";
import AiSalesman from "./AiSalesman";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-container">
        {/* Main Hero Split */}
        <div className="hero-grid">
          {/* Left Column: Headlines & CTA */}
          <div className="hero-content">
            {/* Poster Motto */}
            <div className="hero-quote-badge">
              <span className="quote-mark">“</span>
              <span>A Website is not just a page, It's a Growth Tool for Your Business.</span>
            </div>

            <h1 className="hero-main-title">
              <span className="hero-sr-seo">Hassaan Khan — Senior Full Stack Developer &amp; Website Developer | </span>
              THE ONE YOU CAN
              <br />
              TRUST FOR FULL STACK
              <br />
              DEVELOPMENT
            </h1>

            <p className="hero-description">
              I’m Hassaan, a Computer Science graduate from NUML Islamabad and a professional website developer
              focused on modern React, Next.js, and clean CSS architecture. I prioritize semantic
              interfaces, responsive reliability, and honest technical execution.
            </p>

            {/* Feature Checklist Pills with Clean Vector Icons */}
            <div className="hero-feature-pills">
              <span className="feat-pill">
                <FiCheck className="feat-check-icon" /> React & Next.js
              </span>
              <span className="feat-pill">
                <FiCheck className="feat-check-icon" /> Mobile Responsive
              </span>
              <span className="feat-pill">
                <FiCheck className="feat-check-icon" /> SEO & Performance
              </span>
              <span className="feat-pill">
                <FiCheck className="feat-check-icon" /> Rawalpindi • Remote
              </span>
            </div>

            <div className="hero-cta-group">
              <a href="#contact" className="btn-mint" data-cursor="disable">
                Need a word
              </a>
              <a href="#projects" className="btn-outline-pill" data-cursor="disable">
                Explore Selected Work
              </a>

              {/* Social Proof Stats */}
              <div className="hero-social-proof">
                <div className="avatar-stack">
                  <div className="avatar-circle avatar-1"></div>
                  <div className="avatar-circle avatar-2"></div>
                  <div className="avatar-circle avatar-3"></div>
                  <div className="avatar-circle avatar-4"></div>
                </div>
                <div className="proof-text">
                  <span className="proof-count">100%</span>
                  <span className="proof-label">Client Satisfaction</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Framed Portrait & Floating Badges */}
          <div className="hero-visual">
            <div className="portrait-contour-wrapper">
              {/* Floating Badge 1 - Top Right */}
              <div className="floating-badge badge-top-right">
                <span className="badge-svg-wrap">
                  <FiUserCheck className="badge-svg" />
                </span>
                <span className="badge-text">Hey, I'm Hassaan</span>
              </div>

              {/* Framed Photo */}
              <div className="portrait-frame">
                <img
                  src="/images/hassaan-khan-developer.jpg"
                  alt="Hassaan Khan - Senior Full Stack Developer & Website Developer"
                  title="Hassaan Khan - Website Developer"
                  className="portrait-img"
                  width="500"
                  height="600"
                  loading="eager"
                />
              </div>

              {/* Floating Badge 2 - Bottom Left */}
              <div className="floating-badge badge-bottom-left">
                <span className="badge-svg-wrap">
                  <FiCode className="badge-svg" />
                </span>
                <span className="badge-text">Full Stack & AI Engineer</span>
              </div>
            </div>
          </div>
        </div>

        {/* 24/7 AI Salesman Assistant Console */}
        <AiSalesman />
      </div>

      {children}
    </section>
  );
};

export default Landing;
