import React from 'react';

function ContactContact() {
    return (
        <div>
        <h2><b>Feel free to contact us</b></h2>
        <p>
          We’d love to hear from you! Whether you have questions, 
          feedback, or need assistance, our team is here to help. 
          Reach out to us through any of the methods below, and we’ll 
          get back to you as soon as possible.
        </p>
        <div className='contact-options'>
          <div className='contact-option'>
            <h2 className='contact-title'>Phone</h2>
            <p>Call us directly</p>
            <p>(123) 456-7890</p>
          </div>
          <div className='contact-option'>
            <h2 className='contact-title'>Email</h2>
            <p>Send us an email directly</p>
            <button>Email us</button>
        </div>
          <div className='contact-option'>
            <h2 className='contact-title'>Chat</h2>
            <button>Chat with us</button>
          </div>
        </div>
        </div>
    );
}

export default ContactContact;