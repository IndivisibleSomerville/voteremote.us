import React from 'react';
import StepHeader from './StepHeader';
import StepBody from './StepBody';

class Step extends React.Component {
    render() {
        if (this.props.votingMethod === '' || this.props.usState === '') {
            return (
                <div>
                    Error accessing US State information.
                </div>
            )
        }
        else {
            let typeArray = [];
            if (this.props.type === 'absentee' && this.props.stateJsonData[this.props.usState]) {
                typeArray = this.state.stateJsonData[this.props.usState].stepsAbsentee;
            }
            else if (this.props.type === 'inPerson' && this.props.stateJsonData[this.props.usState]) {
                typeArray = this.state.stateJsonData[this.props.usState].stepsInPerson;
            }
            typeArray.map( (step) => (
                <div>
                    <StepHeader 
                        stepName={step.stepName}
                        stepDeadline={step.stepDeadline}
                    />
                    { step.stepInstructions.map( (body) => (
                        <StepBody 
                            instructionType={body.instructionType}
                            instructionText={body.instructionText}
                            instructionLink={body.instructionLink && body.instructionLink}
                            instructionLinkText={body.instructionLinkText && body.instructionLinkText}
                        />
                    ))}
                </div>
            ))
        }
    }
}

export default Step;