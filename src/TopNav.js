import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './TopNav.css';

class TopNav extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">HelpAroundHere</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link to="/" className="nav-item nav-link" activeClass="active">Home</Link>
            <Link to="/opportunities" className="nav-item nav-link" activeClass="active">Volunteering Opportunities</Link>
            <Link to="/add-opportunity" className="nav-item nav-link" activeClass="active">Add an Opportunity</Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default TopNav;
