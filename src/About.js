import './About.css';
import Timeline from './Timeline';
import Footer from './Footer';
import React from "react";
import './Timeline.css';
import $ from 'jquery';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/country-report-iso-based/India/ind",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "cbc09da551mshabef0758e18b536p12f19cjsned97db08a990",
		"x-rapidapi-host": "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
//	var y=JSON.stringify(response);
//	$('#test').empty();
var act=response[0].ActiveCases;
var fatality_rate=response[0].Case_Fatality_Rate;
var infection_risk=response[0].Infection_Risk;
var totaltest=response[0].TotalTests;

var conf=response[0].TotalCases;
var dea=response[0].TotalDeaths;
var rec=response[0].TotalRecovered;
var new_conf=response[0].NewCases;
var new_dea=response[0].NewDeaths;
var new_rec=response[0].NewRecovered;

$('#active').empty();
$('#active').append(act);
$('#confirm').empty();
$('#confirm').append(conf);$('#decese').empty();
$('#decese').append(dea);
$('#nc').empty();
$('#nc').append(new_conf);$('#nr').empty();
$('#nd').append(new_dea);$('#nr').empty();
$('#nr').append(new_rec);
$('#tt').empty();
$('#tt').append(totaltest);$('#ir').empty();
$('#ir').append(infection_risk);$('#fr').empty();
$('#fr').append(fatality_rate);
});

function About(){
    return(
        

        <div className="tr">
            <div className="ab">
              

         <h2>COVID Current statistics (INDIA)</h2>
		 </div>

   <table>
       <tr>
           <td id="confirm">
               1652
           </td>
           <td id="decese"> 1652</td>
           <td id="active">1652</td>

       </tr>
       <tr id="tex">
           <td > 
               confirmed
           </td>
           <td >descesed</td>
           <td >active</td>
          


       </tr>
       <tr>
           <td id="nc">
               1652
           </td>
           <td id="nd"> 1652</td>
           <td id="nr">1652</td>

       </tr>
       <tr id="tex" >
           <td > 
              new confirmed
           </td>
           <td >new descesed</td>
           <td >new recovered</td>
          


       </tr>
       <tr>
           <td id="tt">
               1652
           </td>
           <td id="ir">1652</td>
           <td id="fr">  1652</td>

       </tr>
       <tr id="tex" >
           <td > 
               total tests
           </td>
           <td >infection risk</td>
           <td >fatality rate</td>
          


       </tr>
   </table>
        
            <div className="sec">
           
                <h1><b>oxygen refillers and manufacturers</b></h1>
				
               
                
            </div>
            <div id="region">
               { /*<Timeline/>*/}
			   <p id="slct">select the region/state </p>
               <Router>
      <div>
        <ul>
          
          <li>
            <Link to="/gujrat">gujrat</Link>
          </li>
          <li>
            <Link to="/goa">goa</Link>
          </li>
          <li>
            <Link to="/northindia">north India( DELHI / NCR / UTTAR PRADESH / HIMACHAL PRADESH/ HARYANA/
PUNJAB/ UTTARAKHAND/ HARYANA/MADYAPRADESH)</Link>
          </li>
		  <li>
            <Link to="/east_northeast">east and north east  (ASSAM/ODISHA/WEST BENGAL/ CHHATISHGARH / BIHAR)</Link>
          </li>
		  <li>
            <Link to="/telangana_andra">telangana andra pradesh</Link>
          </li>
		  <li>
            <Link to="/tamilnadu">Tamil nadu</Link>
          </li>  <li>
            <Link to="/rajasthan">rajasthan</Link>
          </li>
		  <li>
            <Link to="/maharashtra">maharashtra</Link>
          </li>
		  <li>
            <Link to="/kerala">kerala</Link>
          </li>
		  <li>
            <Link to="/karnataka">karnataka</Link>
          </li>
		  <li>
            <Link to="/jammu">jammu and kashmir</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/gujrat">
            <Gujrat />
          </Route>
          <Route path="/goa">
            <Goa />
          </Route>
		  <Route path="/northindia">
            <North_india />
          </Route>
		  <Route path="/east_northeast">
            <East_norteast />
          </Route>
		  <Route path="/telangana_andra">
            <Telangana_ap />
          </Route>
		  <Route path="/tamilnadu">
            <Tamilnadu />
          </Route>
		  <Route path="/rajasthan">
            <Rajasthan />
          </Route>
		  <Route path="/maharashtra">
            <Maharastra />
          </Route>
		  <Route path="/kerala">
            <Kerala />
          </Route>
		  <Route path="/karnataka">
            <Karnataka />
          </Route>
		  <Route path="/jammu">
            <Jammukashmir />
          </Route>
         
        </Switch>
      </div>
    </Router>
	<div >
     <div>
		 <h1 id="cap"><b>oxygen manufacturing capacity district wise(per day)</b></h1>
	 </div>
	 <table id="info">
		 <tr>
			 <td>
				 north east
			 </td>
			 <td>
				 all including have the capacity to fill 700 number of gaseous cylinder each of 46.7 li
			 </td>

		 </tr>
		 <tr>
			 <td>
				 west Bengal
			 </td>
			 <td>
264MT (metric tonnes)
			 </td>

		 </tr>
		 <tr>
			 <td>
			uttar pradesh
			 </td>
			 <td>
				
				184 MT (metric tonnes)

			 </td>

		 </tr> <tr>
			 <td>
				
				uttrakhand

			 </td>
			 <td>
				
				180 MT(maga tons)

			 </td>

		 </tr> <tr>
			 <td>
				
			pondicherry 

			 </td>
			 <td>
				
			84 MT (metric tonnes)


			 </td>

		 </tr> <tr>
			 <td>
				
				tamil nadu
			 </td>
			 <td>
				
				249 MT (metric tonnes)

			 </td>

		 </tr> <tr>
			 <td>
			telangana
			 </td>
			 <td>
				
				60 MT (metric tonnes)


			 </td>

		 </tr> <tr>
			 <td>
				
			rajasthan

			 </td>
			 <td>
				
			120 MT (metric tonnes)


			 </td>

		 </tr> <tr>
			 <td>
				
			orissa
			 </td>
			 <td>
				
			340 MT (metric tonnes)

			 </td>

		 </tr> <tr>
			 <td>
				
			Maharashtra

			 </td>
			 <td>
				
			991 MT (metric tonnes)


			 </td>

		 </tr> <tr>
			 <td>
				
			karnataka

			 </td>
			 <td>
				
				275 MT (metric tonnes)


			 </td>

		 </tr> <tr>
			 <td>
				kerala
			 </td>
			 <td>
				
				298 MT (metric tonnes)


			 </td>

		 </tr> <tr>
			 <td>
				
			jharkhand

			 </td>
			 <td>
				
				434 MT (metric tonnes)


			 </td>

		 </tr> <tr>
			 <td>
				
			himachal pradesh

			 </td>
			 <td>
				
			120 MT (metric tonnes)


			 </td>

		 </tr> <tr>
			 <td>
				
			Haryana
			 </td>
			 <td>
				
				40 MT (metric tonnes)

			 </td>

		 </tr> <tr>
			 <td>
				
			gujrat

			 </td>
			 <td>
				
			488 MT (metric tonnes)

			 </td>

		 </tr> <tr>
			 <td>
				
			chattisgarh
			 </td>
			 <td>
				
				85 MT (metric tonnes)

			 </td>

		 </tr> 
	 </table>
      </div>
                <Footer/>
            </div>
           

        </div>
        
    );
}

  function Goa(){
    return(
      <div >
		  		  <h5><b>Goa</b></h5>

<section id="cd-timeline" className="cd-container">
		
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
			
			
				
				1 Scoop Industries 

				
				</h2>
				<p>

Sanjeev Naik <br/>9822123715<br/> Goa


				</p>
			
			</div> 
			
		</div> 
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
			
				2 Govind Poy Oxygen 
Limited 

				
				</h2>
				<p>


	Krishna D. Kamat<br/> 09822498500<br/>
09823738796 <br/>Salcete
					
				</p>
			
			</div> 
			
		</div> 	<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
			
			
				3 The Southern Gas 
Limited

				
				</h2>
				<p>


	 Gautam V. Pai Kakode <br/>07875443567 <br/>Margao

					
				</p>
				
			</div> 
			
		</div> 	</section> 
</div>
    );
  }
  function Jammukashmir(){
    return(
      <div >
		  		  <h5><b>Jammu and kashmir</b></h5>

<section id="cd-timeline" className="cd-container">
		
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

				
				1 Kashmir Gases 

				</h2>


				<p>Rahul Bansal<br/> 9419108884<br/> Samba, Jammu



				</p>
				
			</div> 
			
		</div> 
			<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

				

				2 Raj Gas Industries

				</h2>


				<p> Manu Rana<br/> 9419187356 <br/>Jammu



					
				</p>
				
			</div> 
			
		</div> 	<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

				
				3 JK Gases

				</h2>


				<p>
 Shafi <br/>9797938140<br/> Srinagar

					
				</p>
			
			</div> 
			
		</div> 	<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

				
				4 North End Enterprises 

				</h2>


				<p>
Altaf<br/> 7889849186 <br/>Srinagar


					
				</p>
			
			</div> 
			
		</div> </section> 
</div>
    );
  }
  function Karnataka(){
    return(
      <div >
		  		  <h5><b>karnataka</b></h5>

<section id="cd-timeline" className="cd-container">
		
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

				

				1 Amogh Gases Pvt Ltd 


				</h2>
				<p>
R Mohan Kumar <br/>9448483854 <br/>Bengaluru 



				</p>
			
			</div> 
			
		</div> 
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

				2 Amogh Gases Pvt Ltd 


				</h2>
				<p>
			R Mohan Kumar <br/>9448483854<br/> Tumkur





				</p>
			
			</div> 
			
		</div> <div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

				
				3 ASIAN OXYGEN


				</h2>
				<p>

 Shibu <br/>9440457488 <br/>Nellore




				</p>
			
			</div> 
			
		</div> <div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

			
				4 Belgaum Oxygen Private Limited


				</h2>
				<p>

 Venkatesh Patil <br/>9844053348<br/> Koppal

				</p>
			
			</div> 
			
		</div> <div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

				

				5 Belgaum Oxygen Private Limited 


				</h2>
				<p>
Venkatesh Patil<br/> 9844053348<br/> Belgaum


				</p>
			
			</div> 
			
		</div> <div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

				
				6 Bentley India


				</h2>
				<p>
 Arihant Ranka <br/>9886608550<br/> BIDADI


				</p>
			
			</div> 
			
		</div> <div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

				
				7 Bhuruka Gases Ltd.


				</h2>
				<p>

 SASHIDHARAN <br/>7760976505<br/>whitefield


				</p>
			
			</div> 
			
		</div> <div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

					
				8 Bhuruka Gases Pvt. 
Ltd. 

				</h2>
				<p>

Mahesh<br/> 7760976502<br/> Bangalore

				</p>
			
			</div> 
			
		</div> <div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

				
				9 Eureka Gases 

				</h2>
				<p>

Manjunath<br/> 9035588758<br/> 
9535509423 <br/>Bangalore



				</p>
			
			</div> 
			
		</div> <div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

				10 Gadag Oxygen 


				</h2>
				<p>
Prakash<br/> 9449829060<br/> Belgaum


				</p>
			
			</div> 
			
		</div> <div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

				
				11 Galaxy Air Products

				</h2>
				<p>

 R Tothumuthu<br/> 9448821347<br/> 
8867715015 <br/>Bangalore


				</p>
			
			</div> 
			
		</div> <div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

					

				12 Indhra Medical Gases


				</h2>
				<p>
 Dinesh Kumar <br/>9500173570 <br/>Kovalur, Nellore



				</p>
			
			</div> 
			
		</div> <div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

					

				13 Inox Air Products


				</h2>
				<p> Kiran Radu<br/> 9980099440<br/> Bangalore,


				</p>
			
			</div> 
			
		</div> <div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

					
				14 Kammath Ind Gas 


				</h2>
				<p>
Kamat <br/>9902191333 <br/>Shimoga



				</p>
			
			</div> 
			
		</div> <div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

				
				15 Karnad Gases

				</h2>
				<p>

 Uday Pai <br/>9989800119 <br/>Mangalore


				</p>
			
			</div> 
			
		</div> <div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

				
				16 Karnatak Industrial 
Gases Pvt. Ltd. 

				</h2>
				<p>
Benjamin<br/> 9844092022 <br/>Hubli


				</p>
			
			</div> 
			
		</div> <div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

					
				17 Kaveri Gas Products

				</h2>
				<p>

 D Rawther<br/>
8746828412<br/>
9442607065<br/>
8296151526<br/>
Mangalore
				</p>
			
			</div> 
			
		</div> <div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

				
				18 Kulkarni Oxygen


				</h2>
				<p>

 V. Kulkarni <br/>9481631655 <br/>Belgaum


				</p>
			
			</div> 
			
		</div> <div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

				19 Kulkarni Oxygen 
Gases 


				</h2>
				<p>

Vijay Kumar B Kulkarni <br/>9481631655<br/> 
9481631677 <br/>Bijapur
				</p>
			
			</div> 
			
		</div> <div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

				
				20 Kumar Oxygen Gases 


				</h2>
				<p>

Ravi Kumar<br/> 099490 45616<br/> Ananthapur



				</p>
			
			</div> 
			
		</div> <div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

				21 Lakshmi Cryogenics 
Pvt Ltd


				</h2>
				<p>

	shetty<br/>
9343565554 <br/>
7204342964 <br/>Mangalore

				</p>
			
			</div> 
			
		</div> <div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

					
				22 Lakshmi Gas


				</h2>
				<p>

 H D Madhu<br/> 9844075640<br/> Mangalore/hasssan



				</p>
			
			</div> 
			
		</div> <div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

				
				23 Linde India Ltd.


				</h2>
				<p>

 Anirban Sen<br/> 9831798987 <br/>Bangalore


				</p>
			
			</div> 
			
		</div> <div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

				
				24 M.S.P.L. Gases



				</h2>
				<p>

 Girish <br/>9900256810 <br/>Bellary




				</p>
			
			</div> 
			
		</div> <div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
				25 Malabar Oxygen 
Company Pvt Ltd 
				</h2>
				<p>

			Gautham Poy<br/>
0824-2407221<br/>
2406221/2400221<br/>
9480050141<br/>
Mangalore


				</p>
			
			</div> 
			
		</div> 
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
			
				26 Padaki Air Products
				</h2>
				<p> Venkatesh Padaki<br/> 9902855177<br/>mysore



				</p>
			
			</div> 
			
		</div> <div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
				27 Pai Industrial And 
Medical Gases
				</h2>
				<p>

			 Ravi Pai <br/>9845063166 <br/>
9152108947 <br/>Bangalore

				</p>
			
			</div> 
			
		</div> <div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
			
				28 Peenya Industrial
Gases Pvt Ltd
				</h2>
				<p>
 Prem Krishna <br/>9686668643<br/> Bangalore/Kerala

				</p>
			
			</div> 
			
		</div> <div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
			
				29 Praxair Pvt. Ltd.
				</h2>
				<p>
 R C Kaushik <br/>932454843 <br/>Bangalore



				</p>
			
			</div> 
			
		</div> <div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
			

				30 Southern Gas
				</h2>
				<p> S Pai<br/> 9845543677<br/> Bangalore


				</p>
			
			</div> 
			
		</div> <div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
				31 Spec & Cal Gases
Pvt Ltd
				</h2>
				<p>

	 K Manoharan<br/> 9769577885<br/> Bangalore

				</p>
			
			</div> 
			
		</div> <div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
				32 Sri indra Medical 
Gases
				</h2>
				<p>

	 Dinesh <br/>9500173570<br/> Nellore 


				</p>
			
			</div> 
			
		</div> 	</section> 
</div>
    );
  }
  function Kerala(){
    return(
      <div >
		  		  <h5><b>kerala</b></h5>

<section id="cd-timeline" className="cd-container">
		
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
					
				
				1 Arun Oxygen 


				</h2>
				<p>
Arun <br/>9847078045 <br/>Palakkad


				</p>
				
			</div> 
			
		</div> 
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
					
				
				2 Das Air Product 

				</h2>
				<p>
Pragit <br/>9847374747<br/> Calicut/mallapuram



				</p>
				
			</div> 
			
		</div> <div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
					
				3 Inox Air Products
Pvt Ltd 
				</h2>
				<p>

	Mani <br/>9677072337<br/> Palakkad


				</p>
				
			</div> 
			
		</div> <div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
					
				4 Mananchery Air
Product
				</h2>
				<p>

	 Unni <br/>9388472123<br/> Cochin


				</p>
				
			</div> 
			
		</div> <div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
					
				
				5 Nandanam Oxygen 
				</h2>
				<p>
 Akilesh<br/> 9947280695 <br/>Trichur




				</p>
				
			</div> 
			
		</div> <div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
					
					
				6 Narayana Gas 

				</h2>
				<p>
Sasi <br/>9895170349<br/> Cochin




				</p>
				
			</div> 
			
		</div> <div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
					
					
				7 Premier Gases

				</h2>
				<p>
 Dayanan <br/>9447243239<br/> Palakkad



				</p>
				
			</div> 
			
		</div> <div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
					
					
				8 Trichur Air Product

				</h2>
				<p>
 Venugopal Nair<br/> 9496739832 <br/>Trichur



				</p>
				
			</div> 
			
		</div> <div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
					
				
				9 Venkateswara 

				</h2>
				<p>
Senthil <br/>9443023076 <br/>Palakkad

				</p>
				
			</div> 
			
		</div> <div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
					
				
				10 Vigneswara Oxygen 

				</h2>
				<p>
Prasad<br/> 9496824218<br/> Cochin



				</p>
				
			</div> 
			
		</div> <div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
					
					
				11 Vigneswara Oxygen 
				</h2>
				<p>
Vishnu<br/> 8606635276<br/> Trichur




				</p>
				
			</div> 
			
		</div> <div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
					
				

				12 Manorama Oxygen 

				</h2>
				<p>Anthony Joseph<br/> 9895030269<br/> Cochin and Other 
PartS of Kerala

				</p>
				
			</div> 
			
		</div> 	</section> 
</div>
    );
  }
  function Maharastra(){
    return(
      <div >
		  		  <h5><b>maharashtra</b></h5>

<section id="cd-timeline" className="cd-container">
		
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

				1 Ahmednagar Gases 
Pvt Ltd
				</h2>
				<p>
					
	 Vilas Lodha<br/> 9028789783<br/> Ahmednagar
					
					</p>
			</div> 
			
		</div> 		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

					
				2 Balaji Air Product 

				</h2>
				<p>
				Ashish Jaju/ Pankaj Jaju<br/> 9370025610<br/>
8600828485 <br/>Ahmednagar
					</p>
			</div> 
			
		</div> 		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

				3 Bharat Commercial 
Centre

				</h2>
				<p>
					
	 Rao <br/>8600828485 <br/>Nashik
					
					</p>
			</div> 
			
		</div> 		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

				4 Nikhil Medico 

				</h2>
				<p>
			Anit Sathe <br/>9422749454
<br/>9822012384 <br/>Nashik
					</p>
			</div> 
			
		</div> 		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

				
				5 Pinnacle Industries 

				</h2>
				<p>
					Amol Jadhav
Varpe<br/>
9422246669<br/>
8983052777 <br/>Nashik
					
					</p>
			</div> 
			
		</div> 		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

				6 Ravindra Oxygens Pvt. 
Ltd.

				</h2>
				<p>
					
 Suned Shate<br/> 9860314400<br/> Nashik
					
					</p>
			</div> 
			
		</div> 		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

				
				7 Sharaddha Air Product

				</h2>
				<p> Dangerwal <br/>9422222875<br/> Ahmednagar

					</p>
			</div> 
			
		</div> 		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

				8 Sunny Industrial Gases 
Pvt. Ltd. 
				</h2>
				<p>
					
		Sunny/Siddharth <br/>9049809998<br/>
9373900523 <br/>Nashik
					</p>
			</div> 
			
		</div> 		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

				9 Linde India

				</h2>
				<p>
			 Shashi Rao<br/> 9892376554 <br/>Pune, Mumbai

					</p>
			</div> 
			
		</div> 		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

				10 Inox Air Products Pvt. 
Ltd.
				</h2>
				<p>
					
 Solapure <br/>9881640104 <br/>Chakan, Pune
					</p>
			</div> 
			
		</div> 		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
					
				11 Raigad Gas India Pvt. 
Ltd. 

				</h2>
				<p>

Vijay Damodare/
Sunil Gupta<br/>
9325025131 <br/>
9325025132 <br/>Chakan, Pune
					</p>
			</div> 
			
		</div> 		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

				12 Satramdas Air Products
				</h2>
				<p>
					
			 Pradip Punjabi<br/> 9820488641<br/> Rabale, Navi
					
					</p>
			</div> 
			
		</div> 		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

				13 Sandesh Gases 
				</h2>
				<p>
					Yogesh Sethia<br/> 9822947670<br/> Chakan, Pune

					</p>
			</div> 
			
		</div> 		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

					
				14 Kay Nitrogen 

				</h2>
				<p>Yogendra Chaudhary <br/>9881491680<br/> jejuri/ Satara/kolhapur

					</p>
			</div> 
			
		</div> 		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

				15 Kolhapur Oxygen
Pvt. Ltd. 

				</h2>
				<p>
					
	Rajendra Gadve <br/>9422045716<br/> 
9561252345 <br/>Kolhapur
					
					</p>
			</div> 
			
		</div> 		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

						
				16 Rukmani Metals and 
Gaseous Pvt. Ltd.
				</h2>
				<p>
			 Anant Bndal<br/> 9325212663 <br/>Nagpur
					</p>
			</div> 
			
		</div> 		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

					
				17 Shraddha Air products

				</h2>
				<p>
					 Prakash Dungarwal <br/>9422222875<br/> Ahmednagar
					
					</p>
			</div> 
			
		</div> 		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

				18 Ahmednagar industrial 
Gases 
				</h2>
				<p>
					
	Ramesh Lodha<br/> 9423160683 <br/>Ahmednagar
					</p>
			</div> 
			
		</div> 		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

				
					
				19 Gina Gases 

				</h2>
				<p>A. H. Contractor<br/> 9821342839<br/> Bhiwandi, Mumbai

					
					</p>
			</div> 
			
		</div> 		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

							
				20 Phoenix Industrial 
Gases Pvt Ltd 

				</h2>
				<p>
			Salim Rakhangi <br/>9930403747 <br/>Rabale, Navi 
Mumbai
					
					</p>
			</div> 
			
		</div> 		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

					
				21 Pinnacle gases 

				</h2>
				<p>
					Nilesh<br/> 8983052777<br/> Nashik

					</p>
			</div> 
			
		</div> 		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

				
				22 Nikhil medico 
				</h2>
				<p>
					Anil shete<br/> 9422749454<br/> Nashik

					
					</p>
			</div> 
			
		</div> 		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

					
				23 Bhartiya medical 

				</h2>
				<p>Mohan <br/>9373115161 <br/>Nagpur

					
					</p>
			</div> 
			
		</div> 		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

				
				24 Sagar Gases Pvt Ltd 

				</h2>
				<p>
					Manish Mittal<br/> 9764377999<br/> 
9225577999 <br/>Aurangabad
					
					</p>
			</div> 
			
		</div> 		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

					
				25 SR gases


				</h2>
				<p>
					 SatyenJethra/
Hitesh Jethra<br/>
9820985900<br/>
9029070742<br/> Wada
					</p>
			</div> 
			
		</div> 		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

					
				26 Balaji Air Product 

				</h2>
				<p>
					Sham Jaju <br/>9370025610<br/> Sangamner

					</p>
			</div> 
			
		</div> 		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

				27 Laxmi Gases

				</h2>
				<p> Ashish Jajo<br/> 9370025610<br/> Sinner

					</p>
			</div> 
			
		</div> 		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

					
				28 Praxair India Pvt Ltd


				</h2>
				<p>
					 N J Paulose <br/>7710004092 <br/>Pune and Mumbai

					</p>
			</div> 
			
		</div> 		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

					
				29 Essem Gases Pvt ltd

				</h2>
				<p> Sanjay Agrawal<br/> 9823088673<br/> Jalna

					
					</p>
			</div> 
			
		</div> 		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

				30 Arnichem Industries


				</h2>
				<p> Javed
Manoj Gaikwad
7776823823 <br/>
8484064940 <br/>Solapur
					
					</p>
			</div> 
			
		</div> 		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

					
				31 Mahalaxmi Gases

				</h2>
				<p> Chotia <br/>9108010367 <br/>Icchalkaranji

					</p>
			</div> 
			
		</div> 		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
				32 Bharat Industrial 
Gases 

				</h2>
				<p>
					
	Nitin Prabhu<br/> 9822458445<br/> Sangli
					</p>
			</div> 
			
		</div> 		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

				33 Bharat Distributers

				</h2>
				<p>
					 Umesh Kaboor<br/> 9850411738 <br/>Satara

					
					</p>
			</div> 
			
		</div> 		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
				34 Galaxy Industrial 
Gases 
				</h2>
				<p>
					
	Purohit <br/>9322988561<br/> Vasa
					
					</p>
			</div> 
			
		</div> 		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

				35 Speed oxygen


				</h2>
				<p>
					 Shailesh Thakur <br/>9923556483 <br/>Vasai

					</p>
			</div> 
			
		</div> 		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

					
					
				36 Hi Tech gases

				</h2>
				<p> Amit Lodha<br/> 9730345679<br/> Ahmednagar

					</p>
			</div> 
			
		</div> 		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

				37 Sunny Industrial Sales 
Pvt Ltd 

				</h2>
				<p>
					
	Sunny <br/>9049809998<br/> Nashik
					</p>
			</div> 
			
		</div> 		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

					
				38 Awadh Oxygen
				</h2>
				<p>
					 Manoj Giri <br/>82085 15092<br/> Tarapur

					
					</p>
			</div> 
			
		</div> 		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

				
				39 Harshita Gases Pvt Ltd 

				</h2>
				<p>Ashish Bhandari<br/> 9422775792<br/> Jalgaon

					
					</p>
			</div> 
			
		</div> 		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

				40 Aditya Air Products 
Pvt Ltd

				</h2>
				<p>
					
	 Ishaan Goel<br/> 9822720066<br/> Nagpur
					
					</p>
			</div> 
			
		</div> 		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

					
				41 Shivam Gases

				</h2>
				<p>
					 Narendra Agarwal<br/> 7507993999<br/>
7507991999 <br/>Jalgaon
					</p>
			</div> 
			
		</div> 		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

					p


				</h2>
				<p>
					
					n
					
					</p>
			</div> 
			
		</div> 		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

				
				42 Govinda Gases Pvt Ltd 

				</h2>
				<p>
					Saurabh Gindodia <br/>8275103509<br/>
7507699616<br/> Dhulia
					
					</p>
			</div> 
			
		</div> 		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

				43 Rukmani Metals and 
Gases India (I LTD.)

				</h2>
				<p>
					
			 R K Chopra<br/> 9922443055 <br/>Aurangabad
					
					</p>
			</div> 
			
		</div> 		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

				
				44 Shivam 

				</h2>
				<p>
					Manish Agrawal<br/> 9225577999<br/> Aurangabad

					
					</p>
			</div> 
			
		</div> 		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

				45 Surshil Gases 

				</h2>
				<p>
					Ajeet Jain <br/>9423782799 <br/>Aurangabad

					</p>
			</div> 
			
		</div> 		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
				46 Harshita Gases Pvt. 
Ltd.

				</h2>
				<p>
					
 Ashish Bhandari<br/> 9422775792 <br/>Jalgaon
					
					</p>
			</div> 
			
		</div> 		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

				47 Shivam Oxygen Pvt. 
Ltd.
				</h2>
				<p>
					
 Ashish Bansal <br/>7507993999<br/> 
9422223825 <br/>Jalgaon
					</p>
			</div> 
			
		</div> 		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

				
				48 Balaji Air Product

				</h2>
				<p>
					 Ashish Jaju <br/>9370025610 <br/>Ahmednagar

					
					</p>
			</div> 
			
		</div> 		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

				49 Shraddha Air Product

				</h2>
				<p>
					 Prakash Dungarwal <br/>9422222875<br/> Ahmednagar

					</p>
			</div> 
			
		</div> 		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

								
				50 Ahmednagar Gases 
Pvt. Ltd.

				</h2>
				<p>
	 Vilas Lodha<br/> 9028789783<br/> Ahmednagar
					
					</p>
			</div> 
			
		</div> 		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

				
				51 Pinnacle Industries

				</h2>
				<p>
					 Amol Jadhav<br/> 9422246669<br/> Nashik

					
					</p>
			</div> 
			
		</div> 		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

				52 Ravindra Oxygen
Pvt. Ltd.

				</h2>
				<p>
					
	 SumedShate <br/>9860314400 <br/>Nashik
					
					</p>
			</div> 
			
		</div> 		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
				53 Sunny Industrial Gases 
Pvt. Ltd. 

				</h2>
				<p>
					
		Siddharth <br/>9373900523<br/> Nashik
					</p>
			</div> 
			
		</div> 
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

					
				54 Nikhil Medico

				</h2>
				<p>
					 Anil Shate <br/>9422749454<br/> Nashik

					</p>
			</div> 
			
		</div> 		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

				55 Bharat Commercial 
Center

				</h2>
				<p>
					
	 Rao <br/>9422259099 <br/>Nashik
					</p>
			</div> 
			
		</div> 		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

				
				56 Shriram Agencies 

				</h2>
				<p>
					Anil Gindodiya<br/> 9422788259 <br/>Dhule

					</p>
			</div> 
			
		</div> 		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

				57 Shashi Machinery
& Agencies 
				</h2>
				<p>
					
		Sanjay Kore<br/> 9422295082 <br/>Beed
					
					</p>
			</div> 
			
		</div> 		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

					
				58 Hariom Gas Industries 

				</h2>
				<p>
					Bharat Gore <br/>9822548618<br/> Beed

					</p>
			</div> 
			
		</div> 		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

					
				59 Vikas Oxygen 

				</h2>
				<p>Jogdand <br/>9764558252<br/> Beed

					
					</p>
			</div> 
			
		</div> 		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

				
				60 Ganesh Medi Needs

				</h2>
				<p>
					 Sunil Bhartiya<br/> 9923045415<br/> Nanded

					</p>
			</div> 
			
		</div> 		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

				
					
				61 Nana Gas Industries


				</h2>
				<p> Jayesh Phatale <br/>9850065707<br/> Latur

					</p>
			</div> 
			
		</div> 		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

					
				62 MSPL
				</h2>
				<p>
				 Deshpande <br/>9881454649<br/> Sholapur

					</p>
			</div> 
			
		</div> 		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

				
			63 Gujarat General Store

				</h2>
			<pre>
             Papu seth <br/>
            9822072370<br/>
           Sholapur<br/>

			</pre>
			</div> 
			
		</div> 		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

				64 Taiyo Nippon Sanso 
India Pvt Ltd
				</h2>
				<p>
					
			 Gaurav Kishore <br/>9971404081 <br/>Pune
					
					</p>
			</div> 
			
		</div> 				<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

				
				65 Satram Gas Pvt Ltd

				</h2>
				<p>
					 Pradip Punjabi <br/>9820488641 <br/>Navi Mumbai

					
					</p>
			</div> 
			
		</div> 
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

				
					
				66 SSD Gases Pvt Ltd 
				</h2>
				<p>Amit Punjabi <br/>9320757537<br/> Navi Mumbai

					</p>
			</div> 
			
		</div> <div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

				
				67 Kolhapur Oxygem 


				</h2>
				<p>
					Gadve <br/>9422045716<br/> Kolhapur

					</p>
			</div> 
			
		</div> <div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

				
				68 Galaxy Oxygen


				</h2>
				<p>
					 Karan Purohit <br/>9322988561<br/> Maharashtra

					
					</p>
			</div> 
			
		</div> <div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

				69 Tripti gases

				</h2>
				<p>
			Ravi Pujari <br/>9819909946 <br/>Mumbai/Pune


					</p>
			</div> 
			
		</div> <div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

				70

Sahni Gases

				</h2>
				<p>
					
		 Gaurav
<br/>
8999242424 <br/>Pune/Mumbai
					</p>
			</div> 
			
		</div> <div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>

					
				71 Sadharam gas

				</h2>
				<p>
					
mohan bajaj<br/>
9860399529 <br/>Mumbai/Rabale
					
					</p>
			</div> 
			
		</div> <div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
		
				72 Dev patil gases

				</h2>
				<p>Anil patil<br/>
			 9372272282 <br/>Kolhapur
					
					</p>
			</div> 
			
		</div> 
		</section> 
</div>
    );
  }
  function Rajasthan(){
    return(
      <div >
		  		  <h5><b>rajasthan</b></h5>

<section id="cd-timeline" className="cd-container">
		
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
					

				1 Adarsh Gases &
Techno Industries

				</h2>
				<p>
shantilal jain
			<br/> 0294-491150 <br/>Udaipur


				</p>
				
			</div> 
			
		</div> 
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
					

				2 Ajmer Gases

				</h2>
				<p>

			shubhash bhatted <br/> 9214173658 <br/>Ajmer

				</p>
				
			</div> 
			
		</div> <div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
					

				3 Ankur Gases 

				</h2>
				<p>

			J H Kamboj <br/>9409102457<br/> Jaipur



				</p>
				
			</div> 
			
		</div> <div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
					

				4 Earnest Gases
Pvt. Ltd.
				</h2>
				<p>
		 S D Sethi <br/>9829043416<br/> Udaipur


				</p>
				
			</div> 
			
		</div> <div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
					
				5 Inox AP Ltd 

				</h2>
				<p>

			Vinod Singh <br/>9999162672<br/> Bhiwadi 



				</p>
				
			</div> 
			
		</div> <div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
					

					
				6 Shri Ram gas

				</h2>
				<p>
 Sandip Rathi <br/>9828931071<br/> Jodhpur


				</p>
				
			</div> 
			
		</div> <div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
					

				7 Thanwardas Chotelal 
				</h2>
				<p>

			Anil Bhai<br/> 9829025500 <br/>Jodhpur



				</p>
				
			</div> 
			
		</div> <div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
					

				8 INOX Air Products

				</h2>
				<p>

			 Abhishek Yadav <br/>9999244409 <br/>Bhiwadi, Alwar

				</p>
				
			</div> 
			
		</div> <div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
					
				9 Progressive Air Products

				</h2>
				<p>

			 Jhabar Mal <br/>9310597339<br/> Ringus, Sikar
				</p>
				
			</div> 
			
		</div> <div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
					

				10 Raashi Air Products
				</h2>
				<p>
 Prashant Atri <br/>7062544444<br/> Jaipur


				</p>
				
			</div> 
			
		</div> <div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
					

				11 Rajasthan Air Products


				</h2>
				<p>

		 Rajesh Aggrawal<br/> 9799885341<br/> Jaipur



				</p>
				
			</div> 
			
		</div> <div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
					

				12 Wilson Air Products 


				</h2>
				<p>

			Santosh Gupta<br/> 9829057251<br/> Jaipur/Kota



				</p>
				
			</div> 
			
		</div> <div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
					

				13 Guljag Gases Private 
Limited 

				</h2>
				<p>

		Umesh Dhoot <br/>09829807900<br/> Jodhpur

				</p>
				
			</div> 
			
		</div> <div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
					

				14 Shree Hari Gases Pvt. 
Ltd.

				</h2>
				<p>

	 Sushil Chand Agarwal<br/> 09829066757<br/> Jaipur
				</p>
				
			</div> 
			
		</div> 	</section> 
</div>
    );
  }
  function Tamilnadu(){
    return(
      <div >
		  		  <h5><b>tamil nadu</b></h5>

<section id="cd-timeline" className="cd-container">
		
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
					
				1 Adhiyaman Gases

				</h2>
				<p>

				 Babu <br/>9443232741<br/> Krishnagiti


				</p>
			</div> 
			
		</div> 
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
					
				2 Airpack Gases 

				</h2>
				<p>

				murali<br/> 9843484215 <br/>Kanchipuram 


				</p>
			</div> 
			
		</div> 
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
					
				3 Arasan Air Products

				</h2>
				<p>

				 S Anand Ganesh <br/>9842134090<br/> Tuticorin


				</p>
			</div> 
			
		</div>	<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
					
				4 Arasan Gas

				</h2>
				<p>

				 Saravanan <br/>9442574805 <br/>Madurai


				</p>
			</div> 
			
		</div>	<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
					
				5 Barath Oxygen

				</h2>
				<p>

				 Babu<br/> 9444003856
8778731935 <br/>Chennai

				</p>
			</div> 
			
		</div>	<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
					
				6 Chennai Oxygen

				</h2>
				<p>

				 Chandra Mohan<br/>
044- 26243715/ <br/>
26254272 / <br/>
26250764 <br/>
9962353535<br/>
Chennai<br/>

				</p>
			</div> 
			
		</div>	<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
					
				7 Covai Air Products 
				</h2>
				<p>

				Dileepan <br/>9442614587<br/> Coimbatore


				</p>
			</div> 
			
		</div>	<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
					
				8 Erode Air Products

				</h2>
				<p>

				 Ponnuswamy<br/> 9443394275<br/> Tuirrupur


				</p>
			</div> 
			
		</div>	<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
					
				9 Erode Air Products

				</h2>
				<p>

				 Ponnuswamy<br/> 9443394275<br/> Erode


				</p>
			</div> 
			
		</div>	<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
					
				10 Gas & Gas Agencies
				</h2>
				<p>

				 Pradeep 9
				<br/>841513300<br/> Chennai


				</p>
			</div> 
			
		</div>	<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
					
				11 General Gas

				</h2>
				<p>

				 Vigneshwar <br/>9488937569 <br/>Kanyakumari 


				</p>
			</div> 
			
		</div>	<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
					
				12 Hari Oxygen 
				</h2>
				<p>

				Saravanan<r/> 08500675999<br/> 
09885633855 <br/>Krishna

				</p>
			</div> 
			
		</div>	<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
					
				13 Kadavil Oxygen Gas 
Agencies 
				</h2>
				<p>

				Biju Mammen<br/>
9947027512 <br/>
9847894205 <br/>
9497374205<br/>
0479-2428433<br/>
Pathanamthitta<br/>

				</p>
			</div> 
			
		</div>	<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
					
				14 Kalyan gas
				</h2>
				<p>

				 Ravi Nachiapan<br/> 9443142426<br/> Coimbatore


				</p>
			</div> 
			
		</div>	<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
					
				15 Kovai Air product 
				</h2>
				<p>

				Dileepan<br/> 9442614587 <br/>Coimbatore


				</p>
			</div> 
			
		</div>	<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
					
				16 Krishna Agencies
				</h2>
				<p>

				 Manoharan.P.C<br/> 9447016161<br/>
0480-2806161 <br/>Thrissur

				</p>
			</div> 
			
		</div>	<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
					
				17 Murugan Gas Agency
				</h2>
				<p>

				 Gajapathy <br/>9443343109<br/> Dindugal


				</p>
			</div> 
			
		</div>	<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
					
				18 National Oxygen Limited
				</h2>
				<p>

				 Elumalai <br/>9944540293 <br/>Pondicherry


				</p>
			</div> 
			
		</div>	<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
					
				19 National Oxygen Ltd 

				</h2>
				<p>

.ParathiElamvazhidhi<br/> 9940082412<br/> Chennai


				</p>
			</div> 
			
		</div>	<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
					
				20 Ragavender Gas
Agencies
				</h2>
				<p>

 Nirmal <br/>9842391651 <br/>Salem

				</p>
			</div> 
			
		</div>	<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
					
				21 Rajee Gases
				</h2>
				<p>

				 Guna<br/> 9894045733<br/> Salem

				</p>
			</div> 
			
		</div>
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
					
				22 Seva Gases
				</h2>
				<p>

				 Alagappan <br/>9894020509 <br/>Coimbatore/trichy


				</p>
			</div> 
			
		</div>
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
					
				23 SICGIL SOL LTD
				</h2>
				<p>

				 Yoganandh<br/> 8754479833 <br/>Chennai / Trichy


				</p>
			</div> 
			
		</div><div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
					
				24 Sreekala Oxygen 
Company
				</h2>
				<p>

 Reshma <br/>9947280695<br/>
483-2742524 <br/>Malappuram

				</p>
			</div> 
			
		</div><div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
					
				25 Sri Balaji Enterprises
				</h2>
				<p>

				 P Mahi<br/> 9688610111<br/> Salem


				</p>
			</div> 
			
		</div><div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
					
				26 Sri Lakshmi Oxygen 

				</h2>
				<p>

				Senthil <br/>9442110005 <br/>Namakkal


				</p>
			</div> 
			
		</div><div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
					
				27 Sri Sharadha Parmeshwari Gases 
				</h2>
				<p>

				P Mahi <br/>9688610111<br/> Erode

				</p>
			</div> 
			
		</div><div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
					
				28 Sri Venkateswara 
Oxygen
				</h2>
				<p>

				 Nithyanand <br/>9443069292 <br/>Coimbatore'

				</p>
			</div> 
			
		</div><div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
					
				29 Star Surgicals
				</h2>
				<p>

				 Babu <br/>9443232741 <br/>Dharampri /
Krishnapuri

				</p>
			</div> 
			
		</div><div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
					
				30 T N Oxygen Pvt Ltd
				</h2>
				<p>

				 R Kannan<br/>
044-23740707<br/>
23743582<br/>
7299991134<br/>
9094001166<br/>
7299991135<br/>
Chennai

				</p>
			</div> 
			
		</div><div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
					
				31 Tamil Air Products Pvt 
Ltd 
				</h2>
				<p>

				R Kannan<br/> 9094001166 <br/>Chennai

				</p>
			</div> 
			
		</div><div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
					
				32 Vaideeswara Oxygen

				</h2>
				<p>

				 Ganesh<br/> 9345054900<br/> Trichy


				</p>
			</div> 
			
		</div><div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
					
					
				33 Vaideeswara oxygen 
Pvt Ltd

				</h2>
				<p>
 Ganesh <br/>6381732094<br/> Tiruchirappalli

				</p>
			</div> 
			
		</div><div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
					
					
				34 Vallal and Co

				</h2>
				<p>
 Vallal <br/>9942209229<br/> Theni


				</p>
			</div> 
			
		</div><div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
					
				35 Sri Venkateshwara 
Oxygen
				</h2>
				<p>

		 Nithyanantha <br/>9443969292 <br/>Coimbatore
				</p>
			</div> 
			
		</div><div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
					
				36 Vijay Kumar Gases
				</h2>
				<p>

				 Vijayalingam<br/> 9894202000<br/> Salem


				</p>
			</div> 
			
		</div><div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
					
				37 VN Medi Gases

				</h2>
				<p>

				 Vimal<br/> 9790942270<br/> Chennai


				</p>
			</div> 
			
		</div>	</section> 
</div>
    );
  }
  function Telangana_ap(){
    return(
      <div >
		  		  <h5><b>Telangana andhra pradesh </b></h5>

<section id="cd-timeline" className="cd-container">
		
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
				1 Oxyvision Medical 
Gases
				</h2>
				<p>
			
Md. Mujeeb Khan <br/>9391114386 <br/>Hyderabad

				</p>
			</div> 
			
		</div> 
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
				2 Ravindra Medical and 
Industrial Gases
				</h2>
				<p>
				
Siddardhareddy
Nacharam<br/>
8121666666 <br/>Hyderabad

				</p>
			</div> 
			
		</div>  
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
				4 Sri Krishna Godavari
				</h2>
				<p>
				 Venugopal Naidu<br/> 9666653907<br/> Tirupathi


				</p>
			</div> 
			
		</div>
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
				5 Srinidhi Air Products 
				</h2>
				<p>
			Lanaga Visweswara <br/>9866089555<br/> Hyderabad


				</p>
			</div> 
			
		</div> 
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
				6 Sri Sai Industrial Gases 
Pvt Ltd 
				</h2>
				<p>
			Sajja Pagadaiah<br/> 9885611633 <br/>Hyderabad

				</p>
			</div> 
			
		</div>
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
				7 Coromandal Gas
Company
				</h2>
				<p>
				
Mohan Krishna <br/>9394777070
<br/>9399914467<br/> Visakhapatnam

				</p>
			</div> 
			
		</div>   
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
				8 Vingas Industries
Pvt Ltd
				</h2>
				<p>
				 Sathyanarayana <br/>9849129996<br/> Visakhapatnam

				</p>
			</div> 
			
		</div> 
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
				9 Lifecare Medical
Gases
				</h2>
				<p>

				
N. D. Butcheswara Rao<br/> 09848023353 <br/>Vijayawada
				</p>
			</div> 
			
		</div> 
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
				10 Sasirekha Agencies
				</h2>
				<p>

				 K. Siva<br/> 09848365601<br/> Ongole

				</p>
			</div> 
			
		</div> 
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
				11 Ellenbarrie Industrial 
Gases Ltd
				</h2>
				<p>
					tapan bhattacharyya
				 <br/>9987005090<br/> Parwada, 
Viskhapatnam

				</p>
			</div> 
			
		</div>
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
				12 Ellenbarrie Industrial 
Gases Ltd
				</h2>
				<p>
					tapan bhattacharyya<br/>
				 9987005090<br/> Jadchelra
near Hyderabad

				</p>
			</div> 
			
		</div>  
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
				13 Sasirekha Agencies 
				</h2>
				<p>

				K. Siva<br/> 09848365601<br/> Ongole

				</p>
			</div> 
			
		</div> 	</section> 
</div>
    );
  }
  function East_norteast(){
    return(
      <div >
		  		  <h5><b>east india</b></h5>

<section id="cd-timeline" className="cd-container">
		
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
				1 Assam Air Products 
Pvt Ltd
				</h2>
				<p>
			 Vivek Zoarder<br/> 9707056937 <br/>Bongaigaon
				</p>
				
			</div> 
			
		</div> 
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
				2 Assam Air Products 
Pvt Ltd 
				</h2>
				<p>
				Anup Paul <br/>7636822606<br/> Sivsagar

				</p>
				
			</div> 
			
		</div> 
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
				3 Assam Air Products 
Pvt Ltd
				</h2>
				<p>
				 Ashim Mohanta<br/> 9706301778<br/> Silchar
				</p>
				
			</div> 
			
		</div> 
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
				4 Assam Air Products 
Pvt Ltd 

				</h2>
				<p>
				Immamul Hussain<br/> 9101346211<br/> North Lakhimpur
				</p>
				
			</div> 
			
		</div> 
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
				5 Assam Air Products 
Pvt Ltd

				</h2>
				<p>
				 Jibon Chandra Sarma<br/> 9864202125<br/> Saukuchi,
				</p>
				
			</div> 
			
		</div>
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
				6 Assam Air Products 
Pvt Ltd 
				</h2>
				<p>
				Mamud Rashid Ahmed<br/> 9435155535<br/>Beltola guwahati

				</p>
				
			</div> 
			
		</div>
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
				7 Assam Air Products 
Pvt Ltd 

				</h2>
				<p>
			Raju Hazarika<br/> 9957573976<br/> Samaguri,
				</p>
				
			</div> 
			
		</div> 
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
				8 Assam Air Products 
Pvt Ltd
				</h2>
				<p>
				 Ratul Saikia<br/> 8404096172<br/> Duliajan
				</p>
				
			</div> 
			
		</div>  
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
				9 BANSHI AIR GASES 
PVT. LTD

				</h2>
				<p>
			Gaurav <br/>0612-3207044<br/> Bihar
				</p>
				
			</div> 
			
		</div> 
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
				10 Meghalaya Oxygen 
Pvt Ltd.
				</h2>
				<p>
			
pravin jain/satish sharma/Gautam hazarika<br/>
9401010101<br/>
9435553142<br/>
9854165494<br/>
Meghalaya
				</p>
				
			</div> 
			
		</div>  
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
				11 Goyal MG Gases Pvt 
limited
				</h2>
				<p>
				 Shudhakar Jha <br/>9735317722 <br/>Durgapur -West 
				</p>
				
			</div> 
			
		</div> 
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
				12 Echo gases
				</h2>
				<p>
			 sukendu<br/> 9830059282<br/>kolkata

				</p>
				
			</div> 
			
		</div>
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
				13 Ellenbarrie Industrial 
Gases Ltd

				</h2>
				<p>
					tapan bhattacharyya
				<br/> 9987005090<br/> Kolkata, West 
				</p>
				
			</div> 
			
		</div>  
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
				14 Radhika Gases

				</h2>
				<p>
				 Tapan <br/>9831103377<br/>kolkata

				</p>
				
			</div> 
			
		</div>  	
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
				15 Pataliputra
Oxyzen
				</h2>
				<p>
				
Sandeep Kumar <br/>7903029067<br/> Bihar
				</p>
				
			</div> 
			
		</div> 
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
				16 Northeast Gases
Pvt. Ltd.
				</h2>
				<p>
				 Surendra Nath Dubey <br/>9435022463<br/> Dhaliong
				</p>
				
			</div> 
			
		</div> 
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
				17 Patliputra Industrial 
Gases Pvt Ltd 
				</h2>
				<p>Anand kumar shroff
			<br/>9334046080 <br/>Patna
				</p>
				
			</div> 
			
		</div> 
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
				18 Usha Air Products Ltd. 

				</h2>
				<p>
				H. N. Prasad <br/>09386094153<br></br> Patna

				</p>
				
			</div> 
			
		</div> 
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
				19 Lupin Gases Private 
Limited 
				</h2>
				<p>
			Kamal Kedia<br/> 09893600003 <br/>Raipur
				</p>
				
			</div> 
			
		</div> 
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
				20 Anand Industrial Gases Pvt.Ltd.
				</h2>
				<p>
				 J. Mahapatra <br/>09937000587<br/> Bhubaneswar
				</p>
				
			</div> 
			
		</div> 
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
				21 Paradeep Oxygen 
Private Limited
				</h2>
				<p>
			
Subhranshu Samantaray<br/>
09238445610<br/>cuttack
				</p>
				
			</div> 
			
		</div> 
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
				22 S N Gases
				</h2>
				<p>
				 Ajay Kumar Agarwal <br/>09861313680 <br/>Sambalpur Dist

				</p>
				
			</div> 
			
		</div> 
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
				23 M T C (India) Gases 
Pvt. Ltd.

				</h2>
				<p>
				 Narindrra H. Baiid <br/>09002120037 <br/>Siligur
				</p>
				
			</div> 
			
		</div> 
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
				24 Shankar Gas Industries Pvt. Ltd.
				</h2>
				<p>
				 G. S. Agarwala <br/>09434051222<br/> Kolkata
				</p>
				
			</div> 
			
		</div> 
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
				25 Super Gases & Appliances Pvt. Ltd. 
				</h2>
				<p>
				Mukesh Kakar<br/> 09002291842<br/> Kharagpur
				</p>
				
			</div> 
			
		</div>
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
				26 Paradeep Oxygen Pvt 
Ltd
				</h2>
				<p>
				 S D Nair
 <br/>
9238445615<br/>cuttack
				</p>
				
			</div> 
			
		</div>  
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
				27 BMA Liquid Air 
				</h2>
				<p>
				B.imti aier <br/>9436005525<br/>
Dimapur,
Nagaland
				</p>
				
			</div> 
			
		</div> 
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>
				28 Linde India Limited
				</h2>
				<p>
				 anirban sen <br/>9831798987<br/> Durgapur,
West Bengal
				</p>
				
			</div> 
			
		</div> 
		 	</section> 
</div>
    );
  }
  function North_india(){
    return(
      <div >
		  		  <h5><b>North india</b></h5>

<section id="cd-timeline" className="cd-container">
		
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
        
				<h2> 1 Aditya Gases</h2>
				<p>
        Abhishek<br/> 9999829226<br/> Panipat

        </p>
			</div> 
			
		</div> 
    <div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content">
				<h2>2 Agarwal gases</h2>
				<p>
         Agarwal<br/> 9359931390<br/> Meerut -U.P

        </p>
			</div> 
			
		</div> 
    <div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content"> 
				<h2>3 Aggrawal Gases</h2>
				<p>
         Vishal Aggrawal<br/> 9359931390<br/> Meerut


        </p>
			</div> 
			
		</div> 
    <div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content"> 
				<h2> 4  agrawal gases and Industries</h2>
				<p>
     Rajesh Aggrawal <br/>9416341441<br/> Bawal, Rewari


        </p>
			</div> 
			
		</div> 
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content"> <p>5</p>
				<h2>5 Agra Medical Gases</h2>
				<p>
				 Anil<br/> 9219274797<br/> Agra



        </p>
			</div> 
			
		</div> 
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content"> <p>6</p>
				<h2>anaesthetic gases Pvt.Ltd.</h2>
				<p>
				 M.K.Bansal <br/>9216576933 <br/>Derrabassi



        </p>
			</div> 
			
		</div> 
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content"> <p>7</p>
				<h2>7 Arun Oxygen Limited</h2>
				<p>
				 Arun Garg<br/> 9215586713<br/> Yamuna Nagar


        </p>
			</div> 
			
		</div> 
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content"> <p>8</p>
				<h2>Bharat Oxygen Traders</h2>
				<p>
				 A. K Singhal <br/>9634480976 <br/>
9412056206<br/> Dehradun

        </p>
			</div> 
			
		</div> 
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content"> <p>9</p>
				<h2>Crown Air Products</h2>
				<p>
				 Veena Gupta / Rithesh 
Gupta <br/>9911006015 <br/>Delhi

        </p>
			</div> 
			
		</div> 
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content"> <p>10</p>
				<h2> Divya Air Product</h2>
				<p>
				 Abhishek Dahiya <br/>9996815222<br/> Sonepat Haryana

        </p>
			</div> 
			
		</div>
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content"> <p>11</p>
				<h2>Goyal MG Gases Pvt 
limited </h2>
				<p>
				Pankaj Srivastava<br/> 8586982821 <br/>Ghaziabad/NCR
        </p>
			</div> 
			
		</div> 
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content"> <p>12</p>
				<h2> Gupta Oxygen </h2>
				<p>
				Anand Gupta<br/> 9812009352 <br/>Hisar

        </p>
			</div> 
			
		</div> 
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content"> <p>13</p>
				<h2>Hitech Industries Ltd </h2>
				<p>
				Vikram Bharwal <br/>092164-80333<br/> North

        </p>
			</div> 
			
		</div>
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content"> <p>14</p>
				<h2> Inder & Company</h2>
				<p>
				 Surender Singh <br/>8400118400<br/> Jhansi

        </p>
			</div> 
			
		</div>  
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content"> <p>15</p>
				<h2>15 Indian Glycol Limited</h2>
				<p>
				 Abhishek <br/>9540054758<br/> Kasipur - U.K

        </p>
			</div> 
			
		</div> 
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content"> <p>16</p>
				<h2>16 INOX Air Products</h2>
				<p>
				 V.M. Nayyar<br/> 9878071401<br/> Barotiwala

        </p>
			</div> 
			
		</div>
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content"> <p>4</p>
				<h2>17 INOX Air Products</h2>
				<p>
				 Abhishek Yadav <br/>9999244409<br/> Greater Noida 

        </p>
			</div> 
			
		</div>  
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content"> <p>4</p>
				<h2>18 Inox AP Ltd</h2>
				<p>
				 Vinod Singh<br/> 9999162672<br/> Surajpur–UP

        </p>
			</div> 
			
		</div> 
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content"> <p>4</p>
				<h2>19 Inox AP Ltd</h2>
				<p>
				 Vinod Singh<br/> 9999162672<br/> Baddi–Himachal

        </p>
			</div> 
			
		</div> 
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content"> <p>4</p>
				<h2>20 Jalan Gases & Allied 
Indust Pvt.Ltd </h2>
				<p>
				Rishab Jalan<br/> 9815221969<br/> Rajpura
        </p>
			</div> 
			
		</div> 
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content"> <p>4</p>
				<h2>21 Jay Ess Industrial Gases Pvt.Ltd.</h2>
				<p>
				 Gurmeet Singh <br/>9216862843<br/> Bathinda
				
        </p>
			</div> 
			
		</div> 
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content"> <p>4</p>
				<h2>22 Kalinga Gases</h2>
				<p>
				 Amit Modi<br/> 9412248290<br/> Moradabad

        </p>
			</div> 
			
		</div> 
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content"> <p>4</p>
				<h2>23 Kansal Industrial 
Gases</h2>
				<p>
				 Rohit <br/> 9927010286 <br/>Meerut
        </p>
			</div> 
			
		</div> 
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content"> <p>4</p>
				<h2>24 Ketee Welding</h2>
				<p>
				 Atul Mehrotra <br/>7860023117<br/> Lucknow
        </p>
			</div> 
			
		</div> 
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content"> <p>4</p>
				<h2>25 Krishna Gas Agencies</h2>
				<p>
				 Manoj Arora <br/>9837013757<br/> Meerut

        </p>
			</div> 
			
		</div> 
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content"> <p>4</p>
				<h2>26 Kumar Agencies</h2>
				<p>
				 Ashok Kumar<br/> 7906248939 <br/>Bareilly

        </p>
			</div> 
			
		</div> 
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content"> <p>4</p>
				<h2>27 Kwatra Gases</h2>
				<p>
				 Vipin Kwatra <br/>8218473303<br/> Moradabad

        </p>
			</div> 
			
		</div> 
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content"> <p>4</p>
				<h2>28 Lakshmi Carbide</h2>
				<p>
				 Sandeep Gupta <br/>9034033333 <br/>Ambala

        </p>
			</div> 
			
		</div>
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content"> <p>4</p>
				<h2>29 Mayur Air Product</h2>
				<p>
				 S S Rathi<br/> 9971766788 <br/>Okhla Delhi

        </p>
			</div> 
			
		</div>  
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content"> <p>4</p>
				<h2>30 Modi Chemicals & 
Industries</h2>
				<p>
				 Praveen Modi <br/>9838203509 <br/>Gorakhpur
        </p>
			</div> 
			
		</div> 
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content"> <p>4</p>
				<h2>31 Multan Air Products </h2>
				<p>
				 Archit Gupta <br/>8826674242 <br/>Bawana, Delhi

        </p>
			</div> 
			
		</div> 
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content"> <p>4</p>
				<h2>32 Murari Industrial 
Gases</h2>
				<p>
				 Ajay Mishra<br/> 9415040705<br/> Kanpur
        </p>
			</div> 
			
		</div> 
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content"> <p>4</p>
				<h2>33 Murari Gases Pvt Ltd</h2>
				<p>
				 Ajay Mishra<br/> 9415040705<br/> Lucknow

        </p>
			</div> 
			
		</div> 
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content"> <p>4</p>
				<h2>34 National Air Products</h2>
				<p>
				 Ashok Agrawal<br/> 9810497171<br/> Ghaziabad

        </p>
			</div> 
			
		</div> 
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content"> <p>4</p>
				<h2>35 Orbit Gases</h2>
				<p>
				 Rishab Jalan <br/>9815221969 <br/>Naraina,
New Delhi
        </p>
			</div> 
			
		</div> 
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content"> <p>4</p>
				<h2>36 Seth Air Products</h2>
				<p>
				 Tarun Seth <br/>9818111127 <br/>Palwal, Faridabad

        </p>
			</div> 
			
		</div> 
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content"> <p>4</p>
				<h2>37 Sukhmani Gases</h2>
				<p>
				 Ashok Gupta<br/> 9818204180<br/> Bhiwadi, Alwar

        </p>
			</div> 
			
		</div> 
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content"> <p>4</p>
				<h2>				38 Universal Gas
Company</h2>
				<p>
 Himanshu Chaudhary<br/> 9837004798<br/> Mathura
        </p>
			</div> 
			
		</div>
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content"> <p>4</p>
				<h2>39 V. S. Industries</h2>
				<p>
				 Nitin Khandelwal <br/>9837002074<br/> Bareilly

        </p>
			</div> 
			
		</div>  
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content"> <p>4</p>
				<h2>40 Vinayak Oxygen</h2>
				<p>
				 Abhishek Gupta<br/> 9810807576<br/> Mayapuri -New -delhi

        </p>
			</div> 
			
		</div> 
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content"> <p>4</p>
				<h2>41 Panki Oxygen</h2>
				<p>
				 Kamesh <br/>7275000022 <br/>Kanpur

        </p>
			</div> 
			
		</div> 
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content"> <p>4</p>
				<h2>42 Mayur Gases Pvt Ltd</h2>
				<p>
				 Virender Kumar
Agrawal <br/>9453033818<br/> Gorakhpur
        </p>
			</div> 
			
		</div>
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content"> <p>4</p>
				<h2>43 Sharang Plastengg Pvt 
Ltd</h2>
				<p>
				 Prashant Gupta <br/>9415002811 <br/>Lucknow
        </p>
			</div> 
			
		</div>  
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content"> <p>4</p>
				<h2>44 Srinathji Gases </h2>
				<p>
				Prashant Gupta<br/> 9415002811<br/> Lucknow

        </p>
			</div> 
			
		</div> 
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content"> <p>4</p>
				<h2>45 Linde India Limited </h2>
				<p>
				Surender Singh <br/>7895000454<br/> North India

        </p>
			</div> 
			
		</div> 
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content"> <p>4</p>
				<h2>46 Air Liquide India
Holding Pvt Ltd </h2>
				<p>
				Jaffar Khan<br/> 9871392705 <br/>North
        </p>
			</div> 
			
		</div> 
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content"> <p>47</p>
				<h2>47 Kumar Oxygen Pvt. 
Ltd.</h2>
				<p>
				 Shiv Kumar Agarwal<br/> 09837060376<br/> Rudrapur/Uttara
        </p>
			</div> 
			
		</div> 
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content"> <p>48</p>
				<h2> Gupta Industrial Gases </h2>
				<p>
				
Pvt. Ltd. Rajesh Gupta<br/> 09996322100 (R.G)<br/>
09996330100 (V.G)<br/> Hisar
        </p>
			</div> 
			
		</div>
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content"> <p>49</p>
				<h2>49 Imperial Gases Ltd.</h2>
				<p>
				 G. K. Luthra <br/>09415239030<br/>
08726772225<br/> Allahabad
        </p>
			</div> 
			
		</div>  
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content"> <p>50</p>
				<h2>IndianAir Gases Limited</h2>
				<p>
				 R K Pandey<br/> 9643556998 <br/>Varanasi
        </p>
			</div> 
			
		</div> 
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content"> <p>51</p>
				<h2>S P Industries</h2>
				<p>
				  Harshvardhan Vaish<br/> 8899253909 <br/>Bareilly

        </p>
			</div> 
			
		</div> 
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Movie"/>
			</div> 

			<div className="cd-timeline-content"> <p>52</p>
				<h2>Rewa Gases Pvt. Ltd.</h2>
				<p>
				  Deepak Saboo<br/> 07987555260<br/>
09425177260<br/> Waidhan P. O
        </p>
			</div> 
			
		</div> 
		 	</section> 
</div>
    );
  }
  
  function Gujrat() {
    return (
      <div >
		  <h5><b>Gujrat</b></h5>
<section id="cd-timeline" className="cd-container">
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Picture"/>
			</div> 

			<div className="cd-timeline-content">
        <p>1</p>
				<h2>AIMS industries</h2>
				<p>
        contact person: Shwetanshu Patel<br/>
        contact number:
          <a href="#">6352493103</a><br/>
        city:   baroda<br/>
        
				</p>
      
			</div> 
		</div> 
    <div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Picture"/>
			</div> 

			<div className="cd-timeline-content">
        <p>2</p>
				<h2>Aims Oxygens Pvt. 
Ltd.</h2>
				<p>
        contact person: Anish Patel/Naimish 
Patel<br/>
        contact number:
          <a href="#">9925110106</a><br/>
          <a href="#">9099157233</a><br/>

        city:   vadodara<br/>
        
				</p>
      
			</div> 
		</div> 	<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Picture"/>
			</div> 

			<div className="cd-timeline-content">
        <p>3</p>
				<h2>Aims Oxygens Pvt. 
Ltd.</h2>
				<p>
        contact person:Anish Patel / Sanjay 
Mistry<br/>
        contact number:
          <a href="#">9925110106 </a><br/>
          <a href="#">9925110213 </a><br/>

        city:   surat<br/>
        
				</p>
      
			</div> 
		</div> 	<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Picture"/>
			</div> 

			<div className="cd-timeline-content">
        <p>4</p>
				<h2>Bhagi Laxmi Gases</h2>
				<p>
        contact person: Bhavin Bhai<br/>
        contact number:
          <a href="#">9898285037</a><br/>
        city:   baroda<br/>
        
				</p>
      
			</div> 
		</div> 
    <div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Picture"/>
			</div> 

			<div className="cd-timeline-content">
        <p>5</p>
				<h2>dev nandan gases</h2>
				<p>
        contact person: thakkar<br/>
        contact number:
          <a href="#">9327709913</a><br/>
        city:   baroda<br/>
        
				</p>
      
			</div> 
		</div> 	<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Picture"/>
			</div> 

			<div className="cd-timeline-content">
        <p>6</p>
				<h2>Hiltone gas</h2>
				<p>
        contact person: nitesh Bhai<br/>
        contact number:
          <a href="#">9825070680</a><br/>
        city:  ahmedabad<br/>
        
				</p>
      
			</div> 
		</div> 	<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Picture"/>
			</div> 

			<div className="cd-timeline-content">
        <p>7</p>
				<h2>Hiltone gas</h2>
				<p>
        contact person: hital Bhai<br/>
        contact number:
          <a href="#">9825070680</a><br/>
        city:   vijapur<br/>
        
				</p>
      
			</div> 
		</div> 	<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Picture"/>
			</div> 

			<div className="cd-timeline-content">
        <p>8</p>
				<h2>Inox Air Product Pvt. 
Ltd.</h2>
				<p>
        contact person:  Himanshu Dubey <br/>8156007574 <br/>Vadodara
<br/>
     
        
        
				</p>
      
			</div> 
		</div> <div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Picture"/>
			</div> 

			<div className="cd-timeline-content">
        <p>9</p>
				<h2>Jaydeep Oxygen</h2>
				<p>
        contact person:  Ram Bhai<br/> 8552844069<br/> Rajkot

<br/>
     
        
        
				</p>
      
			</div> 
		</div> 
    
    <div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Picture"/>
			</div> 

			<div className="cd-timeline-content">
        <p>10</p>
				<h2>Lalan Gas.</h2>
				<p>
        contact person: Pranav Patel <br/>9925246680<br/> Ahmedabad

<br/>
     
        
        
				</p>
      
			</div> 
		</div>
    <div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Picture"/>
			</div> 

			<div className="cd-timeline-content">
        <p>11</p>
				<h2> Life Line Gases</h2>
				<p>
        contact person: Sanjay bhai <br/>948678143<br/> Vadodara


<br/>
     
        
        
				</p>
      
			</div> 
		</div> 
    <div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Picture"/>
			</div> 

			<div className="cd-timeline-content">
        <p>12</p>
				<h2>Madhav industrial gases</h2>
				<p>
        contact person: Shankar Hingorani <br/>9825046073 <br/>Rajkot


<br/>
     
        
        
				</p>
      
			</div> 
		</div>  <div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Picture"/>
			</div> 

			<div className="cd-timeline-content">
        <p>13</p>
				<h2>Madhuraj Industrial 
Gases Pvt. Ltd. </h2>
				<p>
        contact person: Jignesh Shah <br/>9824038152<br/> Ahmedabad

<br/>
     
        
        
				</p>
      
			</div> 
		</div>  <div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Picture"/>
			</div> 

			<div className="cd-timeline-content">
        <p>14</p>
				<h2>14 Maruti Gases.</h2>
				<p>
        contact person:  Uday Madhwani <br/>9825011158<br/> Baroda


<br/>
     
        
        
				</p>
      
			</div> 
		</div>  <div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Picture"/>
			</div> 

			<div className="cd-timeline-content">
        <p>15</p>
				<h2>15 Nova Industrial Gas</h2>
				<p>
        contact person: Mukesh Bhai <br/>9825061148<br/> Mehsana


<br/>
     
        
        
				</p>
      
			</div> 
		</div>  <div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Picture"/>
			</div> 

			<div className="cd-timeline-content">
        <p>16</p>
				<h2>Pawan Industrial 
Gases</h2>
				<p>
        contact person: Vishnu Patel<br/> 9824348902 <br/>Himat Nagar

<br/>
     
        
        
				</p>
      
			</div> 
		</div>  <div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Picture"/>
			</div> 

			<div className="cd-timeline-content">
        <p>17</p>
				<h2>Pranav Oxygen.</h2>
				<p>
        contact person: Harish Patel <br/>9724811555<br/> Surat

<br/>
     
        
        
				</p>
      
			</div> 
		</div>  <div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Picture"/>
			</div> 

			<div className="cd-timeline-content">
        <p>18</p>
				<h2>R R Patel Industrial 
Gases Pvt Ltd.</h2>
				<p>
        contact person: Ramesh Patel<br/> 9727722431<br/> Ahmedabad

<br/>
     
        
        
				</p>
      
			</div> 
		</div>  <div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Picture"/>
			</div> 

			<div className="cd-timeline-content">
        <p>19</p>
				<h2>Sethi Industrial Gases 
Pvt. Ltd.</h2>
				<p>
        contact person: . Sujay Sethi <br/>9978800021<br/> Ahmedabad

<br/>
     
        
        
				</p>
      
			</div> 
		</div>  <div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Picture"/>
			</div> 

			<div className="cd-timeline-content">
        <p>20</p>
				<h2>20 Shakti Industrial Gases.</h2>
				<p>
        contact person:  Vishnu Bhai<br/> 9825335395<br/> Vadodara


<br/>
     
        
        
				</p>
      
			</div> 
		</div>  <div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Picture"/>
			</div> 

			<div className="cd-timeline-content">
        <p>21</p>
				<h2>21 Shital Gas .</h2>
				<p>
        contact person: Bhaumik <br/>9427362828<br/> Patan


<br/>

        
        
				</p>
      
			</div> 
		</div> 
    <div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Picture"/>
			</div> 

			<div className="cd-timeline-content">
        <p>22</p>
				<h2>22 Shri Vinayak Speciality.</h2>
				<p>
        contact person: Amrish Bhatia <br/>9825449298<br/> Modasa


<br/>
     
        
        
				</p>
      
			</div> 
		</div>  <div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Picture"/>
			</div> 

			<div className="cd-timeline-content">
        <p>23</p>
				<h2> 23 SK Gases.</h2>
				<p>
        contact person: Vicky Punjabi <br/>9890008112<br/> Ulhas nagar


<br/>
     
        
        
				</p>
      
			</div> 
		</div>  <div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Picture"/>
			</div> 

			<div className="cd-timeline-content">
        <p>24</p>
				<h2>24 SK Gases.</h2>
				<p>
        contact person: Vicky Punjabi<br/> 9890008112<br/> Ulhas nagar


<br/>
     
        
        
				</p>
      
			</div> 
		</div> 
			</section> 
</div>
    );
  }
  
  function Topics() {
    let match = useRouteMatch();
  
    return (
      <div>
        <h2>Topics</h2>
  
        <ul>
          <li>
            <Link to={`${match.url}/components`}>Components</Link>
          </li>
          <li>
            <Link to={`${match.url}/props-v-state`}>
              Props v. State
            </Link>
          </li>
        </ul>
  
        {/* The Topics page has its own <Switch> with more routes
            that build on the /topics URL path. You can think of the
            2nd <Route> here as an "index" page for all topics, or
            the page that is shown when no topic is selected */}
        <Switch>
          <Route path={`${match.path}/:topicId`}>
            <Topic />
          </Route>
          <Route path={match.path}>
            <h3>Please select a topic.</h3>
          </Route>
        </Switch>
      </div>
    );
  }
  
  function Topic() {
    let { topicId } = useParams();
    return <h3>Requested topic ID: {topicId}</h3>;
  }
export default About;
