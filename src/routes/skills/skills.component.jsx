import './skills.styles.scss';
//import { SKILLS } from '../../information';
import StackItem from '../../components/stack-item/stack-item.component';

const Skills = () => {

  return (
    <div className='skills-container'>
      { /*
        SKILLS.map((skill) => 
        <SkillProgressBar title={skill.title} key={skill.key} skillLevel={skill.skillLevel} />)
    */}
      <StackItem stack={"Java"} />
    </div>
  )
}

export default Skills;