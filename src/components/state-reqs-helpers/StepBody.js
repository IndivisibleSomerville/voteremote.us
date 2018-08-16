import React from 'react';
import StepBodyLink from './StepBodyLink';

const StepBody = (props) => (
    <div className={`step_body_part step_body_part_${props.instructionType}`}>
        <div className="step_body_part_description step_body_part_left">
            <p>{props.instructionText}</p>
        </div>

        { props.instructionLink
            &&
        <StepBodyLink 
            key={props.instructionLink}
            instructionLink={props.instructionLink}
            instructionLinkText={props.instructionLinkText}
        /> }

    </div>
)

export default StepBody;