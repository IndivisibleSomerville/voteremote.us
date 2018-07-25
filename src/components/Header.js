import React from 'react';

const Header = () => (
    <div className="headline">
        <h1>VOTE REMOTE</h1> 
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