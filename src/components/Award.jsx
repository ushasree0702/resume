import "./Awards.css";

function Awards() {
  const awards = [
    {
      title: "Appreciation Award",
      description:
        "Recognized for outstanding performance and valuable contributions to the organization.",
      year: "2025",
    },
    {
      title: "5 Years Service Award",
      description:
        "Honored for completing five years of dedicated service with the organization.",
      year: "2025",
    },
    {
      title: "Perfect Attendance Award",
      description:
        "Recognized for maintaining excellent attendance and punctuality.",
      year: "2025",
    },
  ];

  return (
    <section className="awards-section" id="awards">
      <div className="awards-container">
        {/* Header */}
        <div className="awards-header">
          <p>ACHIEVEMENTS</p>
          <h2>Awards & Recognition</h2>
          <span>
            Recognition received for performance, dedication, and contributions
            throughout my professional journey.
          </span>
        </div>

        {/* Awards */}
        <div className="awards-grid">
          {awards.map((award) => (
            <div className="award-card" key={award.title}>
              <div className="award-top">
                <div className="award-icon">🏆</div>

                <span className="award-year">{award.year}</span>
              </div>

              <h3>{award.title}</h3>

              <p>{award.description}</p>

              <div className="award-company">
                <span>R</span>
                <div>
                  <small>Recognized by</small>
                  <strong>
                    Rumango Software and Consulting Services Private Limited
                  </strong>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Awards;
