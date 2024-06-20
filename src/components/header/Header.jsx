import React from 'react';
import Navbar from './Navbar';
import { useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation();

    const homePage = location.pathname === '/';

    return (
        <header className={homePage ? 'home' : 'page-header' }>
            <div className='header-wrapper container'>
                <div className='main-nav'>
                    <div className='main-logo'>
                        <h1>BYTE</h1>
                    </div>
                </div>
                <div className='right-nav'>
                   <Navbar />
                </div>
            </div>
            {!homePage && <hr className='header-divider container' />}
        </header>
    );
}
export default Header;
