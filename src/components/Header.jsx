import React from 'react';
import Navbar from './Navbar';


function Header() {
    return (
        <header>
            <div className='header-wrapper container'>
                <div className='main-nav'>
                    <div className='main-logo'>
                        <h1>BYTE</h1>
                        {/* <img className='logo' src={logo} alt='Logo' /> */}
                    </div>
                </div>
                <div className='right-nav'>
                   <Navbar />
                </div>
            </div>
        </header>
    );
}
export default Header;
