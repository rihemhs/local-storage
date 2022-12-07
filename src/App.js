import React, { Component, Fragment } from "react";
import { Route } from "react-router-dom";
import LandingPage from "./components/Landing/landing-page";
import event from "./components/event-create/event";
import update from "./components/update/update";
import { Container } from "react-bootstrap";

class App extends Component {
  render() {
    return (     
      <div className="app">      
            <Route path="/" exact component={LandingPage} />       
            <Route path="/event" component={event} />
            <Route path="/update" component={update} />
   
          </div>
       
    );
  }
}

export default App;
