import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import './App.css';
import OpportunityList from './OpportunityList'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <h1>HelpAroundHere</h1>
        </div>
        <div className="row">
          <OpportunityList />
        </div>
      </div>
    );
  }
}

export default App;
