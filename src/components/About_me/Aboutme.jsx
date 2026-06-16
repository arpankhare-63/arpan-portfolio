// import { AiOutlineTeam } from "react-icons/ai";
import { FaAndroid, FaCode, FaDatabase } from "react-icons/fa6";
import { LuBrainCircuit } from "react-icons/lu";
import pp2 from '../../assets/icon/Pphoto.png';
import Box from '../Box/Box';
import Heading from '../Heading/Heading';
import './Aboutme.css';

function Aboutme() {
  return (
    <div id="About_me">
      <div className="container aboutme">
        <Heading
  heading="About Me"
  para="Computer Science graduate with expertise in web development and a growing passion for data analytics, business intelligence, and data-driven decision making."
/>
        
        <div className="middle">
         <div className="left">
  <p>
    I'm a passionate Full Stack Developer and aspiring Data Analyst with a
    background in Computer Science. My journey started with web development,
    where I built responsive and user-friendly applications using the MERN
    stack, helping me develop strong problem-solving and software engineering
    skills.
  </p>

  <br />

  <p>
    Over time, I developed a strong interest in data analytics and business
    intelligence. Today, I work with technologies like SQL, Power BI, Excel,
    Python, and Tableau to transform raw data into meaningful insights while
    continuing to enhance my web development expertise. I enjoy combining
    technical knowledge with analytical thinking to create solutions that
    deliver real business value.
  </p>
</div>
          <div className="right">
            <img src={pp2} alt="Arpan Khare profile" />
          </div>
        </div>

        <div className="bottom base-blue">
          <Box icon={FaCode} title="Full Stack Developer" description="Building scalable web applications with Html,CSS,JS,React, Node.js, MongoDB etc." />
          <Box icon={FaDatabase} title="Data Analyst" description="Transforming raw data into actionable insights using Python and SQL." />
          <Box icon={LuBrainCircuit} title="Machine Learning Enthusiast" description="Exploring AI algorithms to solve real-world problems." />
          <Box icon={FaAndroid } title="Android Devloper " description="Building Android App using  'Java+XML' and firebase" />
        </div>
      </div>
    </div>
  )
}

export default Aboutme;
