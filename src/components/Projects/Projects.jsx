import { FiGithub } from "react-icons/fi";
import Picture2 from '../../assets/icon/Blinkit Analysis.png';
import Picture1 from '../../assets/icon/Picture1.jpg';
import Button from '../Button/Button';
import Heading from '../Heading/Heading';
import './Project.css';
const Projects = () => {
  return (
    <div id="Projects">
        <Heading heading="Featured Projects" para="A showcase of my latest work spanning full-stack development and data analytics."/>
        <div className="projs">
            <div className="proj">
                  <div className="imgp">
                        <img src={Picture1}/>
                        </div>
                  <div className="infop">
                         <h2>Prattle</h2>
                                     <h4>An App for guftgu</h4>
                                     <div className="probtn">
       <p className='prb'>Java</p>
       <p className='prb'>XML</p>
       <p className='prb'>Firebase</p>
       <p className='prb'>APIs</p>
        </div>
        <div className="probtn">
        <Button className="btn-blue special" href="https://github.com/arpankhare-63/Virtual-Assistant"><FiGithub/> code</Button>
        <Button className="btn-green special" href="https://arpankhare-63.github.io/Virtual-Assistant/">🔗Live</Button>
</div> 
                  </div>
            </div>
            <div className="proj">
                  <div className="imgp">
                        <img src={Picture2}/>
                  </div>
                  <div className="infop">
                                     <h2> Blinkit Sales Dashboard</h2>
                                     <h4>Detail Visualised report</h4>
      <div className="probtn">
       <p className='prb'>Power Bi</p>
       <p className='prb'>Excel</p>
       <p className='prb'>Icons</p>
      
        </div>
        <div className="probtn">
        <Button className="btn-blue special" href="https://github.com/arpankhare-63/Blinkit-Data-Analysis "><FiGithub/> code</Button>
        <Button className="btn-green special" href="https://arpankhare-63.github.io/Blinkit-Data-Analysis ">
  🔗 Live
</Button></div> 
                  </div>
            </div>
        </div>
<div className="bottom base">

    {/* Projets */}
     <div className="pro ints">
            <h2>Virtual Assistant</h2>
            <h5>A browser-based AI-like assistant that listens and talks using JavaScript Speech APIs 🎤🤖.</h5>
             <div className="probtn">
       <p className='prb'>HTML</p>
       <p className='prb'>CSS</p>
       <p className='prb'>JS</p>
       <p className='prb'>Web Speech Api</p>
        </div>
 <div className="probtn">
        <Button className="btn-blue special" href="https://github.com/arpankhare-63/Virtual-Assistant"><FiGithub/> code</Button>
        <Button className="btn-green special" href="https://arpankhare-63.github.io/Virtual-Assistant/">
  🔗 Live
</Button></div>        </div>
{/* 2nd */}
         <div className="pro ints">
            <h2>Simon Say Game</h2>
            <h5>🧠 “A fun browser game that trains focus and recall.”</h5>
             <div className="probtn">
       <p className='prb'>HTML</p>
       <p className='prb'>CSS</p>
       <p className='prb'>JS</p>
       <p className='prb'>Game logic</p>
       <p className='prb'>DOM Manipulation</p>
       <p className='prb'>Memory game</p>
        </div>
        <div className="probtn">
        <Button className="btn-blue special" href="https://github.com/arpankhare-63/Virtual-Assistant"><FiGithub/> code</Button>
        <Button className="btn-green special" href="https://arpankhare-63.github.io/Taskly/">
  🔗 Live
</Button></div>
        </div>

         <div className="pro ints">
            <h2>BodhiAhaar</h2>
            <h5>A dietician website built with React.js that focuses on mindful eating and personalized nutrition.</h5>
             <div className="probtn">
       <p className='prb'>React</p>
       <p className='prb'>CSS</p>
       <p className='prb'>JS</p>
       <p className='prb'>Form Api</p>
        </div>
         <div className="probtn">
        <Button className="btn-blue special" href="https://github.com/arpankhare-63/Virtual-Assistant"><FiGithub/> code</Button>
        <Button className="btn-green special" href="https://arpankhare-63.github.io/Taskly/">
  🔗 Live
</Button></div>
        </div>

  <div className="pro ints">
            <h2>SkyCast</h2>
            <h5>SkyCast provides real-time weather, forecasts and local time for every city, with interactive visuals and easy-to-read data for your day-to-day planning. </h5>
                 <div className="probtn">
       <p className='prb'>HTML</p>
       <p className='prb'>CSS</p>
       <p className='prb'>JS</p>
       <p className='prb'>Weather Api</p>
       <p className='prb'>Date and Time Api</p>
        </div>
         <div className="probtn">
        <Button className="btn-blue special" href="https://github.com/arpankhare-63/SkyCast"><FiGithub/> code</Button>
        <Button className="btn-green special" href="https://arpankhare-63.github.io/SkyCast/">
  🔗 Live
</Button></div>
        </div>


         <div className="pro ints">
            <h2>Portfolio</h2>
            <h5>Designed and developed a personal portfolio website to showcase projects and skills.</h5>
             <div className="probtn">
       <p className='prb'>HTML</p>
       <p className='prb'>CSS</p>
       <p className='prb'>JS</p>
       <p className='prb'>Web Speech Api</p>
        </div>
        <div className="probtn">
        <Button className="btn-blue special" href="https://github.com/arpankhare-63/Portfolio"><FiGithub/> code</Button>
        <Button className="btn-green special" href="https://arpankhare-63.github.io/Portfolio/">
  🔗 Live
</Button></div>
        </div>
        

         <div className="pro ints">
            <h2>Taskly</h2>
            <h5>A website that can give you acess to your notes and todo from anywhere </h5>
             <div className="probtn">
       <p className='prb'>HTML</p>
       <p className='prb'>CSS</p>
       <p className='prb'>JS</p>

        </div>
         <div className="probtn">
        <Button className="btn-blue special" href="https://github.com/arpankhare-63/Taskly"><FiGithub/> code</Button>
        <Button className="btn-green special" href="https://arpankhare-63.github.io/Taskly/">
  🔗 Live
</Button></div>
        </div>

       

         <div className="pro ints">
            <h2>To Do APP</h2>
            <h5>📝 Add, delete, and manage your daily goals easily.</h5>
             <div className="probtn">
       <p className='prb'>HTML</p>
       <p className='prb'>CSS</p>
       <p className='prb'>JS</p>
       
        </div>
        <div className="probtn">
        <Button className="btn-blue special" href="https://github.com/arpankhare-63/Taskly"><FiGithub/> code</Button>
        <Button className="btn-green special" href="https://arpankhare-63.github.io/Taskly/">
  🔗 Live
</Button></div>
        </div>


        

        
</div>
    </div>
  )
}

export default Projects