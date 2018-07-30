import React from 'react';

const IframeTopper = (props) => {
    if (props.formName === 'Verify Your Registration') {
        return (
            <div>
                <div class="form_header_headline_box vr_blue_background uppercase">
                    <h1 class="vr_section_head">Your Vote</h1>
                    <h2 class="vr_section_subhead">Check your registration through vote.org</h2>
                </div>
                <div class="form_header_description_box">
                    <p class="vr_form_body">Registering to vote is simple. Submit the form below, and complete all the steps requested. Once you've finished, let us know that you've registered, and move on to request your ballot.</p>
                    <div class="button_container">
                        <button class="vr_section_subhead uppercase">I Registered</button>
                        <button class="vr_section_subhead uppercase">I Printed My Form</button>
                    </div>
                </div>
            </div>
        )
    }
    else if (props.formName === 'Register to Vote') {
        return (
            <div>
                <div class="form_header_headline_box vr_blue_background uppercase">
                    <h1 class="vr_section_head">Your Vote</h1>
                    <h2 class="vr_section_subhead">Register through vote.org</h2>
                </div>
                <div class="form_header_description_box">
                    <p class="vr_form_body">Registering to vote is simple. Submit the form below, and complete all the steps requested. Once you've finished, let us know that you've registered, and move on to request your ballot.</p>
                    <div class="button_container">
                        <button class="vr_section_subhead uppercase">I Registered</button>
                        <button class="vr_section_subhead uppercase">I Printed My Form</button>
                    </div>
                </div>
            </div>
        )
    }
    else if (props.formName === 'Absentee Ballot') {
        return (
            <div>
                <div class="form_header_headline_box vr_blue_background uppercase">
                    <h1 class="vr_section_head">Your Ballot</h1>
                    <h2 class="vr_section_subhead">Claim your absentee ballot through vote.org</h2>
                </div>
                <div class="form_header_description_box">
                    <p class="vr_form_body">This is the last step. Once you've requested your absentee ballot, let us know and we'll send you a handy checklist of dates to be aware of.</p>
                    <div class="button_container">
                        <button class="vr_section_subhead uppercase">I Requested My Ballot</button>
                        <button class="vr_section_subhead uppercase">I'll Vote in Person</button>
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