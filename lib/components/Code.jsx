import React, { Component } from 'react'
import Scroll from 'react-scroll'
import {Projects} from '../Projects.js'
import ProjectCard from './ProjectCard'
import {Showcase} from './Showcase'
// import ProjectGrid


export default class Code extends Component {
  constructor() {
    super();
    this.state = {
      displayShowcase: false,
      projectToDisplay: ''
    }
  }

  componentDidMount() {

  }

  chooseProject(project) {
    this.setState({
      displayShowcase: true,
      projectToDisplay: project,
    });
  }
  hideShowcase() {
    this.setState({
      displayShowcase: false
    })
  }
  render() {
    let showcase;
    let currentProject;

    let visibleClass;
    if (this.state.displayShowcase) {
      visibleClass = 'showcase-container';
    } else {
      visibleClass = 'showcase-container contract';
    }
    if (this.state.projectToDisplay) {
      currentProject = (
        <div>
          <Showcase projectInfo={Projects[this.state.projectToDisplay]} handleHide={ this.hideShowcase.bind(this)}/>
        </div>
      );
      showcase = (
        <div className={visibleClass}>
            {currentProject}
        </div>
      );
    }
    return (
      <div className='project-main'>
        {showcase}
        <div className='project-card-container'>
          <ProjectCard project={Projects.gameTime} handleClick={() => this.chooseProject('gameTime')}/>
          <ProjectCard project={Projects.netwerker} handleClick={() => this.chooseProject('netwerker')}/>
          <ProjectCard project={Projects.weatherMe} handleClick={() => this.chooseProject('weatherMe')}/>
          <ProjectCard project={Projects.shootTheBreeze} handleClick={() => this.chooseProject('shootTheBreeze')}/>
          {/* <ProjectCard project={Projects.gameTime}/>
          <ProjectCard project={Projects.gameTime}/>
          <ProjectCard project={Projects.gameTime}/>
          <ProjectCard project={Projects.gameTime}/>
          <ProjectCard project={Projects.gameTime}/> */}
        </div>
      </div>
    );
  }
}
