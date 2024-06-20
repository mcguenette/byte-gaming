import { useRef } from 'react';
import GetInTouch from '../components/contact/GetInTouch';
import ContactForm from '../components/contact/ContactForm';
import PartnerBar from '../components/contact/Partner-Bar';
import '../components/contact/contact.css';

function Contact() {
  const contactFormRef = useRef(null);

  return (
    <div>
      <div className='container'>
        <GetInTouch contactFormRef={contactFormRef} />
      </div>
      <PartnerBar />
      <div className='container'>
        <ContactForm contactFormRef={contactFormRef} />
      </div>
    </div>
  );
}

export default Contact;
