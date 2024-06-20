<<<<<<< HEAD
/* eslint-disable react/prop-types */

import Button from '../Button';

// eslint-disable-next-line react/prop-types
function GetInTouch({ contactFormRef }) {
    const scrollToContactForm = () => {
        if (contactFormRef.current) {
            contactFormRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='get-in-touch'>
            <h2 className='contact-first-words'>Contact us</h2>
            <div className='contact-options'>
                <div className='contact-option'>
                    <h2 className='contact-title contact-inside-option'>Phone</h2>
                    <p className='contact-inside-option'>(123) 456-7890</p>
                    <Button className='contact-inside-option' text="Call us now" />
                </div>
                <div className='contact-option'>
                    <h2 className='contact-title contact-inside-option'>Email</h2>
                    <p className='contact-inside-option'>Send us an email directly</p>
                    {/* Button component for sending an email */}
                    <Button className='primary contact-inside-option' text="Email us now" onClick={scrollToContactForm} />
                </div>
                <div className='contact-option'>
                    <h2 className='contact-title contact-inside-option'>Chat</h2>
                    <p className='contact-inside-option'>Chat with us</p>
                    <Button className='contact-inside-option' text="Chat with us" />
                </div>
            </div>
=======
import React from 'react';

function GetInTouch() {
    return (
        <div>
        <h2 className='contact-first-words'><b>Feel free to contact us</b></h2>
        <p>
          We'd love to hear from you! Whether you have questions, 
          feedback, or need assistance, our team is here to help. 
          Reach out to us through any of the methods below, and we’ll 
          get back to you as soon as possible.
        </p>
        <div className='contact-options'>
          <div className='contact-option'>
            <h2 className='contact-title contact-inside-option'>Phone</h2>
            <p className='contact-inside-option'>Call us directly</p>
            <p className='contact-inside-option'>(123) 456-7890</p>
          </div>
          <div className='contact-option'>
            <h2 className='contact-title contact-inside-option'>Email</h2>
            <p className='contact-inside-option'>Send us an email directly</p>
            <button className='contact-inside-option'>Email us</button>
        </div>
          <div className='contact-option'>
            <h2 className='contact-title contact-inside-option'>Chat</h2>
            <button className='contact-inside-option'>Chat with us</button>
          </div>
        </div>
>>>>>>> 6e4210b281d077488b435a5f5f352b0a9a90fd11
        </div>
    );
}

<<<<<<< HEAD
export default GetInTouch;

=======
export default GetInTouch;
>>>>>>> 6e4210b281d077488b435a5f5f352b0a9a90fd11
