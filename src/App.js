import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import Rental from './Component/Rental';
import About from './Component/About';
import Contact from './Component/Contact';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
            <div className="App-header">
              <Link to="/rental" className="App-single-tab">Rental</Link>
              <Link to="/about" className="App-single-tab">About</Link>
              <Link to="/contact" className="App-single-tab">Contact</Link>
            </div>
          <Redirect from="/" to="rental" />
          <Route path="/rental" component={Rental} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    );
  }
}

export default App;
