import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Name from './form-stages/Name';
import Address from './form-stages/Address';
import WhereToVote from './form-stages/WhereToVote';
import AreYouRegistered from './form-stages/AreYouRegistered';
import LookUpReg from './form-stages/LookUpReg';
import PrefillReg from './form-stages/PrefillReg';
import PrefillAbsenteeRequest from './form-stages/PrefillAbsenteeRequest';

class IntakeForm extends React.Component {
    state = {
        errorMsgs: {},
        firstName: "",
        lastName: "",
        email: "",
        school: "",
        phone: "",
        schoolAddress_streetLine1: "",
        schoolAddress_streetLine2: "",
        schoolAddress_city: "",
        schoolAddress_state: "",
        schoolAddress_zipCode: "",
        homeAddress_streetLine1: "",
        homeAddress_streetLine2: "",
        homeAddress_city: "",
        homeAddress_state: "",
        homeAddress_zipCode: "",
        districtSelector: ""
    }
    updateDistrictSelector = (district) => {
        this.setState( () => ({
            districtSelector: district
        }));
    }
    handleChange = (e) => {
        console.log('onChange', e.target.name, e.target.value);
        let newState = {};
        newState[e.target.name] = e.target.value;
        this.setState(newState);
    }
    handleSubmit = (e) => {
        e.preventDefault();
        //TODO: Validate the input
        const currentStep = e.currentTarget.name;
        let nextStep = ''
        switch (currentStep) {
            case 'Name':
                nextStep = 'Address';
                break;
            case 'Address':
                nextStep = 'WhereToVote';
                break;
          }
        this.handleStepChange(nextStep);
    }
    handleStepChange = (nextStep) => {
        let path = '';
        switch (nextStep) {
            case 'Name':
                path = `${this.props.match.path}/name`;
                break;
            case 'Address':
                path = `${this.props.match.path}/address`;
                break;
            case 'WhereToVote':
                path = `${this.props.match.path}/where-to-vote`;
                break;
            case 'AreYouRegistered':
                path = `${this.props.match.path}/are-you-registered`;
                break;
            case 'LookUpReg':
                path = `${this.props.match.path}/look-up-registration`;
                break;
            case 'PrefillReg':
                path = `${this.props.match.path}/prefill-registration`;
                break;
            case 'PrefillAbsenteeRequest':
                path = `${this.props.match.path}/prefill-absentee-request`;
                break;
            case 'Finished':
                // TODO: Implement "Finished" case
                path = 'to be determined';
                break;
        }
        this.props.history.push(path);
    }

    render() {
        return (
            <div className="form_page">
                <div className="form_container">
                    <Switch>
                        <Route path={`${this.props.match.path}/name`} render={() => 
                            <Name 
                                handleChange={this.handleChange}
                                handleSubmit={this.handleSubmit}
                                state={this.state}
                            />} />
                        <Route path={`${this.props.match.path}/address`} render={() => 
                            <Address 
                                handleChange={this.handleChange}
                                handleSubmit={this.handleSubmit}
                                state={this.state}
                            />} />
                        <Route path={`${this.props.match.path}/where-to-vote`} render={() => 
                            <WhereToVote 
                                handleStepChange={this.handleStepChange}
                                state={this.state}
                                updateDistrictSelector={this.updateDistrictSelector}
                            />} />
                        <Route path={`${this.props.match.path}/are-you-registered`} render={() => 
                            <AreYouRegistered 
                                handleStepChange={this.handleStepChange}
                                state={this.state}
                            />} />
                        <Route path={`${this.props.match.path}/look-up-registration`} render={() => 
                            <LookUpReg
                                handleStepChange={this.handleStepChange}
                                state={this.state}
                            />} />
                        <Route path={`${this.props.match.path}/prefill-registration`} render={() => 
                            <PrefillReg 
                                handleStepChange={this.handleStepChange}
                                state={this.state}
                            />} />
                        <Route path={`${this.props.match.path}/prefill-absentee-request`} render={() => 
                            <PrefillAbsenteeRequest 
                                handleStepChange={this.handleStepChange}
                                state={this.state}
                            />} />
                        <Route exact path={`${this.props.match.path}`} render={() => <Redirect to={`${this.props.match.path}/name`} />} />
                    </Switch>
                </div>
            </div>
        )
    }
}

export default IntakeForm;