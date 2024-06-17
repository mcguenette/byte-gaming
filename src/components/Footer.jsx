import React from 'react';

const Footer = () => {
    return (
        <div className='container'>
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; 2024 MC Guenette | Riley Clark | Nifemi Leye | Maksim Dimov </p>
                <div className="footer-links">
                    <a href="#">About Us</a>
                    <a href="#">Contact</a>
                </div>
                <div className="footer-social">
                    <a href="https://github.com/mcguenette" target="_blank">Github</a>
                    <a href="https://www.linkedin.com/in/mc-guenette/" target="_blank">LinkedIn</a>
                </div>
            </div>
        </footer>
        </div>

    );
}

export default Footer;
