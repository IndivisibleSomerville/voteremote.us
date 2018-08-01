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
import YourInfo from './components/stages/your-info';
import YourVote from './components/stages/your-vote';
import YourBallot from './components/stages/your-ballot';

// Sub-steps
import welcomeSubStep from './components/stages/your-info/sub-steps/substep1-welcome';
import addressSubStep from './components/stages/your-info/sub-steps/substep2-address';
import absentee from './components/stages/your-ballot/absentee';
import register from './components/stages/your-ballot/register';
import verify from './components/stages/your-ballot/verify';

const Appcues = window.Appcues;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {
        currentStep: 0,
        showNavigation: true
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
      { name: "Your Vote: Which State?", component: <YourVote formName="selectDistrict" {...this.stepProps} /> },
      { name: "Your Vote: Are You Registered?", component: <YourVote formName="registered" {...this.stepProps} /> },
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
        index = this.steps.length - 1;
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
          case 'done':
            iframeComponent = { name: "Your Ballot", component: <YourBallot formName="Done" {...this.stepProps} /> };
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
        <div className="form_page">
          <div className="form_container">
            <StepZilla
              steps={this.steps}
              onStepChange={(step) => this.stepChange(step)}
              nextButtonCls="form_nav_button"
              backButtonCls="form_nav_button no_display"
              startAtStep={this.state.user.currentStep || 0}
              showNavigation={this.state.user.showNavigation}
              showSteps={false}
            />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
