import React, { Component } from 'react'
import Scroll from 'react-scroll'
import Code from './Code'
import ContactForm from './Contactform'

export default class Landing extends Component {
  render() {
    return (
      <article className="message">
      <h2>Hello.</h2>
      <h1>I'm Matt Kaufman</h1>
      <h1 className='title'>A computer software engineer and front-end developer</h1>
      <p>I love to spread joy by solving challenging problems, creating memorable user experiences, and giving back to community to shape a better world.</p>
      {/* <h3>I build web applications are inspired by the belief in the power of worldy connection. My creations push boundaries to spread love, open minds, ease suffering, and inspire social action.</h3> */}
      <p>Thank you for visiting.</p>
      {/* <ContactForm showForm='false'/> */}
    </article>
    )
  }
}
