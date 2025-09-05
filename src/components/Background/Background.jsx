import { FaGraduationCap } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineDateRange, MdWork } from "react-icons/md";
import Heading from '../Heading/Heading';

import './Background.css';
const Background = () => {
  return (
    <div className="cont" id="Experience">
<Heading heading="Education And experience"  para="My professional journey combining software development expertise with data analytics mastery."/>
<div className="partition">
    <div className="half ">
        <div className="edu purple">
            <span><FaGraduationCap /></span>
        <h1>Education</h1>
        </div>
        {/* Btech */}
        <div className="degrees clg">
            <h2>B.tech in CSE AIML</h2>
            <h4>AKTU</h4>
             <div className="chill">
        <p><MdOutlineDateRange />2023-2026 <IoLocationOutline /> Ajay Kumar Garg Engineering College Ghaziabad,UP</p>
        </div>
        </div>
        {/* Diploma */}
        <div className="degrees clg">
            <h2>Diploma in CSE</h2>
            <h4>BTEUP</h4>
             <div className="chill">
        <p><MdOutlineDateRange />2020-2023 <IoLocationOutline /> Government Polytechnic Unnao,UP</p>
        </div>
        </div>
        {/* 12th */}
        <div className="degrees clg">
            <h2>Intermediate</h2>
            <h4>Up. Board</h4>
             <div className="chill">
        <p><MdOutlineDateRange />2019 <IoLocationOutline /> KP College Pratapgarh,UP</p>
        </div>
        </div>
        {/* 10 */}
         <div className="degrees clg">
            <h2>HighSchool</h2>
            <h4>Up. Board</h4>
             <div className="chill">
        <p><MdOutlineDateRange />2017 <IoLocationOutline /> KP College Pratapgarh,UP</p>
        </div>
        </div>
        </div>
    <div className="half ">
        <div className="edu pink"><span><MdWork/></span><h1>Internship</h1></div>
 <div className="degrees ints">
            <h2>Techpile Technologies Pvt.Ltd Lucknow</h2>
            <h4>Completed a 2-month Android development program using Java,</h4>
             <div className="chill">
       <p>
    Gained hands-on experience in Android development using Java and developed 
    various applications such as Prattle. Additionally, worked on web development projects.
  </p>
        </div>
        </div>

         <div className="degrees ints">
            <h2>NoviTech R & D Pvt Ltd.</h2>
            <h4>Completed a 1-month Data Analyst program</h4>
             <div className="chill">
       <p>
   Gained hands-on experience in data analytics using Power BI, Excel, and Tableau to extract actionable insights from complex datasets. Developed and implemented machine learning and deep learning models in Python to solve real-world problems and support data-driven decision-making.
  </p>
        </div>
        </div>
        <div className="degrees learn">
            <h3>Continuous learning</h3>
            <h4>Always learning new technologies. Currently focused on DSA and Machine Learning.</h4>
             
        </div>
    </div>
</div>
    </div>
  )
}

export default Background