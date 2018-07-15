import React, { Component } from 'react';
import VoteOrgForm from './VoteOrgForm';
import { Transition } from 'semantic-ui-react';
import store from 'store';

import StepZilla from 'react-stepzilla';
import 'react-stepzilla/src/css/main.css';

// Form Stages
import StageForm from './components/StageForm';
import welcomeStage from './stages/stage1-welcome';
import addressStage from './stages/stage2-address';
import StepFinal from './stages/stage-final';

// Vote.org Iframe stages
import StageIframe from './components/StageIframe';
import voteVerify from './stages/stage-verify';
import voteRegister from './stages/stage-register';
import voteAbsentee from './stages/stage-absentee';

const Appcues = window.Appcues;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: store.get('user') || { currentStep: 0 }
    }

    this.stepProps = { getStore: this.getStore.bind(this), updateStore: this.updateStore.bind(this) }
    this.steps = [
      { name: "Welcome", component: <StageForm form={welcomeStage} {...this.stepProps} /> },
      { name: "Your Address", component: <StageForm form={addressStage} {...this.stepProps} /> },
      { name: "Vote Verification", component: <StageIframe form={voteVerify} {...this.stepProps} /> },
      { name: "Vote Registration", component: <StageIframe form={voteRegister} {...this.stepProps} /> },
      { name: "Vote Absentee Ballot", component: <StageIframe form={voteAbsentee} {...this.stepProps} /> },
      { name: "You're Done!", component: <StepFinal {...this.stepProps} /> }
    ]
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
      store.set('user', user);
      return user;
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <div className="App-form">
          <StepZilla
            steps={this.steps}
            onStepChange={(step) => this.stepChange(step)}
            nextButtonCls="ui button"
            backButtonCls="ui button"
            startAtStep={this.state.user.currentStep || 0}
          />
        </div>
      </div>
    );
  }
}

export default App;
