import './skills.styles.scss';
import SkillProgressBar from '../skill-progress-bar/skill-progress-bar.component';
import { SKILLS } from '../../information';

const Skills = () => {

  return (
    <div className='skills-container'>
      { 
        SKILLS.map((skill) => 
        <SkillProgressBar title={skill.title} key={skill.key} skillLevel={skill.skillLevel} />)
      }
    </div>
  )
}

export default Skills;