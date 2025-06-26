import {motion} from "framer-motion";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header(){
    return(     
<motion.nav 
    className="navbar navbar-expand-lg  bg-danger"
     initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
 >
  <div className="container-fluid justify-content-center">
   <a className="navbar-brand text-white " >My Travel journal </a>
  </div>
</motion.nav>
     
    );
}