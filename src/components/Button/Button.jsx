import { Link } from "react-router-dom";
import "./Button.css";

const Button = ({ children, className, to, scroll, href }) => {
  // Case 1: Scroll to section on same page
  if (scroll) {
    return (
      <button
        className={`btn ${className}`}
        onClick={() =>
          document
            .getElementById(scroll)
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        {children}
      </button>
    );
  }

  // Case 2: Navigate to another route/page (internal routing)
  if (to) {
    return (
      <Link to={to} className={`btn ${className}`}>
        {children}
      </Link>
    );
  }

  // Case 3: External link (Google Drive, GitHub, LinkedIn, etc.)
  if (href) {
    return (
      <a
        href={href}
        className={`btn ${className}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  // Case 4: Normal button
  return <button className={`btn ${className}`}>{children}</button>;
};

export default Button;
