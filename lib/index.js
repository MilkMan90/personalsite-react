import React from 'react';
import { render } from 'react-dom';

import Application from './components/Application';
import {Router, Route, browserHistory} from 'react-router'

import About from './components/About'
import Code from './components/Code'
import Blog from './components/Blog'

require('./styles/main.scss');

render((
  <Router history={browserHistory}>
    <Route path="/" component={Application}>
      <Route path="/about" component={About}/>
      <Route path="/code" component={Code}/>
      <Route path="/blog" component={Blog}/>
    </Route>
  </Router>
), document.getElementById('application'));
