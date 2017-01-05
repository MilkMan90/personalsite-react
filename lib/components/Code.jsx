import React, { Component } from 'react'
import Scroll from 'react-scroll'
import MediaQuery from 'react-responsive'
import {Projects} from '../Projects.js'
import ProjectCard from './ProjectCard'
import {Showcase} from './Showcase'
import MobileShowcase from './MobileShowcase'

import { Link } from 'react-router'

// import ProjectGrid


export default class Code extends Component {
  constructor() {
    super();
    this.state = {
      displayShowcase: false,
      projectToDisplay: 'gameTime',
    };
  }

  componentDidMount() {

  }

  chooseProject(project) {
    Scroll.animateScroll.scrollToTop();
    this.setState({
      displayShowcase: true,
      projectToDisplay: project,
    });
  }
  hideShowcase() {
    this.setState({
      displayShowcase: false,
    });
  }
  render() {
    let showcase;
    let mobileShowcase;
    let visibleClass;

    if (this.state.displayShowcase) {
      visibleClass = 'showcase-container';
    } else {
      visibleClass = 'showcase-container contract';
    }

    if (this.state.projectToDisplay) {
      showcase = (
        <div className={visibleClass}>
          <div>
            <Showcase mobile='false' projectInfo={Projects[this.state.projectToDisplay]} handleHide={ this.hideShowcase.bind(this)}/>
          </div>
        </div>
      );
    }

    const projectCards = (
      <div className='project-card-container'>
        <ProjectCard project={Projects.weatherDux} projectName='weatherDux' handleClick={() => this.chooseProject('weatherDux')}/>
        <ProjectCard project={Projects.dashboard} projectName='dashboard' handleClick={() => this.chooseProject('dashboard')}/>
        <ProjectCard project={Projects.netwerker} projectName='netwerker' handleClick={() => this.chooseProject('netwerker')}/>
        <ProjectCard project={Projects.weatherMe} projectName='weatherMe' handleClick={() => this.chooseProject('weatherMe')}/>
        <ProjectCard project={Projects.shootTheBreeze} projectName='shootTheBreeze' handleClick={() => this.chooseProject('shootTheBreeze')}/>
        <ProjectCard project={Projects.toDoBox} projectName='toDoBox' handleClick={() => this.chooseProject('toDoBox')}/>
        <ProjectCard project={Projects.gameTime} projectName='gameTime' handleClick={() => this.chooseProject('gameTime')}/>
      </div>
    );

    return (
      <div className='project-main'>
        <MediaQuery query="(min-width: 800px)">
          {showcase}
          {projectCards}
        </MediaQuery>

        <MediaQuery query="(max-width: 800px)">
          {projectCards}
          {/* <Link to={`code/${this.state.projectToDisplay}`} >
          Test
          </Link> */}
        </MediaQuery>

      </div>
    );
  }
}
