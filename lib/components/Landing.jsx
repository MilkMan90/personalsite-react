import React, { Component } from 'react'
import { Link } from 'react-router'
import Scroll from 'react-scroll'
import Code from './Code'
import ContactForm from './Contactform'


export default class Landing extends Component {
  render() {
    return (
      <article className="message">
      <h2>Hello.</h2>
      <h1>I'm Matt Kaufman</h1>
      <h1 className='title'>A computer software engineer specializing in the human-facing side of things</h1>
      <p>I love to spread joy by solving challenging problems, creating memorable user experiences, and giving back to community to shape a better world.</p>
      <p>Thank you for visiting.</p>
      <Link to="/code" className="link-to-work">Check out my work</Link>
    </article>
    )
  }
}
