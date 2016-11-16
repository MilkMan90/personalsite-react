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
    return (
    <section className="timeline">
      <ul>
        <li>
          <div>
            <time>August 2016 </time>
            <p>Turing School of Software and Design
            Front End Engineering Program
            Denver, CO</p>
          </div>
        </li>
        <li>
          <div>
            <time>October 2014</time>
            <p>Controls Software Applications Engineer</p>
            <p>Progressive Machine and Design</p>
            <p>Rochester, NY</p>
          </div>
        </li>
        <li>
          <div>
            <time>May 2013</time>
            <p>Automation Engineer</p>
            <p>Distech Systems</p>
            <p>Rochester, NY</p>
          </div>
        </li>
        <li>
          <div>
            <time>May 2013</time>
            <p>Graduated from Binghamton University - State University of New York</p>
            <p>Bachelor of Science in Computer Engineering</p>
          </div>
        </li>
        <li>
          <div>
            <time>June 2008</time>
            <p>Graduated from Honeoye Falls Lima High School</p>
          </div>
        </li>
      </ul>
    </section>
  );
  }
}
