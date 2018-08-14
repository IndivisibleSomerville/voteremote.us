import React from 'react';

import '../styles/MenuBar.css';

const MenuBar = () => (
    <div>
        <div className="menu_box vr_red_background vr_uppercase">
            <div className="vr_section_subhead">Menu</div>
        </div>
        <div className="links_box vr_red_background vr_uppercase">
            <div className="vr_section_subhead">View Your State Requirements</div>
            <div className="vr_section_subhead">Get Involved</div>
            <div className="vr_section_subhead">About</div>
        </div>
    </div>
);

export default MenuBar;