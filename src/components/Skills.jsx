import "./Skills.css";

function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "💻",
      skills: ["Angular", "React", "JavaScript", "TypeScript", "HTML", "CSS"],
    },
    {
      title: "API & Backend",
      icon: "🔗",
      skills: ["REST API", "API Integration", "JSON"],
    },
    {
      title: "Tools & Version Control",
      icon: "🛠️",
      skills: ["Git", "GitHub", "VS Code", "Chrome DevTools"],
    },
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        {/* Header */}
        <div className="skills-header">
          <p>MY EXPERTISE</p>
          <h2>Skills & Technologies</h2>
          <span>
            Technologies and tools I use to build modern, scalable and
            user-friendly web applications.
          </span>
        </div>

        {/* Skill Categories */}
        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div className="skill-card" key={category.title}>
              <div className="skill-icon">{category.icon}</div>

              <h3>{category.title}</h3>

              <div className="skill-list">
                {category.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
