import { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "./styles/Testimonials.css";

const testimonials = [
  {
    quote:
      "Hassaan is a rare engineering talent who balances architectural rigor with lightning-fast delivery. He rebuilt our entire core SaaS workflow on Next.js, cutting page load times by over 60%.",
    author: "Alexander Reed",
    role: "Chief Technology Officer at Apex Cloud",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=faces",
  },
  {
    quote:
      "The UI/UX and full-stack implementation Hassaan delivered exceeded all expectations. His attention to detail, proactive communication, and problem-solving skills made our product launch an enormous success.",
    author: "Elena Rostova",
    role: "Founder & Product Lead at DevStudio",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop&crop=faces",
  },
  {
    quote:
      "Working with Hassaan felt like having a veteran senior engineer right next to you. His NestJS microservices architecture handles our millions of daily transactions without a hitch.",
    author: "Marcus Chen",
    role: "VP of Engineering at FinScale Global",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&crop=faces",
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);

  const next = () => setActive((active + 1) % testimonials.length);
  const prev = () => setActive((active - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-container">
        <h2 className="testimonials-title">WHAT CLIENTS SAY</h2>
        <p className="testimonials-subtitle">
          Real feedback from founders and engineering leaders I've collaborated with.
        </p>

        <div className="testimonial-card">
          {/* Clean Vector Star Rating */}
          <div className="testimonial-stars">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="star-svg-icon" />
            ))}
          </div>

          <p className="testimonial-quote">“{testimonials[active].quote}”</p>

          <div className="testimonial-author-row">
            <img
              src={testimonials[active].avatar}
              alt={testimonials[active].author}
              className="testimonial-avatar"
            />
            <div className="testimonial-author-info">
              <h4 className="author-name">{testimonials[active].author}</h4>
              <p className="author-role">{testimonials[active].role}</p>
            </div>
          </div>
        </div>

        {/* Navigation Controls with Crisp Chevron Icons */}
        <div className="testimonial-nav">
          <button
            onClick={prev}
            className="nav-btn"
            aria-label="Previous testimonial"
            data-cursor="disable"
          >
            <FiChevronLeft className="nav-chevron-svg" />
          </button>
          <div className="testimonial-indicators">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={`indicator-dot ${i === active ? "active" : ""}`}
                onClick={() => setActive(i)}
              ></span>
            ))}
          </div>
          <button
            onClick={next}
            className="nav-btn"
            aria-label="Next testimonial"
            data-cursor="disable"
          >
            <FiChevronRight className="nav-chevron-svg" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
