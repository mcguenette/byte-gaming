import React from 'react';
import {
    FaGithub,
    FaLinkedin,
    FaHouse,
    FaEnvelope,
    FaPhone
}
    from "react-icons/fa6";
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer className="footer">
            <div className='container'>
                <div className="footer-content">
                    <div className='footer-top'>
                        <div className='footer-links-list'>
                            <h3>Company</h3>
                            <li className='footer-item'><Link to='/'>Home</Link></li>
                            <li className='footer-item'><Link to='/'>Account</Link></li>
                        </div>
                        <div className='footer-links-list'>
                            <h3>Help</h3>
                            <li className='footer-item'><Link to='/'>Terms & Conditions</Link></li>
                            <li className='footer-item'><Link to='/'>Privacy Policy</Link></li>
                            <li className='footer-item'><Link to='/contact'>Contact</Link></li>
                        </div>
                        <div className='footer-links-list'>
                            <h3>Contact</h3>
                            <li className='footer-item'><Link to='/'><FaHouse /> Winnipeg, MB</Link></li>
                            <li className='footer-item'><Link to='/'><FaEnvelope /> support@byte-gaming.ca</Link></li>
                            <li className='footer-item'><Link to='/'><FaPhone /> 204-123-4567</Link></li>
                        </div>
                    </div>
                    <hr />
                    <div className='footer-bottom'>
                        <div className='footer-logo'>
                            <h1>BYTE</h1>
                        </div>
                        <p>&copy; 2024 MC Guenette | Riley Clark | Nifemi Leye | Maksim Dimov </p>
                        <div className="footer-social">
                            <a href="https://github.com/mcguenette" target="_blank"><FaGithub /></a>
                            <a href="https://www.linkedin.com/in/mc-guenette/" target="_blank"><FaLinkedin /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
