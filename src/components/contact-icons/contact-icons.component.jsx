import './contact-icons.styles.scss'

const ContactIcons = () => {

  return (
    <div className="contact-icons">
      <div className="contact-icon">
        <a href="www.twitter.com" target="_blank" rel='noreferrer'>
          <i className="fab fa-twitter"></i>
        </a>
      </div>
      <div className="contact-icon">
        <a href="https://www.github.com" target="_blank" rel='noreferrer'>
          <i className="fab fa-github"></i>
        </a>
      </div>
      <div className="contact-icon">
        <a href="www.linkedin.com" target="_blank" rel='noreferrer'>
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </div>
  )
}

export default ContactIcons;