import './contact-item.styles.scss';

const ContactItem = ({icon, left, right}) => {

  return(
    <div className="contact-item">
      <div className="icon">
        <i className={icon}></i>
        <span>{left}</span>
      </div>
      <p>
        <span>: {right}</span>
      </p>
    </div>
  )
}

export default ContactItem;