import React from 'react';
import StepBodyLink from './StepBodyLink';

const StepBody = (props) => (
    <div class={`step_body_part step_body_part_${props.instructionType}`}>
        <div class="step_body_part_description step_body_part_left">
            <p>{props.instructionText}</p>
        </div>

        { props.instructionLink
            &&
        <StepBodyLink 
            instructionLink={props.instructionLink}
            instructionLinkText={props.instructionLinkText}
        /> }

    </div>
)

export default StepBody;