import React, { Component } from 'react'
import MediaQuery from 'react-responsive'
import Timeline from './Timeline'
import Skills from './Skills'

export default class About extends Component {
  render() {
    return (
    <div>
      <MediaQuery query="(max-width: 800px)">
        <img className='about-profileImg' src="./lib/imgs/headshot.jpg" alt="its me - Matt!" />
      </MediaQuery>
      <Skills />
      <Timeline />
    </div>
  );
  }
}
