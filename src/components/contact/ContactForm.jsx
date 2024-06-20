<<<<<<< HEAD

import Button from "../Button";

// eslint-disable-next-line react/prop-types
function ContactForm({ contactFormRef }) {
    return (
        <div className="contact-form" ref={contactFormRef}>
            <h2>Please fill free to text us</h2>
            <form className="contact-form-form">
                <label className="contact-form-label">
                    <p>Name:</p>
                    <input type="text" />
                </label>
                <label className="contact-form-label">
                    <p>Email:</p>
                    <input type="email" />
                </label>
                <label className="contact-form-label">
                    <p>Message:</p>
                    <textarea />
                </label>
                <Button text="Submit" className={"primary submit-button"}/>
=======
import React from 'react';
import Button from '../Button';

function ContactForm() {
    return (
        <div className='contact-form'>
            <h2 className=''>Contact Us</h2>
            <form className='contact-form-form'>
                <label className='contact-form-label'>
                    <p>Name:</p>
                    <input type='text' />
                </label>
                <label className='contact-form-label'>
                    <p>Email:</p>
                    <input type='email' />
                </label>
                <label className='contact-form-label'>
                    <p>Message:</p>
                    <textarea />
                </label>
                <Button text='Submit' className={'primary'}/>
>>>>>>> 6e4210b281d077488b435a5f5f352b0a9a90fd11
            </form>
        </div>
    );
}

<<<<<<< HEAD
export default ContactForm;

=======
export default ContactForm;
>>>>>>> 6e4210b281d077488b435a5f5f352b0a9a90fd11
