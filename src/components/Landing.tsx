import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <p className="intro-greeting">Hello! I'm</p>
            <h1>
              HASSAAN
              <br />
              <span>KHAN</span>
            </h1>
          </div>
          <div className="landing-info">
            <h2>Full Stack Developer & Engineer</h2>
            <div className="landing-info-details">
              <div className="landing-h2-1">Developer</div>
              <div className="landing-h2-2">Engineer</div>
            </div>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
