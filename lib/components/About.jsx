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
        <h3>I love to solve problems, create memorable user experiences, and contribute to community.</h3>
        <h4>I build web applications inspired by the belief in the power of worldly connection. My creations push boundaries to spread love, open minds, ease suffering, and inspire social action.</h4>
        <h4> Thank you for visiting.</h4>
      </article>
    )
  }
}
