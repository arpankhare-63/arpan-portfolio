// import { AiOutlineTeam } from "react-icons/ai";
import { FaAndroid, FaCode, FaDatabase } from "react-icons/fa6";
import { LuBrainCircuit } from "react-icons/lu";
import pp2 from '../../assets/icon/pp2.jpg';
import Box from '../Box/Box';
import Heading from '../Heading/Heading';
import './Aboutme.css';

function Aboutme() {
  return (
    <div id="About_me">
      <div className="container aboutme">
        <Heading heading="About Me" para="Passionate technologist with 5+ years of experience in building scalable applications and deriving insights from complex datasets." />
        
        <div className="middle">
          <div className="left">
            <p>I'm a versatile full-stack developer and data analyst who thrives at the intersection of technology and business intelligence. My journey began with a Computer Science degree, but my real education came from building production systems that serve millions of users.</p>
            <br />
            <p>When I'm not coding, you'll find me exploring the latest in machine learning, contributing to open-source projects, or mentoring upcoming developers. I believe in the power of clean code and data-driven decisions to create meaningful impact.</p>
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
