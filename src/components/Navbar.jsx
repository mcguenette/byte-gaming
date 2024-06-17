import React, { useState, useRef } from 'react';
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { MdOutlineAccountCircle } from "react-icons/md";
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
                             <li><Link to='/products/x-headphones'>X Headphones</Link></li>
                            <li><Link to='/products/y-mouse'>Y Mouse</Link></li>
                            <li><Link to='/products/z-keyboard'>Z Keyboard</Link></li>
                        </ul>
                </li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
                <li><Link><MdOutlineAccountCircle className='account'/></Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
