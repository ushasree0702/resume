import { useEffect, useState } from "react";
import { profile, sections } from "../data/profile";
import "./Header.css";

function Header() {
  const [active, setActive] = useState("about");
  const [open, setOpen] = useState(false);

  // Highlight the nav item for the section currently on screen.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="header">
      <a className="logo" href="#about" onClick={() => setOpen(false)}>
        <span>Usha</span> Mandhakalla
      </a>

      <button
        className="menu-toggle"
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        {open ? "✕" : "☰"}
      </button>

      <nav className={`resumeList ${open ? "open" : ""}`}>
        {sections.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={active === id ? "active" : ""}
            onClick={() => setOpen(false)}
          >
            {label}
          </a>
        ))}
        <a
          className="resumeBtn"
          href={profile.resume}
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
      </nav>
    </header>
  );
}

export default Header;
