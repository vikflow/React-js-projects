import React from 'react';
import './nav.css';
//import home
import { useState } from 'react';
const Nav = () => {
    const[activeNav, setActiveNav] =useState('#')
    return (

        <nav>
             
            < a href="#" onClick={() => setActiveNav('#')}  className={activeNav ==='#' ? 'active' : ''} rel='noopener'>home</a>
            <a href="#about" onClick={() => setActiveNav('about')} className={activeNav ==='#about' ? 'active' : ''}    rel='noopener'>about</a>
            <a href="#expirience" onClick={() => setActiveNav('expirience')} className={activeNav ==='#expirience' ? 'active' : ''}   rel='noopener'>expirience</a>
            <a href="#services" onClick={() => setActiveNav('services')} className={activeNav ==='#services' ? 'active' : ''}   rel='noopener'>services</a>
            <a href="#contacts" onClick={() => setActiveNav('contacts')} className={activeNav ==='#contacts' ? 'active' : ''}  rel='noopener'>contacts</a>
        </nav>

    );
};

export default Nav;