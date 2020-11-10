import React from "react";
import "./App.css";
import Navbar from "./Navbar/Comp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import aboutClub from "./pages/aboutClub";
import clubMembers from "./pages/clubMembers";
import contact from "./pages/contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/index" exact component={Home} />
        <Route path="/aboutClub" component={aboutClub} />
        <Route path="/clubMembers" component={clubMembers} />
        <Route path="/contact" component={contact} />
      </Switch>
    </Router>
  );
}

export default App;
