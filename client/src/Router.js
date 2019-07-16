//import React from "react";
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';

import Unit from './Unit';




function RoutingExample() {
  return (
    <Router>
      <div>
      <button>
            <Link to="/">Home</Link>
          </button>
          <button>
            <Link to="/Unit">How to override from the Child/Parent</Link>
          </button>
        
<p>JoshSmells</p>

        <Route exact path="/" />
        <Route path="/Unit" component={Unit} />

      </div>
    </Router>
  );
}

export default RoutingExample;
