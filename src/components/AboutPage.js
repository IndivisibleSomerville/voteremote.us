import React from 'react';
import MenuBar from './MenuBar';
import '../styles/AboutPage.css';

const AboutPage = () => (
    <div>
        <MenuBar />
        <div className="about_content_container">
            <div className="about_top_container">
                <div className="about_top_container_image">
                    &nbsp;
                </div>
                <div className="about_top_container_text">
                    <h2 className="vr_section_head vr_uppercase">About Us</h2>
                    <p>Tens of thousands of college students are living away from their home states when elections take place. Vote Remote helps college students get their absentee votes in and counted.</p>
                    <p>Vote Remote is a voter engagement tool that leverages tech and in-real-life support to absentee and mail-in voters in college and high school. Vote Remote's unique blend of web tools and personal outreach ensures that voters are registered, informed about their district's absentee voting requirements, and ready to meet deadlines.</p>
                    <p>Even if you're already registered, signing up for Vote Remote will provide you with reminders, IRL support, and access to your campus's Vote Remote community.</p>
                    <h2 className="vr_section_head vr_uppercase">Our Vision</h2>
                    <p>We strive to remove all obstacles preventing college students from voting, and provide them with the knowledge they need to navigate the unnecessarily complex remote voting system.</p>
                    <button className="about_button_red_background">Get Started</button>
                </div>
            </div>
            <div className="about_bottom_container">
                <h2 className="vr_section_head vr_uppercase">How You Can Help</h2>
                <div className="about_bottom_grid">
                    <div className="about_bottom_grid_item">
                        <h3 className="vr_section_subhead vr_uppercase">For College Students:</h3>
                        <p>Campus Coordinators connect members of their school with the Vote Remote community, and help students with every step, from giving extra reminders to providing stamps and envelopes. They play a key role in helping their fellow students get their votes counted.</p>
                        <button className="about_button_no_background">Learn More</button>
                    </div>
                    <div className="about_bottom_grid_item">
                        <h3 className="vr_section_subhead vr_uppercase">For Businesses and Donors:</h3>
                        <p>Vote Remote accepts tax-deductible donations. We rely heavily on sponsors who can provide merchandise and food events, and discount opportunities for our Campus Coordinators.</p>
                        <button className="about_button_no_background">Donate Now</button>
                    </div>
                    <div className="about_bottom_grid_item">
                        <h3 className="vr_section_subhead vr_uppercase">For Faculty Members:</h3>
                        <p>Vote Remote Supporting Faculty members are educators working to share Vote Remote's mission on their campuses.</p>
                        <button className="about_button_no_background">Learn More</button>
                    </div>
                    <div className="about_bottom_grid_item">
                        <h3 className="vr_section_subhead vr_uppercase">For Anyone Else:</h3>
                        <p>We're always in need of general volunteers.</p>
                        <button className="about_button_no_background">Sign Up</button>
                    </div>                                        
                </div>
            </div>
        </div>
    </div>
)

export default AboutPage;