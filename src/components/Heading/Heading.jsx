import './Heading.css';
const Heading = ({heading,para}) => {
  return (
    <div>
         <div className="ske">
  <h1 className="low-csr" >{heading}</h1>
  <p >{para}</p>
</div>
    </div>
  )
}

export default Heading