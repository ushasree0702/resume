import { profile } from "../data/profile";
import "./About.css";

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "4+", label: "Banking Products" },
  { value: "30%", label: "Faster Load Time" },
];

function About() {
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
            responsive, and user-friendly web applications for core banking.
            Specialized in Angular, TypeScript, REST APIs, reusable components,
            and performance-focused UI development.
          </p>

          <div className="about-buttons">
            <a
              className="primary-btn"
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
            >
              View Resume
            </a>
            <a
              className="secondary-btn"
              href={profile.resume}
              download="Usha_Mandhakalla_Resume.pdf"
            >
              Download PDF
            </a>
            <a className="secondary-btn" href="#contact">
              Contact Me
            </a>
          </div>

          <div className="about-social">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
              </svg>
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3" />
              </svg>
              GitHub
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M2 4h20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm10 7.2L2.4 6H2v.6l10 5.6 10-5.6V6h-.4L12 11.2z" />
              </svg>
              Email
            </a>
          </div>

          {/* Skills */}
          <div className="quick-skills">
            <span>Angular</span>
            <span>TypeScript</span>
            <span>JavaScript</span>
            <span>RxJS</span>
            <span>Angular Material</span>
            <span>REST API</span>
            <span>Git</span>
          </div>
        </div>

        {/* Right Developer Card */}
        <div className="about-profile">
          <div className="profile-card">
            <div className="profile-icon">UM</div>

            <h3>Senior Software Developer</h3>

            <p>
              Building clean, scalable and high-performance internet banking
              applications.
            </p>

            <p className="profile-location">📍 {profile.location}</p>

            <div className="stats-grid">
              {stats.map((s) => (
                <div className="experience-box" key={s.label}>
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
