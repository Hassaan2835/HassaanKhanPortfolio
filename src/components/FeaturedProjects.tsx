import { useState } from "react";
import {
  FiExternalLink,
  FiArrowRight,
  FiFolder,
  FiSearch,
} from "react-icons/fi";
import { FaGithub } from "react-icons/fa6";
import "./styles/FeaturedProjects.css";

interface LiveProject {
  id: number;
  tag: string;
  title: string;
  desc: string;
  image: string;
  liveUrl?: string;
  githubUrl: string;
  meta: string;
}

interface PublicRepo {
  name: string;
  category: "all" | "web" | "ai" | "security" | "mobile";
  categoryLabel: string;
  description: string;
  language: string;
  githubUrl: string;
  liveUrl?: string;
  stars?: number;
}

const liveDeployedProjects: LiveProject[] = [
  {
    id: 1,
    tag: "PRODUCTION HEALTHCARE PLATFORM",
    title: "IGS Healthcare Platform",
    desc: "A clean, modern digital presence for a healthcare and medical services provider. Built with Next.js, React, and Tailwind CSS ensuring mobile-first cross-device consistency, patient-first legibility, and high performance.",
    image: "/images/igs-healthcare.webp",
    liveUrl: "https://www.igshealthcare.com/",
    githubUrl: "https://github.com/Hassaan2835/IGSWebsite",
    meta: "Live Production • Next.js & Tailwind",
  },
  {
    id: 2,
    tag: "DIGITAL PRODUCT CATALOG & SHOWCASE",
    title: "Medins Healthcare Catalog",
    desc: "A digital medical catalog and healthcare showcase platform engineered to display pharmaceutical supplies and clinical equipment with responsive search filters and a clean, patient-centric UI.",
    image: "/images/medins-live.png",
    liveUrl: "https://medins-healthcare.vercel.app",
    githubUrl: "https://github.com/Hassaan2835/Medins_healthcare",
    meta: "Live Vercel • React & JavaScript",
  },
  {
    id: 3,
    tag: "VENTURE CAPITAL & STARTUP HUB",
    title: "Business Nexus Platform",
    desc: "High-performance venture connection platform engineered to bridge entrepreneurs with angel investors. Features modular authentication, responsive analytics dashboards, and structured investment workflows.",
    image: "/images/nexus-live.png",
    liveUrl: "https://nexus-iota-five.vercel.app",
    githubUrl: "https://github.com/Hassaan2835/Nexus",
    meta: "Live Vercel • Next.js & TypeScript",
  },
  {
    id: 4,
    tag: "CS CAPSTONE RESEARCH & SPEECH AI",
    title: "AI-Based English Accent Builder",
    desc: "An academic computer science capstone project exploring how automated speech recognition and audio signal processing assist non-native speakers. Features audio waveform extraction, phonetic benchmark scoring, and feedback UI.",
    image: "/images/Solidx.webp",
    githubUrl: "https://github.com/Hassaan2835/FYP",
    meta: "University Capstone • Python & Speech AI",
  },
  {
    id: 5,
    tag: "FULL-STACK DIGITAL STORE",
    title: "Full-Stack eCommerce Platform",
    desc: "Comprehensive online shopping web application featuring real-time product catalogs, category filtering, interactive shopping cart management, and seamless responsive checkout UX flow.",
    image: "/images/bond.webp",
    liveUrl: "https://e-commerce-web-application-lovat.vercel.app",
    githubUrl: "https://github.com/Hassaan2835/eCommerce-web-application",
    meta: "Live Vercel • React & Dynamic State",
  },
  {
    id: 6,
    tag: "INTERACTIVE DEVELOPER SHOWCASE",
    title: "Hassaan Khan Portfolio",
    desc: "Flagship personal developer portfolio engineered with dynamic canvas rendering, custom micro-interactions, responsive modular components, and modern typography.",
    image: "/images/portfolio-live.png",
    liveUrl: "https://hassaankhanportfolio.vercel.app",
    githubUrl: "https://github.com/Hassaan2835/HassaanKhanPortfolio",
    meta: "Live Vercel • React, Three.js & Modern CSS",
  },
  {
    id: 7,
    tag: "MODERN WEB APPLICATION",
    title: "Sorry Next Interactive App",
    desc: "Production-ready Next.js web application deployed on Vercel featuring custom interactive state transitions, fluid typography, and mobile-optimized user flows.",
    image: "/images/Maxlife.webp",
    liveUrl: "https://sorry-next-moto.vercel.app",
    githubUrl: "https://github.com/Hassaan2835/Sorry-next-main",
    meta: "Live Vercel • Next.js & Fluid Layouts",
  },
  {
    id: 8,
    tag: "CREATIVE UI / UX DESIGN",
    title: "Creative Minimalist Web Interface",
    desc: "Responsive digital interface experimenting with modern CSS Grid layouts, subtle elevation transitions, and cross-browser accessibility standards.",
    image: "/images/sapphire.webp",
    liveUrl: "https://new-xi-eight-82.vercel.app",
    githubUrl: "https://github.com/Hassaan2835/new",
    meta: "Live Vercel • HTML5 & Modern CSS3",
  },
];

const allPublicRepos: PublicRepo[] = [
  {
    name: "Medins_healthcare",
    category: "web",
    categoryLabel: "Web & Full-Stack",
    description: "Digital product showcase and healthcare equipment catalog designed to display medical products and supplies with responsive filtering.",
    language: "JavaScript / React",
    githubUrl: "https://github.com/Hassaan2835/Medins_healthcare",
    liveUrl: "https://medins-healthcare.vercel.app",
  },
  {
    name: "IGSWebsite",
    category: "web",
    categoryLabel: "Web & Full-Stack",
    description: "Production codebase for IGS Healthcare web platform built with Next.js, React, and Tailwind CSS with mobile-first layouts.",
    language: "TypeScript / Next.js",
    githubUrl: "https://github.com/Hassaan2835/IGSWebsite",
    liveUrl: "https://www.igshealthcare.com/",
  },
  {
    name: "eCommerce-web-application",
    category: "web",
    categoryLabel: "Web & Full-Stack",
    description: "Full-featured shopping web app with dynamic product listings, search filters, interactive cart state, and responsive checkout flow.",
    language: "JavaScript / React",
    githubUrl: "https://github.com/Hassaan2835/eCommerce-web-application",
    liveUrl: "https://e-commerce-web-application-lovat.vercel.app",
  },
  {
    name: "Judgment-Finder-AI",
    category: "ai",
    categoryLabel: "AI & Capstone",
    description: "Local-first document Retrieval-Augmented Generation (RAG) system finding answers in legal judgments with AI-powered search and citations.",
    language: "Python / AI / RAG",
    githubUrl: "https://github.com/Hassaan2835/Judgment-Finder-AI",
  },
  {
    name: "FYP (Accent Builder Speech AI)",
    category: "ai",
    categoryLabel: "AI & Capstone",
    description: "Final Year Capstone Project: Applied acoustic signal processing & speech recognition pipeline to evaluate spoken English pronunciation.",
    language: "Python / Speech AI",
    githubUrl: "https://github.com/Hassaan2835/FYP",
  },
  {
    name: "Nexus",
    category: "web",
    categoryLabel: "Web & Full-Stack",
    description: "High-performance TypeScript web application featuring modular UI architecture, modern layout composition, and interactive state.",
    language: "TypeScript / Next.js",
    githubUrl: "https://github.com/Hassaan2835/Nexus",
    liveUrl: "https://nexus-iota-five.vercel.app",
  },
  {
    name: "CodeAlpha_-Basic-Network-Sniffer-",
    category: "security",
    categoryLabel: "Cybersecurity",
    description: "Python network packet sniffer program capturing and dissecting live network traffic packets, protocol headers, and IP payloads.",
    language: "Python / Networking",
    githubUrl: "https://github.com/Hassaan2835/CodeAlpha_-Basic-Network-Sniffer-",
  },
  {
    name: "CodeAlpha_Secure_Coding_Review-",
    category: "security",
    categoryLabel: "Cybersecurity",
    description: "Cybersecurity audit analyzing source code for common security vulnerabilities, input sanitization flaws, and secure coding practices.",
    language: "JavaScript / Security",
    githubUrl: "https://github.com/Hassaan2835/CodeAlpha_Secure_Coding_Review-",
  },
  {
    name: "CodeAlpha_Phishing_Awareness_Training",
    category: "security",
    categoryLabel: "Cybersecurity",
    description: "Interactive web training platform educating users on identifying malicious URLs, phishing email indicators, and social engineering attacks.",
    language: "HTML5 / JavaScript",
    githubUrl: "https://github.com/Hassaan2835/CodeAlpha_Phishing_Awareness_Training",
  },
  {
    name: "Online_Ordering_App",
    category: "mobile",
    categoryLabel: "Mobile & Flutter",
    description: "Cross-platform mobile ordering application with food and item catalogs, reactive cart calculations, and responsive mobile UI tree.",
    language: "Dart / Flutter",
    githubUrl: "https://github.com/Hassaan2835/Online_Ordering_App",
  },
  {
    name: "riverpodflutter",
    category: "mobile",
    categoryLabel: "Mobile & Flutter",
    description: "Exploration of scalable, decoupled mobile state management patterns in Flutter using the Riverpod reactive architecture.",
    language: "Dart / Flutter",
    githubUrl: "https://github.com/Hassaan2835/riverpodflutter",
  },
  {
    name: "labtaskmoobiledevelopment",
    category: "mobile",
    categoryLabel: "Mobile & Flutter",
    description: "Collection of practical mobile application development tasks, UI views, navigation routing, and responsive mobile layouts.",
    language: "Dart / Mobile UI",
    githubUrl: "https://github.com/Hassaan2835/labtaskmoobiledevelopment",
  },
  {
    name: "apitest",
    category: "mobile",
    categoryLabel: "Mobile & Backend",
    description: "Testing suite for consuming asynchronous RESTful HTTP endpoints, JSON serialization, and error handling in Dart.",
    language: "Dart / REST",
    githubUrl: "https://github.com/Hassaan2835/apitest",
  },
  {
    name: "Sorry-next-main",
    category: "web",
    categoryLabel: "Web & Full-Stack",
    description: "Modern interactive Next.js application deployed on Vercel featuring fluid layouts, custom animations, and UI states.",
    language: "Next.js / JavaScript",
    githubUrl: "https://github.com/Hassaan2835/Sorry-next-main",
    liveUrl: "https://sorry-next-moto.vercel.app",
  },
  {
    name: "HassaanKhanPortfolio",
    category: "web",
    categoryLabel: "Web & Full-Stack",
    description: "Personal developer portfolio codebase engineered with modern TypeScript, modular components, and responsive styling.",
    language: "TypeScript / React",
    githubUrl: "https://github.com/Hassaan2835/HassaanKhanPortfolio",
    liveUrl: "https://hassaankhanportfolio.vercel.app",
  },
  {
    name: "new",
    category: "web",
    categoryLabel: "Web & Full-Stack",
    description: "Creative responsive web interface built with modern CSS grid/flexbox layouts and interactive transitions.",
    language: "CSS3 / HTML5",
    githubUrl: "https://github.com/Hassaan2835/new",
    liveUrl: "https://new-xi-eight-82.vercel.app",
  },
  {
    name: "cutie_main & Personal",
    category: "web",
    categoryLabel: "Web & Full-Stack",
    description: "Frontend styling prototypes, semantic HTML components, and responsive typography experiments.",
    language: "CSS3 / HTML5",
    githubUrl: "https://github.com/Hassaan2835/cutie_main",
  },
  {
    name: "accentbuilder",
    category: "ai",
    categoryLabel: "AI & Capstone",
    description: "Audio capture client interface for the Accent Builder AI project, recording learner speech waveforms for acoustic evaluation.",
    language: "Speech AI / Web",
    githubUrl: "https://github.com/Hassaan2835/accentbuilder",
  },
  {
    name: "AccentBuilderAiApp",
    category: "ai",
    categoryLabel: "AI & Capstone",
    description: "Application client for the AI-Based English Accent Builder pronunciation guidance pipeline.",
    language: "Python / AI",
    githubUrl: "https://github.com/Hassaan2835/AccentBuilderAiApp",
  },
  {
    name: "Hassaan2835 (Profile Config)",
    category: "web",
    categoryLabel: "Open Source",
    description: "Public GitHub developer identity repository containing profile readme, technical workflow stats, and active toolkits.",
    language: "Markdown / Config",
    githubUrl: "https://github.com/Hassaan2835/Hassaan2835",
  },
];

const FeaturedProjects = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredRepos = allPublicRepos.filter((repo) => {
    const matchesFilter = selectedFilter === "all" || repo.category === selectedFilter;
    const matchesSearch =
      searchQuery.trim() === "" ||
      repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      repo.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      repo.language.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section className="featured-section" id="projects">
      <div className="featured-container">
        {/* Section Header */}
        <div className="featured-header">
          <span className="featured-pill-badge">PORTFOLIO & WORK</span>
          <h2 className="featured-title">FEATURED WORK & LIVE DEPLOYMENTS</h2>
          <p className="featured-subtitle">
            A verified look at live production websites, active Vercel deployments, and university computer science capstone engineering.
          </p>
        </div>

        {/* Live Deployments & Showcase Cards */}
        <div className="featured-grid">
          {liveDeployedProjects.map((project) => (
            <div className="project-card" key={project.id}>
              {/* Image Preview */}
              <div className="project-img-wrapper">
                <img
                  src={project.image}
                  alt={`${project.title} - Website Developed by Hassaan Khan`}
                  title={`${project.title} - Hassaan Khan Portfolio`}
                  className="project-img"
                  loading="lazy"
                />
                <span className="project-tag-badge">{project.tag}</span>
              </div>

              {/* Card Body */}
              <div className="project-body">
                <span className="project-meta">{project.meta}</span>
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-desc">{project.desc}</p>

                <div className="project-card-actions">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      className="project-read-link"
                      target="_blank"
                      rel="noreferrer"
                      data-cursor="disable"
                    >
                      <span>Visit Live Website</span>
                      <FiArrowRight style={{ marginLeft: 6 }} />
                    </a>
                  ) : (
                    <a
                      href={project.githubUrl}
                      className="project-read-link"
                      target="_blank"
                      rel="noreferrer"
                      data-cursor="disable"
                    >
                      <span>View on GitHub</span>
                      <FiArrowRight style={{ marginLeft: 6 }} />
                    </a>
                  )}

                  {project.githubUrl && project.liveUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="project-github-sublink"
                      title="View Source Code"
                      data-cursor="disable"
                    >
                      <FaGithub />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- All GitHub Public Repositories Section --- */}
        <div className="repos-explorer-section">
          <div className="repos-explorer-header">
            <div className="repos-header-left">
              <span className="repos-badge">OPEN SOURCE & CODE REPOSITORIES</span>
              <h3 className="repos-title">All GitHub Public Repositories</h3>
              <p className="repos-desc">
                Browse through all 20+ public repositories on my GitHub, spanning full-stack web applications,
                speech AI research, network security tools, and mobile Flutter apps.
              </p>
            </div>

            <div className="repos-stats-pills">
              <div className="stat-pill">
                <strong>20+</strong>
                <span>Public Repos</span>
              </div>
              <div className="stat-pill">
                <strong>7</strong>
                <span>Live Deployments</span>
              </div>
              <div className="stat-pill">
                <strong>4</strong>
                <span>Disciplines</span>
              </div>
            </div>
          </div>

          {/* Filter & Search Bar */}
          <div className="repos-controls-bar">
            <div className="repos-filter-tabs">
              <button
                className={`filter-btn ${selectedFilter === "all" ? "active" : ""}`}
                onClick={() => setSelectedFilter("all")}
                data-cursor="disable"
              >
                All Repositories ({allPublicRepos.length})
              </button>
              <button
                className={`filter-btn ${selectedFilter === "web" ? "active" : ""}`}
                onClick={() => setSelectedFilter("web")}
                data-cursor="disable"
              >
                Web & Full-Stack
              </button>
              <button
                className={`filter-btn ${selectedFilter === "ai" ? "active" : ""}`}
                onClick={() => setSelectedFilter("ai")}
                data-cursor="disable"
              >
                AI & Capstone
              </button>
              <button
                className={`filter-btn ${selectedFilter === "security" ? "active" : ""}`}
                onClick={() => setSelectedFilter("security")}
                data-cursor="disable"
              >
                Cybersecurity
              </button>
              <button
                className={`filter-btn ${selectedFilter === "mobile" ? "active" : ""}`}
                onClick={() => setSelectedFilter("mobile")}
                data-cursor="disable"
              >
                Mobile & Flutter
              </button>
            </div>

            <div className="repos-search-box">
              <FiSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search repos (e.g. React, Python, IGS)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="repos-search-input"
                data-cursor="disable"
              />
            </div>
          </div>

          {/* Repos Grid */}
          <div className="repos-grid">
            {filteredRepos.map((repo, idx) => (
              <div className="repo-card" key={idx}>
                <div className="repo-card-top">
                  <div className="repo-icon-wrap">
                    <FiFolder className="repo-folder-icon" />
                  </div>
                  <span className="repo-cat-tag">{repo.categoryLabel}</span>
                </div>

                <h4 className="repo-name">
                  <a
                    href={repo.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="disable"
                  >
                    {repo.name}
                  </a>
                </h4>

                <p className="repo-description">{repo.description}</p>

                <div className="repo-card-footer">
                  <div className="repo-language">
                    <span className="lang-indicator"></span>
                    <span>{repo.language}</span>
                  </div>

                  <div className="repo-action-links">
                    <a
                      href={repo.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="repo-btn github"
                      title="View GitHub Repository"
                      data-cursor="disable"
                    >
                      <FaGithub />
                      <span>Code</span>
                    </a>

                    {repo.liveUrl && (
                      <a
                        href={repo.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="repo-btn live"
                        title="View Live Website"
                        data-cursor="disable"
                      >
                        <FiExternalLink />
                        <span>Live</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Direct GitHub Link */}
          <div className="repos-footer-bar">
            <a
              href="https://github.com/Hassaan2835?tab=repositories"
              target="_blank"
              rel="noreferrer"
              className="btn-dark direct-github-btn"
              data-cursor="disable"
            >
              <FaGithub style={{ fontSize: 18 }} />
              <span>Explore All 22 Repositories on GitHub</span>
              <FiArrowRight style={{ marginLeft: 6 }} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
