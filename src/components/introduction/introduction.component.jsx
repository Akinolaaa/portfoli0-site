import Button from '../button/button.component';
import './introduction.styles.scss'

const Introduction = () => {
  return(
    <div className='introduction-container'>
      <h1 className="name">Hi I'm <span className="name">Akinola</span></h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi voluptatem sint similique ea quo neque delectus assumenda corrupti rem amet iste ipsum rerum reiciendis fugit sequi, awt voluptatum, quam aut.
      </p>
      <Button text='Download CV'/>
    </div>
  )
}

export default Introduction;