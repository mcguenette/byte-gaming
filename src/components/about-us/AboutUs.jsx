import React from 'react';
import mc from '../../style/img/profiles/mc.jpg';
import maksim from '../../style/img/profiles/maksim.jpg';
import riley from '../../style/img/profiles/riley.png';
import nifemi from '../../style/img/profiles/nifemi.jpg';
import './about.css';

function AboutUs() {
    return (
        <section className='aboutus'>
            <div className='aboutus-container container'>
            <h2>The <b>Team</b></h2>
                <div className='aboutus-team'>
                    <div className='aboutus-card'>
                        <div className='aboutus-inner'>
                            <div className='about-us-title'>
                                <h3>MC Guénette</h3>
                            </div>
                            <div className='aboutus-image'>
                                <figure>
                                    <img src={mc} alt="aboutus-image" />
                                </figure>
                            </div>
                            <div className='aboutus-content'>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>
                    <div className='aboutus-card'>
                        <div className='aboutus-inner'>
                            <div className='about-us-title'>
                                <h3>Riley Clark</h3>
                            </div>
                            <div className='aboutus-image'>
                                <figure>
                                    <img src={riley} alt="aboutus-image" />
                                </figure>
                            </div>
                            <div className='aboutus-content'>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>
                    <div className='aboutus-card'>
                        <div className='aboutus-inner'>
                            <div className='about-us-title'>
                                <h3>Maksim Dimov</h3>
                            </div>
                            <div className='aboutus-image'>
                                <figure>
                                    <img src={maksim} alt="aboutus-image" />
                                </figure>
                            </div>
                            <div className='aboutus-content'>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>
                    <div className='aboutus-card'>
                        <div className='aboutus-inner'>
                            <div className='about-us-title'>
                                <h3>Nifemi Leye</h3>
                            </div>
                            <div className='aboutus-image'>
                                <figure>
                                    <img src={nifemi} alt="aboutus-image" />
                                </figure>
                            </div>
                            <div className='aboutus-content'>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default AboutUs;