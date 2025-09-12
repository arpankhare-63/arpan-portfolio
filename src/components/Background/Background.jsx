import { FaGraduationCap } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineDateRange, MdWork } from "react-icons/md";
import Heading from '../Heading/Heading';
import './Background.css';

const Degree = ({ title, board, date, location }) => (
  <div className="degrees clg">
    <h2>{title}</h2>
    <h4>{board}</h4>
    <div className="chill">
      <p><MdOutlineDateRange /> <time>{date}</time> <IoLocationOutline /> {location}</p>
    </div>
  </div>
);

const Internship = ({ company, program, description }) => (
  <div className="degrees ints">
    <h2>{company}</h2>
    <h4>{program}</h4>
    <div className="chill">
      <p>{description}</p>
    </div>
  </div>
);

const Background = () => {
  return (
    <div className="cont" id="Experience">
      <Heading 
        heading="Education and Experience"  
        para="My professional journey combining software development expertise with data analytics mastery."
      />

      <div className="partition">
        {/* Education Column */}
        <div className="half">
          <div className="edu purple">
            <span><FaGraduationCap /></span>
            <h1>Education</h1>
          </div>

          <Degree 
            title="B.Tech in CSE AIML" 
            board="AKTU" 
            date="2023-2026" 
            location="Ajay Kumar Garg Engineering College, Ghaziabad, UP" 
          />
          <Degree 
            title="Diploma in CSE" 
            board="BTEUP" 
            date="2020-2023" 
            location="Government Polytechnic Unnao, UP" 
          />
          <Degree 
            title="Intermediate" 
            board="UP Board" 
            date="2019" 
            location="KP College Pratapgarh, UP" 
          />
          <Degree 
            title="High School" 
            board="UP Board" 
            date="2017" 
            location="KP College Pratapgarh, UP" 
          />
        </div>

        {/* Internship Column */}
        <div className="half">
          <div className="edu pink">
            <span><MdWork /></span>
            <h1>Internship</h1>
          </div>

          <Internship 
            company="Techpile Technologies Pvt. Ltd, Lucknow" 
            program="2-month Android development program using Java" 
            description="Gained hands-on experience in Android development using Java and developed various applications such as Prattle. Additionally, worked on web development projects."
          />
          <Internship 
            company="NoviTech R & D Pvt Ltd." 
            program="1-month Data Analyst program" 
            description="Gained hands-on experience in data analytics using Power BI, Excel, and Tableau to extract actionable insights from complex datasets. Developed and implemented machine learning and deep learning models in Python to solve real-world problems and support data-driven decision-making."
          />

          <div className="degrees learn">
            <h3>Continuous Learning</h3>
            <h4>Always learning new technologies. Currently focused on DSA and Machine Learning.</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Background;
