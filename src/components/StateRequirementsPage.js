import React from 'react';
import Step from './state-reqs-helpers/Step';
import '../styles/StateRequirements.css';

class StateRequirementsPage extends React.Component {
    state = {
        stateJsonData: {},
        usState: '',
        votingMethod: ''
    }

    setStateJsonData = (json) => {
        this.setState( () => ({
            stateJsonData: json
        }));
    }

    // Imports the JSON data
    getJson = () => {
        var request = new XMLHttpRequest();
        request.open('GET', './stateReqs.json', true);
        const component = this;
        request.onload = function(setStateJsonData) {
            if (this.status >=200 && this.status < 400) {
                const json = JSON.parse(this.response);
                component.setState( () => ({ stateJsonData: json }));
                console.log("JSON data loaded successfully");
            } else {
                console.log("Error during JSON load");
            }
        };
        request.onerror = function() {
            console.log("Error with JSON request");
        };
        request.send();
    }


    provideStepHeaderHtml = (stepName, stepDeadline) => {
        return `<div class="step_header">
                    <div class="step_header_name step_header_left">
                        <h2 class="vr_section_subhead vr_black_background">${stepName}</h2>
                    </div>
                    <div class="step_header_deadline step_header_right">
                        <h3 class="vr_section_subhead vr_blue_background">${stepDeadline}</h3>
                    </div>
                </div>`;
    }
    
    provideStepBodyPartHtml = (instructionType, instructionText, instructionLink = '', instructionLinkText = '') => {
        let html = `<div class="step_body_part step_body_part_${instructionType}">
                        <div class="step_body_part_description step_body_part_left">
                            <p>${instructionText}</p>
                        </div>`;
    
        if (instructionType === 'link') {
            html += `<div class="step_body_part_link step_body_part_right">
                        <a class="vr_red_background" href="${instructionLink}">${instructionLinkText}</a>
                    </div>`;
        }
        // Closing div for initial setting of html variable
        html +=     `</div>`;
        return html;
    }

    handleUsStateChange = (e) => {
        const usState = e.target.value;
        this.setState(() => ({
            usState
        }));
    }
    handleVotingMethodChange = (votingMethod) => {
        this.setState(() => ({
            votingMethod
        }));
    }

    componentDidMount() {
        this.getJson();
    }

    render() {
        return (
            <div className="main_container">
                <div className="content_container">
                    <div className="header_box vr_blue_background">
                        <h1 className="vr_section_head">State Requirements</h1>
                    </div>
                    <div className="select_state_box">
                        <p>Select a state to learn about its requirements</p>
                        <form className="ui form">
                            <select className="ui dropdown" onChange={this.handleUsStateChange}>
                                <option value="">State</option>
                                <option value="AL">Alabama</option>
                                <option value="AK">Alaska</option>
                                <option value="AZ">Arizona</option>
                                <option value="AR">Arkansas</option>
                                <option value="CA">California</option>
                                <option value="CO">Colorado</option>
                                <option value="CT">Connecticut</option>
                                <option value="DE">Delaware</option>
                                <option value="DC">District Of Columbia</option>
                                <option value="FL">Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="HI">Hawaii</option>
                                <option value="ID">Idaho</option>
                                <option value="IL">Illinois</option>
                                <option value="IN">Indiana</option>
                                <option value="IA">Iowa</option>
                                <option value="KS">Kansas</option>
                                <option value="KY">Kentucky</option>
                                <option value="LA">Louisiana</option>
                                <option value="ME">Maine</option>
                                <option value="MD">Maryland</option>
                                <option value="MA">Massachusetts</option>
                                <option value="MI">Michigan</option>
                                <option value="MN">Minnesota</option>
                                <option value="MS">Mississippi</option>
                                <option value="MO">Missouri</option>
                                <option value="MT">Montana</option>
                                <option value="NE">Nebraska</option>
                                <option value="NV">Nevada</option>
                                <option value="NH">New Hampshire</option>
                                <option value="NJ">New Jersey</option>
                                <option value="NM">New Mexico</option>
                                <option value="NY">New York</option>
                                <option value="NC">North Carolina</option>
                                <option value="ND">North Dakota</option>
                                <option value="OH">Ohio</option>
                                <option value="OK">Oklahoma</option>
                                <option value="OR">Oregon</option>
                                <option value="PA">Pennsylvania</option>
                                <option value="RI">Rhode Island</option>
                                <option value="SC">South Carolina</option>
                                <option value="SD">South Dakota</option>
                                <option value="TN">Tennessee</option>
                                <option value="TX">Texas</option>
                                <option value="UT">Utah</option>
                                <option value="VT">Vermont</option>
                                <option value="VA">Virginia</option>
                                <option value="WA">Washington</option>
                                <option value="WV">West Virginia</option>
                                <option value="WI">Wisconsin</option>
                                <option value="WY">Wyoming</option>
                            </select>
                        </form>
                    </div>
                    <div id="select_method_box" className="hidden">
                        <button id="select_method_absentee" className={`vr_form_head ${this.state.votingMethod === 'absentee' && 'select_method_active'}`} onClick={() => this.handleVotingMethodChange('absentee')}>Vote Remote (Absentee)</button>
                        <button id="select_method_in_person" className={`vr_form_head ${this.state.votingMethod === 'in_person' && 'select_method_active'}`} onClick={() => this.handleVotingMethodChange('in_person')}>Vote in State</button>
                    </div>
                    <div id="steps_to_vote">
                        <div class="step_container active">
                            <Step
                                stateJsonData={this.state.stateJsonData}
                                usState={this.state.usState}
                                votingMethod={this.state.votingMethod}
                            />
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default StateRequirementsPage;