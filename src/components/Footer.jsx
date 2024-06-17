import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer className="footer">
          <div className='container'>
            <div className="footer-content">
                <p>&copy; 2024 MC Guenette | Riley Clark | Nifemi Leye | Maksim Dimov </p>
                <div className="footer-links">
                    <Link to='/'>Home</Link>
                    <Link to='/contact'>Contact</Link>
                </div>
                <div className="footer-social">
                    <a href="https://github.com/mcguenette" target="_blank"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/mc-guenette/" target="_blank"><FaLinkedin /></a>
                </div>
            </div>
            </div>
        </footer>
    );
}

export default Footer;
