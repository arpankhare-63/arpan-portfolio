import { useState } from "react";
import Button from "../Button/Button";
import "./Hero.css";

const Hero = () => {
  const [loading, setLoading] = useState(false);

  const handleRedirect = (url) => {
    setLoading(true);
    setTimeout(() => {
      window.open(url, "_blank"); // open in new tab
      setLoading(false);
    }, 1500); // show loader for 1.5s
  };

  return (
    <section className="hero-section">
      {loading && (
        <div className="loader-overlay">
          <div className="loader"></div>
        </div>
      )}
      
      <div className="hero-background">
        <div className="background-circle circle-1"></div>
        <div className="background-circle circle-2"></div>
      </div>
      
      <div className="hero-container">
        <div className="hero-title-container">
          <h1 className="hero-name">Arpan Khare</h1>
          <h2 className="hero-subtitle">Full Stack Developer & Data Analyst</h2>
        </div>

        <p className="hero-description">
          Transforming ideas into powerful digital solutions. I craft scalable
          web applications and extract meaningful insights from complex data to
          drive business growth
        </p>

        <div className="butn">
          <Button className="btn-blue cn" children="View My work" scroll="Projects" />
          <Button className="btn-dark cn" children="Download CV" href="https://drive.google.com/file/d/1MgGUC9SZxkCWKwlq5WJPK3sDg5ixqfzw/view?usp=sharing" />
        </div>

        {/* Social Links with loader */}
        <div className="hero-social-links">
          <button
            onClick={() => handleRedirect("https://github.com/arpankhare-63")}
            className="social-link"
          >
            {/* GitHub SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                 fill="none" stroke="currentColor" strokeWidth="2" 
                 strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5
                       c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5
                       .28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5
                       -2.64-.5-5.36-.5-8 0C6 2 5 2 5 2
                       c-.3 1.15-.3 2.35 0 3.5A5.403 5.403
                       0 0 0 4 9c0 3.5 3 5.5 6 5.5
                       -.39.49-.68 1.05-.85 1.65
                       -.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </button>

          <button
            onClick={() =>
              handleRedirect("https://www.linkedin.com/in/arpankharelinkidin2305/")
            }
            className="social-link"
          >
            {/* LinkedIn SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                 fill="none" stroke="currentColor" strokeWidth="2" 
                 strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7
                       a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7
                       h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </button>

          <a href="mailto:kharearpan7777@gmail.com" className="social-link">
           
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                 fill="none" stroke="currentColor" strokeWidth="2" 
                 strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 
                       0 0 1-2.06 0L2 7" />
            </svg>
          </a>
        </div>

        <div className="hero-scroll-indicator">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" 
               fill="none" stroke="currentColor" strokeWidth="2" 
               strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
