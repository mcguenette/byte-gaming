import React from 'react';
import Button from './Button';

function GetInTouch() {
    return (
        <div>
        <h2 className='contact-first-words'><b>Feel free to contact us</b></h2>
        <p className='contact-paragraph'>
          We’d love to hear from you! Whether you have questions, 
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
            <Button className='contact-inside-option' text="Email us"/>
        </div>
          <div className='contact-option'>
            <h2 className='contact-title contact-inside-option'>Chat</h2>
            <Button className='contact-inside-option' text="Chat with us" />
          </div>
        </div>
        </div>
    );
}

export default GetInTouch;