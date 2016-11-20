import React, { Component } from 'react'
import Scroll from 'react-scroll'
import MediaQuery from 'react-responsive'
import { Link } from 'react-router'


export default class ProjectCard extends Component {

  render() {
    let { title, description, tech, githubURL, imgURL } = this.props.project;
    return (
      <div>
      <MediaQuery query="(min-width: 800px)">
        <div className="project-card" onClick={() => this.props.handleClick()}>
          <h5>{title}</h5>
          <img className='thumbnail-img' src={imgURL}/>
        </div>
      </MediaQuery>

      <MediaQuery query="(max-width: 800px)">
        <Link to={`code/${this.props.projectName}`} onClick={() => this.props.handleClick()}>
          <div className="project-card">
            <h5>{title}</h5>
            <img className='thumbnail-img' src={imgURL}/>
          </div>
        </Link>
      </MediaQuery>
      </div>
    )
  }
}
