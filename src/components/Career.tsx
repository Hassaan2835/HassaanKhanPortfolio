import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h3>Full Stack Developer</h3>
                <h5>-</h5>
              </div>
              <h4>2025</h4>
            </div>
            <p>
              Built 2+ complete applications using React.js. Integrated backend
              authentication using Node.js & MongoDB. Created responsive UI/UX
              and designed wireframes using Figma.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h3>Senior Full Stack Developer</h3>
                <h5>IGS Health Care</h5>
              </div>
              <h4>Now</h4>
            </div>
            <p>
              Build and manage the health care website using React.js and Node.js,
              Tailwand CSS, and manage the SEO Optimization.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h3>Full Stack Developer</h3>
                <h5>DeveloperHub Corporation</h5>
              </div>
              <h4>Part Time</h4>
            </div>
            <p>
              Building Solid, a proprietary low-code platform using Angular,
              Next.js & NestJS. Delivering production-ready CMS-based projects
              including e-commerce, CRM, and import-export automation systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
