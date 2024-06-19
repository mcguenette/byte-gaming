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
}

export default Contact;