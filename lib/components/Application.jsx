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

  render() {
    let body;

    if (this.state.showHome) {
      body = (
        <article className="message">
        <h1>Hello.</h1>
        <h3>I'm Matt Kaufman</h3>
        <h2>A computer software engineer and front-end developer</h2>
        <h3>I love to make people happy by solving problems, creating memorable user experiences, and contributing to community.</h3>
        <h3>I build web applications are inspired by the belief in the power of worldy connection. My creations push boundaries to spread love, open minds, ease suffering, and inspire social action.</h3>
        <h3> Thank you for visiting.</h3>
      </article>);
    } else {
      body = this.props.children;
    }
    return (
      <div className="Application">
        <nav>
          {/* <h1>Matt Kaufman Portfolio</h1> */}
            <div className='homeNav'>
              <NavLink to="/">
                <img className='profileImg' src="./lib/imgs/headshot.jpg" alt="me!" />
              </NavLink>
            </div>
          <ul role="nav">
            <li></li>
            <li><NavLink to="/" onClick={() => this.setState({ showHome: true })}>About</NavLink></li>
            <li><NavLink to="/code" onClick={() => this.setState({ showHome: false })}>Code</NavLink></li>
            <li><NavLink to="/blog" onClick={() => this.setState({ showHome: false })}>Blog</NavLink></li>
          </ul>

          <div id='footerlinks'>
                  <a href="mailto:matthew.leo.kaufman@gmail.com?Subject=IveBeenLookingForYou"><img src="./lib/imgs/icons/mail.svg" alt="mail" /></a>
                  <a href="https://github.com/MilkMan90"><img src="./lib/imgs/icons/github.svg" alt="github" /></a>
                  <a href="https://www.facebook.com/matthewleokaufman"><img src="./lib/imgs/icons/facebook.svg" alt="facebook" /></a>
                  <a href="https://twitter.com/theKaufMan?lang=en"><img src="./lib/imgs/icons/twitter.svg" alt="twitter" /></a>
                  <a href="https://www.linkedin.com/in/matthew-kaufman-6725b734"><img src="./lib/imgs/icons/linkedin2.png" alt="linkedin" /></a>
          </div>
        </nav>

        <div className="width-holder"></div>
        <main>
          {body}
        </main>
      </div>
    )
  }
}
