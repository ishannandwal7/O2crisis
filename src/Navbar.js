import './Navbar.css';

import './Aboutpage.css';
import Footer from './Footer';
import Typed from 'react-typed';

function Navbar() {
  
    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("mySidenav").style.display = "block";

         /*   document.getElementById("test").style.display="none";
        document.getElementById("main").style.marginLeft = "250px";*/
      
      }
      
      /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
      function closeNav() {
        document.getElementById("mySidenav").style.width= "0px";
        document.getElementById("mySidenav").style.display = "none";

        /*document.getElementById("main").style.marginLeft = "0";
        document.getElementById("test").style.display="block";*/
      
       
      }
      function hide(){
          document.getElementById('front').style.display="none";
      }
   

    return(
        <div>

        <div className="nav" id="nav1">
            
            <div className="nav-brand">
            <i  id="jio"className="fa fa-bars" onClick={openNav}></i>
                <p >O2 crisis</p>
            </div>
          
            <div className="nav-link">
                <a href="#">home</a>
                <a href="https://ishannandwal7.github.io/novelcoronalive.github.io/about.html"  >about</a>

            </div>
        </div>
        <div id="mySidenav" className="sidenav">
        <ul>
        <li>
<a href="#" className="closebtn" onClick={closeNav}>&times;</a>

            </li>
            <li>
          
        <a href="#">Home</a>
            </li>
            <li>
          
          <a href="https://ishannandwal7.github.io/novelcoronalive.github.io/">COVID dashboard</a>
              </li>
             <li>
        <a href="#">contact</a>
            </li>
            <li>
        <a href="https://ishannandwal7.github.io/novelcoronalive.github.io/about.html">about</a>
           </li>
        </ul>
       
      </div>
        </div>
    );
}
{/*
function Home() {
    return(
        <div>
            <Typed
           className="ishan_test"
           strings={["home ishan"]}
           typeSpeed={100}
           />
        </div>
    );
  }
  
  function About() {
    return <h2  className="ishan_test">About</h2>;
  }
  
  function Users() {
    return <h2  className="ishan_test">Users</h2>;
  }*/}
export default Navbar;