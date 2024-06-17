import React from 'react';
import Button from './Button';
import heroImage from '../style/img/hero-6.jpg';

function Hero() {
    return (
        <section className='hero-banner'>
            <div className='hero-image-container'>
                <img src={heroImage} alt="Hero Banner" className="hero-image" />
            </div>
            <div className='container'>
                <div className='hero-content'>
                    <h2 className='hero-title'>
                        Shop <b className='h1'>BYTE </b>gaming gear
                    </h2>
                    <p>Unleash Your Full Gaming Potential with Byte's Premium Accessories</p>
                    <div className='hero-btn'>
                        <Button
                            className='primary'
                            text='Shop now'
                        />
                        <Button
                            className='secondary'
                            text='Get in touch'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;