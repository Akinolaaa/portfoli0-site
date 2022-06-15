import ProjectCard from '../project-card/project-card.component';
import './portfolio-items.styles.scss';

const Projects = [
  {
    key: 1,
    title: 'Crwn Clothing',
    github: '',
    link: '',
  },
  {
    key: 2,
    title: 'Robofriends',
    github: '',
    link: '',
  },
  {
    key: 3,
    title: 'Portfolio',
    github: '',
    link: '',
  },
]//
const PortfolioItems = () => {

  return (
    <div className='portfolio-items'>
      {
        Projects.map(({key,title,github,link}) => 
          <ProjectCard key={key} 
            title={title} github={github} link={link}
          />
        )
      }
    </div>
  )
}

export default PortfolioItems;