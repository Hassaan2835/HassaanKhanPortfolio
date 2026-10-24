import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section" id="career">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> Experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* Item 1: NUML Education */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h3>BS in Computer Science (BSCS)</h3>
                <h5>NUML Islamabad, Pakistan</h5>
              </div>
              <h4>2022–2025</h4>
            </div>
            <p>
              Completed Bachelor of Science in Computer Science with a strong grounding in Data Structures &
              Algorithms, OOP, Database Systems, Web Technologies, and Software Engineering.
              Developed an AI-Based English Accent Builder capstone project analyzing speech signals.
            </p>
          </div>

          {/* Item 2: IGS Healthcare */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h3>Web Developer</h3>
                <h5>IGS Healthcare</h5>
              </div>
              <h4>2024–Now</h4>
            </div>
            <p>
              Engineered responsive, accessible UI components using Next.js, React, and Tailwind CSS.
              Implemented mobile-first layouts ensuring cross-device consistency, refined typography
              hierarchy for patient legibility, and ensured semantic HTML structure with technical SEO.
            </p>
          </div>

          {/* Item 3: Full Stack Growth */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h3>Frontend & Full-Stack Development</h3>
                <h5>Freelance & Open Source</h5>
              </div>
              <h4>Active</h4>
            </div>
            <p>
              Building modern web applications with React, Next.js, and TypeScript while actively
              expanding into Node.js, Express, MongoDB, and RESTful APIs. Delivering practical,
              accessible web experiences backed by clean Git habits and thorough documentation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
