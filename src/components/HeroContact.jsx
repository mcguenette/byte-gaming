import React from 'react';
import Button from './Button';
import image from '../style/img/esports.jpg';

function HeroContact() {
    return (
        <div className='hero-contact-image'>
            <img src={image} alt='Esports' className='hero-image' />
            <div className='overlay'>
                <div className='container'>
                    <div className='hero-contact-wrapper'>
                        <div className='hero-contact-content'>
                            <h1>Get in touch with us!</h1>
                            <p>Feel free to contact us</p>
                            <Button
                                className='primary'
                                text='Contact Us'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroContact;
