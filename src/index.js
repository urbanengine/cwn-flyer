import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import CurrentSchedule from './components/CurrentSchedule';
import NextSchedule from './components/NextSchedule';
import DynamicSchedule from './components/DynamicSchedule';
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Render the main component into the dom
ReactDOM.render
    (
        <Router>
          <div>
            <Route exact path="/" component={CurrentSchedule}/>
            <Route exact path="/current" component={CurrentSchedule}/>
            <Route exact path="/next" component={NextSchedule}/>
            <Route exact path="/:id" component={DynamicSchedule}/>
          </div>
        </Router>, 
    document.getElementById('app'));
