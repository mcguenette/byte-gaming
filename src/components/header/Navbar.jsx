import React, { useState, useRef } from 'react';
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { FaCircleUser, FaCartShopping } from "react-icons/fa6";
import { NavLink, Link } from 'react-router-dom';

function Navbar() {
    const [hover, setHover] = useState(false);
    const mouseEnter =  () => {
        setHover(true);
    }

    const mouseLeave = () => {
        setHover(false);
    };

    return (
        <nav className='navbar'>
            <ul className='nav-menu'>
                <li><NavLink exact='true' to='/'>Home</NavLink></li>
                <li className='nav-item'>
                    <div 
                        className='nav-link'
                        onMouseEnter={mouseEnter}
                        onMouseLeave={mouseLeave}
                    >
                        Products {hover ? <FaAngleUp /> : <FaAngleDown />}
                    </div>
                        <ul
                        className={`subnav-menu ${hover ? 'show' : ''}`}
                        onMouseEnter={mouseEnter}
                        onMouseLeave={mouseLeave}
                        >
                             <li><Link to='/product/1'>X Headphones</Link></li>
                            <li><Link to='/product/2'>Y Mouse</Link></li>
                            <li><Link to='/product/3'>Z Keyboard</Link></li>
                        </ul>
                </li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
                <li>|</li>
                <ul className='nav-menu nav-icons'>
                <li className='account-icon'><Link>Sign in</Link></li>
                <li className='cart-icon'><Link><FaCartShopping /></Link></li>
                </ul>

            </ul>
        </nav>
    );
}

export default Navbar;
