import React from 'react';
import Step from './state-reqs-helpers/Step';
import MenuBar from './MenuBar';
import '../styles/StateRequirements.css';

class StateRequirementsPage extends React.Component {
    state = {
        stateJsonData: {},
        usState: '',
        votingSteps: 'stepsAbsentee'
    }

    setStateJsonData = (json) => {
        this.setState( () => ({
            stateJsonData: json
        }));
    }

    setUsState = (usState) => {
        this.setState( () => ({
            usState
        }));
    }

    // Imports the JSON data for all states
    // Then uses passed-in US state (if provided) to set React initial state
    getJson = (usStateInitialValue) => {
        var request = new XMLHttpRequest();
        request.open('GET', './stateReqs.json', true);
        const component = this;
        request.onload = function() {
            if (this.status >=200 && this.status < 400) {
                const json = JSON.parse(this.response);
                component.setStateJsonData(json);
                console.log("JSON data loaded successfully");
                // Set initial US state if that value was passed in
                if (usStateInitialValue) {
                    component.setUsState(usStateInitialValue)
                }
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
        // Set US state if passed from URL
        const usState = this.props.match.params.usState && this.props.match.params.usState.toUpperCase();
        this.getJson(usState);
    }
    componentDidUpdate(prevProps, prevState) {
        // Catches if the user manually enters a new state URL
        if (this.props.match.params.usState !== prevProps.match.params.usState) {
            const usState = this.props.match.params.usState && this.props.match.params.usState.toUpperCase();
            this.setUsState(usState);
        }
        // Catches when the user changes the US state in the dropdown
        // This way, the URL in the browser stays updated
        // TODO: This is getting triggered too many times.
        if (this.state.usState !== prevState.usState) {
            this.props.history.push(`/state-requirements/${this.state.usState}`);
        }
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
                            <p>Select a state to learn about its requirements for absentee voting.</p>
                            <p>Overseas and military voters may have different deadlines. Those voters should visit <a href="https://www.fvap.gov/">FVAP</a> for more info.</p>
                            <form className="ui form">
                                <select className="ui dropdown" value={this.state.usState} onChange={this.handleUsStateChange}>
                                    <option value="" disabled selected>State</option>
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
                        { /* Toggle between absentee voting requirements and in-person voting requirements.
                        <div id="select_method_box" className={`select_method_box ${!this.state.usState ? "hidden" : ''}`}>
                            <button id="select_method_absentee" className={`vr_form_head ${this.state.votingSteps === 'stepsAbsentee' && 'select_method_active'}`} onClick={() => this.handleVotingStepsChange('stepsAbsentee')}>Vote Absentee</button>
                            <button id="select_method_in_person" className={`vr_form_head ${this.state.votingSteps === 'stepsInPerson' && 'select_method_active'}`} onClick={() => this.handleVotingStepsChange('stepsInPerson')}>Vote in State</button>
                        </div>
                        */ }
                        <div id="steps_to_vote">
                            <div className="step_container active">
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