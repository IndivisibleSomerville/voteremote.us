import React from 'react';

const IframeTopper = (props) => {
    if (props.formName === 'Verify Your Registration') {
        return (
            <div>
                <div className="form_header_progress_bar">
                    <img src="./images/form-header-your-vote.png" alt="Your Vote" />
                </div>
                <div className="form_header_box">
                    <h1>Your Vote</h1>
                    <h2>Check your registration through vote.org</h2>
                </div>
                <div class="form_description_box">
                    <p class="vr_form_body">Follow the instructions below and our partner vote.org will check to see if you're registered. If you're not, they'll automatically prompt you to either register online (if your state allows it), or they'll prepare a voter registration form for you to download, print, and mail. Once you've finished the instructions below, click the "I'm All Set" button that pertains to you.</p>
                    <div class="iframe_topper_button_container">
                    <button class="form_button form_button_no_background" onClick={ () => {props.handleNextClick('Your Ballot', 'absentee')} }>I'm All Set! Get me an absentee ballot request!</button>
                    <button class="form_button form_button_no_background" onClick={ () => {props.handleNextClick('Your Ballot', 'done')} }>I'm All Set! And I'll be voting in person.</button>
                    </div>
                </div>
            </div>
        )
    }
    else if (props.formName === 'Register to Vote') {
        return (
            <div>
                <div className="form_header_progress_bar">
                    <img src="./images/form-header-your-vote.png" alt="Your Vote" />
                </div>
                <div className="form_header_box">
                    <h1>Your Vote</h1>
                    <h2>Register online, or print a registration form through vote.org</h2>
                </div>
                <div class="form_description_box">
                    <p class="vr_form_body">Follow the instructions below and our partner vote.org will determine whether your state allows online registration. If it doesn't, vote.org will prepare a voter registration form for you to download, print, and mail. Once you've registered online, or downloaded the print form, click the "I'm All Set" button that pertains to you.</p>
                    <div class="iframe_topper_button_container">
                        <button class="form_button form_button_no_background" onClick={ () => {props.handleNextClick('Your Ballot', 'absentee')} }>I'm All Set! Get me an absentee ballot request!</button>
                        <button class="form_button form_button_no_background" onClick={ () => {props.handleNextClick('Your Ballot', 'done')} }>I'm All Set! And I'll be voting in person.</button>
                    </div>
                </div>
            </div>
        )
    }
    else if (props.formName === 'Absentee Ballot') {
        return (
            <div>
                <div className="form_header_progress_bar">
                    <img src="./images/form-header-your-ballot.png" alt="Your Ballot" />
                </div>
                <div className="form_header_box">
                    <h1>Your Ballot</h1>
                    <h2>Generate your absentee ballot request through vote.org</h2>
                </div>
                <div class="form_description_box">
                    <p class="vr_form_body">This is the last step! Follow the instructions below and our partner Vote.org will generate an absentee ballot request form for you to download. Once you've done that, click the "I'm all set" button and we'll give you our recommended deadlines!</p>
                    <div class="iframe_topper_button_container">
                        <button class="form_button form_button_no_background" onClick={ () => {props.handleNextClick('Your Ballot', 'done')} }>I'm All Set!</button>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div>
                Error rendering iframe...
            </div>
        )
    }
}

export default IframeTopper;