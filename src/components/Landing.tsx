import { PropsWithChildren } from "react";
import { FiCheck, FiCode, FiUserCheck } from "react-icons/fi";
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
              THE ONE YOU CAN
              <br />
              TRUST FOR FULL STACK
              <br />
              DEVELOPMENT
            </h1>

            <p className="hero-description">
              I’m Hassaan, a Computer Science graduate from NUML Islamabad and a web developer
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
                  src="/images/hero_portrait.jpg"
                  alt="Hassaan Khan - Full Stack Developer"
                  className="portrait-img"
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

        {/* Partner / Brand Logos Strip */}
        <div className="hero-brands-strip">
          <div className="brand-item">
            <svg className="brand-logo" viewBox="0 0 118 36" fill="currentColor">
              <text x="0" y="26" fontSize="22" fontWeight="700" letterSpacing="-0.5">airbnb</text>
            </svg>
          </div>
          <div className="brand-item">
            <svg className="brand-logo" viewBox="0 0 130 36" fill="currentColor">
              <text x="0" y="26" fontSize="22" fontWeight="700" letterSpacing="-0.5">grammarly</text>
            </svg>
          </div>
          <div className="brand-item">
            <svg className="brand-logo" viewBox="0 0 110 36" fill="currentColor">
              <text x="0" y="26" fontSize="22" fontWeight="700" letterSpacing="-0.5">HubSpot</text>
            </svg>
          </div>
          <div className="brand-item">
            <svg className="brand-logo" viewBox="0 0 120 36" fill="currentColor">
              <text x="0" y="26" fontSize="22" fontWeight="700" letterSpacing="-0.5">unbounce</text>
            </svg>
          </div>
          <div className="brand-item">
            <svg className="brand-logo" viewBox="0 0 120 36" fill="currentColor">
              <text x="0" y="26" fontSize="22" fontWeight="700" letterSpacing="-0.5">mailchimp</text>
            </svg>
          </div>
        </div>
      </div>

      {children}
    </section>
  );
};

export default Landing;
