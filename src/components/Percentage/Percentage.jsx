import './Percentage.css';
const Percentage = ({ title, percent }) => {
  return (
    <div className="percentagebox">
      <div className="head">
        <h1>{title}</h1>
        <h3>{percent}%</h3>
      </div>
      <div className="bar">
        <div className="progress" style={{ width: `${percent}%` }}></div>
      </div>
    </div>
  );
};

export default Percentage;
