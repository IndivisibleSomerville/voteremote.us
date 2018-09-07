import React from 'react';
import SocialMediaLinks from './SocialMediaLinks';

import '../styles/Footer.css';

const Footer = () => (
    <div className="footer">
        <div className="footer_box">
            <a href="#">View your State Requirements</a>
            <a href="#">Find your Campus Community</a>
            <a href="#">Get Involved</a>
            <a href="#">About</a>
        </div>
        <SocialMediaLinks className="social_box cr"/>
    </div>
);

export default Footer;