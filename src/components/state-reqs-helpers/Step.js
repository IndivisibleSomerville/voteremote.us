import React from 'react';
import StepHeader from './StepHeader';
import StepBody from './StepBody';

class Step extends React.Component {
    render() {
        if (!this.props.usState || !this.props.votingSteps) {
            return (
                <div></div>
            )
        }
        else if (!this.props.data[this.props.usState] || !this.props.data[this.props.usState][this.props.votingSteps]) {
            return (
                <div>
                    Error accessing information for this U.S. state.
                </div>
            )
        }
        else {
            return (
                <div>
                { this.props.data[this.props.usState][this.props.votingSteps].map( (step) => (
                        <div key={step.stepName}>
                            <StepHeader 
                                key={step.stepName}
                                stepName={step.stepName}
                                stepDeadline={step.stepDeadline}
                            />
                            { step.stepInstructions.map( (body) => (
                                <StepBody 
                                    key={body.instructionType}
                                    instructionType={body.instructionType}
                                    instructionText={body.instructionText}
                                    instructionLink={body.instructionLink && body.instructionLink}
                                    instructionLinkText={body.instructionLinkText && body.instructionLinkText}
                                />
                            ))}
                        </div>
                    ))
                }
                </div>
            )

        }
    }
}

export default Step;