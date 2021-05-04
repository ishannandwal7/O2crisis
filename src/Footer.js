import './Footer.css';
function Footer(){
    return(
        <div className="foott">
        <div className="leftt">
            <h2>contact me</h2><br/>
          
                <p id="maill"> Email :<a href="mailto:ishannandwal7@gmail.com">Here</a></p>
                <p> instagram:<a href="https://www.instagram.com/ishan_nandwal/">here</a></p>
                <p> linked In:<a href="https://www.linkedin.com/in/ishan-nandwal-a314011ba/">here</a></p>

          
        </div>
        <div className="rightt">
            <h2>site map</h2><br/>
            
                <p><a href="https://ishannandwal7.github.io/novelcoronalive.github.io/about.html#">ABOUT ME</a></p>
                <p><a href="https://ishannandwal7.github.io/novelcoronalive.github.io/">COVID DASHBOARD</a></p>
                <p><a href="#">HOME</a></p>
                <p>emergency contact number:<a href="#">9354899158<br/>9899136618</a> </p>
          
        </div>
        <div className="copyright">
            <p>© 2021 ishan nandwal ,
APPROVED by 'aiigma'

</p>
        </div>
    </div>
    );
}
export default Footer;