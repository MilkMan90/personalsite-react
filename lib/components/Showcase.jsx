const React = require('react')
const ReactDOM = require('react-dom')

export const Showcase = ({projectInfo, handleHide}) => {
  const { description, githubURL, imgURL, tech, title } = projectInfo;

  let techList = [];

  tech.forEach((techName, index) => {
    techList.push(
      <li key={index} className='showcase-tech-item'>{techName}</li>
    );
  });

  return (
    <div className='showcase'>
      <h6 className='showcase-title'>{title}</h6>
      <img className='showcase-img' src={imgURL}/>
      <p className='showcase-description'>{description}</p>
      <ul className='showcase-tech'>Built with:
        {techList}
      </ul>
      <a className='showcase-github' href={githubURL}>View On Github</a>
      <button className='showcase-hide' onClick={() => handleHide()}>Hide</button>
    </div>
  );
};
