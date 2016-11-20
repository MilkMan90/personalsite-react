import React, { Component } from 'react'
import {Projects} from '../Projects.js'
import { Link, browserHistory } from 'react-router'


export default class MobileShowcase extends Component {

  render() {
    let projectInfo = Projects[this.props.params.projectName];
    const { description, githubURL, hostURL, imgURL, tech, title } = projectInfo;

    const techList = [];

    tech.forEach((techName, index) => {
      techList.push(
        <li key={index} className='showcase-tech-item'>{techName}</li>
      );
    });

    console.log(imgURL);
    return (
      <div className='mobile-showcase'>
        <h6 className='showcase-title'>{title}</h6>
        <a target="_blank" href={hostURL}>
          <img className='showcase-img' src={imgURL}/>
        </a>
        <p className='showcase-description'>{description}</p>
        <ul className='showcase-tech'>Built with:
          {techList}
        </ul>
        <a className='showcase-github' target="_blank" href={githubURL}>View On Github</a>
        <button className='showcase-hide' onClick={browserHistory.goBack}><img src="/lib/imgs/back.svg"/></button>
      </div>
    );
  }
}
