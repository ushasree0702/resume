import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "SIAS",
      period: "09/2019 – Present",
      location: "Bangalore, Karnataka, India",
      description:
        "Worked on frontend development and UI enhancements for the SIAS project. Developed responsive screens, contributed to feature enhancements and bug fixes, and supported testing and documentation activities.",
      responsibilities: [
        "Developed responsive UI screens using Angular and Angular Material.",
        "Contributed to feature enhancements and bug fixing.",
        "Worked with HTML, CSS, JavaScript and TypeScript.",
        "Assisted in testing and project documentation.",
      ],
      technologies: [
        "Angular",
        "TypeScript",
        "Angular Material",
        "HTML",
        "CSS",
        "JavaScript",
      ],
    },

    {
      title: "Split BILLS",
      period: "Project",
      description:
        "Worked on feature enhancements, bug fixing, UI optimization, and reusable component development. Integrated APIs for system maintenance operations and improved application responsiveness.",
      responsibilities: [
        "Built reusable and responsive UI components.",
        "Integrated APIs for creating, updating, deleting and fetching maintenance data.",
        "Worked on feature enhancements and bug fixing.",
        "Improved application responsiveness and user experience.",
        "Participated in code reviews and deployment activities.",
      ],
      technologies: ["Angular 16", "TypeScript", "REST APIs", "Tailwind CSS"],
    },

    {
      title: "ICUST – Retail & Corporate Internet Banking",
      period: "Angular 14 / 16",
      description:
        "Developed responsive and reusable banking interfaces for retail and corporate customer operations using Angular and TypeScript.",
      responsibilities: [
        "Developed responsive UI modules for banking operations.",
        "Integrated REST APIs for real-time customer data retrieval.",
        "Implemented reusable components using component-based architecture.",
        "Worked on feature enhancements and bug fixes.",
        "Implemented performance optimizations for better user experience.",
      ],
      technologies: ["Angular 14", "Angular 16", "TypeScript", "REST APIs"],
    },

    {
      title: "Maintenance System",
      period: "Banking Maintenance",
      description:
        "Developed maintenance screens for creating, updating and managing banking maintenance data and workflows.",
      responsibilities: [
        "Built responsive, component-based UI modules.",
        "Integrated REST APIs for CRUD operations.",
        "Implemented create, update, delete and retrieve functionality.",
        "Resolved defects and implemented feature enhancements.",
        "Optimized application responsiveness and user experience.",
      ],
      technologies: ["Angular", "TypeScript", "REST APIs", "HTML", "CSS"],
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        {/* Header */}
        <div className="projects-header">
          <p>MY WORK</p>

          <h2>Projects & Experience</h2>

          <span>
            A selection of projects and applications I have worked on throughout
            my frontend development experience.
          </span>
        </div>

        {/* Projects */}
        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.title}>
              <div className="project-top">
                <div className="project-icon">&lt;/&gt;</div>

                <span className="project-period">{project.period}</span>
              </div>

              <h3>{project.title}</h3>

              {project.location && (
                <p className="project-location">📍 {project.location}</p>
              )}

              <p className="project-description">{project.description}</p>

              <h4>Key Responsibilities</h4>

              <ul>
                {project.responsibilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <div className="technology-list">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
