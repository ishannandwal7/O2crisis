import React from "react";
import './Aboutpage.css';
import Typed from 'react-typed';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

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
}