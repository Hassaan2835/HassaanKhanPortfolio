import { FiBookOpen, FiSmartphone, FiGitCommit, FiAward, FiCode } from "react-icons/fi";
import "./styles/About.css";

const workPrinciples = [
  {
    icon: <FiBookOpen className="guar-svg" />,
    title: "Understand Before Coding",
    desc: "Clarify user flows and information hierarchy so every interface serves concrete purpose rather than decorative clutter.",
  },
  {
    icon: <FiSmartphone className="guar-svg" />,
    title: "Mobile-First & Accessible",
    desc: "Reliable performance across 360px phones to ultrawide screens. Semantic HTML, keyboard operability, and WCAG compliance.",
  },
  {
    icon: <FiGitCommit className="guar-svg" />,
    title: "Learn & Document Decisions",
    desc: "Clean Git habits, truthful documentation, and bridging theoretical computer science into production reality.",
  },
  {
    icon: <FiAward className="guar-svg" />,
    title: "NUML CS Graduate (2022–2025)",
    desc: "Rigorous foundation in Algorithms, Data Structures, OOP, and Database Systems with an AI Speech Capstone.",
  },
];

const About = () => {
  return (
    <section className="about-section-wrapper" id="about">
      <div className="about-container">
        <div className="about-grid">
          {/* Left: Text & Bio */}
          <div className="about-content">
            <span className="about-badge">DISCIPLINE CREATES FREEDOM</span>
            <h2 className="about-title">ENGINEERING WITH PURPOSE & PRECISION</h2>
            <p className="about-bio">
              I completed my Bachelor of Science in Computer Science (BSCS) at the National University
              of Modern Languages (NUML) in Islamabad (2022–2025). My coursework provided a rigorous
              grounding in algorithms, data structures, and software engineering—which I apply directly
              to modern web applications.
            </p>
            <p className="about-bio-secondary">
              While my core focus centers on frontend engineering with React, Next.js, and Tailwind CSS,
              I am actively expanding toward full-stack patterns. I prioritize predictable state management,
              consuming RESTful APIs, writing semantic HTML, and building accessible, friction-free interfaces.
            </p>

            <div className="about-cta-row">
              <a
                href="#projects"
                className="btn-dark"
                data-cursor="disable"
              >
                View Selected Work
              </a>
              <a
                href="#contact"
                className="btn-outline-dark"
                data-cursor="disable"
              >
                Get In Touch
              </a>
            </div>

            {/* Principles & Education Grid */}
            <div className="about-guarantees-grid">
              {workPrinciples.map((item, idx) => (
                <div className="guarantee-card" key={idx}>
                  <div className="guarantee-icon">{item.icon}</div>
                  <div className="guarantee-info">
                    <h4 className="guarantee-title">{item.title}</h4>
                    <p className="guarantee-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Workspace Photo & Creative Mantra Card */}
          <div className="about-visual">
            <div className="about-image-card">
              <img
                src="/images/about_workspace.jpg"
                alt="Hassaan Khan Engineering Workspace"
                className="about-image"
              />
              <div className="workspace-badge-overlay">
                <FiCode className="workspace-icon-svg" />
                <span>NUML Graduate • CS & Full-Stack</span>
              </div>
            </div>

            {/* Ideas Websites Brands Results Card */}
            <div className="about-mantra-card">
              <div className="mantra-pills">
                <span className="mantra-pill">RESEARCH</span>
                <span className="mantra-divider">/</span>
                <span className="mantra-pill">FRONTEND</span>
                <span className="mantra-divider">/</span>
                <span className="mantra-pill">ARCHITECTURE</span>
                <span className="mantra-divider">/</span>
                <span className="mantra-pill highlight">EXECUTION</span>
              </div>
              <p className="mantra-sub">
                Verified Credentials: WordPress Development • OOP in Python • Dart
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
