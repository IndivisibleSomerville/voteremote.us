import React from 'react';

import '../styles/Footer.css';

const Footer = () => (
    <div className="footer">
        <div className="footer_box">
            <a href="#">View your State Requirements</a>
            <a href="#">Find your Campus Community</a>
            <a href="#">Get Involved</a>
            <a href="#">About</a>
        </div>
        <div className="social_box cr"> 
            <div className="social vr_black_background"><i className="fab fa-facebook-f"></i></div>
            <div className="social vr_black_background"><i className="fab fa-twitter"></i></div>
            <div className="social vr_black_background"><i className="fab fa-instagram"></i></div>
            <div className="social vr_black_background"><i className="far fa-envelope"></i></div>
            <div className="social vr_black_background"><i className="fas fa-rss"></i></div>
        </div>
    </div>
);

export default Footer;