import "./Experience.css";

function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">
        {/* Section Header */}
        <div className="experience-header">
          <p>MY JOURNEY</p>

          <h2>Professional Experience</h2>

          <span>
            My professional experience in frontend development, building
            scalable and user-friendly banking applications.
          </span>
        </div>

        {/* Timeline */}
        <div className="experience-timeline">
          <div className="timeline-line"></div>

          <div className="experience-item">
            {/* Timeline Dot */}
            <div className="timeline-dot"></div>

            <div className="experience-card">
              <div className="experience-top">
                <div>
                  <h3>Senior Software Developer</h3>

                  <h4>
                    RUMANGO SOFTWARE AND CONSULTING SERVICES PRIVATE LIMITED
                  </h4>
                </div>

                <span className="experience-date">09/2019 – Present</span>
              </div>

              <p className="experience-location">
                📍 Bangalore, Karnataka, India
              </p>

              <p className="experience-summary">
                Experienced frontend developer working on core banking
                applications with a focus on responsive UI development, reusable
                components, API integration, performance optimization, and
                application maintenance.
              </p>

              <h5>Key Responsibilities</h5>

              <ul>
                <li>
                  Developed and maintained core banking applications including
                  Retail Internet Banking, Corporate Internet Banking,
                  Maintenance, and Split Bills.
                </li>

                <li>
                  Built reusable and responsive UI components using Angular,
                  Angular Material, and TypeScript.
                </li>

                <li>
                  Integrated APIs for real-time customer and transaction data
                  management.
                </li>

                <li>
                  Implemented feature enhancements, fixed defects, and optimized
                  UI performance.
                </li>

                <li>
                  Reduced application load time by approximately 30% through UI
                  and performance optimization.
                </li>

                <li>
                  Contributed to code reviews, testing, debugging, and
                  deployment activities using Git.
                </li>
              </ul>

              {/* Technologies */}
              <div className="experience-technologies">
                <span>Angular</span>
                <span>TypeScript</span>
                <span>Angular Material</span>
                <span>REST APIs</span>
                <span>JavaScript</span>
                <span>Git</span>
                <span>HTML</span>
                <span>CSS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
