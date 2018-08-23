import React from 'react';
import { Link } from 'react-router-dom';
import MenuBar from './MenuBar';
import '../styles/HomePage.css';

class HomePage extends React.Component {
    scrollToWhat() {
        document.querySelector('.what_box').scrollIntoView({
            block: 'start', 
            behavior: 'smooth' 
        });
    }

    render() {
        return (
            <div>
                <MenuBar />
                <div className="banner_box vr_grey_background vr_uppercase">
                    <div className="vr_section_head">
                        Conquer Absentee Voting
                    </div>
                    <div className="vr_section_subhead">
                        Vote by Mail-In Ballot
                    </div>
                    <Link className="started_box vr_red_background link_no_decoration" to="/get-started">
                        Get Started
                    </Link>
                    <div className="teaser_circle" onClick={this.scrollToWhat}>
                        <svg xmlns="http://www.w3.org/2000/svg">
                            <path fill="none" stroke-width="4" stroke-linecap="round" stroke="#FFF"
                                d="M30 25 L50 35 L70 25" />
                        </svg>
                    </div>
                </div>
                <div className="what_box vr_white_background">
                        <div className="vr_section_head vr_uppercase">
                                What is Vote Remote?
                        </div>
                        <div className="what_icon_container">
                            <div className="what_icon_box">
                                <div className="vote_img img"></div>
                                <div className="vr_section_subhead vr_uppercase">
                                    Make Your Vote Count
                                </div>
                                <div className="img_txt">
                                    Use our district tool to find out where your vote is most useful.
                                </div>
                            </div>
                            <div className="what_icon_box">
                                <div className="ballot_img img"></div>
                                <div className="vr_section_subhead vr_uppercase">
                                    Streamline Your Vote
                                </div>
                                <div className="img_txt">
                                    When you sign up, we'll deliver everything you need to vote remotely.
                                </div>
                            </div>
                            <div className="what_icon_box">
                                <div className="group_img img"></div>
                                <div className="vr_section_subhead vr_uppercase">
                                    Join a Community
                                </div>
                                <div className="img_txt">
                                    Use our district tool to find out where your vote is most useful.
                                </div>
                            </div>
                        </div>
                </div>


                <div className="count_box">
                    <div className="count_box_text">
                            <h3 className="vr_section_head vr_uppercase">Make Your Vote Count</h3>
                        <p>
                            Voting while leaving away from home can be difficult. Navigating
                            absentee voting, mail-in ballots, and re-registration can be tricky.
                            That's where Vote Remote comes in!! Vote Remote is a tool to
                            streamline the vote-by-mail process. We're also a service: sign up
                            with us and we'll send you text reminders of important
                            deadlines for your state.
                        </p>
                        <p>
                            Finally, we are a community. Get started on your voting journey
                            now and we'll connect you with students at your school who 
                            are working to get out the vote.
                        </p>
                        <Link className="started_box vr_red_background link_no_decoration" to="/get-started">
                            Get Started
                        </Link>
                    </div>
                    <div className="count_box_image">
                        &nbsp;<br />
                        &nbsp;<br />
                        &nbsp;<br />
                        &nbsp;<br />
                        &nbsp;<br />
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;