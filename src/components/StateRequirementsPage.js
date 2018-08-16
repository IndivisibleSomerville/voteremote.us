import React from 'react';
import Step from './state-reqs-helpers/Step';
import MenuBar from './MenuBar';
import '../styles/StateRequirements.css';

class StateRequirementsPage extends React.Component {
    state = {
        stateJsonData: {},
        usState: this.props.usState || '',
        votingSteps: 'stepsAbsentee'
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

    handleUsStateChange = (e) => {
        const usState = e.target.value;
        this.setState(() => ({
            usState
        }));
    }
    handleVotingStepsChange = (votingSteps) => {
        this.setState(() => ({
            votingSteps
        }));
    }

    componentDidMount() {
        this.getJson();
    }

    render() {
        return (
            <div>
                <MenuBar />
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
                        <div id="select_method_box" className={`select_method_box ${!this.state.usState ? "hidden" : ''}`}>
                            <button id="select_method_absentee" className={`vr_form_head ${this.state.votingSteps === 'stepsAbsentee' && 'select_method_active'}`} onClick={() => this.handleVotingStepsChange('stepsAbsentee')}>Vote Remote (Absentee)</button>
                            <button id="select_method_in_person" className={`vr_form_head ${this.state.votingSteps === 'stepsInPerson' && 'select_method_active'}`} onClick={() => this.handleVotingStepsChange('stepsInPerson')}>Vote in State</button>
                        </div>
                        <div id="steps_to_vote">
                            <div class="step_container active">
                                <Step
                                    data={this.state.stateJsonData}
                                    usState={this.state.usState}
                                    votingSteps={this.state.votingSteps}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default StateRequirementsPage;