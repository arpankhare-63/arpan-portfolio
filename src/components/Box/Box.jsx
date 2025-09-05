import "./Box.css";
const Box = ({icon, title,description}) => {
  const Icon = icon;
  return (
   <div className="box">
    <div className="icon">
      <Icon/>
      </div>
    <h3>{title}</h3>
    <p>{description}</p>
   </div>
  );
};

export default Box;