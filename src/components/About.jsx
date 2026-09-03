import { useNavigate } from "react-router-dom";
import "./About.css";

function About() {
  const navigate = useNavigate();

  const downloadResume = () => {
    const link = document.createElement("a");

    link.href = "/Usha_Mandhakalla_Frontend_Developer (1).pdf";
    link.download = "Usha_Mandhakalla_Resume.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="about" id="about">
      <div className="about-container">
        {/* Left Content */}
        <div className="about-content">
          <p className="intro">👋 Hello, I'm</p>

          <h1>
            Usha <span>Mandhakalla</span>
          </h1>

          <h2>
            Frontend <span>Angular Developer</span>
          </h2>

          <p className="about-description">
            Frontend Developer with 5+ years of experience building scalable,
            responsive, and user-friendly web applications. Specialized in
            Angular, TypeScript, REST APIs, reusable components, and modern UI
            development.
          </p>

          <div className="about-buttons">
            {/* Download Resume */}
            <button className="primary-btn" onClick={downloadResume}>
              Download Resume
            </button>

            {/* Contact */}
            <button
              className="secondary-btn"
              onClick={() => navigate("/contact")}
            >
              Contact Me
            </button>
          </div>

          {/* Skills */}
          <div className="quick-skills">
            <span>Angular</span>
            <span>TypeScript</span>
            <span>JavaScript</span>
            <span>REST API</span>
            <span>Git</span>
          </div>
        </div>

        {/* Right Developer Card */}
        <div className="about-profile">
          <div className="profile-card">
            <div className="profile-icon">&lt;/&gt;</div>

            <h3>Frontend Developer</h3>

            <p>
              Building clean, scalable and high-performance web applications.
            </p>

            <div className="experience-box">
              <strong>5+</strong>
              <span>Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
