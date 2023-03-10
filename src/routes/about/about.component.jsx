import './about.styles.scss';
import ExperienceTags from '../../components/experience-tags/experience-tags.component';
import AboutSectionHeader from '../../components/about-section-header/about-section-header.component';

const About = () => {

  return (
    <div className='about' id='about'>
      <div className='about-text'>
        <h4>About Me</h4>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi amet vitae aspernatur molestiae, possimus exercitationem, ipsa vel debitis numquam provident eaque repudiandae? <br/> <br/> Quas nam obcaecati praesentium. Officia enim tenetur ea voluptatibus? Ad, architecto? Voluptates laudantium, est reiciendis debitis nihil officiis. Libero incidunt saepe aspernatur, soluta veritatis ipsam praesentium quae nihil.
        </p>
      </div>
      <ExperienceTags />
      <AboutSectionHeader title={'My Skills'}/>
    </div>
  )
}

export default About;
//"react-tsparticles": "^2.0.6",
    // "tsparticles": "^2.0.6",
    // "tsparticles-slim": "^2.0.6"