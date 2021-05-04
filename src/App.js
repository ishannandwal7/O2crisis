import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Particles from "react-tsparticles";
import Navbar from './Navbar';
import Center from './Center';
import About from './About';
{/*
const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://covid-19-statistics.p.rapidapi.com/reports?date=2020-04-16&q=US%20Alabama&region_name=US&iso=USA&region_province=Alabama&city_name=Autauga",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "cbc09da551mshabef0758e18b536p12f19cjsned97db08a990",
		"x-rapidapi-host": "covid-19-statistics.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});*/}

function App(){
  return(
  <div id="main">

  <div id="front">

    <div className="joi">
      <Center/>
      <Particles
      options={{
        background: {
          color: {
            value: "black",
          },
          position:"50% 50%",
          repeat:"no-repeat",
          size:"cover",
          
        },
        fullScreen:{
          enable:true,
          zIndex:0,
        },
        fpsLimit: 60,
        interactivity: {
          detectsOn: "canvas",
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: false,
              mode: "repulse",
              parallax:{
                enable:true,
                force:30,
                smooth:10
              },
            },
            
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "down",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 3,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 1000,
            },
            value: 40,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}/>
      <Navbar/>
    </div>
    <About/>
  
  
</div>

</div>
  );
}
    /*
function App() {
  return (
    <div >
      <h1>ishan nandwal</h1>
      <p> is great</p>
    </div>

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn react
        </a>
      </header>
    </div>
  );
}
*/
export default App;
