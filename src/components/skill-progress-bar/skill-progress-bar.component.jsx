import { ProgressBar } from "./skill-progress-bar.styles";

const SkillProgressBar = ({title, skillLevel}) => {

  return(
    <ProgressBar skillLevel={skillLevel} >
      <p class="prog-title">{title}</p>
      <div class="progress-con">
        <p class="prog-text">{skillLevel}</p>
        <div class="progress">
          <span className="skill-level"></span>
        </div>
      </div>
    </ProgressBar>
  )
}

export default SkillProgressBar;