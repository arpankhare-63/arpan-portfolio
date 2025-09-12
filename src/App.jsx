import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import ScrollToTop from "react-scroll-to-top";
import Aboutme from "./components/About_me/Aboutme.jsx";
import Background from "./components/Background/Background.jsx";
import Certificates from "./components/Certificates/Certificates.jsx";
import Connect from "./components/Connect/Connect.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Skills from "./components/Skills/Skills.jsx";
import "./Loader.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="loader"></div>
      ) : (
        <>
          <Navbar />
          <Hero />
          <Aboutme />
          <Skills />
          <Certificates />
          <Projects />
          <Background />
          <Connect />
          <Footer />

          {/* Scroll to Top using old .totop class */}
          <ScrollToTop
            smooth
              style={{ background: "transparent", boxShadow: "none" }}
            component={
              <div className="totop">
                <FaArrowUp /> Back to Top
              </div>
            }
          />
        </>
      )}
    </div>
  );
}

export default App;
