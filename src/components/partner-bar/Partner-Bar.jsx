import React from 'react';


function PartnerBar() {
    const partners = [
        {
            name: "Logitech",
            imageUrl: "https://cdn.freebiesupply.com/logos/large/2x/logitech-gaming-2-logo-png-transparent.png"
        },
        {
            name: "Google",
            imageUrl: "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
        },
        {
            name: "Shopify",
            imageUrl: "https://cdn3.iconfinder.com/data/icons/social-media-2068/64/_shopping-512.png"
        },
        {
            name: "Aliexpress",
            imageUrl: "https://cdn.icon-icons.com/icons2/2699/PNG/512/aliexpress_logo_icon_167892.png"
        },
        {
            name: "Alibaba",
            imageUrl: "https://seeklogo.com/images/A/alibaba-group-logo-D5026E1AEC-seeklogo.com.png"
        },
        {
            name: "Shein",
            imageUrl: "https://i.pinimg.com/originals/59/88/ed/5988ed9531e7e4322993de62a1b98d05.png"
        }
    ];

    return (
        <div className="partner-bar">
            <div className='container'>
                <p className="partner-bar-text">Partners</p>
                <div className="partner-bar-top">
                    {partners.map((partner, index) => {
                        let alignmentClass;
                        if ((index % 3) === 0) {
                            alignmentClass = 'align-items-left';
                        } else if ((index % 3) === 1) {
                            alignmentClass = 'align-items-center';
                        } else {
                            alignmentClass = 'align-items-right';
                        }

                        return (
                            <div className={`partner-bar-partner ${alignmentClass}`} key={index}>
                                <div className="partner-bar-img">
                                    <img 
                                        src={partner.imageUrl} 
                                        alt={partner.name} 
                                    />
                                </div>
                                <p>{partner.name}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default PartnerBar;
