import Heading from '../Heading/Heading';
import Percent from '../Percentage/Percentage';
import './Skills.css';

const Skills = () => {
  return (
    <div id="Skills">
      <Heading
        heading="Skills & Expertise"
        para="A comprehensive toolkit of technologies and methodologies I use to bring ideas to life."
      />

      <div className="skills">
        <div className="row1">
          {/* Frontend */}
          <div className="col">
            <h2>Frontend Development</h2>
            <Percent title="HTML" percent={90} />
            <Percent title="CSS" percent={85} />
            <Percent title="JavaScript" percent={80} />
            <Percent title="React" percent={75} />
            <Percent title="Bootstrap" percent={70} />
            <Percent title="Android(Java)" percent={60} />
          </div>

          {/* Backend */}
          <div className="col">
            <h2>Backend Development</h2>
            <Percent title="Node.js" percent={90} />
            <Percent title="Express.js" percent={85} />
            <Percent title="MongoDB" percent={80} />
            <Percent title="SQL" percent={75} />
          </div>

          {/* Data Analysis & ML */}
          <div className="col">
            <h2>Data Analysis & ML</h2>
            <Percent title="Power BI" percent={85} />
            <Percent title="Tableau" percent={80} />
            <Percent title="SQL" percent={75} />
            <Percent title="Python" percent={70} />
            <Percent title="Machine Learning" percent={65} />
            <Percent title="Deep Learning" percent={60} />
          </div>

          {/* Tools */}
          <div className="col">
            <h2>Tools</h2>
            <Percent title="Git" percent={90} />
            <Percent title="GitHub" percent={85} />
            <Percent title="Postman" percent={75} />
            <Percent title="VS Code" percent={70} />
            <Percent title="Canva" percent={65} />
            <Percent title="MS Office" percent={60} />
            <Percent title="Netlify" percent={45} />
            <Percent title="Firebase" percent={40} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
