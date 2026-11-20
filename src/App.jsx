import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Header from "./components/Headers";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Awards from "./components/Award";
import Footer from "./components/Footer";

function App() {
  const { pathname, hash } = useLocation();

  // Old links like /projects or #projects still jump to the right section.
  useEffect(() => {
    const id = hash.slice(1) || pathname.replace(/^\/+|\/+$/g, "");
    if (!id) return;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, [pathname, hash]);

  return (
    <>
      <Header />
      <main>
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
