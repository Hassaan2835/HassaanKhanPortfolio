import { useState } from "react";
import { FiMessageSquare, FiMail, FiTarget, FiArrowRight, FiCheck } from "react-icons/fi";
import "./styles/NewsletterContact.css";

const faqs = [
  {
    q: "What is your academic and technical background?",
    a: "I completed my BS in Computer Science (BSCS) at NUML Islamabad (2022–2025). My daily frontend stack centers on React.js, Next.js, and Tailwind CSS, while expanding into Node.js, Express, and MongoDB.",
  },
  {
    q: "Are you available for junior/entry-level web roles or freelance projects?",
    a: "Yes! I am actively looking for junior/entry-level web development roles and available for select freelance frontend projects. I am based in Rawalpindi/Islamabad and available remotely worldwide.",
  },
  {
    q: "What was your university capstone project?",
    a: "I built the AI-Based English Accent Builder—an applied CS project combining speech recognition and audio signal processing to evaluate spoken English pronunciation against benchmark phonetic models.",
  },
  {
    q: "How do you approach code quality and accessibility?",
    a: "I write clean, modular React components, adhere to mobile-first responsive design, ensure WCAG AA color contrast, and provide comfortable touch targets (≥44px) with keyboard accessibility.",
  },
];

const NewsletterContact = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail("");
    }
  };

  return (
    <section className="faq-newsletter-section" id="faq">
      <div className="fn-container">
        {/* FAQ Section */}
        <div className="faq-block">
          <span className="fn-pill-badge">CLARITY & CONFIDENCE</span>
          <h2 className="fn-section-title">FREQUENTLY ASKED QUESTIONS</h2>
          <div className="faq-accordion">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${openFaq === index ? "faq-open" : ""}`}
              >
                <button
                  className="faq-question-btn"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  data-cursor="disable"
                >
                  <span className="faq-q-text">{faq.q}</span>
                  <span className="faq-icon">{openFaq === index ? "−" : "+"}</span>
                </button>
                {openFaq === index && (
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Turn Idea Into Reality Action Card from Poster */}
        <div className="turn-idea-card">
          <div className="turn-idea-content">
            <span className="turn-idea-badge">LET'S BUILD SOMETHING GREAT TOGETHER</span>
            <h3 className="turn-idea-title">
              Let's Turn Your Idea Into Reality
            </h3>
            <p className="turn-idea-desc">
              Whether you need a high-converting business website, an e-commerce platform,
              or an SEO revamp, I deliver on-time, fully responsive results built to grow your business.
            </p>

            <div className="turn-idea-cta-row">
              <a
                href="mailto:hassaankhan.dev@gmail.com?subject=%5BOpportunity%5D%20Web%20Developer%20Role%20%2F%20Freelance%20Inquiry"
                className="btn-mint turn-idea-btn"
                data-cursor="disable"
              >
                <span>DM / Email Now</span>
                <FiArrowRight style={{ marginLeft: 8 }} />
              </a>
              <a
                href="#services"
                className="btn-outline-white"
                data-cursor="disable"
              >
                View Services
              </a>
            </div>
          </div>

          {/* 3 Trust Strip from bottom of poster */}
          <div className="trust-strip-grid">
            <div className="trust-strip-item">
              <span className="trust-strip-icon">
                <FiMessageSquare className="trust-strip-svg" />
              </span>
              <div className="trust-strip-text">
                <strong>Discuss Your Project Today</strong>
                <span>No Obligation Consultation</span>
              </div>
            </div>
            <div className="trust-strip-item">
              <span className="trust-strip-icon">
                <FiMail className="trust-strip-svg" />
              </span>
              <div className="trust-strip-text">
                <strong>Get a Free Consultation</strong>
                <span>Fast response within 24 hours</span>
              </div>
            </div>
            <div className="trust-strip-item">
              <span className="trust-strip-icon">
                <FiTarget className="trust-strip-svg" />
              </span>
              <div className="trust-strip-text">
                <strong>Your Vision • Our Skills</strong>
                <span>100% Focused on Your Success</span>
              </div>
            </div>
          </div>
        </div>

        {/* Dark Forest Green Newsletter Card */}
        <div className="newsletter-card" id="newsletter">
          <div className="newsletter-inner">
            <h3 className="newsletter-title">
              GET MY NEWSLETTER & DEV UPDATES
            </h3>
            <p className="newsletter-desc">
              Subscribe to receive modern web development tips, performance optimization
              insights, and new case studies directly in your inbox.
            </p>

            <form className="newsletter-form" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="newsletter-input"
                data-cursor="disable"
              />
              <button
                type="submit"
                className="btn-mint newsletter-submit"
                data-cursor="disable"
              >
                {subscribed ? (
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                    <FiCheck /> Subscribed!
                  </span>
                ) : (
                  "Subscribe"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterContact;
