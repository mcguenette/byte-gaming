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
                        Shop <b className='h1'>BYTE </b>gaming gear
                    </h2>
                    <p>Unleash Your Full Gaming Potential with Byte's Premium Accessories</p>
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
