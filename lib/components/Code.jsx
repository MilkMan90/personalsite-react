import React, { Component } from 'react'
import Scroll from 'react-scroll'
import {Projects} from '../Projects.js'
import ProjectCard from './ProjectCard'
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
    console.log('test');
  }
  render() {
    let currentProject;
    console.log(Projects);

    if(this.state.projectToDisplay){
      currentProject = (
        <div>
          {Projects[this.state.projectToDisplay].description}
        </div>
      )
    }
    return(
      <div>
        <div className='showcase'>
            {currentProject}
        </div>
        <div className='project-card-container'>
          <ProjectCard project={Projects.gameTime} handleClick={() => this.chooseProject('gameTime')}/>
          <ProjectCard project={Projects.netwerker} handleClick={() => this.chooseProject('netwerker')}/>
          <ProjectCard project={Projects.weatherMe} handleClick={() => this.chooseProject('weatherMe')}/>
          <ProjectCard project={Projects.shootTheBreeze} handleClick={() => this.chooseProject('shootTheBreeze')}/>
          <ProjectCard project={Projects.gameTime}/>
          <ProjectCard project={Projects.gameTime}/>
          <ProjectCard project={Projects.gameTime}/>
          <ProjectCard project={Projects.gameTime}/>
          <ProjectCard project={Projects.gameTime}/>
        </div>
      </div>
    )
  }
}
