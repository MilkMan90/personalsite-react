import React, { Component } from 'react'
import Scroll from 'react-scroll'


export default class ProjectCard extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {

  }

  render() {
    let { title, description, tech, githubURL, imgURL } = this.props.project;
    return (
      <div className="project-card" onClick={()=>this.props.handleClick()}>
        <h5>{title}</h5>
        {/* <a href={githubURL}>
          <img href={imgURL}/>
        </a> */}
        <img className='thumbnail-img' src={imgURL}/>
      </div>
    )
  }
}
