<<<<<<< HEAD
import { useRef } from 'react';
import GetInTouch from '../components/contact/GetInTouch';
import ContactForm from '../components/contact/ContactForm';
import PartnerBar from '../components/contact/Partner-Bar';

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
=======
import React from 'react'
import GetInTouch from '../components/contact/GetInTouch';
import ContactForm from '../components/contact/ContactForm';
import { motion } from 'framer-motion';
import '../components/contact/contact.css';


function Contact({pageTransition}) {
  return (
    <motion.div
    initial='initial'
    animate='animate'
    exit='exit'
    variants={pageTransition}
  >
    <div className='container'>
     <GetInTouch />
     <ContactForm />
    </div>
    </motion.div>
  )
>>>>>>> 6e4210b281d077488b435a5f5f352b0a9a90fd11
}

export default Contact;
