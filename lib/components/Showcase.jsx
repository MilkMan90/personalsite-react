const React = require('react')
const ReactDOM = require('react-dom')

export const Showcase = ({ projectInfo, handleHide, mobile }) => {
  const { description, githubURL, hostURL, imgURL, tech, title } = projectInfo;

  let techList = [];

  tech.forEach((techName, index) => {
    techList.push(
      <li key={index} className='showcase-tech-item'>{techName}</li>
    );
  });

  return (
    <div className='showcase'>
      <h6 className='showcase-title'>{title}</h6>
      <a target="_blank" href={hostURL}>
        <img className='showcase-img' src={imgURL}/>
      </a>
      <p className='showcase-description'>{description}</p>
      <ul className='showcase-tech'>Built with:
        {techList}
      </ul>
      <a className='showcase-github' target="_blank" href={githubURL}>View On Github</a>
      <button className='showcase-hide' onClick={() => handleHide()}>Hide</button>
    </div>
  );
};
