import React, { Component } from 'react'
import MediaQuery from 'react-responsive'

export default class Skills extends Component {
  render() {
    return (
      <div className="skills-container">
        <div className="skills-about">
          <h4>About</h4>
          <p>
            I love people and especially making them happy. A human first and a passionate, energetic and fun-loving software engineer second, I thrive from solving challenging problems while also creating memorable and magical user-experiences. Routinely and confidently launching myself into the unknown, I'm always pushing my limits, and working collaboratively towards a brighter future for all.
          </p>
        </div>
        <h4>Skills</h4>
        <section className="skills-box">
          <ul className="skills js-skills">
            <h6>JavaScript</h6>
            <li>ES6</li>
            <li>React</li>
            <li>Ember</li>
            <li>Node</li>
            <li>Redux</li>
            <li>Router</li>
            <li>Webpack</li>
            <li>p5</li>
          </ul>
          <ul className="skills dev-skills">
            <h6>Web Development</h6>
            <li>Git</li>
            <li>Github</li>
            <li>Firebase</li>
            <li>Agile Development</li>
            <li>Mentoring</li>
          </ul>
          <ul className="skills language-skills">
            <h6>Other Languages</h6>
            <li>C</li>
            <li>C++</li>
            <li>Assembly</li>
            <li>VHDL</li>
          </ul>
          <ul className="skills controls-skills">
            <h6>Controls Engineering</h6>
            <li>Siemens, Allen-Bradley PLCs</li>
            <li>ABB, FANUC, Denso, Adept Robots</li>
            <li>Cognex Machine Vision Software</li>
            <li>Automation Hardware Design</li>
          </ul>
          <ul className="skills testing-skills">
            <h6>Test Driven Development</h6>
            <li>Mocha</li>
            <li>Chai</li>
            <li>Enzyme</li>
            <li>Selenium</li>
          </ul>
          <ul className="skills design-skills">
            <h6>Web Design</h6>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>SCSS</li>
            <li>Canvas</li>
          </ul>
        </section>
      </div>
    );
  }
}
