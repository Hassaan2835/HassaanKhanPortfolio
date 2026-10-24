import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiPython,
  SiNodedotjs,
  SiMongodb,
  SiWordpress,
  SiGit,
} from "react-icons/si";
import { FiDatabase, FiCpu, FiTrendingUp } from "react-icons/fi";
import "./styles/TechStack.css";

interface SkillItem {
  name: string;
  level: string;
  icon: React.ReactNode;
  desc: string;
}

interface SkillCategory {
  category: string;
  skills: SkillItem[];
}

const categories: SkillCategory[] = [
  {
    category: "Working With • Core Daily Drivers",
    skills: [
      { name: "React.js", level: "Primary", icon: <SiReact className="tech-svg-brand color-react" />, desc: "Modular component architecture, custom hooks, predictable state" },
      { name: "Next.js", level: "Primary", icon: <SiNextdotjs className="tech-svg-brand" />, desc: "App Router, layout composition, SSR, and clean page templates" },
      { name: "JavaScript & TS", level: "Primary", icon: <SiTypescript className="tech-svg-brand color-ts" />, desc: "Modern ES6+, strict typing, semantic interfaces & clean logic" },
      { name: "Tailwind CSS", level: "Primary", icon: <SiTailwindcss className="tech-svg-brand color-tailwind" />, desc: "Mobile-first responsive styling, design consistency, zero bloat" },
      { name: "Semantic HTML5/CSS", level: "Primary", icon: <SiHtml5 className="tech-svg-brand color-html" />, desc: "Accessible landmarks, WCAG AA contrast, touch targets (≥44px)" },
    ],
  },
  {
    category: "Familiar With • CS & Foundations",
    skills: [
      { name: "Python (OOP)", level: "Academic", icon: <SiPython className="tech-svg-brand color-python" />, desc: "Object-oriented programming, class hierarchies, clean architecture" },
      { name: "Algorithms & DSA", level: "Academic", icon: <FiCpu className="tech-svg-brand color-perf" />, desc: "Data structures, algorithmic problem solving & memory complexity" },
      { name: "Database Systems", level: "Academic", icon: <FiDatabase className="tech-svg-brand color-sql" />, desc: "Relational database schema modeling, indexing & SQL queries" },
      { name: "Speech AI & Audio", level: "Capstone", icon: <FiTrendingUp className="tech-svg-brand color-seo" />, desc: "Speech recognition, acoustic processing & phonetic scoring" },
    ],
  },
  {
    category: "Growing Into • Full-Stack & CMS",
    skills: [
      { name: "Node.js & Express", level: "Learning", icon: <SiNodedotjs className="tech-svg-brand color-node" />, desc: "Asynchronous backend runtimes, routing & middleware" },
      { name: "MongoDB & NoSQL", level: "Learning", icon: <SiMongodb className="tech-svg-brand color-mongo" />, desc: "Document modeling, collections, and RESTful data pipelines" },
      { name: "WordPress CMS", level: "Certified", icon: <SiWordpress className="tech-svg-brand color-wp" />, desc: "Custom themes, page structure, content modeling & client control" },
      { name: "Git & Version Control", level: "Daily", icon: <SiGit className="tech-svg-brand color-git" />, desc: "Atomic commits, branch workflows, and truthful documentation" },
    ],
  },
];

const TechStack = () => {
  return (
    <section className="tech-section" id="tech">
      <div className="tech-container">
        <div className="tech-header">
          <span className="tech-pill-badge">TECHNICAL TOOLKIT</span>
          <h2 className="tech-title">VERIFIED TECHNICAL CAPABILITIES</h2>
          <p className="tech-subtitle">
            Categorized truthfully by daily practice, academic foundation, and active full-stack study—free
            of arbitrary percentage bars or exaggerated claims.
          </p>
        </div>

        <div className="tech-categories-grid">
          {categories.map((cat, idx) => (
            <div className="tech-cat-card" key={idx}>
              <h3 className="cat-title">{cat.category}</h3>
              <div className="skills-badge-list">
                {cat.skills.map((skill, sIdx) => (
                  <div className="skill-item-card" key={sIdx}>
                    <div className="skill-item-top">
                      <span className="skill-icon-badge">{skill.icon}</span>
                      <div className="skill-info">
                        <h4 className="skill-name">{skill.name}</h4>
                        <span className="skill-level">{skill.level}</span>
                      </div>
                    </div>
                    <p className="skill-desc">{skill.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
