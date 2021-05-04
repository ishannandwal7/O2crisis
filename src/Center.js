import './Center.css';
import About from './About';
import Typed from "react-typed";
function Center(){
    return(
        

      <div className="center-text">
        <h3 id ="heading_o2">O2 crisis</h3>
        <Typed
        className="typed-text"
        strings={["ishan nandwal"]}
        typeSpeed={80}
        />
          <p>student,developer</p>
          <a href="https://www.instagram.com/ishan_nandwal/" title="Instagram"> <i className="fa fa-instagram"></i> </a>
          <a href="https://github.com/ishannandwal7" title="github"> <i className="fa fa-github"></i> </a>
          <a href="https://www.linkedin.com/in/ishan-nandwal-a314011ba/" title="linkedin"> <i className="fa fa-linkedin"></i> </a>
          <a href="#" title="twitter"> <i className="fa fa-twitter"></i> </a>
          <a href="#" title="telegram"> <i className="fa fa-paper-plane"></i> </a>
          <a href="mailto:ishannandwal7@gmail.com" title="Email"> <i className="fa fa-envelope"></i></a>
      </div>
    
        
    );
}
export default Center; 