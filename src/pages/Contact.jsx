import React from 'react'
import GetInTouch from '../components/GetInTouch';
import ContactForm from '../components/ContactForm';
import { motion } from 'framer-motion';
import '../style/contact.css'


function Contact({pageTransition}) {
  return (
    <motion.div
    initial="initial"
    animate="animate"
    exit="exit"
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