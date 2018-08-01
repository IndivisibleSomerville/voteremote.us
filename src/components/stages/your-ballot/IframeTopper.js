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
                    <p class="vr_form_body">Registering to vote is simple. Submit the form below, and complete all the steps requested. Once you've finished, let us know that you've registered, and move on to request your ballot.</p>
                    <div class="iframe_topper_button_container">
                        <button class="form_button form_button_no_background" onClick={ () => {props.handleNextClick('Your Ballot', 'absentee')} }>I Registered</button>
                        <button class="form_button form_button_no_background" onClick={ () => {props.handleNextClick('Your Ballot', 'absentee')} }>I Printed My Form</button>
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
                    <h2>Register through vote.org</h2>
                </div>
                <div class="form_description_box">
                    <p class="vr_form_body">Registering to vote is simple. Submit the form below, and complete all the steps requested. Once you've finished, let us know that you've registered, and move on to request your ballot.</p>
                    <div class="iframe_topper_button_container">
                        <button class="form_button form_button_no_background" onClick={ () => {props.handleNextClick('Your Ballot', 'absentee')} }>I Registered</button>
                        <button class="form_button form_button_no_background" onClick={ () => {props.handleNextClick('Your Ballot', 'absentee')} }>I Printed My Form</button>
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
                    <h2>Claim your absentee ballot through vote.org</h2>
                </div>
                <div class="form_description_box">
                    <p class="vr_form_body">This is the last step. Once you've requested your absentee ballot, let us know and we'll send you a handy checklist of dates to be aware of.</p>
                    <div class="iframe_topper_button_container">
                        <button class="form_button form_button_no_background" onClick={ () => {props.handleNextClick('Your Ballot', 'done')} }>I Requested My Ballot</button>
                        <button class="form_button form_button_no_background" onClick={ () => {props.handleNextClick('Your Ballot', 'done')} }>I'll Vote in Person</button>
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