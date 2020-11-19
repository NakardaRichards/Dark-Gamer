import React from "react";
import "./App.css";
import Navbar from "./Navbar/Comp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import aboutClub from "./pages/aboutClub";
import clubMembers from "./pages/clubMembers";
import contact from "./pages/contact";
import Mods from "./pages/mods";
import captureGallary from "./pages/captureGallary";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/aboutClub" component={aboutClub} />
        <Route path="/clubMembers" component={clubMembers} />
        <Route path="/mods" component={Mods} />
        <Route path="/contact" component={contact} />
        <Route path="/captureGallary" component={captureGallary} />
      </Switch>
    </Router>
  );
}

export default App;
