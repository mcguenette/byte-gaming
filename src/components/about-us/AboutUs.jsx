import React from 'react';
import mc from '../../style/img/profiles/mc.jpg';
import maksim from '../../style/img/profiles/maksim.jpg';
import riley from '../../style/img/profiles/riley.png';
import nifemi from '../../style/img/profiles/nifemi.jpg';
import './about.css';
import AboutUsCard from './AboutUsCard';

function AboutUs() {
    return (
        <section className='aboutus'>
            <div className='aboutus-container container'>
                <h2>The <b>Team</b></h2>
                <div className='aboutus-team'>
                    <AboutUsCard
                        name='MC Guénette'
                        image={mc}
                        content='Frontend Developer'
                    />
                    <AboutUsCard
                        name='Riley Clark'
                        image={riley}
                        content='Backend Developer'
                    />
                    <AboutUsCard
                        name='Maksim Dimov'
                        image={maksim}
                        content='Frontend Developer'
                    />
                    <AboutUsCard
                        name='Nifemi Leye'
                        image={nifemi}
                        content='Frontend Developer'
                    />
                </div>
            </div>
        </section>
    )
}

export default AboutUs;