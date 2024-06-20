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
                    <Button className='secondary contact-inside-option' text="Call us now" />
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
                    <Button className='secondary contact-inside-option' text="Chat with us" />
                </div>
            </div>
        </div>
    );
}

export default GetInTouch;

