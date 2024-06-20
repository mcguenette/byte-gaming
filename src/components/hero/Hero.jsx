import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button';
import Header from '../header/Header';
import './hero.css';

function Hero({ onPrimaryClick }) {
    const navigate = useNavigate();

    const contactNav = () => {
        navigate('/contact');
    };

    return (
        <section className='hero-banner'>
            <Header />
            <div className='hero-container'>
                <div className='hero-content container'>
                    <h2 className='hero-title'>
                        Experience Elite Gaming
                    </h2>
                    <p>
                        With Byte's Premium Accessories, unleash unmatched performance,
                        unparalleled comfort, and cutting-edge design for the ultimate gaming experience.
                    </p>
                    <div className='hero-btn'>
                        <Button
                            className='primary'
                            text='Shop now'
                            onClick={onPrimaryClick}
                        />
                        <Button
                            className='secondary'
                            text='Get in touch'
                            onClick={contactNav}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
