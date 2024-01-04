import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./NavBar";
import Home from "./Home";
import Snacks from "./Snacks";
import Drinks from "./Drinks";

function App() {
 return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/snacks" component={Snacks} />
          <Route path="/drinks" component={Drinks} />
        </Switch>
      </div>
    </Router>
 );
}

export default App;
