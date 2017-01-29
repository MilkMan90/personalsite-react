import React, { Component } from 'react'
import Scroll from 'react-scroll'
import MediaQuery from 'react-responsive'

export default class Timeline extends Component {
  render() {
    return (
      <section className="timeline">
        <h4 className="timeline-title">Timeline</h4>
        <ul>
          <li>
            <div>
              <time>August 2016 </time>
              <p>Turing School of Software and Design
              Front End Engineering Program</p>
              <p className="location">Denver, CO</p>
            </div>
          </li>
          <li>
            <div>
              <time>October 2014</time>
              <p>Controls Software Applications Engineer</p>
              <p>Progressive Machine and Design</p>
              <p className="location">Rochester, NY</p>
            </div>
          </li>
          <li>
            <div>
              <time>May 2013</time>
              <p>Automation Engineer</p>
              <p>Distech Systems</p>
              <p className="location">Rochester, NY</p>
            </div>
          </li>
          <li>
            <div>
              <time>May 2013</time>
              <p>Graduated from Binghamton University - State University of New York</p>
              <p>Bachelor of Science in Computer Engineering</p>
              <p className="location">Binghamton, NY</p>
            </div>
          </li>
          <li>
            <div>
              <time>June 2008</time>
              <p>Graduated from Honeoye Falls Lima High School</p>
              <p className="location">Honeoye Falls, NY</p>
            </div>
          </li>
        </ul>
      </section>
    );
  }
}
