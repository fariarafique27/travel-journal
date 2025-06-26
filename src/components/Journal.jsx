import {motion} from "framer-motion";

export default function Journal(props){
    return(
        <>
     <div className="card m-5 w-50 mx-auto "   >
     <motion.div className="row g-0 "
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}>
    <div className="col-md-4  ">
      <img 
      src={props.img.src} className="img-fluid rounded-start" 
      alt={props.img.alt} 
      style={{height:"100%"}}
      ></img>
    </div>
    <div className="col-md-5 ">  
      <div className="card-body">
        <p className="card-title">{props.country}   <a href={props.googleMapsLink}>View on Google Map </a></p>
        <h2 className="card-title">{props.title}</h2>
        <h6 className="card-title">{props.dates}</h6>
        <p className="card-text">{props.text}</p>
        <p className="card-text"><small className="text-body-secondary"></small></p>
      </div>
    </div>
  
</motion.div>
     </div>


        </>
    );
}