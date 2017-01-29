import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group' // ES6
import { Router, Route, hashHistory } from 'react-router'
import { Link } from 'react-router'
import NavLink from './NavLink'
import ContactForm from './Contactform'
import MediaQuery from 'react-responsive'

export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      showHome: true
    };
  }
  render() {
    const footerLinks = (
      <div id='footerlinks'>
              <a href="mailto:matthew.leo.kaufman@gmail.com?Subject=Hi+Matt" target="_blank"><img src="./lib/imgs/icons/mail.svg" alt="mail" /></a>
              <a href="https://github.com/MilkMan90" target="_blank"><img src="./lib/imgs/icons/github.svg" alt="github" /></a>
              {/* <a href="https://www.facebook.com/matthewleokaufman"><img src="./lib/imgs/icons/facebook.svg" alt="facebook" /></a> */}
              <a href="https://twitter.com/theKaufMan?lang=en" target="_blank"><img src="./lib/imgs/icons/twitter.svg" alt="twitter" /></a>
              <a href="https://www.linkedin.com/in/matthew-kaufman-6725b734" target="_blank"><img src="./lib/imgs/icons/linkedin2.png" alt="linkedin" /></a>
      </div>
    );
    return (
      <div className="Application">
        <nav>
          {/* <h1>Matt Kaufman Portfolio</h1> */}
            <div className='homeNav'>
              <NavLink to="/">
                <img className='profileImg' src="./lib/imgs/headshot.jpg" alt="me!" />
                <img className='hamburger-nav'
                src="./lib/imgs/home3.svg"/>
              </NavLink>
            </div>
          <div className="nav">
            <NavLink to="/code" >Code</NavLink>
            <NavLink to="/about" >About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
          <MediaQuery query="(min-width: 800px)">
          {footerLinks}
          </MediaQuery>
        </nav>

        <div className="width-holder"></div>
        <main>
          <ReactCSSTransitionGroup
            transitionName="newPage"
            transitionAppear={true}
            transitionAppearTimeout={1500}
            transitionEnter={true}
            transitionEnterTimeout={1500}
            transitionLeave={false}
            transitionLeaveTimeout={1500}
          >
            {React.cloneElement(this.props.children, {
              key: location.pathname,
            })}
          </ReactCSSTransitionGroup>

          <MediaQuery query="(max-width: 800px)">
            <footer>
              {footerLinks}
            </footer>
          </MediaQuery>

        </main>
      </div>
    );
  }
}
