import './introduction.styles.scss'
import image1 from '../../assets/IMG_01.jpg';
import ContactIcons from '../contact-icons/contact-icons.component';

const Introduction = () => {
  return(
    <div className='introduction-container' id='introduction'>
      <div className='text-con'>
        <h1 className="name">Hi I'm <span>Akinola</span></h1>
        
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi voluptatem sint similique ea quo neque delectus assumenda corrupti rem amet iste ipsum rerum reiciendis fugit sequi, awt voluptatum, quam aut.
          
        </p> 
      </div>
      <div className='container-2'>
        <img className='profile-img' alt='img1' src={image1} />
        <div className='contact-links'>
          <ContactIcons />
        </div>
      </div>
    </div> 
  )
}

export default Introduction;
//<div className='introduction-container' id='introduction'>
//       <div className='text-con'>
//         <h1 className="name">Hi I'm <span className="name">Akinola</span></h1>
//         <p>
//           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi voluptatem sint similique ea quo neque delectus assumenda corrupti rem amet iste ipsum rerum reiciendis fugit sequi, awt voluptatum, quam aut.
//         </p> 
//         <img className='profile-img' alt='img1' src={image1} />
//       </div>
//       <div className='profile-images'>
//         {/* <img className='bg-img' alt='bg' src={bgImg} /> */}
        
//       </div>
//     </div>
//  