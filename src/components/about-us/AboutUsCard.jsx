import React from 'react';

function AboutUsCard({name, image, content}) {
    return (
        <div className='aboutus-card'>
            <div className='aboutus-inner'>
                <div className='about-us-title'>
                    <h3>{name}</h3>
                </div>
                <div className='aboutus-image'>
                    <figure>
                        <img src={image} alt="aboutus-image" />
                    </figure>
                </div>
                <div className='aboutus-content'>
                    <p>{content}</p>
                </div>
            </div>
        </div>
    )
}

export default AboutUsCard;