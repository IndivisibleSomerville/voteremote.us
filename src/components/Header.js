import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Header.css';

const Header = () => (
    <div className="headline">
        <Link className="link_white_text" to="/">
            <img src="/images/VoteRemoteLogo-white-01.png" alt="" />
            <h1>VOTE REMOTE</h1>
        </Link>
        <div className="social_box"> 
            <div className="social vr_black_background">
                <i className="fab fa-facebook-f"></i>
            </div>
            <div className="social vr_black_background">
                <i className="fab fa-twitter"></i>
            </div>
            <div className="social vr_black_background">
                <i className="fab fa-instagram"></i>
            </div>
            <div className="social vr_black_background">
                <i className="far fa-envelope"></i>
            </div>
            <div className="social vr_black_background">
                <i className="fas fa-rss"></i>
            </div>
        </div> 
    </div>
);

export default Header;