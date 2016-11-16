import React, { Component } from 'react'
import { Router, Route, hashHistory } from 'react-router'
import { Link } from 'react-router'
import NavLink from './NavLink'

export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      showHome: true
    };
  }
  componentDidMount() {

  }

  addNewMessage() {

  }

  showHome(){

  }

  render() {
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
            <NavLink to="/blog" >Blog</NavLink>
          </div>

          <div id='footerlinks'>
                  <a href="mailto:matthew.leo.kaufman@gmail.com?Subject=IveBeenLookingForYou" target="_blank"><img src="./lib/imgs/icons/mail.svg" alt="mail" /></a>
                  <a href="https://github.com/MilkMan90" target="_blank"><img src="./lib/imgs/icons/github.svg" alt="github" /></a>
                  {/* <a href="https://www.facebook.com/matthewleokaufman"><img src="./lib/imgs/icons/facebook.svg" alt="facebook" /></a> */}
                  <a href="https://twitter.com/theKaufMan?lang=en" target="_blank"><img src="./lib/imgs/icons/twitter.svg" alt="twitter" /></a>
                  <a href="https://www.linkedin.com/in/matthew-kaufman-6725b734" target="_blank"><img src="./lib/imgs/icons/linkedin2.png" alt="linkedin" /></a>
          </div>
        </nav>

        <div className="width-holder"></div>
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}
