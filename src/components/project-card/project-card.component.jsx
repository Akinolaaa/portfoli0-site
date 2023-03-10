import './project-card.styles.scss';

const ProjectCard = ({title, github, link}) => {

  return (
    <div className="portfolio-card">
      <div className="image">
        <img src={require('../../me.jpg')} alt="" />
      </div>
      <div className="hover-items">
        <h3>{title}</h3>
        <div className="icons">
          <a href={github} className="icon" target="_blank" rel="noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href={link} className="icon" target="_blank" rel="noreferrer">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="google.com" className="icon" target="_blank" rel="noreferrer">
            <i className="fab fa-react"></i>
          </a>  
        </div>
      </div>
    </div>
  )
}
export default ProjectCard;