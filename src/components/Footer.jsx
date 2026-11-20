import { profile } from "../data/profile";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} {profile.name} · Frontend Angular Developer
      </p>
      <div className="footer-links">
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={`mailto:${profile.email}`}>Email</a>
        <a href="#about">Back to top ↑</a>
      </div>
    </footer>
  );
}

export default Footer;
