import React from 'react';

const StepBodyLink = (props) => (
    <div class="step_body_part_link step_body_part_right">
        <a class="vr_red_background" href={props.instructionLink}>{props.instructionLinkText}</a>
    </div>
)

export default StepBodyLink;