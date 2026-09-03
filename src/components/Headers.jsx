import { useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="logo" onClick={() => navigate("/")}>
        <span>My</span> Resume
      </div>

      <nav className="resumeList">
        <button onClick={() => navigate("/")}>About</button>
        <button onClick={() => navigate("/experience")}>Experience</button>
        <button onClick={() => navigate("/awards")}>
          Awards & Recognition
        </button>
        <button onClick={() => navigate("/skills")}>Skills</button>
        <button onClick={() => navigate("/projects")}>Projects</button>
        <button onClick={() => navigate("/contact")}>Contact</button>
      </nav>

      {/* <button
        className="resumeBtn"
        onClick={() => window.open("/resume.pdf", "_blank")}
      >
        Download Resume
      </button> */}
    </header>
  );
}

export default Header;
