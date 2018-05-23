import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Lander from './Lander';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/opportunities">Volunteering Opportunities</Link></li>
            <li><Link to="/add-opportunity">Add an Opportunity</Link></li>
          </ul>

          <hr/>

          <Route exact path="/" render={() => <Lander message="viewing home" />} />
          <Route path="/opportunities" render={() => <Lander message="viewing /opportunities" />} />
          <Route path="/add-opportunity" render={() => <Lander message="viewing /add-opportunity" />} />
        </div>
      </Router>
    );
  }
}

export default App;
