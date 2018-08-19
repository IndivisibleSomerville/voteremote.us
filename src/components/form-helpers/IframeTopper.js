import React from 'react';

const IframeTopper = (props) => {
    if (props.form.id === 'vote-verify-iframe') {
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
                    <p class="vr_form_body">Fill out the Vote.org form below to check if you’re registered. If you aren’t, they’ll help you register online (if allowed), or help you download a form to register by mail.</p>
                    <p class="vr_form_body">If you’re registered, pick one of the options below.</p>
                    <div class="iframe_topper_button_container">
                    <button class="form_button form_button_no_background" onClick={ () => {props.handleStepChange('PrefillAbsenteeRequest')} }>I need an absentee ballot.</button>
                    <button class="form_button form_button_no_background" onClick={ () => {props.handleStepChange('Finished')} }>I'll vote in person.</button>
                    </div>
                </div>
            </div>
        )
    }
    else if (props.form.id === 'vote-vote-iframe') {
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
                    <p class="vr_form_body">See if your state allows online registration by filling out the Vote.org form below. If it doesn’t, Vote.org will help you download a form to register by mail.</p>
                    <p class="vr_form_body">Once you’ve registered, pick one of the options below.</p>
                    <div class="iframe_topper_button_container">
                        <button class="form_button form_button_no_background" onClick={ () => {props.handleStepChange('PrefillAbsenteeRequest')} }>I need an absentee ballot.</button>
                        <button class="form_button form_button_no_background" onClick={ () => {props.handleStepChange('Finished')} }>I'll vote in person.</button>
                    </div>
                </div>
            </div>
        )
    }
    else if (props.form.id === 'vote-absentee-iframe') {
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
                    <p class="vr_form_body">To start your absentee ballot request through Vote.org, enter your information below and click "Continue." Once you've downloaded your PDF absentee ballot request, click "Show Me My Deadlines."</p>
                    <div class="iframe_topper_button_container">
                        <button class="form_button form_button_no_background" onClick={ () => {props.handleStepChange('Finished')} }>Show me my deadlines</button>
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