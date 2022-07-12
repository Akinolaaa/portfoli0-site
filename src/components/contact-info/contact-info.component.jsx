import ContactItem from '../contact-item/contact-item.component';
import './contact-info.styles.scss'

const INFO = [
  {
    key: 1,
    icon: 'fas fa-map-marker-alt',
    left: 'Location',
    right: 'Lagos, Nigeria'
  },
  {
    key: 2,
    icon: 'fas fa-envelope',
    left: 'Email',
    right: 'akin.akinleye619@gmail.com'
  },
  /* {
    key: 3,
    icon: 'fas fa-graduation-cap',
    left: 'Education',
    right: 'Lagos, Nigeria'
  }, */
  {
    key: 4,
    icon: 'fas fa-globe-africa',
    left: 'Languages',
    right: 'English, Yoruba'
  },
]

const ContactInfo = () => {

  return (
    <div className='contact-info-container'>
    {
      INFO.map(({key, icon, left, right}) => 
        <ContactItem key={key}
          icon={icon} left={left} right={right}
        />
      )
    }
    </div>
  )
}

export default ContactInfo;