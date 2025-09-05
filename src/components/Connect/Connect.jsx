import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoCallOutline, IoLocation } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import ScrollToTop from "react-scroll-to-top";
import Heading from "../Heading/Heading";

import "./Connect.css";

const Connect = () => {
  const [status, setStatus] = useState(null);
  const [showButton, setShowButton] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus("loading");

    const formData = new FormData(event.target);
    formData.append("access_key", "02ea5f34-0d7a-4ee4-a74d-cc49aec1d516");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        event.target.reset();
      } else {
        setStatus("error");
        console.error("API Error:", data);
      }
    } catch (err) {
      setStatus("error");
      console.error("Network Error:", err);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const connectDiv = document.querySelector(".connect");
      if (!connectDiv) return;

      const connectBottom = connectDiv.getBoundingClientRect().bottom;
      const windowHeight = window.innerHeight;

      setShowButton(connectBottom < windowHeight + 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="Contact">
      <Heading
        heading="Connect with Me"
        para="Ready to bring your next project to life? Let's discuss how we can create something amazing together."
      />
      <div className="connect">
        <div className="connect-form">
          <h3>Send Message</h3>
          <p>Fill out the form below and I will get back to you within 24 hours.</p>

          <form onSubmit={onSubmit}>
            <div className="form-group">
              <div className="hname">
                <h5>First Name</h5>
                <input type="text" name="first_name" placeholder="Arpan" required />
              </div>
              <div className="hname">
                <h5>Last Name</h5>
                <input type="text" name="last_name" placeholder="Khare" required />
              </div>
            </div>

            <div className="hname">
              <h5>Email</h5>
              <input type="email" name="email" placeholder="your.email@example.com" required />
            </div>

            <div className="hname">
              <h5>Subject</h5>
              <input type="text" name="subject" placeholder="Project Discussion" required />
            </div>

            <div className="hname">
              <h5>Message</h5>
              <textarea
                name="message"
                placeholder="Tell me about your project or inquiry"
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" disabled={status === "loading"}>
              {status === "loading" ? "Sending..." : "Submit Form"}
            </button>

            {status === "success" && (
              <p className="success-msg">✅ Your message has been sent successfully!</p>
            )}
            {status === "error" && (
              <p className="error-msg">❌ Oops! Something went wrong. Please try again.</p>
            )}
          </form>
        </div>

        <div className="connect-direct">
          <h3>Get In Touch</h3>
          <h5>
            Whether you're looking to build a new application, need help with data analysis, or
            want to discuss a potential collaboration, I'd love to hear from you.
          </h5>

          <div className="pbox">
            <div className="impicon">
              <IoIosMail />
            </div>
            <a href="mailto:kharearpan7777@gmail.com">
              <div className="info">
                <h5>Email</h5>
                <h6>kharearpan7777@gmail.com</h6>
              </div>
            </a>
          </div>

          <div className="pbox">
            <div className="impicon">
              <IoCallOutline />
            </div>
            <a href="tel:+916306462328">
              <div className="info">
                <h5>Phone</h5>
                <h6>Call Me :- 6306462328</h6>
              </div>
            </a>
          </div>

          <div className="pbox">
            <div className="impicon">
              <IoLocation />
            </div>
            <div className="info">
              <h5>Location</h5>
              <h6>C21 Gurunanak Pura Laxmi Nagar 110092</h6>
            </div>
          </div>

          <div className="pbox">
            <div className="impicon">
              <SlCalender />
            </div>
            <div className="info">
              <h5>Availability</h5>
              <h6>Available for freelance</h6>
            </div>
          </div>

          
           <div className="social-links cn">
            <p>Connect with me :- </p>
           
        
        <div className="hero-social-links">
          {/* github */}
          <a href="https://github.com/arpankhare-63" className="social-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/arpankharelinkidin2305/" className="social-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a href="mailto:kharearpan7777@gmail.com" className="social-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </a>
        </div>
       
       
       </div>
     {/* Back to Top Button */}
{showButton && (
  <ScrollToTop
    smooth
    component={
      <div className="totop">
        <FaArrowUp style={{ marginRight: "8px" }} /> Back to Top
      </div>
    }
  />
)}

     </div>
      </div>
    </div>
  );
};

export default Connect;
