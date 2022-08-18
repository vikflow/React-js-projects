import React from 'react';
import Cta from './Cta';
import Starter from './Starter';
import './header.css';
import ME from '../../assets/vickfrank_utility_doc.jpg'
import HeaderSocials from './HeaderSocials';

const Header = () => {
    return (
        <header>
            <div className="container header__container">
            <h5>Hello</h5>
            <h1>Welcome to my page</h1>
            <h5 className='text-light'>Fullstack Developer</h5>
            <Starter />
            
            <Cta />
            <HeaderSocials />

           
           
           

            <a href="#contact" className='scroll__down'>Scroll down</a>


            </div>
        </header>
    );
};

export default Header;