import React, { Component } from 'react'
import Scroll from 'react-scroll'


export default class About extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  componentDidMount() {

  }

  render() {
    return(
      <article className="message">
      <h1>Hello.</h1>
      <h3>I'm Matt Kaufman</h3>
      <h2>A computer software engineer and front-end developer</h2>
      <h3>I love to make people happy by solving problems, creating memorable user experiences, and contributing to community.</h3>
      <h3>I build web applications are inspired by the belief in the power of worldy connection. My creations push boundaries to spread love, open minds, ease suffering, and inspire social action.</h3>
      <h3> Thank you for visiting.</h3>
    </article>
    )
  }
}
