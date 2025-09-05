import Heading from '../Heading/Heading';
import Percent from '../Percentage/Percentage';
import './Skills.css';
const Skills = () => {
  return (
    <div id='Skills'>
        <Heading heading="Skills & Expertise" para="A comprehensive toolkit of technologies and methodologies I use to bring ideas to life." />
         
<div className="skills">
<div className="row1">
   <div className="col"><h2>Frontend Devlopment</h2>
    <Percent  title="HTML" percent={90}/>
    <Percent percent={85} title="CSS" />
    <Percent percent={80} title="JavaScript" />
    <Percent percent={75} title="React" />
    <Percent percent={70} title="Bootstrap" />
    <Percent percent={60} title="Android(Java)" />
    
   </div>
   <div className="col"><h2>Backend Devlopment</h2>
   <Percent  title="Node.js" percent={90}/>
    <Percent percent={85} title="Express.js" />
    <Percent percent={80} title="MongoDb" />
    <Percent percent={75} title="Sql" />
    {/* <Percent percent={70} title="Bootstrap" /> */}
    </div>
   <div className="col"><h2>Data Analysis & ML</h2>
    <Percent percent={85} title="Power BI" />
    <Percent percent={80} title="Tableau" />
    <Percent percent={75} title="Sql" />
    <Percent percent={70} title="Python" />
    <Percent percent={65} title="Machine Learning" />
    <Percent percent={60} title="Deep Learning" />
   
   </div>
   <div className="col"><h2>Tools</h2>
    <Percent percent={90} title="Git" />
    <Percent percent={85} title="GitHub" />
    {/* <Percent percent={80} title="Figma" /> */}
    <Percent percent={75} title="Postman" />
    <Percent percent={70} title="Visual Studio Code" />
    <Percent percent={65} title="Canva" />
    <Percent percent={60} title="Microsoft Office" />
    {/* <Percent percent={55} title="Google Cloud Platform" /> */}
    <Percent percent={45} title="Netlify" />
    <Percent percent={40} title="Firebase" />
    </div>
</div>

</div>

    </div>
  )
}

export default Skills