import React, { Component } from 'react';
import VoteOrgForm from './VoteOrgForm';
import { Transition } from 'semantic-ui-react';

import StepZilla from 'react-stepzilla';
import 'react-stepzilla/src/css/main.css';

import './App.css';

// Generic Components
import Header from './components/Header';
import Footer from './components/Footer';

// Stages
import YourInfo from './stages/your-info';
import YourVote from './stages/your-vote';
import YourBallot from './stages/your-ballot';

// Sub-steps
import welcomeSubStep from './stages/your-info/sub-steps/substep1-welcome';
import addressSubStep from './stages/your-info/sub-steps/substep2-address';
import absentee from './stages/your-ballot/absentee';
import register from './stages/your-ballot/register';
import verify from './stages/your-ballot/verify';

const Appcues = window.Appcues;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {
        currentStep: 0
      }
    };

    this.stepProps = { 
      getStore: this.getStore.bind(this), 
      updateStore: this.updateStore.bind(this), 
      changeSubStep: this.changeSubStep.bind(this)
    };

    this.steps = [
      { name: "Your Info: Welcome", component: <YourInfo formName="welcomeSubstep" form={welcomeSubStep} {...this.stepProps} /> },
      { name: "Your Info: Address", component: <YourInfo formName="addressSubstep" form={addressSubStep} {...this.stepProps} /> },
      { name: "Your Vote", component: <YourVote formName="YourVote" form={welcomeSubStep} {...this.stepProps} /> },
      { name: "Your Ballot", component: <YourBallot formName="Absentee Ballot" form={absentee} {...this.stepProps} /> }
    ];
  }

  componentDidMount() {
    const user = this.state.user;

    if (user.email) {
      Appcues.identify(user.email, user);
    } else {
      Appcues.anonymous();
    }
  }

  getStore() {
    return this.state.user;
  }

  updateStore(userProps, cb) {
    this.setState((prevState, props) => {
      const user = Object.assign({}, prevState.user, userProps, { started: true });
      return {
        user: cb ? cb(user) : user
      };
    });
  }

  // Called when the step changes. Do persistence and API calls here.
  stepChange(step) {
    this.updateStore({}, (user) => {
      user.currentStep = step;

      Appcues.identify(user.email, user || {});
      return user;
    });
  }

  changeSubStep(step, subStep) {
    let iframeComponent, index;

    switch (step) {
      case 'Your Ballot':
        index = 3;
        switch (subStep) {
          case 'absentee': 
            iframeComponent = { name: "Your Ballot", component: <YourBallot formName="Absentee Ballot" form={absentee} {...this.stepProps} /> };
            break;
          case 'register':
            iframeComponent = { name: "Your Ballot", component: <YourBallot formName="Register to Vote" form={register} {...this.stepProps} /> };
            break;
          case 'verify':
            iframeComponent = { name: "Your Ballot", component: <YourBallot formName="Verify Your Registration" form={verify} {...this.stepProps} /> };
            break;
        }
        break;
      case 'Your Info':
        index = 0;
        switch (subStep) {
          case 'welcome':
            iframeComponent = { name: "Your Info", component: <YourInfo formName="welcomeSubstep" form={welcomeSubStep} {...this.stepProps} /> };
            break;
          case 'address':
            iframeComponent = { name: "Your Info", component: <YourInfo formName="addressSubstep" form={addressSubStep} {...this.stepProps} /> };
            break;
        }
        break;
    }

    this.steps[index] = iframeComponent;
  }

  render() {
    return (
      <div className="root">
        <Header />
        <div className="form">
          <StepZilla
            steps={this.steps}
            onStepChange={(step) => this.stepChange(step)}
            nextButtonCls="ui button"
            backButtonCls="ui button"
            startAtStep={this.state.user.currentStep || 0}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
