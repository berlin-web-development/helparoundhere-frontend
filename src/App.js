import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Lander from './Lander';
import './App.css';
import TopNav from './TopNav.js';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
        <TopNav />
        <Route exact path="/" render={() => <Lander message="viewing home" />} />
        <Route path="/opportunities" render={() => <Lander message="viewing /opportunities" />} />
        <Route path="/add-opportunity" render={() => <Lander message="viewing /add-opportunity" />} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
