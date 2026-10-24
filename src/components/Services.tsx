import { useState } from "react";
import {
  FiGlobe,
  FiShoppingCart,
  FiTrendingUp,
  FiLayers,
  FiHeadphones,
  FiArrowRight,
  FiCheck,
  FiCheckCircle,
  FiMessageSquare,
  FiMail,
  FiTarget,
  FiSearch,
  FiZap,
  FiMaximize2,
  FiX,
} from "react-icons/fi";
import {
  SiWordpress,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa6";
import "./styles/Services.css";

const servicePillars = [
  {
    icon: <FiGlobe />,
    title: "Business Websites",
    subtitle: "Professional & Custom Websites for Your Brand",
    desc: "Tailored digital architecture engineered to build corporate credibility, present your services clearly, and turn visitors into qualified leads.",
  },
  {
    icon: <FiShoppingCart />,
    title: "E-Commerce Stores",
    subtitle: "Amazon & Etsy Ready, Product Listing Support",
    desc: "High-converting online shopping platforms, responsive product catalog showcases, secure checkout flows, and catalog management support.",
  },
  {
    icon: <FiTrendingUp />,
    title: "SEO Optimization",
    subtitle: "Rank Higher, Get More Customers",
    desc: "On-page search optimization, Core Web Vitals excellence, fast loading speeds, and semantic structure to rank higher on Google.",
  },
  {
    icon: <FiLayers />,
    title: "Content Support",
    subtitle: "Images, Banners & Social Media Content",
    desc: "Polished web visual assets, marketing banners, bespoke UI graphics, and engaging media presentations tailored for brand impact.",
  },
  {
    icon: <FiHeadphones />,
    title: "Ongoing Support",
    subtitle: "Guidance Even After Project Delivery",
    desc: "Dedicated post-launch technical assistance, performance monitoring, updates, and troubleshooting long after your website goes live.",
  },
];

const deliverablesChecklist = [
  "Premium Design",
  "Mobile Responsive",
  "SEO Optimized",
  "Fast Loading",
  "User Friendly",
];

const posterTechTools = [
  { name: "WordPress", icon: <SiWordpress /> },
  { name: "HTML5", icon: <SiHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "React JS", icon: <SiReact /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "SEO", icon: <FiSearch /> },
  { name: "Performance", icon: <FiZap /> },
];

const deliveryGuarantees = [
  "No Hidden Charges",
  "On-Time Delivery",
  "Revisions Included",
  "100% Client Satisfaction",
];

const Services = () => {
  const [isPosterModalOpen, setIsPosterModalOpen] = useState(false);

  return (
    <section className="services-section-wrapper" id="services">
      <div className="services-container">
        {/* Top Split: Poster Showcase Frame + Headline & Deliverables */}
        <div className="services-top-grid">
          {/* Left: Studio Showcase Window Frame */}
          <div className="services-media-col">
            <div
              className="poster-showcase-window"
              onClick={() => setIsPosterModalOpen(true)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setIsPosterModalOpen(true);
                }
              }}
              title="Click to expand showcase poster"
            >
              <div className="poster-header-bar">
                <div className="window-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="poster-window-title">
                  <span className="window-title-desktop">
                    Strategic Web & SEO Architecture • Studio Showcase
                  </span>
                  <span className="window-title-mobile">
                    Web & SEO Architecture • Studio
                  </span>
                </div>
                <button
                  type="button"
                  className="poster-expand-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsPosterModalOpen(true);
                  }}
                  aria-label="Expand showcase image"
                >
                  <FiMaximize2 />
                </button>
              </div>

              <div className="poster-media-area">
                <img
                  src="/images/services_showcase_poster.png"
                  alt="Hassaan Khan - Professional Website Development with SEO Optimization"
                  className="poster-showcase-img"
                  loading="eager"
                />
                <div className="poster-zoom-hint">
                  <FiMaximize2 className="zoom-hint-icon" />
                  <span>Click to view full poster</span>
                </div>
              </div>
            </div>

            {/* Poster Motto Strip under Frame */}
            <div className="poster-motto-bar">
              <span className="motto-item">IDEAS</span>
              <span className="motto-dot">•</span>
              <span className="motto-item">WEBSITES</span>
              <span className="motto-dot">•</span>
              <span className="motto-item">BRANDS</span>
              <span className="motto-dot">•</span>
              <span className="motto-item">RESULTS</span>
            </div>
          </div>

          {/* Right: Headline, Scope, & Deliverables Checklist */}
          <div className="services-text-col">
            <span className="services-badge">SOLUTIONS & SERVICES</span>
            <span className="services-scope-meta">
              Modern • Fast • SEO Friendly • High Quality
            </span>
            <h2 className="services-headline">
              PROFESSIONAL WEBSITE DEVELOPMENT
              <br />
              <span className="headline-accent">& SEO OPTIMIZATION</span>
            </h2>

            <p className="services-subtext">
              <strong>“A Website is not just a page, It's a Growth Tool for Your Business.”</strong>
              <br />
              I build modern, fast, SEO-friendly digital platforms designed to turn
              your ideas and brands into scalable real-world results.
            </p>

            {/* 5 Deliverables from Poster */}
            <div className="services-deliverables-list">
              {deliverablesChecklist.map((item, idx) => (
                <div className="deliverable-item" key={idx}>
                  <FiCheckCircle className="deliverable-check" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="services-cta-group">
              <a href="#contact" className="btn-dark" data-cursor="disable">
                Discuss Your Project
              </a>
              <span className="free-tag">
                <FiCheck className="free-check-svg" />
                <span>No Obligation Consultation</span>
              </span>
            </div>
          </div>
        </div>

        {/* 4-Phase Growth Workflow from Poster */}
        <div className="growth-workflow-strip">
          <div className="workflow-step">
            <span className="step-num">01</span>
            <span className="step-label">PLAN</span>
          </div>
          <span className="workflow-arrow">
            <FiArrowRight className="workflow-arrow-icon" />
          </span>
          <div className="workflow-step">
            <span className="step-num">02</span>
            <span className="step-label">BUILD</span>
          </div>
          <span className="workflow-arrow">
            <FiArrowRight className="workflow-arrow-icon" />
          </span>
          <div className="workflow-step">
            <span className="step-num">03</span>
            <span className="step-label">LAUNCH</span>
          </div>
          <span className="workflow-arrow">
            <FiArrowRight className="workflow-arrow-icon" />
          </span>
          <div className="workflow-step">
            <span className="step-num">04</span>
            <span className="step-label">GROW</span>
          </div>
        </div>

        {/* 5 Specialized Services Grid from Poster */}
        <div className="services-pillars-grid">
          {servicePillars.map((service, index) => (
            <div className="pillar-card" key={index}>
              <div className="pillar-icon">{service.icon}</div>
              <h3 className="pillar-title">{service.title}</h3>
              <h4 className="pillar-subtitle">{service.subtitle}</h4>
              <p className="pillar-desc">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* Tech Stack Strip from Poster */}
        <div className="poster-tech-strip">
          <span className="tech-strip-title">TECHNOLOGIES & CAPABILITIES:</span>
          <div className="poster-tech-grid">
            {posterTechTools.map((tool, idx) => (
              <div className="poster-tech-chip" key={idx}>
                <span className="tech-chip-icon">{tool.icon}</span>
                <span className="tech-chip-name">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Delivery Guarantees Banner from Poster (Price Excluded) */}
        <div className="poster-guarantee-banner">
          <div className="guarantee-banner-left">
            <span className="guarantee-pill-badge">CLIENT SUCCESS PROMISE</span>
            <h3 className="guarantee-banner-title">
              Let's Build Something Great Together
            </h3>
            <p className="guarantee-banner-desc">
              Premium Quality • SEO Optimized • Ready to Grow
            </p>
          </div>

          <div className="guarantee-checklist-col">
            {deliveryGuarantees.map((item, idx) => (
              <div className="guarantee-point" key={idx}>
                <FiCheckCircle className="guarantee-check-icon" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="guarantee-banner-cta">
            <a href="#contact" className="btn-mint" data-cursor="disable">
              <span>Discuss Your Project</span>
              <FiArrowRight style={{ marginLeft: 6 }} />
            </a>
            <span className="guarantee-subcta-text">
              Let's Turn Your Idea Into Reality
            </span>
          </div>
        </div>

        {/* 3 Bottom Contact & Trust Triggers from Poster */}
        <div className="poster-bottom-trust-row">
          <div className="trust-trigger-item">
            <FiMessageSquare className="trust-trigger-icon" />
            <div className="trust-trigger-text">
              <strong>Discuss Your Project Today</strong>
              <span>No Obligation Consultation</span>
            </div>
          </div>

          <div className="trust-trigger-item">
            <FiMail className="trust-trigger-icon" />
            <div className="trust-trigger-text">
              <strong>Get a Free Consultation</strong>
              <span>Quick Technical Advice</span>
            </div>
          </div>

          <div className="trust-trigger-item">
            <FiTarget className="trust-trigger-icon" />
            <div className="trust-trigger-text">
              <strong>Your Vision, Our Skills</strong>
              <span>Your Scalable Success</span>
            </div>
          </div>
        </div>
      </div>

      {/* High-Resolution Poster Lightbox Modal */}
      {isPosterModalOpen && (
        <div
          className="poster-lightbox-backdrop"
          onClick={() => setIsPosterModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Showcase Poster Full View"
        >
          <div
            className="poster-lightbox-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="poster-lightbox-header">
              <div className="window-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <span className="lightbox-title">
                Hassaan Khan — Professional Website Development & SEO Optimization
              </span>
              <button
                type="button"
                className="lightbox-close-btn"
                onClick={() => setIsPosterModalOpen(false)}
                aria-label="Close modal"
              >
                <FiX />
              </button>
            </div>
            <div className="poster-lightbox-body">
              <img
                src="/images/services_showcase_poster.png"
                alt="Hassaan Khan - Professional Website Development with SEO Optimization"
                className="poster-lightbox-img"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
