import { useEffect, useRef } from "react";
import "./Projects.css";

const projects = [
  {
    title: "MauBank – Corporate Banking & Back Office",
    period: "Sep 2026 – Present",
    type: "UI Lead · Corporate Internet Banking & Back Office",
    description:
      "Leading UI development, implementation and integration for MauBank's corporate internet banking and back-office applications.",
    responsibilities: [
      "Leading the frontend: structure, component approach and code reviews.",
      "Implementing corporate banking and back-office screens hands-on in Angular.",
      "Integrating REST APIs for account, transaction and back-office data.",
      "Driving feature delivery, defect fixes and UI quality for releases.",
    ],
    technologies: ["Angular", "TypeScript", "Angular Material", "REST API"],
  },
  {
    title: "Internet Banking",
    period: "2024 – Present",
    type: "Retail Banking Application",
    description:
      "Developed and maintained enterprise-level internet banking applications with modern Angular architecture.",
    responsibilities: [
      "Developed reusable Angular components.",
      "Integrated REST APIs for real-time customer data.",
      "Implemented Reactive Forms and validations.",
      "Built responsive UI for desktop and mobile.",
    ],
    technologies: ["Angular", "TypeScript", "Angular Material", "REST API"],
  },
  {
    title: "Corporate Banking",
    period: "2023 – Present",
    type: "Corporate Banking Platform",
    description:
      "Built banking modules for corporate users including payments, transactions, account management, and approvals.",
    responsibilities: [
      "Developed transaction screens.",
      "Implemented reusable components.",
      "Integrated backend APIs.",
      "Improved UI performance.",
    ],
    technologies: ["Angular", "RxJS", "HTML", "CSS"],
  },
  {
    title: "Maintenance – Core Banking",
    period: "2022 – 2023 & 2024 – Present",
    type: "Banking Platform",
    description:
      "Developed dashboards and maintenance modules for creating, updating and managing core banking data.",
    responsibilities: [
      "Created dashboard screens.",
      "Developed maintenance modules with full CRUD flows.",
      "Implemented API integrations.",
      "Created reusable UI components.",
    ],
    technologies: ["Angular", "Chart.js", "REST API", "SCSS"],
  },
  {
    title: "Split Bills",
    period: "2023 – 2024",
    type: "Banking Platform",
    description:
      "Developed dashboards and screens for splitting and managing shared bill payments.",
    responsibilities: [
      "Created dashboard screens.",
      "Developed the Split Bills user flows.",
      "Implemented API integrations.",
      "Created reusable UI components.",
    ],
    technologies: ["Angular 16", "TypeScript", "REST API", "SCSS"],
  },
  {
    title: "SIAS",
    period: "2019 – 2021",
    type: "Enterprise Application",
    description:
      "Worked on frontend development and UI enhancements, building responsive screens and supporting testing and documentation.",
    responsibilities: [
      "Developed responsive UI screens using Angular and Angular Material.",
      "Contributed to feature enhancements and bug fixing.",
      "Assisted in testing and project documentation.",
    ],
    technologies: ["Angular", "TypeScript", "Angular Material", "HTML", "CSS"],
  },
];

// Swiper config is passed as a JS object (React 19 sets attributes on custom
// elements as properties, so string attributes like pagination="true" break).
const swiperParams = {
  slidesPerView: 1,
  spaceBetween: 25,
  breakpoints: { 768: { slidesPerView: 2 } }, // 1 card on phones, 2 on desktop
  grabCursor: true,
  pagination: { clickable: true },
  loop: true,
  autoplay: {
    delay: 6000,
    pauseOnMouseEnter: true,
    disableOnInteraction: false,
  },
};

function Projects() {
  const swiperRef = useRef(null);

  useEffect(() => {
    const el = swiperRef.current;
    if (!el || el.swiper) return;
    Object.assign(el, swiperParams);
    el.initialize();
  }, []);

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <div className="projects-header">
          <p>MY WORK</p>
          <h2>Featured Projects</h2>
          <span>
            A collection of projects showcasing my experience in Angular,
            banking applications, and enterprise web development.
          </span>
        </div>

        <swiper-container ref={swiperRef} init={false} class="projects-slider">
          {projects.map((project, i) => (
            <swiper-slide key={project.title}>
              <article className="project-card">
                <div className="project-top">
                  <div className="project-icon">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="project-period">{project.period}</div>
                </div>

                <h3>{project.title}</h3>
                <div className="project-location">{project.type}</div>

                <p className="project-description">{project.description}</p>

                <h4>Key Responsibilities</h4>
                <ul>
                  {project.responsibilities.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>

                <div className="technology-list">
                  {project.technologies.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </article>
            </swiper-slide>
          ))}
        </swiper-container>
      </div>
    </section>
  );
}

export default Projects;
