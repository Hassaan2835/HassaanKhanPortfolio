import { useState } from "react";
import "./styles/Showcase.css";

const Showcase = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="showcase-section" id="showcase">
      <div className="showcase-container">
        <div className="showcase-card">
          {/* Header Row */}
          <div className="showcase-header">
            <h2 className="showcase-title">
              LISTEN TO PODCASTS
              <br />
              & TECH TALKS
            </h2>
            <p className="showcase-description">
              In his podcasts and architecture teardowns, Hassaan Khan shares valuable
              insights, performance strategies, and full-stack systems knowledge to help
              engineers and founders build scalable products.
            </p>
          </div>

          {/* Media Player Showcase */}
          <div className="showcase-media-frame">
            <div
              className={`media-preview-container ${isPlaying ? "video-active" : ""}`}
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {/* Audience conference background */}
              <div className="media-backdrop-img">
                <div className="media-overlay-gradient"></div>
              </div>

              {/* Play Button Overlay */}
              <button
                className="showcase-play-btn"
                aria-label="Play Tech Talk Podcast"
                data-cursor="disable"
              >
                <div className="play-triangle"></div>
              </button>

              <div className="media-caption-bar">
                <span className="caption-live">EPISODE #12 • LIVE KEYNOTE</span>
                <span className="caption-topic">
                  Architecting Resilient Microservices with Next.js & NestJS
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Action */}
          <div className="showcase-footer">
            <a href="#projects" className="btn-mint" data-cursor="disable">
              View more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
