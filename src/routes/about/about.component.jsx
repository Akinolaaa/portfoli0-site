import './about.styles.scss';
//import SkillProgressBar from '../../components/skill-progress-bar/skill-progress-bar.component';
import Title from '../../components/title/title.component';
import { PageContainer } from '../../components/page-container/page-container.styles';
import ExperienceTags from '../../components/experience-tags/experience-tags.component';
import AboutSectionHeader from '../../components/about-section-header/about-section-header.component';
import SkillProgressBar from '../../components/skill-progress-bar/skill-progress-bar.component';
import TimelineItem from '../../components/timeline-item/timeline-item.component';

const About = () => {

  return (
    <div>
    <PageContainer>
      <Title fronttxt={'About Me'} backtxt={'About Me'}/>
        <div className='about-text'>
          <h4>Information About Me</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi amet vitae aspernatur molestiae, possimus exercitationem, ipsa vel debitis numquam provident eaque repudiandae? <br/> <br/> Quas nam obcaecati praesentium. Officia enim tenetur ea voluptatibus? Ad, architecto? Voluptates laudantium, est reiciendis debitis nihil officiis. Libero incidunt saepe aspernatur, soluta veritatis ipsam praesentium quae nihil.
          </p>
        </div>
        <ExperienceTags />
        <AboutSectionHeader title={'My Skills'}/>
        <div className='about-section-con'>
          <SkillProgressBar title={'React'} skillLevel={'100%'} />
          <SkillProgressBar title={'Vibes'} skillLevel={'80%'}/>
          <SkillProgressBar title={'React'} skillLevel={'100%'} />
          <SkillProgressBar title={'Vibes'} skillLevel={'80%'}/>
        </div>
        <AboutSectionHeader title={'My Timeline'}/>
        <div className='about-section-con'>
          <TimelineItem />
        </div>
        </PageContainer>
    </div>
  )
}

export default About;