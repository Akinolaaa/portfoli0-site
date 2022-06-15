import Title from '../../components/title/title.component';
import './contact.styles.scss';
import { PageContainer } from '../../components/page-container/page-container.styles';
import ContactInfo from '../../components/contact-info/contact-info.component';
import ContactIcons from '../../components/contact-icons/contact-icons.component';

const Contact = () => {

  return (
    <div>
    <Title fronttxt={'Contact Me'} backtxt={'Contact Me'}  />
    <PageContainer>
      <div class="contact-container">
        <h4>Contact me here</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem, temporibus. Aliquid, nostrum. Eligendi, perferendis obcaecati.
        </p>
        <ContactInfo />
        <ContactIcons />
      </div>
    </PageContainer>
    </div>
  )
}

export default Contact;