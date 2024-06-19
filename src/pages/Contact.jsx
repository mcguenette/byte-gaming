import React from 'react'
import GetInTouch from '../components/get-in-touch/GetInTouch';
import ContactForm from '../components/contact-form/ContactForm';
import PartnerBar from '../components/partner-bar/Partner-Bar';


function Contact() {
  return (
    <div>
    <div className='container'>
     <GetInTouch />
     </div>
     
     <PartnerBar />
     <div className='container'>
     <ContactForm />
    </div>
    </div>
  )
}

export default Contact;