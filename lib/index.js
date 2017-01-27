import React from 'react';
import { render } from 'react-dom';

import Application from './components/Application';
import {Router, Route, browserHistory, IndexRoute} from 'react-router'

import Landing from './components/Landing'
import About from './components/About'
import Code from './components/Code'
import Blog from './components/Blog'
import MobileShowcase from './components/MobileShowcase'
import ContactForm from './components/Contactform'

import firebase from './firebase';

require('./styles/main.scss');

render((
  <Router history={browserHistory}>
    <Route path="/" component={Application}>
      <IndexRoute key='landing' component={Landing}/>
      <Route key='about' path="/about" component={About}/>
      <Route key='code' path="/code" component={Code}/>
      <Route key='projects' path="/code/:projectName" component={MobileShowcase}/>
      <Route key='contact' path="/contact" component={ContactForm}/>
      {/* <Route key={4} path="/blog" component={Blog}/> */}
    </Route>
  </Router>
), document.getElementById('application'));
