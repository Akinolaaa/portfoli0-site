import Title from '../../components/title/title.component';
import './contact.styles.scss';
import ContactInfo from '../../components/contact-info/contact-info.component';
import ContactIcons from '../../components/contact-icons/contact-icons.component';

const Contact = () => {

  return (
    <div>
      <Title fronttxt={'Contact Me'} backtxt={'Contact Me'}  />
      <div className="contact-container">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem, temporibus. Aliquid, nostrum. Eligendi, perferendis obcaecati.
        </p>
        <ContactInfo />
        <br />
        <ContactIcons />
      </div>
    </div>
  )
}

export default Contact;