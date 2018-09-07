import React from 'react';
import { Link } from 'react-router-dom';
import SocialMediaLinks from './SocialMediaLinks';

import '../styles/Footer.css';

const Footer = () => (
    <div className="footer">
        <div className="footer_box">
            <Link className="link_no_decoration" to="/get-involved">Get Involved</Link>
            <Link className="link_no_decoration" to="/state-requirements">View Your State Requirements</Link>
            <Link className="link_no_decoration" to="/about">About</Link>
        </div>
        <SocialMediaLinks className="social_box cr"/>
    </div>
);

export default Footer;