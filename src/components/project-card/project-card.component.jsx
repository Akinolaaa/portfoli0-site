import './project-card.styles.scss';

const ProjectCard = ({title, github, link}) => {

  return (
    <div class="portfolio-card">
      <div class="image">
        <img src={require('../../me.jpg')} alt="" />
      </div>
      <div class="hover-items">
        <h3>{title}</h3>
        <div class="icons">
          <a href={github} class="icon" target="_blank">
            <i class="fab fa-github"></i>
          </a>
          <a href={link} class="icon" target="_blank">
            <i class="fab fa-youtube"></i>
          </a>
          <a href="google.com" class="icon" target="_blank">
            <i class="fab fa-react"></i>
          </a>  
        </div>
      </div>
    </div>
  )
}
export default ProjectCard;