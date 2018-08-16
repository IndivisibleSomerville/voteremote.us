import React from 'react';

const StepHeader = ({ stepName, stepDeadline }) => (
    <div className="step_header">
        <div className="step_header_name step_header_left">
            <h2 className="vr_section_subhead vr_black_background">{ stepName }</h2>
        </div>
        <div className="step_header_deadline step_header_right">
            <h3 className="vr_section_subhead vr_blue_background">{ stepDeadline }</h3>
        </div>
    </div>
)

export default StepHeader;